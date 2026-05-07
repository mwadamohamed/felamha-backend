const authMiddleware = require('./authMiddleware');

const adminMiddleware = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Admins only' });
    }

    next();
};

module.exports = [authMiddleware, adminMiddleware];
