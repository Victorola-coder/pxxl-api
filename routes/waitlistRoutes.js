const express = require("express");
const { WaitList, sendEmailToWaitlist } = require("../controllers/waitlistController");
const router = express.Router();

router.post("/waitlist", WaitList);
router.post("/sendmail", sendEmailToWaitlist);

module.exports = router;