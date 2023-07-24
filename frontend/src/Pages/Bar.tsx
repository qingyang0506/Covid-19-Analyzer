import { Box } from "@mui/material";
import PageHeader from "../Component/PageHeader";
import BarChart from "../Component/BarChart";
import { useUtilProvider } from "../Provider/UtilProvider";
import { useEffect } from "react";

const Bar: React.FC = () => {
  const { setInfoContent, infoContent } = useUtilProvider();

  useEffect(() => {
    setInfoContent(
      " Using bar chart to display some specific countries live data trend " +
        "from deaths, active, confirmed three aspects. User can select country " +
        "to display data, if it is loading for a long time, you should reload page " +
        "to fetch the data"
    );
  }, [infoContent]);
  return (
    <Box height={"100%"}>
      <PageHeader
        title={"Bar Chart"}
        subtitle={"Using Bar chart to show live data trend for some countries"}
      />
      <BarChart />
    </Box>
  );
};

export default Bar;
