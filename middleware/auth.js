const jwt = require('jsonwebtoken');

const config = require('../config/default.json');

function auth(req, res, next){
    const token = req.header('x-auth-token');

    if(!token){
        res.status(401).json({msg: 'No token, authorization denied'})
    }

    if (req.role === 'admin') {
        try {
            req.user = jwt.verify(token, config.jwtSecret);
            next();
        } catch (e) {
            res.status(400).json({msg: "Token is invalid."})
        }
    }
    else{
        console.log('not admin');
        res.status(400).json({msg: "Permission denied."})
    }

}

module.exports = auth;