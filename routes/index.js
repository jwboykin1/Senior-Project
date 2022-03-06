var express = require('express');
var router = express.Router();

const PORT = process.env.PORT || 3001;
//const {auth} = require('express-openid-connect');
const app = express();
/*const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://localhost:3000',
  clientID: 'gqgq4gwioRY5eNCkmhaJLv8Hkj1Bma2F',
  issuerBaseURL: 'https://dev-34mse0jw.us.auth0.com'
};*/

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// auth router attaches /login, /logout, and /callback routes to the baseURL
//app.use(auth(config));

// req.isAuthenticated is provided from the auth router
//app.get('/', (req, res) => {
 // res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
//});
