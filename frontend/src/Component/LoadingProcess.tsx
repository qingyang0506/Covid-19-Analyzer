import { Box, CircularProgress } from "@mui/material";

const LoadingProcess: React.FC = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress color={"secondary"} />
    </Box>
  );
};

export default LoadingProcess;
