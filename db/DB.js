var crypto = require('crypto')

module.exports.DB = class DBHandler{
    constructor()
    {

    }


    encrypt(str)
    {
        return crypto.createCipheriv('aes-256-ccm')
    }
}