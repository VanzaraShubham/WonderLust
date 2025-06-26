const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");


main()
.then(() => {
    console.log("connected to db")
})
.catch(() => {
    console.log(err);   
});

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");  
};

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({
        ...obj, 
        owner: '6855383ed2ccd5d9d115ae93'
    }));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};

initDB();