import SurveyCard from "@/components/surveys/SurveyCard";
import { Survey } from "@/types";
import { surveysArray } from "@/util/data";
import { Card } from "@nextui-org/card";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useRouter } from "next/router";


export default function SurveysPage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();

  return (
    <div className="mt-4">
      {/* title */}
      <div className="flex flex-row mb-5 justify-between">
        <div className=" text-2xl font-medium text-gray-700">Surveys</div>

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
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1  gap-4">
        {surveysArray.map((item, index) => (
          <SurveyCard data={item} index={index} router={router} />
        ))}
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
}
