import dbConfig from "../dbCon";
import { NextApiRequest, NextApiResponse } from "next";
import { responseHandler } from "../response";

export interface Feedback{
    id?:number
    user: number;
    question_id: number;
    selected_option: string;
}
export default function handleFeedback(req:NextApiRequest, res:NextApiResponse){
    // console.log("handleFeed", req.query);
    const {user, question_id, selected_option} = req.body as Feedback;
    
    // res.end(req.query);
    // res.send(req.query);
    dbConfig.query('INSERT INTO feedback (user, question_id, selected_option) VALUES (?, ?, ?)', [user, question_id, selected_option], (error, result) => {
if (error) {
    console.log(error);
    const resp = responseHandler(500, "Server Error");
    res.status(500).json(resp)
}else {
    const resp = responseHandler(200, "Feedback Success");
    res.status(200).json(resp);
}
    });
}
