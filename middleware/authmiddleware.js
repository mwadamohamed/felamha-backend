const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'No token, access denied' });
    }

    try {
        const decoded = jwt.verify(token, 'secret123');
        req.user = decoded;
        next();
    } catch (_err) {
        res.status(401).json({ message: 'Invalid token' });
    }
};


module.exports = authMiddleware;