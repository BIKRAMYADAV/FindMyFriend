const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const authHeader = req.header('Authorization');
    if (!authHeader) {
        return res.status(401).json({ message: 'Access denied, no token provided' });
    }

    // const token = authHeader.split(' ')[1]?.replace(/"/g, '');
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MzA4MTEyMDYsImV4cCI6MTczMDgyMjAwNn0.gmSnnAJQM6BMPwVDLt6c3-sKD-qVvPPOBcKThq5Q1m0";

    console.log("Extracted Token is:", token);
    console.log("JWT Secret is:", process.env.JWT_SECRET);

    if (!token) {
        return res.status(401).json({ message: 'Access denied, no valid token provided' });
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.userInfo = {username: verified.username};
        next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Token expired' });
        }
        console.error("Token verification failed:", error);
        res.status(400).json({ message: 'Invalid token' });
    }
};

module.exports = authenticateToken;
