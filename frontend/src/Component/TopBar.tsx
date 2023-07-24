import { Box, IconButton, Stack, Tooltip, useTheme } from "@mui/material";
import { useProSidebar } from "react-pro-sidebar";
import DehazeIcon from "@mui/icons-material/Dehaze";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { tokens } from "../theme";
import { useUtilProvider } from "../Provider/UtilProvider";
import { useState } from "react";
import InfoModel from "./InfoModel";

const TopBar: React.FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { broken, collapseSidebar, toggleSidebar } = useProSidebar();
  const { handleOpenDrawer, handleOpenInfoModal } = useUtilProvider();
  const [activeBulb, setActiveBulb] = useState(false);
  return (
    <Box
      display={"flex"}
      mb={2}
      justifyContent={"space-between"}
      width={"100%"}
    >
      <Box>
        <Tooltip title={broken ? "open" : "collapse"}>
          <IconButton
            size="small"
            sx={{
              color: colors.black[900],
            }}
            onClick={() => {
              broken ? toggleSidebar() : collapseSidebar();
            }}
          >
            <DehazeIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Stack direction={"row"} display={"flex"} spacing={1}>
        {/*<Box>*/}
        <Tooltip title={"Infomation"}>
          <IconButton
            size={"small"}
            onClick={(e) => {
              handleOpenInfoModal(e);
            }}
            sx={{
              color: colors.black[900],
            }}
          >
            <HelpOutlineIcon />
          </IconButton>
        </Tooltip>
        <InfoModel />
        {/*</Box>*/}
        {/*<Box>*/}
        <Tooltip title={"Setting"}>
          <IconButton
            size={"small"}
            onClick={() => handleOpenDrawer()}
            sx={{
              color: colors.black[900],
            }}
          >
            <SettingsOutlinedIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title={"LightBulb"}>
          <IconButton
            size={"small"}
            onClick={() => {
              setActiveBulb((pre) => !pre);
            }}
            sx={{
              color: !activeBulb ? colors.black[900] : colors.yellowAccent[900],
            }}
          >
            <LightbulbIcon />
          </IconButton>
        </Tooltip>
      </Stack>
    </Box>
  );
};

export default TopBar;
