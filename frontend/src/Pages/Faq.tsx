import {
  Box,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  useTheme,
  Stack,
} from "@mui/material";
import PageHeader from "../Component/PageHeader";
import { tokens } from "../theme";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useUtilProvider } from "../Provider/UtilProvider";
import { useEffect } from "react";

const Faq: React.FC = () => {
  const { setInfoContent, infoContent } = useUtilProvider();

  useEffect(() => {
    setInfoContent(
      "This is faq page. In this page, I will list some information or asked questions about this page " +
        "you can click each bar to display the content"
    );
  }, [infoContent]);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box height={"100%"}>
      <PageHeader
        title={"FAQ Page"}
        subtitle={
          "Give you some instructions about how to use this pages and some asked questions"
        }
      />

      <Stack height={"80%"} mt={3}>
        <Accordion
          sx={{
            backgroundColor: colors.primary[400],
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[800]} variant="body1">
              About this webpage
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              This page is a data visualization web app to display the whole
              world covid-19 trend and data. The data is displayed by world map,
              bar chart, pie chart and line chart. You can see the whole world
              and some specific countries covid-19 data by these charts.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            backgroundColor: colors.primary[400],
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[800]} variant="body1">
              Related technologies
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              This is front-end project. we don't use any backend tech stack,
              just use the react with typescript to build this page. All the
              data about covid-19 are fetched from the third parties API.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            backgroundColor: colors.primary[400],
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[800]} variant="body1">
              Simple Instructions about using the page
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              For the sidebar, you can click the three strips button on the
              right to collapse the sidebar, when if you are small screen, then
              the sidebar will not visible, then you can click this button to
              open it. On the right-top of page, there is three icon buttons.
              the first one will display the page information. the content will
              different for the different pages. The second setting button, will
              opne a drawer, inside it you can change the page theme to
              light/dark mode. the third button is designed for funny. Everytime
              you click the button, it will toggle the light bulb.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            backgroundColor: colors.primary[400],
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[800]} variant="body1">
              Responsive Functionality
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              I try to design this pages more responsive. You can try to zoom
              out/in the page to see the changes. And also for the sidebar. but
              it is not fully responsive, when you adjust to very small screen
              or in mobile mode, there are also some issues about the layout.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            backgroundColor: colors.primary[400],
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[800]} variant="body1">
              Loading problem
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              As the data in page is fetched from the third party API, sometimes
              the data fetching is not fully stable, and the API I used also
              have the restriction that you can not request the API too
              frequently unless you spend money to subscript it. otherwise it
              will return a response with 429 error. Therefore, if you wait a
              long time for loading, please reload/refresh the whole page again.
              or you can change to other pages and then wait a moment to change
              back.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Stack>
    </Box>
  );
};

export default Faq;
