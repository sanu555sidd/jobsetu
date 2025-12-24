import User from "../models/User.js";

export const getMyProfile = async (req, res) => {
  res.json({
    success: true,
    user: req.user,
  });
};

/* ================= UPDATE PROFILE ================= */
export const updateMyProfile = async (req, res) => {
  const user = await User.findById(req.user._id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  // Allow updating only safe fields
  Object.assign(user, req.body);

  await user.save();

  res.json({
    success: true,
    message: "Profile updated successfully",
    user,
  });
};
