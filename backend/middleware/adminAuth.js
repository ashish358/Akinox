import jwt from 'jsonwebtoken'

const adminAuth = async (req,resizeBy,next) =>{
    try {
        const {token} = req.headers
        if(!token){
            return res.json({success:false,message:"not authorizesd loging again"})
        }
        const token_decode = jwt.verify(token,process.env.JWT_SECRET);

        if(token_decode != process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
            return res.json({success:false,message:"not authorizes login here"})
        }
        next()
    } catch (error) {
        console.error( error);
        res.status(500).json({ success: false, message: error.message });
    }
}

export default adminAuth