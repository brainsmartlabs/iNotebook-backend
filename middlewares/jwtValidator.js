const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

const tokenValidator = (req, res, next) => {
    const token = req.header('auth_token');

    if (!token) {
        res.status(401).json({ error: "Please authenticate using a valid token" });
    }
    try {
        const jwtData = jwt.verify(token, JWT_SECRET);
        req.userID = jwtData.userID;
        next();
    } catch (e) {
        res.status(401).json({ error: "Please authenticate using a valid token" });
    }

}

module.exports = tokenValidator