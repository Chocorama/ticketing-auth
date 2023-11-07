import express from "express";

const router = express.Router();

router.post("api/users/singup", (req, res) => {
  res.send("hello there");
});

export { router as singupRouter };
