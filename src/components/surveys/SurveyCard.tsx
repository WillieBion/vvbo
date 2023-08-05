import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
} from "@nextui-org/react";
import React from "react";
import moment from "moment";
import { NextRouter } from "next/router";
import Link from "next/link";
import { setCurrentSurvey, useAppDispatch } from "@/redux";
import { TbBrandWhatsapp, TbMail } from "react-icons/tb";
import { SlScreenSmartphone } from "react-icons/sl";
import { CardSurvey, IconMapping } from "@/types";

const iconMapping: IconMapping = {
  Email: () => <TbMail />,
  WhatsApp: () => <TbBrandWhatsapp />,
  USSD: () => <SlScreenSmartphone />,
};

const SurveyCard = (props: CardSurvey) => {
  const { data, index, router } = props;
  const dispatch = useAppDispatch();
  const IconComponent = iconMapping[data.distributionMethod];

  return (
    <React.Fragment>
      <Link
        href={`${router.asPath}/${index}`}
        onClick={() => dispatch(setCurrentSurvey(data))}
        key={index}
      >
        <Card className="py-4 lg:h-40 md:h-46 sm:h-50 h-32 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-40 hover:bg-indigo-100 duration-300">
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
                Questions:
              </p>
              <p className=" text-default-400 text-small">
                {data.questions.length}
              </p>
            </div>
            <div className="flex gap-1">
              <p className="font-semibold text-default-400 text-small">
                Status:
              </p>
              <p className="text-default-400 text-small">In Review</p>
            </div>

            {IconComponent && <IconComponent />}
          </CardFooter>
        </Card>
      </Link>
    </React.Fragment>
  );
};

export default SurveyCard;
