import jwt from "jsonwebtoken";

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

