import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

/* ================= REGISTER ================= */
export const registerUser = async (req, res) => {
  try {
    const {
      role,
      fullName,
      email,
      password,
      location,
      preferredLocation, // ✅ ADDED

      // seeker
      experience,
      skills,
      aadhar,
      otp,

      // recruiter
      companyName,
      designation,
    } = req.body;

    /* ---- Basic validation ---- */
    if (!role || !fullName || !email || !password || !location) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    if (!["seeker", "recruiter"].includes(role)) {
      return res.status(400).json({
        success: false,
        message: "Invalid role",
      });
    }

    /* ---- Role-specific validation ---- */
    if (role === "seeker") {
      if (!experience || !skills || !preferredLocation) {
        return res.status(400).json({
          success: false,
          message:
            "Experience, skills and preferred location are required for seeker",
        });
      }
    }

    /* ---- Check if email exists ---- */
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(409).json({
        success: false,
        message: "Email already registered",
      });
    }

    /* ---- Hash password ---- */
    const hashedPassword = await bcrypt.hash(password, 10);

    /* ---- Create user ---- */
    await User.create({
      role,
      fullName,
      email,
      password: hashedPassword,
      location,
      preferredLocation, // ✅ ADDED

      // seeker
      experience: role === "seeker" ? experience : undefined,
      skills: role === "seeker" ? skills : undefined,
      aadhar,
      otp,

      // recruiter
      companyName,
      designation,
    });

    return res.status(201).json({
      success: true,
      message: "Registration successful",
    });
  } catch (error) {
    console.error("REGISTER ERROR:", error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ================= LOGIN ================= */
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    /* ---- Validation ---- */
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    /* ---- Find user ---- */
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    /* ---- Compare password ---- */
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    /* ---- Generate JWT ---- */
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("LOGIN ERROR:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};


/* ================= GET PROFILE ================= */
