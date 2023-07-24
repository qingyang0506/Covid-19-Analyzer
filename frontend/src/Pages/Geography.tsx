import { Box } from "@mui/material";
import PageHeader from "../Component/PageHeader";
import GeoMap from "../Component/GeoMap";
import { useUtilProvider } from "../Provider/UtilProvider";
import { useEffect } from "react";

const Geography: React.FC = () => {
  const { setInfoContent, infoContent } = useUtilProvider();

  useEffect(() => {
    setInfoContent(
      " Using world map to show the density of total covid-19 confirmed amount" +
        "you can hover on the map to see some specific country data. it will show " +
        "the country's name and confirmed amount. if it is loading for a long time " +
        "please try to refresh the pages,"
    );
  }, [infoContent]);
  return (
    <Box height={"100%"}>
      <PageHeader
        title={"Geography"}
        subtitle={"using world map to display covid-19 confirmed density"}
      />
      <Box
        height={"77%"}
        mt={3}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <GeoMap />
      </Box>
    </Box>
  );
};

export default Geography;
