//pulled from class miniproject
const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes.js');
const dashboardRoutes = require('./dashboardRoutes.js');
const commentRoutes = require('./commentRoutes.js');
const postRoutes = require('./postRoutes.js');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/comment', commentRoutes);
router.use('/post', postRoutes);

router.use((req, res) => {
    res.status(404).end();
});
module.exports = router;