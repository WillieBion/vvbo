import dbConfig from "../dbCon";
import { NextApiRequest, NextApiResponse } from "next";
import { responseHandler } from "../response";

interface CreateSuvey {
  title: string;
  category_id: number;
  target_audience: string;
  distribution_method: string;
}

export default function createSuvery(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //Type the req.body
  const { title, category_id, target_audience, distribution_method } =
    req.body as CreateSuvey;
  dbConfig.query(
    "INSERT INTO survey (title,category_id, target_audience, distribution_method) VALUES (?,?,?,?)",
    [title, category_id, target_audience, distribution_method],
    (err, result) => {
      if (err) {
        console.log("err:", err);
        res.status(500).json({ error: err });
      } else {
        const resp = responseHandler(200, "Survey Created Successfully");
        res.status(200).json(resp);
      }
    }
  );
}
