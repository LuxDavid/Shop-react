import { userModel } from "../models/userModel.js";

class userManager{

 //-------------------------------------------------------------------------

 async getUserByEmail(emailUser) {

    try {

        const user = await userModel.findOne({ email: emailUser });

        return user

    } catch (error) {
        return false
    }
}


}

export default userManager