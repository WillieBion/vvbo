import { DocIcon } from "./icons/DocIcon";
import { HomeIcon } from "./icons/HomeIcon";
import { TaskIcon } from "./icons/TaskIcon";
import { ReportIcon } from "./icons/ReportIcon";
import { ProjectIcon } from "./icons/ProjectIcon";
import { SettingsIcon } from "./icons/SettingsIcon";
import { CalendarIcon } from "./icons/CalendarIcon";
import { TimeManageIcon } from "./icons/TimeManageIcon";
import { ClipboardIcon } from "./icons/ClipboardIcon";

export const data = [
  {
    section: "Section1",
    content: [
      {
        title: "Dashboard",
        icon: <HomeIcon />,
        link: "/",
      },
      {
        title: "Surveys",
        icon: <ClipboardIcon />,
        link: "/admin/surveys",
      },
      {
        title: "Feedbacks",
        icon: <ClipboardIcon />,
        link: "/admin/feedbacks",
      },
    ],
  },
];
