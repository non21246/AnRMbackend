const AuthService = require("../services/auth.js")

const register = (req, res) => {
    try {
        const {email, password} = req.body;
        const users = AuthService.registerUser(email, password);
        res.json({status: true, success: 'User register successfully'});
    } catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
};

const login = (req, res) => {
    try {
        const { email, password } = req.body;
        const users = AuthService.loginUser(email, password);
        res.json({ status: true, success: 'Login successful'});
    } catch (error) {
        res.status(401).json({ status: false, message: error.message });
    }
};

module.exports = {register, login};