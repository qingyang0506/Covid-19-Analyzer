import { Box } from "@mui/material";
import PageHeader from "../Component/PageHeader";
import PieChart from "../Component/PieChart";
import { useUtilProvider } from "../Provider/UtilProvider";
import { useEffect } from "react";

const Pie: React.FC = () => {
  const { setInfoContent, infoContent } = useUtilProvider();

  useEffect(() => {
    setInfoContent(
      " Using pie chart to compare some specific countries total confirmed " +
        "data, you can hover on the pie chart, it give you the information about " +
        "the country's name and confirmed amount. if it is loading for a long time " +
        "please try to refresh the pages,"
    );
  }, [infoContent]);
  return (
    <Box height={"100%"}>
      <PageHeader
        title={"Pie Chart"}
        subtitle={
          "Using Pie chart to compare some countries total confirmed number"
        }
      />
      <Box
        height={"80%"}
        width={"auto"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
