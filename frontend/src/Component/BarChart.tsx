import React, { useCallback, useEffect, useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  useTheme,
} from "@mui/material";
import axios from "axios";
import { BarChartData, DayOneData } from "../Type";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../theme";
import LoadingProcess from "./LoadingProcess";
import useLocalStorageProvider from "../Provider/LocalStorageProvider";
import BarData from "../Data/dummyData/BarData.json"

const BarChart: React.FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [country, setCountry] = useState("united-states");
  const [loading, setLoading] = useState(false);
  const handleChange = (event: SelectChangeEvent) => {
    setCountry(event.target.value);
  };

  const [data, setData] = useLocalStorageProvider("BarChart", []);

  const fetchBarData = useCallback(async () => {
    setLoading(true);
    setData([]);
    // const res = await axios.get(
    //   `https://api.covid19api.com/live/country/${country}`
    // );
    // const res :  = BarData;
    // @ts-ignore
    const liveData: DayOneData[] = BarData;
    let resArray: Array<BarChartData> = [];
    liveData.slice(-700).forEach((it, index) => {
      if (index % 60 === 0) {
        const resData: BarChartData = {
          date: it.Date.substring(0, 10),
          confirmed: it.Confirmed,
          active: it.Active,
          deaths: it.Deaths,
        };
        resArray.push(resData);
      }
    });
    setData(resArray);
    setLoading(false);
  }, [country]);

  useEffect(() => {
    fetchBarData();
    const timeoutId = setTimeout(() => {
      if (data.length === 0) fetchBarData();
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [country]);

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
            <MenuItem value="united-states">
              <em>American</em>
            </MenuItem>
            <MenuItem value={"china"}>China</MenuItem>
            <MenuItem value={"australia"}>Australia</MenuItem>
            <MenuItem value={"new-zealand"}>New Zealand</MenuItem>
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
          <ResponsiveBar
            data={data}
            theme={{
              axis: {
                domain: {
                  line: {
                    stroke: colors.black[800],
                    strokeWidth: 1,
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
            keys={["deaths", "confirmed", "active"]}
            indexBy="date"
            innerPadding={3}
            margin={{ top: 30, right: 100, bottom: 50, left: 70 }}
            padding={0.3}
            groupMode="grouped"
            valueScale={{ type: "linear" }}
            indexScale={{ type: "band", round: true }}
            colors={{ scheme: "nivo" }}
            defs={[
              {
                id: "dots",
                type: "patternDots",
                background: "inherit",
                color: colors.orange[500],
                size: 4,
                padding: 1,
                stagger: true,
              },
              {
                id: "lines",
                type: "patternLines",
                background: "inherit",
                color: colors.redAccent[300],
                rotation: -45,
                lineWidth: 6,
                spacing: 10,
              },
            ]}
            fill={[
              {
                match: {
                  id: "active",
                },
                id: "dots",
              },
              {
                match: {
                  id: "confirmed",
                },
                id: "lines",
              },
            ]}
            borderColor={{
              from: "color",
              modifiers: [["darker", 1.6]],
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "date",
              legendPosition: "middle",
              legendOffset: 42,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "count",
              legendPosition: "middle",
              legendOffset: -60,
            }}
            labelSkipWidth={120}
            labelSkipHeight={120}
            labelTextColor={{
              from: "color",
              modifiers: [["darker", 1.6]],
            }}
            legends={[
              {
                dataFrom: "keys",
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: "left-to-right",
                itemOpacity: 0.85,
                symbolSize: 20,
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
            role="application"
            ariaLabel="Nivo bar chart demo"
            barAriaLabel={function (e) {
              return (
                e.id + ": " + e.formattedValue + " in country: " + e.indexValue
              );
            }}
          />
        )}
      </Box>
    </Box>
  );
};

export default BarChart;
