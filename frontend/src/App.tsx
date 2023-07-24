import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import NavigationBar from "./Component/NavigationBar";
import { Routes, Route, Navigate } from "react-router-dom";
import PageContainer from "./Pages/PageContainer";
import World from "./Pages/World";
import SettingDrawer from "./Component/SettingDrawer";
import Country from "./Pages/Country";
import Geography from "./Pages/Geography";
import Line from "./Pages/Line";
import Bar from "./Pages/Bar";
import Pie from "./Pages/Pie";
import Information from "./Pages/Information";
import Faq from "./Pages/Faq";
import { useColorContext } from "./Provider/ColorProvider";

function App() {
  const { theme } = useColorContext();
  return (

      <ThemeProvider theme={theme}>

      <CssBaseline />
      <Box display={"flex"} height={"100vh"}>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<PageContainer />}>
            <Route index element={<Navigate to={"/world"} />} />
            <Route path="/world" element={<World />} />
            <Route path="/country" element={<Country />} />
            <Route path="/geo" element={<Geography />} />
            <Route path="/line" element={<Line />} />
            <Route path="/bar" element={<Bar />} />
            <Route path="/pie" element={<Pie />} />
            <Route path="/info" element={<Information />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="*" element={<Navigate to={"/world"} />} />
          </Route>
        </Routes>
        <SettingDrawer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
