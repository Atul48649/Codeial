// require('dotenv').config();
const dotenv = require('dotenv');
dotenv.config();

const development = {
    name: 'development',
    asset_path: './assets',
    session_cookie_key: 'blahsomething',
    db: 'codeial_development',
    smtp: {
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'rajatul762@gmail.com',// Replace this with your email
            pass: 'Add your password here'
        }
    },
    google_client_id: '158673816773-j87kck3erjm8di3rqa2mo6t1gmun3vf9.apps.googleusercontent.com',
    google_client_secret: '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',
    google_call_back_url: 'http://localhost:8000/users/auth/google/callback',
    jwt_secret_key: 'codeial'

}

const production = {
    name: 'Production',
    asset_path: process.env.ASSET_PATH,
    session_cookie_key: process.env.SESSION_COOKIE_KEY,
    db: process.env.DB,
    smtp: process.env.SMTP,
    google_client_id: process.env.GOOGLE_CLIENT_ID,
    google_client_secret: process.env.GOOGLE_CLIENT_SECRET,
    google_call_back_url: process.env.GOOGLE_CALL_BACK_URL,
    jwt_secret_key: process.env.JWT_SECRET_KEY
}

module.exports = development;