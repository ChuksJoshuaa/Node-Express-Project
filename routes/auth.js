const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { name } = req.body;
  console.log(name);
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  } else {
    return res.status(401).send("Please provide condentials");
  }
});

module.exports = router;
