import React, { useEffect } from "react";
import getConfig from "next/config";
import {
  selectSurvey,
  setCurrentSurvey,
  useAppDispatch,
  useAppSelector,
} from "@/redux";
import SurveyCard from "@/components/surveys/SurveyCard";
import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  useDisclosure,
  Card,
  CardHeader,
  CardBody,
} from "@nextui-org/react";
import router from "next/router";

const SurveyPage = () => {
  const { currentSurvey } = useAppSelector(selectSurvey);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const dispatch = useAppDispatch();
  //const [updatedSurveys, setUpdatedSurveys] = React.useState([...currentSurvey]);

  // modify question
  const handleOptionChange = (questionIndex: number, optionIndex: number) => {
    //  const updatedQuestions = [...currentSurvey.questions];
    //  updatedQuestions[questionIndex].selectedOption = optionIndex;
    // Update the currentSurvey object with the updatedQuestions
    //   const updatedSurvey = { ...currentSurvey, questions: updatedQuestions };
    //   dispatch(setCurrentSurvey(updatedSurvey));
  };

  return (
    <div className="mt-4">
      {/* title */}
      <div className="flex flex-row mb-5 justify-between">
        <div className="flex flex-col">
          <p className="text-2xl font-medium text-gray-700">
            {currentSurvey?.title}
          </p>
          <p className="text-small text-default-500">
            {currentSurvey?.category}
          </p>
        </div>

        <div className="flex flex-row justify-between gap-2">
          <Button
            color="primary"
            onPress={onOpen}
            //onClick={() => router.push(`${router.asPath}/1`)}
          >
            Create
          </Button>
          <Button color="primary">Delete</Button>
        </div>
      </div>

      {/* cards */}
      <div className="grid">
        <ul>
          {currentSurvey.questions.map((question, questionIndex) => (
            <Card key={questionIndex} className="mb-3">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                {question.text}
              </CardHeader>

              <CardBody>
                <ul>
                  {question.options.map((option, optionIndex) => (
                    <li key={optionIndex} className="mb-1">
                      <label>
                        <input
                          type="radio"
                          className="mr-2"
                          checked={question.selectedOption === optionIndex}
                          onChange={() =>
                            handleOptionChange(questionIndex, optionIndex)
                          }
                        />
                        {option}
                      </label>
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          ))}
        </ul>
      </div>

      {/* modal */}
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="5xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Survey Title
              </ModalHeader>

              <ModalBody>
                <Input size="sm" type="title" label="Survey Title" />

                <Input size="sm" type="title" label="Survey Title" />

                <Input size="sm" type="title" label="Survey Title" />
                <Input size="sm" type="title" label="Survey Title" />
                <Input size="sm" type="title" label="Survey Title" />

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat
                  consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                  incididunt cillum quis. Velit duis sit officia eiusmod Lorem
                  aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                  nisi consectetur esse laborum eiusmod pariatur proident Lorem
                  eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onClick={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default SurveyPage;
