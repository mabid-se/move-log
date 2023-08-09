import { ReactComponent as SeaServiceIco } from "../assets/icons/sea-transport-services.svg";
import { ReactComponent as WareServiceIco } from "../assets/icons/warehousing-services.svg";
import { ReactComponent as AirServiceIco } from "../assets/icons/fright-services.svg";
import { ReactComponent as LocalServiceIco } from "../assets/icons/local-shipping-services.svg";

export const servicesListData = [
  {
    id: 1,
    icon: <SeaServiceIco width="100%" />,
    name: "sea transport services",
    description:
      "Following the quality of our service thus having gained trust of our many clients.",
  },
  {
    id: 2,
    icon: <WareServiceIco width="100%" />,
    name: "warehousing services",
    description:
      "Following the quality of our service thus having gained trust of our many clients.",
  },
  {
    id: 3,
    icon: <AirServiceIco width="100%" />,
    name: "air fright services",
    description:
      "Following the quality of our service thus having gained trust of our many clients.",
  },
  {
    id: 4,
    icon: <LocalServiceIco width="100%" />,
    name: "local shipping services",
    description:
      "Following the quality of our service thus having gained trust of our many clients.",
  },
];
