const express = require("express");
const { WaitList, sendEmailToWaitlist, getWaitlist, deleteWaitlist } = require("../controllers/waitlistController");
const router = express.Router();

router.get("/waitlist", getWaitlist);
router.post("/waitlist", WaitList);
router.delete("/waitlist", deleteWaitlist);


router.post("/sendmail", sendEmailToWaitlist);

module.exports = router;