const jwt = require('jsonwebtoken');
const Blacklist = require('../models/Blacklist');

const verifyToken = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Access Denied' });

    const blacklisted = await Blacklist.findOne({ token });
    if (blacklisted) return res.status(403).json({ message: 'Token is blacklisted' });

    try {
        const verified = jwt.verify(token, process.env.ACCESS_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).json({ message: 'Invalid Token' });
    }
};

module.exports = verifyToken;
