const Sequlize = require('sequelize')
 const sequelize = new Sequlize( `expensesdetails`,'root'  ,'Parth@Sagar26',{
  dialect : 'mysql',
  host : 'localhost' ,
  logging : false,
 })

 module.exports = sequelize ; 
// const Sequlize = require('sequelize')
//  const sequelize = new Sequlize( process.env.DB_NAME ,  process.env.DB_USERNAME, process.env.DB_PASSWORD,{
//   dialect : 'mysql',
//   host : process.env.DB_LOCALHOST ,
//   logging : false,
//  })

//  module.exports = sequelize ; 
