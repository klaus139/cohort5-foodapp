import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

export const verifyToken = (req, res, next) => {
    if(!req.headers.authorization) return res.status(403).json({msg:"Not authorized, no token"})

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        const token = req.headers.authorization.split(" ")[1]
        jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
            if(err) return res.status(403).json({msg: "wrong or expired token"})
            else{
                req.user = data
                next()
            }
        })
    }

}

export const verifyTokenAdmin = (req, res, next) => {
    if(!req.headers.authorization) return res.status(403).json({msg:"Not authorized, no token"})

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        const token = req.headers.authorization.split(" ")[1]
        jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
            if(err) return res.status(403).json({msg: "wrong or expired token"})
            else{
                if(!data.isAdmin) return res.status(403).json({msg: 'You are not an admin'})
                req.user = data;
                next();

            }
        })
    }

}

// export const jwtCheck = auth({
//     audience: process.env.AUTH0_AUDIENCE,
//     issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
//     tokenSigningAlg: "RS256",
//   });

export const jwtParse = async (
    req,
    res,
    next
  ) => {
    const { authorization } = req.headers;
  
    if (!authorization || !authorization.startsWith("Bearer ")) {
      return res.sendStatus(401);
    }
  
    // Bearer lshdflshdjkhvjkshdjkvh34h5k3h54jkh
    const token = authorization.split(" ")[1];
  
    try {
      const decoded = jwt.decode(token);
      const auth0Id = decoded.sub;
  
      const user = await User.findOne({ auth0Id });
  
      if (!user) {
        return res.sendStatus(401);
      }
  
      req.auth0Id = auth0Id;
      req.userId = user._id.toString();
      next();
    } catch (error) {
      return res.sendStatus(401);
    }
  };