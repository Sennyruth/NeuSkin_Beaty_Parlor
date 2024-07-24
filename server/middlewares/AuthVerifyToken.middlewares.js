import jwt from 'jsonwebtoken'

export const AuthVerifyToken = async (req, res, next) => {
    const token = req.cookies.PT_access_token

    if(!token) return res.status(401).json({ success: false, message: "Token not found" })
    
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if(err) return res.status(401).json({ success: false, message: "Unauthorized"})

        req.user = decoded;
        if(decoded.role !== "admin"){
            return res.status(401).json({ success: false, message: "Cannot get appointment" })
        }
        next();
    })
}