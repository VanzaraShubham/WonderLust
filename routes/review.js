const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {validateReview, isloggedIn, isReviewAuthor} = require("../middleware.js");

const reviewController = require("../controllers/review.js");


// Reviews
// POST review Route
router.post("/",
    isloggedIn, 
    validateReview, 
    wrapAsync(reviewController.createReview));

// POST Review Route
router.delete("/:reviewId", 
    isloggedIn, 
    wrapAsync(reviewController.destroyReview));

module.exports = router;
