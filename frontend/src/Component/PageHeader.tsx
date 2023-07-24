import { Box, Typography, useTheme } from "@mui/material";
import { HeaderProp } from "../Type";
import { tokens } from "../theme";

const PageHeader: React.FC<HeaderProp> = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box>
      <Typography
        variant={"h4"}
        color={colors.black[900]}
        fontSize={"1.6rem"}
        fontWeight={700}
      >
        {title}
      </Typography>
      <Typography
        variant={"h6"}
        color={colors.greenAccent[700]}
        fontSize={"1rem"}
        fontWeight={"400"}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default PageHeader;
