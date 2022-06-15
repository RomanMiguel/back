import jwt from "jsonwebtoken";

export async function isAuth(req, res, next) {

  try {
  
    const token = req.get("authorization");
    const verify = await jwt.verify(token, "jsonwebtoken(1234)");
    req.user = verify.user;
    next();
    
  } catch (err) { res.status(401).send(err) }
}
