import { Box, Typography, useTheme } from "@mui/material";
import { WorldData } from "../Type";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";
import { useEffect, useState } from "react";

const WorldDataBox: React.FC<{
  data: WorldData;
  title: string;
  icon: any;
}> = ({ data, title, icon }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [percentage, setPercentage] = useState<number>(0);

  useEffect(() => {
    setPercentage(
      title === "newConfirmed"
        ? (data.NewConfirmed / data.TotalConfirmed) * 100
        : (data.NewDeaths / data.TotalDeaths) * 100
    );
  }, [percentage]);

  return (
    <>
      <Box
        p={1}
        display={"flex"}
        justifyContent={"space-between"}
        width={"70%"}
        height={"70%"}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          height={"100%"}
          color={colors.greenAccent[300]}
          fontSize={"1.3em"}
        >
          <Box>{icon}</Box>
          <Typography variant={"h6"} color={colors.black[800]} fontWeight={600}>
            {title === "new Confirmed" ? data.NewConfirmed : data.NewDeaths}
          </Typography>
          <Typography variant={"h6"} fontSize={"1rem"} fontWeight={600}>
            {title}
          </Typography>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box>
            <ProgressCircle percentage={percentage} />
          </Box>
          <Typography
            variant={"body1"}
            color={colors.greenAccent[300]}
            fontSize={"1rem"}
            fontWeight={600}
          >
            {"+" + percentage.toFixed(2) + "%"}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default WorldDataBox;
