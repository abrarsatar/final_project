var Auth = require('./auth')
var heroCtrl = require('./heroes');
var hqCtrl   = require('./hqs');
// var otherCtrl = require('./other');

module.exports = (app) => {
    app.get('/', (req,res) => {
        // res.redirect('/login'); // I don't have a landing page, so just redirect to the login page!
        res.render('landingPage.html')
    });

    app.get('/login', Auth.render)  // login page
    app.get('/logout', Auth.logout) // logout route + redirect

    app.post('/login', Auth.login);         // login form submission
    app.post('/register', Auth.register)    // register form submission

    app.all('/dashboard', Auth.middlewares.session);
    app.get('/dashboard', (req, res) => {
        res.render('dashboard.html', req.session);
    })

    // Hero Routes
    app.get('/api/heroes', heroCtrl.get);
    app.post('/api/heroes', heroCtrl.upsert);

    // HQ Routes
    app.get('/api/hqs', hqCtrl.get); // Find Many
    app.get('/api/hqs/:id', hqCtrl.get); // Find One
    app.post('/api/hqs', hqCtrl.upsert); // Create
    app.post('/api/hqs/:id', hqCtrl.upsert); // Update

}
