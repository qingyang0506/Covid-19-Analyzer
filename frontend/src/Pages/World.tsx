import { Box, Divider, Typography, useTheme } from "@mui/material";
import PageHeader from "../Component/PageHeader";
import GeoMap from "../Component/GeoMap";
import PieChart from "../Component/PieChart";
import { tokens } from "../theme";
import useLocalStorageProvider from "../Provider/LocalStorageProvider";
import { useCallback, useEffect, useState } from "react";
import WorldDataBox from "../Component/WorldDataBox";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import SickIcon from "@mui/icons-material/Sick";
import LoadingProcess from "../Component/LoadingProcess";
import { useUtilProvider } from "../Provider/UtilProvider";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";

const World: React.FC = () => {
  const { setInfoContent, infoContent } = useUtilProvider();

  useEffect(() => {
    setInfoContent(
      "This is the Home page to show the world trend and data related to the covid-19. " +
        "if it is loading for a long time, please try to refresh the page "
    );
  }, [infoContent]);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [data, setData] = useLocalStorageProvider("World-Data", {});
  const [loading, setLoading] = useState(true);
  const { summaryData } = useUtilProvider();

  const fetchWorldData = useCallback(async () => {
    const res = await summaryData;
    const globalData = res.Global;
    setData(globalData);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (Object.keys(data).length !== 0) setLoading(false);
    else fetchWorldData();
  });

  return (
    <Box height={"100%"}>
      <PageHeader
        title={"World Statistic"}
        subtitle={"Showing the whole world data statistic about Covid-19"}
      />
      <Box
        mt={2}
        height={"80%"}
        display={"grid"}
        gridTemplateColumns={"repeat(12,1fr)"}
        gridTemplateRows={"repeat(6,15.6%)"}
        gap={2}
      >
        <Box
          gridColumn={{ xs: "span 12", sm: "span 6", md: "span 4" }}
          gridRow={{ xs: "span 1", sm: "span 1", md: "span 2" }}
          sx={{
            backgroundColor: colors.primary[400],
          }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {loading ? (
            <LoadingProcess />
          ) : (
            <WorldDataBox
              data={data}
              title={"new Confirmed"}
              icon={<ConfirmationNumberIcon />}
            />
          )}
        </Box>
        <Box
          gridColumn={{ xs: "span 12", sm: "span 6", md: "span 4" }}
          gridRow={{ xs: "span 1", sm: "span 1", md: "span 2" }}
          sx={{
            backgroundColor: colors.primary[400],
          }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {loading ? (
            <LoadingProcess />
          ) : (
            <WorldDataBox
              data={data}
              title={"new Deaths"}
              icon={<SickIcon />}
            />
          )}
        </Box>
        <Box
          gridColumn={{ xs: "span 12", sm: "span 6", md: "span 4" }}
          gridRow={{ xs: "span 1", sm: "span 1", md: "span 2" }}
          sx={{
            backgroundColor: colors.primary[400],
          }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {loading ? (
            <LoadingProcess />
          ) : (
            <Box
              display={"flex"}
              flexDirection={{ sm: "row", md: "column" }}
              p={2}
              color={colors.greenAccent[300]}
              justifyContent={"space-between"}
              height={"95%"}
              width={"65%"}
            >
              <Box display={"flex"} flexDirection={"column"}>
                <Typography variant={"body1"} fontWeight={600}>
                  Total Confirmed:
                </Typography>
                <Typography
                  variant={"body1"}
                  fontWeight={700}
                  fontSize={"1.4rem"}
                  color={colors.black[800]}
                  alignSelf={"flex-end"}
                >
                  {data.TotalConfirmed}
                </Typography>
              </Box>
              <Box display={"flex"} flexDirection={"column"}>
                <Typography variant={"body1"} fontWeight={600}>
                  Total Deaths:
                </Typography>
                <Typography
                  variant={"body1"}
                  fontWeight={700}
                  fontSize={"1.4rem"}
                  color={colors.black[800]}
                  alignSelf={"flex-end"}
                >
                  {data.TotalDeaths}
                </Typography>
              </Box>
            </Box>
          )}
        </Box>
        <Box
          gridColumn={{ xs: "span 12", sm: "span 12", md: "span 8" }}
          gridRow={{ xs: "span 2", sm: "span 2", md: "span 4" }}
          sx={{
            backgroundColor: colors.primary[400],
          }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <GeoMap />
        </Box>
        <Box
          gridColumn={{ xs: "span 12", sm: "span 6", md: "span 4" }}
          gridRow={{ xs: "span 1", sm: "span 1", md: "span 4" }}
          sx={{
            backgroundColor: colors.primary[400],
          }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <PieChart />
        </Box>
      </Box>
    </Box>
  );
};

export default World;
