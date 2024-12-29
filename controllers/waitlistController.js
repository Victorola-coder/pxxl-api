const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const Waitlist = require("../model/waitlistModel");
const sendEmail = require("../utils/sendEmail");
const waitlist = require("../email/waitlist");
const contentemail = require("../email/contentemail");
const WaitList = asyncHandler(async (req, res) => {
  const { email } = req.body;

  if (!email) {
    res.status(400);
    throw new Error("Please add your email");
  }

  if (email) {
    let user = await Waitlist.findOne({ email });

    if (user) {
      res.status(400).json({
        message: "You are already on our waitlist",
        success: false,
      });
      return;
    } else {
      await Waitlist.create({
        _id: new mongoose.Types.ObjectId(),
        email,
      });
    }
  }

  try {
    const name = "Comrade";
    const emailTemplate = waitlist(name);
    const to = email;
    const subject = "Welcome to the Pxxl.Space";
    const html = emailTemplate.html;

    await sendEmail(to, subject, html);
    console.log("Welcome Email sent!");
    res.status(200).json({
      success: true,
      message: "Email sent, check spam folder if you don't see it",
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Email not sent, please try again" });
  }
});

const getWaitlist = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10, search = "" } = req.query;

  const query = search ? { email: { $regex: search, $options: "i" } } : {};
  const users = await Waitlist.find(query)
    .select("email name -_id")
    .skip((page - 1) * limit)
    .limit(limit);

  const total = await Waitlist.countDocuments(query);
  const totalPages = Math.ceil(total / limit);

  res.status(200).json({
    users,
    totalPages,
    currentPage: page,
    totalUsers: total,
  });
});

const deleteWaitlist = asyncHandler(async (req, res) => {
  const { email } = req.body;
  if (!email) {
    res.status(400);
    throw new Error("Please provide an email");
  }

  const user = await Waitlist.findOne({ email });
  if (!user) {
    res.status(400);
    throw new Error("Email not found in waitlist");
  }

  await Waitlist.findOneAndDelete({ email });
  res.status(200).json({
    success: true,
    message: "Email successfully removed from waitlist",
  });
});

const sendEmailToWaitlist = asyncHandler(async (req, res) => {
  const { title, content } = req.body;

  const waitlistUsers = await Waitlist.find({}).select("email name -_id");

  try {
    const name = "Comrade";
    for (let i = 0; i < waitlistUsers.length; i++) {
      const user = waitlistUsers[i];
      const emailTemplate = contentemail(name, content);
      const subject = title;
      const to = user.email;
      const html = emailTemplate.html;

      await sendEmail(to, subject, html);
      console.log("Welcome Email sent!");
    }
    res.status(200).json({
      success: true,
      message: "Email sent to waitlist, check spam folder if you don't see it",
    });
  } catch (error) {
    res.status(500);
    throw new Error("Email not sent, please try again");
  }
});

module.exports = {
  getWaitlist,
  WaitList,
  deleteWaitlist,
  sendEmailToWaitlist,
};
