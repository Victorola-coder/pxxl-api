const express = require("express");
const { WaitList, sendEmailToWaitlist, getWaitlist } = require("../controllers/waitlistController");
const router = express.Router();

router.get("/waitlist", getWaitlist);
router.post("/waitlist", WaitList);
router.post("/sendmail", sendEmailToWaitlist);

module.exports = router;