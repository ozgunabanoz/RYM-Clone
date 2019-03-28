const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('/api/post_user', { target: 'http://localhost:5000' }));
    app.use(proxy('/api/login', { target: 'http://localhost:5000' }));
};