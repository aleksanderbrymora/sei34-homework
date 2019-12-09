const linesBuilder = require('../controllers/linesController');

module.exports = app => {
    app
        .route('/api/lines')
        .get(linesBuilder.listAllLines)
        .post(linesBuilder.createLine);

    app
        .route('/api/route')
        .post(linesBuilder.listRoute);
};