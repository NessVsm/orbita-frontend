require("dotenv-safe").load();
var jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')


const login = (req, res, db) => {
    const { email, password} = req.body

    db.select('*').from('users').where('email','=', email)
        .then(items => {
            if(items.length){
                bcrypt.compare(req.body.password,items[0].password).then((result)=>{
                    if(result){
                        const id = items[0].id;
                        res.json(items)

                        var token = jwt.sign({ id }, process.env.SECRET, {
                            expiresIn: 300 // expira em 5min
                        });
    
                    }
                    else{
                        res.status(400).json({dbError: "Não foi possível realizar o login"})
                    }
                }).catch((err)=>console.error(err))
            }
        }).catch(err =>
            res.status(400).send(err)
          )  
    
}
  module.exports = {
    login
  }