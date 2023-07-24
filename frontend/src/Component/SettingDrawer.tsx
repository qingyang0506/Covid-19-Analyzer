import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { useUtilProvider } from "../Provider/UtilProvider";
import { useColorContext } from "../Provider/ColorProvider";
import { tokens } from "../theme";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const SettingDrawer: React.FC = () => {
  const { drawerOpen, handleCloseDrawer } = useUtilProvider();
  const theme = useTheme();
  const { setLightMode, setDarkMode } = useColorContext();
  const colors = tokens(theme.palette.mode);
  return (
    <Drawer anchor={"right"} open={drawerOpen} onClose={handleCloseDrawer}>
      <Box
        width={"350px"}
        height={"100%"}
        display={"flex"}
        p={3}
        flexDirection={"column"}
        sx={{
          backgroundColor: colors.primary[400],
        }}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          width={"100%"}
          flexWrap={"wrap"}
        >
          <Box>
            <Typography
              variant={"h6"}
              color={colors.black[900]}
              fontSize={"1.3rem"}
            >
              Settings
            </Typography>
          </Box>
          <Box>
            <IconButton
              size={"small"}
              onClick={() => handleCloseDrawer()}
              sx={{
                color: colors.redAccent[900],
              }}
            >
              <HighlightOffIcon />
            </IconButton>
          </Box>
        </Box>
        <Divider
          sx={{
            margin: "24px 0",
          }}
        />
        <Stack spacing={2} display={"flex"} flexDirection={"column"}>
          <Box>
            <Typography color={colors.black[800]} variant={"body1"}>
              Mode
            </Typography>
          </Box>
          <Box>
            <ButtonGroup
              variant="outlined"
              fullWidth={true}
              sx={{
                borderRadius: "20",
              }}
            >
              <Button
                startIcon={<LightModeIcon />}
                sx={{
                  color: colors.black[900],
                  backgroundColor: colors.cyanAccent[400],
                }}
                onClick={() => {
                  setLightMode();
                }}
              >
                Light Mode
              </Button>
              <Button
                startIcon={<DarkModeOutlinedIcon />}
                sx={{
                  color: colors.black[900],
                  backgroundColor: colors.cyanAccent[400],
                }}
                onClick={() => {
                  setDarkMode();
                }}
              >
                Dark Mode
              </Button>
            </ButtonGroup>
          </Box>
        </Stack>
      </Box>
    </Drawer>
  );
};

export default SettingDrawer;
