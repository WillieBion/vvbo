import { CurrentFeedback, Feedbacks, Survey } from "@/types";

export const surveysArray: Survey[] = [
  {
    title: "Educational Needs Assessment",
    dateOfCreation: "2023-05-18T00:00:00",
    category: "Education",
    targetAudience: "Teachers",
    distributionMethod: "Email",
    expirationDate: "2023-06-30T23:59:59",
    privacy: "Anonymous",
    questions: [
      {
        text: "What is your preferred teaching method?",
        options: ["Lecture", "Group discussion", "Hands-on activities"],
        selectedOption: -1, // Initialize with -1 or set to a default option index
      },
      {
        text: "Which technology tools do you use in the classroom?",
        options: ["Smartboard", "Laptops", "Tablets", "None"],
        selectedOption: -1,
      },
      {
        text: "What is the biggest challenge you face in teaching?",
        options: ["Lack of resources", "Student engagement", "Assessment"],
        selectedOption: -1,
      },
    ],
  },
  {
    title: "Professional Development Survey",
    dateOfCreation: "2023-06-05T00:00:00",
    category: "Education",
    targetAudience: "Teachers",
    distributionMethod: "WhatsApp",
    expirationDate: "2023-07-15T23:59:59",
    privacy: "Confidential",
    questions: [
      {
        text: "What is your preferred teaching method?",
        options: ["Lecture", "Group discussion", "Hands-on activities"],
        selectedOption: -1, // Initialize with -1 or set to a default option index
      },
      {
        text: "Which technology tools do you use in the classroom?",
        options: ["Smartboard", "Laptops", "Tablets", "None"],
        selectedOption: -1,
      },
      {
        text: "What is the biggest challenge you face in teaching?",
        options: ["Lack of resources", "Student engagement", "Assessment"],
        selectedOption: -1,
      },
    ],
  },
  {
    title: "Remote Learning Experience",
    dateOfCreation: "2023-07-10T00:00:00",
    category: "Education",
    targetAudience: "Teachers",
    distributionMethod: "USSD",
    expirationDate: "2023-08-31T23:59:59",
    privacy: "Named Respondents",
    questions: [
      {
        text: "What is your preferred teaching method?",
        options: ["Lecture", "Group discussion", "Hands-on activities"],
        selectedOption: -1, // Initialize with -1 or set to a default option index
      },
      {
        text: "Which technology tools do you use in the classroom?",
        options: ["Smartboard", "Laptops", "Tablets", "None"],
        selectedOption: -1,
      },
      {
        text: "What is the biggest challenge you face in teaching?",
        options: ["Lack of resources", "Student engagement", "Assessment"],
        selectedOption: -1,
      },
    ],
  },
  {
    title: "Curriculum Feedback Survey",
    dateOfCreation: "2023-08-02T00:00:00",
    category: "Education",
    targetAudience: "Teachers",
    distributionMethod: "Email",
    expirationDate: "2023-09-30T23:59:59",
    privacy: "Anonymous",
    questions: [
      {
        text: "What is your preferred teaching method?",
        options: ["Lecture", "Group discussion", "Hands-on activities"],
        selectedOption: -1, // Initialize with -1 or set to a default option index
      },
      {
        text: "Which technology tools do you use in the classroom?",
        options: ["Smartboard", "Laptops", "Tablets", "None"],
        selectedOption: -1,
      },
      {
        text: "What is the biggest challenge you face in teaching?",
        options: ["Lack of resources", "Student engagement", "Assessment"],
        selectedOption: -1,
      },
    ],
  },
  {
    title: "Classroom Technology Usage",
    dateOfCreation: "2023-08-20T00:00:00",
    category: "Education",
    targetAudience: "Teachers",
    distributionMethod: "Email",
    expirationDate: "2023-10-15T23:59:59",
    privacy: "Confidential",
    questions: [
      {
        text: "What is your preferred teaching method?",
        options: ["Lecture", "Group discussion", "Hands-on activities"],
        selectedOption: -1, // Initialize with -1 or set to a default option index
      },
      {
        text: "Which technology tools do you use in the classroom?",
        options: ["Smartboard", "Laptops", "Tablets", "None"],
        selectedOption: -1,
      },
      {
        text: "What is the biggest challenge you face in teaching?",
        options: ["Lack of resources", "Student engagement", "Assessment"],
        selectedOption: -1,
      },
    ],
  },
  {
    title: "Student Engagement Assessment",
    dateOfCreation: "2023-09-12T00:00:00",
    category: "Education",
    targetAudience: "Teachers",
    distributionMethod: "WhatsApp",
    expirationDate: "2023-11-30T23:59:59",
    privacy: "Named Respondents",
    questions: [
      {
        text: "What is your preferred teaching method?",
        options: ["Lecture", "Group discussion", "Hands-on activities"],
        selectedOption: -1, // Initialize with -1 or set to a default option index
      },
      {
        text: "Which technology tools do you use in the classroom?",
        options: ["Smartboard", "Laptops", "Tablets", "None"],
        selectedOption: -1,
      },
      {
        text: "What is the biggest challenge you face in teaching?",
        options: ["Lack of resources", "Student engagement", "Assessment"],
        selectedOption: -1,
      },
    ],
  },
  {
    title: "Teaching Resource Evaluation",
    dateOfCreation: "2023-10-05T00:00:00",
    category: "Education",
    targetAudience: "Teachers",
    distributionMethod: "Email",
    expirationDate: "2023-12-31T23:59:59",
    privacy: "Anonymous",
    questions: [
      {
        text: "What is your preferred teaching method?",
        options: ["Lecture", "Group discussion", "Hands-on activities"],
        selectedOption: -1, // Initialize with -1 or set to a default option index
      },
      {
        text: "Which technology tools do you use in the classroom?",
        options: ["Smartboard", "Laptops", "Tablets", "None"],
        selectedOption: -1,
      },
      {
        text: "What is the biggest challenge you face in teaching?",
        options: ["Lack of resources", "Student engagement", "Assessment"],
        selectedOption: -1,
      },
    ],
  },
];

export const feedbackArray: Feedbacks[] = [
  {
    id: 0,
    name: "John Doe",
    email: "john@example.com",
    phoneNumber: "123-456-7890",
    responses: [
      {
        surveyId: "0",
        answers: [1, 2, 0],
      },
      {
        surveyId: "1",
        answers: [1, 2, 0],
      },
      {
        surveyId: "2",
        answers: [1, 2, 0],
      },
      {
        surveyId: "3",
        answers: [1, 2, 0],
      },
      {
        surveyId: "4",
        answers: [1, 2, 0],
      },
    ],
  },
  {
    id: 1,
    name: "Jane Smith",
    email: "jane@example.com",
    phoneNumber: "987-654-3210",
    responses: [
      {
        surveyId: "0",
        answers: [2, 1, 0],
      },
      {
        surveyId: "1",
        answers: [1, 2, 0],
      },
      {
        surveyId: "2",
        answers: [1, 2, 0],
      },
      {
        surveyId: "3",
        answers: [1, 2, 0],
      },
      {
        surveyId: "4",
        answers: [1, 2, 0],
      },
    ],
  },
  {
    id: 2,
    name: "Michael Johnson",
    email: "michael@example.com",
    phoneNumber: "555-555-5555",
    responses: [
      {
        surveyId: "0",
        answers: [0, 2, 1],
      },
      {
        surveyId: "1",
        answers: [1, 2, 0],
      },
      {
        surveyId: "2",
        answers: [1, 2, 0],
      },
      {
        surveyId: "3",
        answers: [1, 2, 0],
      },
      {
        surveyId: "4",
        answers: [1, 2, 0],
      },
    ],
  },
  {
    id: 3,
    name: "Emily Davis",
    email: "emily@example.com",
    phoneNumber: "111-222-3333",
    responses: [
      {
        surveyId: "0",
        answers: [1, 0, 2],
      },
      {
        surveyId: "1",
        answers: [1, 2, 0],
      },
      {
        surveyId: "2",
        answers: [1, 2, 0],
      },
      {
        surveyId: "3",
        answers: [1, 2, 0],
      },
      {
        surveyId: "4",
        answers: [1, 2, 0],
      },
    ],
  },
  {
    id: 4,
    name: "Robert Johnson",
    email: "robert@example.com",
    phoneNumber: "444-444-4444",
    responses: [
      {
        surveyId: "0",
        answers: [2, 1, 0],
      },
      {
        surveyId: "1",
        answers: [1, 2, 0],
      },
      {
        surveyId: "2",
        answers: [1, 2, 0],
      },
      {
        surveyId: "3",
        answers: [1, 2, 0],
      },
      {
        surveyId: "4",
        answers: [1, 2, 0],
      },
    ],
  },
  {
    id: 5,
    name: "Olivia Brown",
    email: "olivia@example.com",
    phoneNumber: "666-666-6666",
    responses: [
      {
        surveyId: "0",
        answers: [0, 2, 1],
      },
      {
        surveyId: "1",
        answers: [1, 2, 0],
      },
      {
        surveyId: "2",
        answers: [1, 2, 0],
      },
      {
        surveyId: "3",
        answers: [1, 2, 0],
      },
      {
        surveyId: "4",
        answers: [1, 2, 0],
      },
    ],
  },
  {
    id: 6,
    name: "William Wilson",
    email: "william@example.com",
    phoneNumber: "777-777-7777",
    responses: [
      {
        surveyId: "0",
        answers: [1, 0, 2],
      },
      {
        surveyId: "1",
        answers: [1, 2, 0],
      },
      {
        surveyId: "2",
        answers: [1, 2, 0],
      },
      {
        surveyId: "3",
        answers: [1, 2, 0],
      },
      {
        surveyId: "4",
        answers: [1, 2, 0],
      },
    ],
  },
  // ... other feedback objects
];

export const columns = [
  {name: "NAME", uid: "name"},
  {name: "ROLE", uid: "role"},
  {name: "STATUS", uid: "status"},
];

export const users = [
  {
    id: 1,
    name: "Tony Reichert",
    role: "CEO",
    team: "Management",
    status: "active",
    age: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "tony.reichert@example.com",
  },
  {
    id: 2,
    name: "Zoey Lang",
    role: "Technical Lead",
    team: "Development",
    status: "paused",
    age: "25",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    email: "zoey.lang@example.com",
  },
  {
    id: 3,
    name: "Jane Fisher",
    role: "Senior Developer",
    team: "Development",
    status: "active",
    age: "22",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    email: "jane.fisher@example.com",
  },
  {
    id: 4,
    name: "William Howard",
    role: "Community Manager",
    team: "Marketing",
    status: "vacation",
    age: "28",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    email: "william.howard@example.com",
  },
  {
    id: 5,
    name: "Kristen Copper",
    role: "Sales Manager",
    team: "Sales",
    status: "active",
    age: "24",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    email: "kristen.cooper@example.com",
  },
];

