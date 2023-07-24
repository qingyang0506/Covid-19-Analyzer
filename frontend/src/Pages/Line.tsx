import { Box } from "@mui/material";
import PageHeader from "../Component/PageHeader";
import LineChart from "../Component/LineChart";
import { useUtilProvider } from "../Provider/UtilProvider";
import { useEffect } from "react";

const Line: React.FC = () => {
  const { setInfoContent, infoContent } = useUtilProvider();

  useEffect(() => {
    setInfoContent(
      "Using line chart to show the trend of quantitative " +
        "transformation from confirmed,active,deaths three aspects for " +
        "some specific countries user can select country to display it's trend. " +
        "if it is loading for a long time, please reload the page again to refresh"
    );
  }, [infoContent]);
  return (
    <Box height={"100%"}>
      <PageHeader
        title={"Line Chart"}
        subtitle={
          "Using Line chart to show the total data trend for some countries"
        }
      />
      <LineChart />
    </Box>
  );
};

export default Line;
