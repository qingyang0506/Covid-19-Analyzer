import { useState } from "react";
import {
  Sidebar,
  Menu,
  useProSidebar,
  MenuItemStyles,
} from "react-pro-sidebar";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import LanguageIcon from "@mui/icons-material/Language";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import TableRowsIcon from "@mui/icons-material/TableRows";
import Item from "./Item";
import SideBarHeader from "./SideBarHeader";

const NavigationBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("home");
  const { collapsed } = useProSidebar();

  const menuItemStyles: MenuItemStyles = {
    root: {
      fontSize: "14px",
      fontWeight: 400,
    },
    icon: {
      color: colors.purpleAccent[500],
    },
    button: {
      "&:hover": {
        backgroundColor: colors.cyanAccent[500],
        color: colors.primary[500],
      },
    },
    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined,
    }),
  };

  return (
    <Box
      display="flex"
      height="100%"
      sx={{
        "& .ps-active": {
          backgroundColor: colors.cyanAccent[500],
        },
      }}
    >
      <Sidebar
        breakPoint="lg"
        backgroundColor={colors.primary[400]}
        rootStyles={{
          color: colors.black[900],
          height: "100%",
        }}
      >
        <Box display="flex" flexDirection="column" height={"100%"}>
          <SideBarHeader style={{ marginBottom: "20px", marginTop: "14px" }} />

          <Box
            mb={collapsed ? "13px" : "20px"}
            sx={{
              flex: 1,
            }}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
          >
            <Box>
              <Typography
                variant="body2"
                fontWeight={600}
                style={{
                  opacity: collapsed ? 0 : 0.7,
                  letterSpacing: "0.5px",
                  padding: "0 20px",
                }}
              >
                World
              </Typography>
              <Menu menuItemStyles={menuItemStyles}>
                <Item
                  title={"World Statistic"}
                  icon={<LanguageIcon />}
                  to={"/world"}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title={"Countries summary"}
                  icon={<TableRowsIcon />}
                  to={"/country"}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title={"Geography"}
                  icon={<MapOutlinedIcon />}
                  to={"/geo"}
                  selected={selected}
                  setSelected={setSelected}
                />
              </Menu>
            </Box>

            <Box>
              <Typography
                variant="body2"
                fontWeight={600}
                style={{
                  opacity: collapsed ? 0 : 0.7,
                  letterSpacing: "0.5px",
                  padding: "0 20px",
                }}
              >
                Specific Countries
              </Typography>

              <Menu menuItemStyles={menuItemStyles}>
                <Item
                  title={"Line Chart"}
                  icon={<TimelineOutlinedIcon />}
                  to={"/line"}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title={"Bar Chart"}
                  icon={<BarChartOutlinedIcon />}
                  to={"/bar"}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title={"Pie Chart"}
                  icon={<PieChartOutlineOutlinedIcon />}
                  to={"/pie"}
                  selected={selected}
                  setSelected={setSelected}
                />
              </Menu>
            </Box>

            <Box>
              <Typography
                variant="body2"
                fontWeight={600}
                style={{
                  opacity: collapsed ? 0 : 0.7,
                  letterSpacing: "0.5px",
                  padding: "0 20px",
                }}
              >
                Extra Infomation
              </Typography>

              <Menu menuItemStyles={menuItemStyles}>
                <Item
                  title={"Information"}
                  icon={<ImportContactsIcon />}
                  to={"/info"}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title={"FAQ Page"}
                  icon={<HelpOutlineOutlinedIcon />}
                  to={"/faq"}
                  selected={selected}
                  setSelected={setSelected}
                />
              </Menu>
            </Box>
          </Box>
        </Box>
      </Sidebar>
    </Box>
  );
};

export default NavigationBar;
