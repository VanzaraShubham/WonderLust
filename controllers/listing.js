const Listing = require("../models/listing");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });



// module.exports.index = async (req, res) => {
//     const allListings = await Listing.find({});
//     res.render("listings/index.ejs", { allListings });
// };

// module.exports.index = async (req, res) => {
//     const { category } = req.query;
//     let allListings;

//     if (category) {
//         allListings = await Listing.find({category });
//     } else {
//         allListings = await Listing.find({});
//     }
//     res.render("listings/index.ejs", { allListings, category: category || "" });
// };

module.exports.index = async (req, res) => {
    const { search, category } = req.query;
    let allListings = [];

    const query = {};

    if (category && category !== "All") {
        query.category = category;
    }

    if (search) {
        const regex = new RegExp(search.split(' ').join('|'), 'i');
        const isNumeric = !isNaN(search);
        const priceFilter = isNumeric ? { price: Number(search) } : {};

        query.$or = [
            { title: regex },
            { location: regex },
            { country: regex },
            ...(isNumeric ? [priceFilter] : [])
        ];
    }

    allListings = await Listing.find(query);

    res.render("listings/index.ejs", { allListings, category: category || search || "" });

};


module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
};


module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
        .populate({
            path: "reviews",
            populate: {
                path: "author",
                select: "username"
            },
        })
        .populate("owner");
    if (!listing) {
        req.flash("error", " Listing you are requested for does not exist!!");
        return res.redirect("/listings");
    }
    console.log(listing);
    res.render("listings/show.ejs", { listing, currUser: req.user });
};

module.exports.createListing = async (req, res, next) => {
    let response = await geocodingClient
        .forwardGeocode({
            query: req.body.listing.location,
            limit: 1,
        })
        .send();

    let url = req.file.path;
    let filename = req.file.filename;
    // console.log(url, "..", filename);
    const newlisting = new Listing(req.body.listing);
    newlisting.owner = req.user._id;
    newlisting.image = { url, filename };

    newlisting.geometry = response.body.features[0].geometry;

    let savedListing = await newlisting.save();
    console.log(savedListing);
    req.flash("success", "New Listing Created!!");
    res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;

    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing you requested for does not exist!");
        return res.redirect("/listings");
    }

    let originalImageUrl = listing.image?.url || "";
    if (originalImageUrl) {
        originalImageUrl = originalImageUrl.replace("/upload", "/upload/h_300,w_250");
    }

    res.render("listings/edit.ejs", { listing, originalImageUrl });
};


module.exports.updateListing = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    if (typeof req.file !== "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = { url, filename };
        listing.category=req.body.listing.category;
        await listing.save();
    }
    req.flash("success", " Listing Updated !!");
    res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", " Listing Deleted!!");
    res.redirect("/listings");
};