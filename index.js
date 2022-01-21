const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');

// used for session cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const MongoStore = require('connect-mongo');
const sassMiddleware = require('node-sass-middleware');

app.use(sassMiddleware({
    src: './assets/scss',
    dest: './assets/css',
    debug: true,
    outputStyle: 'expanded',
    prefix: '/css'
}));

app.use(express.urlencoded());

app.use(cookieParser());

// use static files
app.use(express.static('./assets'));

// use ejs layouts
app.use(expressLayouts);
// extract styles and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// setting up template engine
app.set('view engine', 'ejs');
app.set('views', './views');

// used for session cookie
// mongo store is used to store the session cookie in the db
app.use(session({
    name: 'codeial',
    // TODO: change the secret before deploying in production mode
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: MongoStore.create(
        {
            mongoUrl: 'mongodb://localhost/codeial_development',
            // mongooseConnection: db,
            autoRemove: 'disabled'
        },
        function(err){
            console.log(err || 'connect-mongodb setup ok');
        }
    )
}));
// store :MongoStore.create({ mongoUrl: DBUrl })
app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticationUser);

// use express router
app.use('/', require('./routes/index')); // here we can also write as '(./routes)' as it directly fetches index.js

app.listen(port, function (err) {
    if (err) {
        console.log(`Error in running the server: ${err}`);
        return;
    }
    console.log(`Server is running on port: ${port}`);
})