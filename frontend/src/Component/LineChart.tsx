import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  useTheme,
} from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { tokens } from "../theme";
import { ResponsiveLine } from "@nivo/line";
import axios from "axios";
import { DayOneData, LineChartData } from "../Type";
import LoadingProcess from "./LoadingProcess";
import useLocalStorageProvider from "../Provider/LocalStorageProvider";
import LineData from "../Data/dummyData/LineData.json"

const LineChart: React.FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [country, setCountry] = useState("new-zealand");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useLocalStorageProvider("LineChart", []);

  const fetchCountryData = useCallback(() => {
    setLoading(true);
    setData([]);
      let arrayData: DayOneData[] = [];
      // @ts-ignore
      const data : DayOneData[] = LineData
      data.slice(-700).forEach((it: DayOneData, index: number) => {
              if (index % 70 === 0) {
                  arrayData.push(it);
              }
          });
      const activeData: LineChartData = {
          id: "Active",
          color: colors.orange[500],
          data: arrayData.map((it: DayOneData) => ({
              x: it.Date.substring(0, 10),
              y: it.Active,
          })),
      };
      const confirmData: LineChartData = {
          id: "confirmed",
          color: colors.orange[500],
          data: arrayData.map((it: DayOneData) => ({
              x: it.Date.substring(0, 10),
              y: it.Confirmed,
          })),
      };
      const deathData: LineChartData = {
          id: "Deaths",
          color: colors.orange[500],
          data: arrayData.map((it: DayOneData) => ({
              x: it.Date.substring(0, 10),
              y: it.Deaths,
          })),
      };
      let resArray = [];
      resArray.push(activeData, confirmData, deathData);
      setData(resArray);
      setLoading(false);
  //   axios
  //     .get(`https://api.covid19api.com/total/country/${country}`)
  //     .then((res) => {
  //       let arrayData: DayOneData[] = [];
  //       res.data.slice(-700).forEach((it: DayOneData, index: number) => {
  //         if (index % 70 === 0) {
  //           arrayData.push(it);
  //         }
  //       });
  //       const activeData: LineChartData = {
  //         id: "Active",
  //         color: colors.orange[500],
  //         data: arrayData.map((it: DayOneData) => ({
  //           x: it.Date.substring(0, 10),
  //           y: it.Active,
  //         })),
  //       };
  //       const confirmData: LineChartData = {
  //         id: "confirmed",
  //         color: colors.orange[500],
  //         data: arrayData.map((it: DayOneData) => ({
  //           x: it.Date.substring(0, 10),
  //           y: it.Confirmed,
  //         })),
  //       };
  //       const deathData: LineChartData = {
  //         id: "Deaths",
  //         color: colors.orange[500],
  //         data: arrayData.map((it: DayOneData) => ({
  //           x: it.Date.substring(0, 10),
  //           y: it.Deaths,
  //         })),
  //       };
  //       let resArray = [];
  //       resArray.push(activeData, confirmData, deathData);
  //       setData(resArray);
  //       setLoading(false);
  //     });
  }, [country]);

  useEffect(() => {
    fetchCountryData();
  }, [country]);

  const handleChange = (event: SelectChangeEvent) => {
    setCountry(event.target.value);
  };
  return (
    <Box display={"flex"} flexDirection={"column"} height={"100%"}>
      <Box alignSelf={"flex-end"}>
        <FormControl
          sx={{ m: 1, minWidth: 120 }}
          size="small"
          color={"secondary"}
        >
          <InputLabel id="demo-select-small">Country</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={country}
            label="country"
            onChange={handleChange}
          >
            <MenuItem value="new-zealand">
              <em>New Zealand</em>
            </MenuItem>
            <MenuItem value={"china"}>China</MenuItem>
            <MenuItem value={"australia"}>Australia</MenuItem>
            <MenuItem value={"united-states"}>America</MenuItem>
            <MenuItem value={"united-kingdom"}>United kingdom</MenuItem>
            <MenuItem value={"korea-south"}>Korea</MenuItem>
            <MenuItem value={"japan"}>Japan</MenuItem>
            <MenuItem value={"canada"}>Canada</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box
        height={"73%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {loading ? (
          <LoadingProcess />
        ) : (
          <ResponsiveLine
            data={data}
            theme={{
              axis: {
                domain: {
                  line: {
                    stroke: colors.black[800],
                    strokeWidth: 2,
                  },
                },
                legend: {
                  text: {
                    fontSize: 12,
                    fill: colors.black[800],
                  },
                },
                ticks: {
                  line: {
                    stroke: colors.black[800],
                    strokeWidth: 1,
                  },
                  text: {
                    fontSize: 11,
                    fill: colors.black[800],
                  },
                },
              },
              legends: {
                title: {
                  text: {
                    fontSize: 12,
                    fill: colors.black[800],
                  },
                },
                text: {
                  fontSize: 13,
                  fill: colors.black[800],
                },
                ticks: {
                  line: {},
                  text: {
                    fontSize: 10,
                    fill: colors.black[800],
                  },
                },
              },
              tooltip: {
                container: {
                  background: colors.primary[400],
                  color: colors.black[800],
                  fontSize: 11,
                },
              },
            }}
            margin={{ top: 30, right: 100, bottom: 50, left: 70 }}
            xScale={{ type: "point" }}
            yScale={{
              type: "linear",
              min: "auto",
              max: "auto",
              stacked: true,
              reverse: false,
            }}
            yFormat=" >-.2f"
            curve="cardinal"
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "date",
              legendOffset: 44,
              legendPosition: "middle",
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "count",
              legendOffset: -65,
              legendPosition: "middle",
            }}
            enableGridX={false}
            pointSize={10}
            pointColor={{ theme: "background" }}
            pointBorderWidth={2}
            pointBorderColor={{ from: "serieColor", modifiers: [] }}
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
              {
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: "left-to-right",
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: "circle",
                symbolBorderColor: colors.black[800],
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
          />
        )}
      </Box>
    </Box>
  );
};

export default LineChart;
