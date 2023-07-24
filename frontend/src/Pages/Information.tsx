import { Box } from "@mui/material";
import PageHeader from "../Component/PageHeader";
import ResourceCard from "../Component/ResourceCard";
import { useUtilProvider } from "../Provider/UtilProvider";
import { useEffect } from "react";

const Information: React.FC = () => {
  const { setInfoContent, infoContent } = useUtilProvider();

  useEffect(() => {
    setInfoContent(
      "This page will list some technologies or libraries I used for the page. " +
        "and just introduce them in a short sentence,if you want to know more, please click " +
        "learn more button to get more information."
    );
  }, [infoContent]);
  return (
    <Box height={"100%"}>
      <PageHeader
        title={"Information"}
        subtitle={"This page will list some related technology resources used"}
      />

      <Box
        p={2}
        display={"grid"}
        gridTemplateColumns={"repeat(12,1fr)"}
        gap={3}
      >
        <ResourceCard
          title={"React"}
          type={"Front-end Framework"}
          content={
            "React is an open-source JavaScript library for building \n" +
            "user interfaces or UI components. It was \n" +
            "developed by Facebook and is currently maintained \n" +
            "by Facebook and a community of individual \n" +
            "developers and companies."
          }
          link={"https://react.dev/learn"}
        />
        <ResourceCard
          title={"Typescript"}
          type={"Programme Language"}
          content={
            "TypeScript is a free and open-source programming language \n" +
            "developed and maintained by Microsoft. It is a strict syntactical \n" +
            "superset of JavaScript, which means that it adds features to JavaScript \n" +
            "while maintaining full compatibility with it."
          }
          link={"https://www.typescriptlang.org/"}
        />
        <ResourceCard
          title={"Material UI"}
          type={"UI Framework"}
          content={
            "MUI (formerly known as Material-UI) is an open-source React \n" +
            "component library for building user interfaces that follow \n" +
            "the Material Design guidelines developed by Google. It provides\n" +
            " pre-built, customizable UI components "
          }
          link={"https://mui.com/material-ui/getting-started/overview/"}
        />
        <ResourceCard
          title={"React Pro SideBar"}
          type={"SideBar Library"}
          content={
            "React Pro Sidebar is a React-based sidebar component library \n" +
            "designed to provide an easy and customizable way to add sidebars \n" +
            "to React applications. It provides a set of pre-built components, \n" +
            "including a sidebar container, header, footer, and menu items"
          }
          link={"https://www.npmjs.com/package/react-pro-sidebar"}
        />

        <ResourceCard
          title={"Nivo"}
          type={"Data Visualization Library"}
          content={
            "Nivo is a powerful and flexible open-source data visualization library \n" +
            "for React. It provides a wide range of highly customizable charting components, \n" +
            "including bar charts, and pie charts, as well as more \n" +
            "complex visualizations like tree maps, and radar charts."
          }
          link={"https://nivo.rocks/"}
        />

        <ResourceCard
          title={"Covid-19 API"}
          type={"Third party API"}
          content={
            "The Covid-19 API is an open-source API (Application Programming Interface) \n" +
            "that provides real-time data related to the COVID-19 pandemic. \n" +
            "It aggregates data from various sources include WHO, Johns Hopkins University,\n" +
            " and local health departments"
          }
          link={
            "https://documenter.getpostman.com/view/10808728/SzS8rjbc#81415d42-eb53-4a85-8484-42d2349debfe"
          }
        />
      </Box>
    </Box>
  );
};

export default Information;
