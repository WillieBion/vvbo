import dbConfig from "../../dbCon";
import { NextApiRequest, NextApiResponse } from "next";

export default function handleFeedback(req:NextApiRequest, res:NextApiResponse){
    // console.log("handleFeed", req.query);
    
    // res.end(req.query);
    // res.send(req.query);
    dbConfig.query('INSERT INTO feedback (user, question_id, selected_option) VALUES (?, ?)', []),
}
