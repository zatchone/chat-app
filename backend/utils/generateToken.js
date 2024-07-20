import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
  try {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: '15d'
    });

    res.cookie("jwt", token, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV !== "development"
    });

    console.log("Token generated and cookie set successfully");
  } catch (error) {
    console.error("Error in generateTokenAndSetCookie:", error);
    throw error; // Re-throw the error so it can be caught in the signup function
  }
};

export default generateTokenAndSetCookie;