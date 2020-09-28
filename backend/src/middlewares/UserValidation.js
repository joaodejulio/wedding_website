const UserModel = require('../model/UserModel');

const UserValidation = async(req, res, next) =>{

    const{username, pw, email} = req.body;

    if(!username) return res.status(400).json({error: 'Username é obrigatorio!'});
    else if(!pw) return res.status(400).json({error: 'Preencha sua senha!'});
    else if(!email) return res.status(400).json({error: 'Digite seu email!'});
    else{
        let exists;
        
        if(req.params.id){
            exists = await UserModel.
                        findOne(
                            {
                                '_id':{'$ne': req.params.id},
                                'username': {'$eq': username}, 
                                'email': {'$eq': email}
                            });
        }else{
            exists = await UserModel.
                        findOne(
                            {
                                'username': {'$eq': username}, 
                                'email': {'$eq': email}
                            });
        }

        if(exists){
            return res.status(400).json({error: 'Usuario e Email já cadastro!'});
        }         
                           
        next();
    } 
}


module.exports = UserValidation 