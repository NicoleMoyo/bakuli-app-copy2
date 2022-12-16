const DbConn = require("../config/Database");

exports.UpdateFoodDetails = async(req, res) => {

    try {
        const waterQuantity = req.params;
        const {user, weight} = req.body;
        waterQuantity = parseFloat(weight);

        db = DbConn();

        // await db.query('UPDATE user SET weight = ? WHERE username = ?', [weightVal, username.username])
        // res.status(200);
        
    } catch (error) {
        console.log(error);
        res.status(500);
    }
    
}