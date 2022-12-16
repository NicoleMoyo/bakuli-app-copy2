const DbConn = require("../config/Database");

exports.UpdateWeight = async(req, res) => {

    try {
        const username = req.params;
        const {user, weight} = req.body;
        weightVal = parseFloat(weight);
        console.log(username);
        console.log(weight);

        db = DbConn();

        await db.query('UPDATE user SET weight = ? WHERE username = ?', [weightVal, username.username])
        res.status(200);
        
    } catch (error) {
        console.log(error);
        res.status(500);
    }
    
}