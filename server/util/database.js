//---This code is setting up a connection to a PostgreSQL database using the Sequelize library---//

//---dotenv package used to secure sensitive data---//
//---using dotenv to process environment variables---//
require('dotenv').config()

//---importing the connection string from .env file---//
const { CONNECTION_STRING } = process.env

//---importing sequelize to perform data modifications---//
const Sequelize = require('sequelize')

//---sequelize object requires postgres dialect to be used---//

//---The ssl option specifies that Secure Sockets Layer (SSL) should be used when connecting to the database--->
//---SSL is a protocol that provides secure communication over a network by encrypting data transmitted between a client and a server---//

//---The rejectUnauthorized property is a boolean value that specifies whether or not to reject unauthorized SSL certificates--->
//---If it is set to true, the connection will be rejected if the server's SSL certificate cannot be verified--->
//---If it is set to false, the connection will be allowed even if the certificate cannot be verified---//

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect:'postgres',
    dialectOptions: {
        ssl:{
            rejectUnauthorized: false
        }
    }
})

module.exports = {
    sequelize
}