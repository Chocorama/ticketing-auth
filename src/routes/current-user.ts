import express from "express";

const router = express.Router();

router.get("/api/users/currentuser", (req, res) => {
  console.log("test currentuser");
  res.send("hello there");
});

export { router as currentUserRouter };
