"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Userservices_1 = require("../services/Userservices");
class UserController {
    constructor(userServices) {
        this.userServices = userServices;
        this.Autenticate = async (req, res) => {
            try {
                const login = await Userservices_1.default.Autenticate(req.body);
                if (!login)
                    return res.status(401).json({ message: 'Incorrect email or password' });
                const token = await this.userServices.generateToken(req.body);
                console.log(token);
                return res.status(200).json({ token });
            }
            catch (error) {
                res.status(500).json({ message: 'Something went wrong' });
            }
        };
        this.Validate = async (req, res) => {
            const token = req.headers.authorization;
            if (!token)
                return res.status(401).json({ message: 'You dont have a token' });
            const verify = await this.userServices.verifyToken(token);
            if (!verify || null)
                return res.status(401).json({ message: 'Invalid token' });
            const user = await this.userServices.getUserByemail(req.body.email);
            res.status(200).json({ type: user.type });
        };
    }
}
exports.default = UserController;
//# sourceMappingURL=userController.js.map