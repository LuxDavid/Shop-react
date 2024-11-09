import userManager from "../DAO/mongoDB/userManager.js"
import { generateToken, createHash, isValidPassword } from "../utils.js";

export const login = async (req, res) => {

    const users = new userManager();

    try {
        const { email, password } = req.body;

        const userFounded = await users.getUserByEmail(email);

        if (!userFounded) {
            return res.status(400).send({ error: "Email incorrecto", result: false });
        }

        if (!isValidPassword(userFounded, password)) {
            return res.status(400).send({ error: "Password incorrecto", result: false })
        }

        const token = generateToken(userFounded);

        if (userFounded) {
            const newcookie = await res.cookie("cookieUS", token, { httpOnly: true, maxAge: 3600000, sameSite: 'None', secure: true, });

            return res.send({ user: token, result: true });
        }
    }
    catch (error) {

        return error
    }

}

export const authorization = (req, res) => {

    const user = req.user

    try {
        if (!user) return res.status(400).send({ result: false });
        return res.status(200).send({ result: true, user });
    } catch (error) {
        return res.status(400).send({ result: false });
    }

}