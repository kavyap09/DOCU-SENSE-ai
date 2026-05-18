import User from "../models/User.js";

export const selectDomain = async (req, res) => {
  try {
    const { domain } = req.body;

    const user = await User.findById(req.user._id);

    if (user.domainLocked) {
      return res.status(400).json({
        message: "Domain already selected",
      });
    }

    user.domain = domain;

    user.domainLocked = true;

    await user.save();

    res.json({
      message: "Domain selected successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};