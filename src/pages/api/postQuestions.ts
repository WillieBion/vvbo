import dbConfig from "./dbCon";
import { NextApiRequest, NextApiResponse } from "next";
import { responseHandler } from "./response";

interface CreateSuvey {
  question: String;
  survey_id: number;
  option_one: String;
  option_two: String;
  option_three: String;
  option_four: String;
}

export default function createSuvery(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //Type the req.body
  const { question, survey_id, option_one, option_two, option_three, option_four } =
    req.body as CreateSuvey;
  dbConfig.query(
    "INSERT INTO questions (question,survey_id, option_one, option_two, option_three, option_four) VALUES (?,?,?,?,?,?)",
    [question,survey_id, option_one, option_two, option_three, option_four],
    (err, result) => {
      if (err) {
        console.log("err:", err);
        res.status(500).json({ error: err });
      } else {
        const resp = responseHandler(200, "Questions added successfully");
        res.status(200).json(resp);
      }
    }
  );
}
