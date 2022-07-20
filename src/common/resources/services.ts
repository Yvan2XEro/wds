import { Service } from "../types";
import { CgWebsite } from "react-icons/cg";
import { ImMobile } from "react-icons/im";
import { BiLineChart } from "react-icons/bi";
import { BsCardHeading } from "react-icons/bs";
import { MdDraw, MdManageAccounts } from "react-icons/md";

const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate cupiditate cumque quas officia inventore fugit.";
const SERVICES_DATA: Service[] = [
    {
        icon: <CgWebsite size={ 70} />,
    title: "Developpement d'applications WEB",
    text,
  },
{
    icon: <ImMobile size={ 70 } />,
    title: "Developpement d'applications WEB",
        text,
  },
{
    icon: <BiLineChart size={ 70 } />,
    title: "Optimisation SEO",
        text,
  },
{
    icon: <BsCardHeading size={ 70 } />,
    title: "Affiches publicitaires & cartes de visites",
        text,
  },
{
    icon: <MdDraw size={ 70 } />,
    title: "Designs UI/UX",
        text,
  },
{
    icon: <MdManageAccounts size={ 70 } color = "" />,
        title: "Assistance technique",
            text,
  },
];