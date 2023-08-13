import mysql from 'mysql'


const dbConfig = mysql.createPool({
    user: "root",
    host: "localhost",
    password: "Willie#2045@1998",
    database: "vvob",
  });
  
 
  export default dbConfig;