const express = require('express');
const route = require('.');
const router = express.Router();

const MeControlller = require('../app/controllers/MeControlller');

router.get('/stored/courses', MeControlller.storedCourses);

module.exports = router;
