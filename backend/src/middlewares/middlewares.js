import jwt from 'jsonwebtoken'

export const authToken = (req, res, next) => {
    const token = req.cookies?.cookieUS

    if(!token) return res.status(401).send({error: 'noAuth', result:false})

    jwt.verify(token, "SECRET", (error, credentials) => {
        if(error) return res.status(403).send({result:false})

        req.user = credentials.user
        next()
    })
}