import React from "react";
import { Menu, Typography, useTheme } from "@mui/material";
import { useUtilProvider } from "../Provider/UtilProvider";
import { tokens } from "../theme";

const InfoModel: React.FC = () => {
  const { infoModal, handleCloseInfoModal, infoContent } = useUtilProvider();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Menu
      open={Boolean(infoModal)}
      onClose={handleCloseInfoModal}
      anchorEl={infoModal}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      id="menu-appbar"
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      sx={{
        mt: "45px",
        "& ul": {
          padding: 0,
        },
      }}
    >
      <Typography
        variant={"body2"}
        p={2}
        sx={{
          maxWidth: "300px",
          backgroundColor: colors.primary[400],
          color: colors.black[800],
        }}
      >
        {infoContent}
      </Typography>
    </Menu>
  );
};

export default InfoModel;
