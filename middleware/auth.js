const res = require("express/lib/response");
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    if(req.headers["auth-token"] == undefined ){
        console.log(req.headers["auth-token"])
        return res.status(401).send('Token is missing. Please enter a valid token');
    }

    let token = req.headers["auth-token"];

    try{
        let decoded = jwt.verify(token, "altaf");
        console.log(decoded);
        req.user = decoded.user;
    } catch(e){
        return res.status(401).send("Invalid Token");
    }

    return next();
};

module.exports = verifyToken;