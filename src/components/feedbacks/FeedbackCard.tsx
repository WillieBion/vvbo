import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Button,
  CardFooter,
} from "@nextui-org/react";
import React from "react";
import moment from "moment";
import { NextRouter } from "next/router";
import Link from "next/link";
import { setCurrentSurvey, setSurveyId, useAppDispatch } from "@/redux";
import { Feedback } from "@/types";

const FeedbackCard = (props: Feedback) => {
  const { data, index, router } = props;
  const dispatch = useAppDispatch();

  return (
    <Link
      href={`${router.asPath}/${index}`}
      onClick={() => {
        dispatch(setCurrentSurvey(data));
        dispatch(setSurveyId(index));
      }}
      key={index}
    >
      <Card
        isFooterBlurred
        className="py-4 lg:h-40 md:h-48 sm:h-60 h-40 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-40 hover:bg-indigo-100 duration-300"
      >
        <CardHeader className="pb-0 pt-2 px-4 justify-between items-start">
          <div className="flex flex-col">
            <p className="text-tiny uppercase font-bold">{data.category}</p>
          </div>
          <small className="text-default-500">
            {moment(data.dateOfCreation).format("lll")}
          </small>
        </CardHeader>

        <CardBody className="overflow-visible py-2 px-4 justify-start items-start">
          <h4 className="font-bold text-medium ">{data.title}</h4>
        </CardBody>

        <CardFooter className="justify-between">
          <div className="flex gap-1">
            <p className="font-semibold text-default-400 text-small">
              Responses:
            </p>
            <p className=" text-default-400 text-small">4</p>
          </div>
          <div className="flex gap-1">
            <p className="font-semibold text-default-400 text-small">Status:</p>
            <p className="text-default-400 text-small">Ongoing</p>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default FeedbackCard;
