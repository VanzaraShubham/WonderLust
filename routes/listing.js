const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const { isloggedIn, isOwner, validateListing } = require("../middleware.js");

const listingController = require("../controllers/listing.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage })

router
    .route("/")
    .get(wrapAsync(listingController.index))
    .post(
        isloggedIn,
        upload.single("listing[image]"),
        validateListing,
        wrapAsync(listingController.createListing)
    );


// New Route
router.get("/new",
    isloggedIn,
    listingController.renderNewForm);


router.get("/:id/edit", 
    isloggedIn, 
    isOwner, 
    wrapAsync(listingController.renderEditForm));
router
    .route("/:id")
    .get(wrapAsync(listingController.showListing))
    .put(
        isloggedIn,
        isOwner,
        upload.single("listing[image]"),
        validateListing,
        wrapAsync(listingController.updateListing)
    )
    .delete(
        isloggedIn,
        isOwner,
        wrapAsync(listingController.destroyListing)
    );

// Edit route
// router.get("/:id/edit",
//     isloggedIn,
//     isOwner,
//     wrapAsync(listingController.renderEditForm));


router.get("/search", wrapAsync(async (req, res) => {
    const { search } = req.query;

    let allListings;
    const regex = new RegExp(search.split(' ').join('|'),'i')

    if (!search) {
        req.flash("error", "Please enter a valid search term");
        return res.redirect("/listings");
    }

    if (!isNaN(search)) {
        allListings = await Listing.find({ price: Number(search) });
    } else {
        allListings = await Listing.find({
            $or: [
                { title:  regex },
                { location: regex },
                { country: regex },
                { category: regex }
            ]
        });
    }

    res.render("listings/index.ejs", { allListings, category: search });
}));



module.exports = router;
