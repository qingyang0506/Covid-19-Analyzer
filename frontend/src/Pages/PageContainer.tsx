import React from "react";
import TopBar from "../Component/TopBar";
import { Outlet } from "react-router-dom";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const PageContainer: React.FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      p={2}
      flex={1}
      overflow={"auto"}
      sx={{
        color: colors.black[900],
      }}
    >
      <TopBar />
      <Outlet />
    </Box>
  );
};

export default PageContainer;
