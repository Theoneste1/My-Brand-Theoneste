
const express = require('express');
import secure_RouterController from"./../controllers/secure_router"
const router = express.Router();

//Let's say the route below is very sensitive and we want only authorized users to have access
router.get('/api/profile',secure_RouterController);

module.exports = router;
