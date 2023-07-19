import express from "express";

const router = express.Router();

router.get("/status", (req, res) => {
  const status = {
    status: "server running on port 3001",
  };
  res.json(status);
});

export { router as rootRouter };
