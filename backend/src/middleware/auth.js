const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization')
    console.log("token is: ",token);
    if (!token) {
        return res.status(401).json({ message: 'Access denied, no valid token provided' });

    }
    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);

        req.user = verified;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Invalid token' });
    }
}

module.exports = authenticateToken;