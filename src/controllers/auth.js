const userService = require('../services/auth.js');

class UserController {
  async register(req, res) {
    try {
      const userData = req.body;
      const user = await userService.registerUser(userData);
      return res.status(201).json(user);
    } catch (error) {
      return res.status(500).json({ error: 'Registration failed' });
    }
  }

  async login(req, res) {
      try {
        const { email, password } = req.body;
    
        const user = await userService.loginUser(email, password);
        if (user) {
          return res.status(200).json({ message: 'Authentication successful' });
        } else {
          return res.status(401).json({ error: 'Authentication failed' });
        }
      } catch (error) {
        return res.status(500).json({ error: 'Login failed' });
      }
  }
}

module.exports = new UserController();
