import { error } from "console";
// import mysql from "mysql";
import dbConfig from "../dbCon";
import { NextApiRequest, NextApiResponse } from "next";

// const dbConfig = mysql.createPool({
//   user: "root",
//   host: "localhost",
//   password: "Willie#2045@1998",
//   database: "vvob",
// });

// console.log(dbConfig);

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Perform a sample SQL query
  dbConfig.query("SELECT * FROM user_details", (error, results) => {
    if (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: "Failed to fetch users" });
    } else {
      res.status(200).json(results);
    }
  });
}

// export default handler;
