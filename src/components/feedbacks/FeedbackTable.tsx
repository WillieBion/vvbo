import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  Tooltip,
  getKeyValue,
} from "@nextui-org/react";
import { columns, feedbackArray, surveysArray, users } from "@/util/data";
import { CurrentFeedback, Feedbacks, StatusColorMap } from "@/types";
import { useRouter } from "next/router";
import {
  useAppSelector,
  selectSurvey,
  useAppDispatch,
  setCurrentFeedback,
} from "@/redux";

const statusColorMap: StatusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

export default function FeedbackTable() {
  const router = useRouter();
  const { surveyId } = router.query;
  const dispatch = useAppDispatch();

  const [matchedSurvey, setMatchedSurvey] =
    React.useState<CurrentFeedback | null>(null);

  React.useEffect(() => {
    if (surveyId) {
      const index = parseInt(surveyId as string, 10);
      const matchingSurvey = surveysArray[index];

      if (matchingSurvey) {
        const matchingFeedback = feedbackArray.find((feedback) =>
          feedback.responses.some(
            (response) => Number(response.surveyId) === index
          )
        );

        if (matchingFeedback) {
          const combinedData: CurrentFeedback = {
            respondentId: matchingFeedback.id,
            title: matchingSurvey.title,
            dateOfCreation: matchingSurvey.dateOfCreation,
            distributionMethod: matchingSurvey.distributionMethod,
            privacy: matchingSurvey.privacy,
            //  questions: matchingSurvey.questions,
            questions: matchingSurvey.questions.map((question, index) => ({
              ...question,
              selectedOption:
                matchingFeedback.responses.find(
                  (response) => response.surveyId === surveyId
                )?.answers[0] || -1,
            })),
            answers: matchingFeedback.responses[0].answers,
          };
          dispatch(setCurrentFeedback(combinedData));
          setMatchedSurvey(combinedData);
        }
      }
    }
  }, [surveyId]);

  const renderCell = React.useCallback((user: any, columnKey: any) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "lg", src: "https://i.pravatar.cc/150" }}
            description={user.email}
            name={cellValue}
          >
            {user.email}
          </User>
        );
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">
              {user.phoneNumber}
            </p>
          </div>
        );
      case "status":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[user.teacheName]}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <Table aria-label="Example table with custom cells">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={feedbackArray}>
        {(item) => (
          <TableRow
            key={item.id}
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-40 hover:bg-indigo-100 duration-300 rounded-full"
            onClick={() => {
              router.push(`${router.asPath}/${item.id}`);
              // dispatch(setCurrentFeedback(matchedSurvey));
            }}
          >
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
