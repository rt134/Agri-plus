const express = require('express');
const router = express.Router();

// Authentication controler
const auth = require('../../../controlers/auth');

router.post("/register", auth.register);
router.post("/login", auth.login);
router.post("/logout", auth.logout);
router.get("/checkauth", auth.checkAuth);

module.exports = router;
