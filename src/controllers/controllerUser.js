import jwt from "jsonwebtoken";
import { UserModel } from "../modelos/user.models.js";

export const signup = async (req, res) => {
    
    const password = jwt.sign({ password: req.body.password }, "jsonwebtoken(1234)");
    req.body.password = password;
    
    try {  
        const response = await UserModel.create(req.body);
        res.status(200).json({ user: response });
    } catch (error) { console.log("Error signup", error) }
}
 
export const login = async (req, res) => {

    try{

        const user = await UserModel.findOne( { userName: req.body.userName } );
        
        if (!user) {
            throw new Error("Usuario no encontrado");
        }
      
        const password = jwt.verify(user.password, "jsonwebtoken(1234)").password;
      
        if (req.body.password === password) {
            delete user.password;
            const token = jwt.sign( { user }, "jsonwebtoken(1234)");
            res.status(200).json({ token });
        } else {
            res.status(401).send("Usuario o clave incorrecta!");
        }

    }catch(err){ console.log("Error login:", err)}
}