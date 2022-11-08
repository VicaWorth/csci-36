import express from 'express';


const router = express.Router();

router.get("/reports", (req, res) => {
    res.render("reports", { title: "Reports" });
});

export default router;
