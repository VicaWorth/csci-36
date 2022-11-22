// Note from Kendal: I made a new route (learning_outcomes.js) that adds to
// this code. This page can safely be removed from the project, but
// I've left it for now because of the pending code review.

import express from 'express';

import updates from '../lastUpdated.js';

const router = express.Router();

router.get("/updates", (req, res) => {
    res.render("updates", { title: "Test" });
});

let sortedDates = [];
for (var course in updates) {
    sortedDates.push([course, new Date(updates[course])]);
}

sortedDates.sort(function(a, b) {
    return a[1] - b[1];
});


// you can uncomment to see the courses in order from oldest to newest
//console.log(sortedDates)


export default router;
