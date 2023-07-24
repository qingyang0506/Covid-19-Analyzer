import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { useCallback, useEffect, useState } from "react";
import { CountryData, PieChartData } from "../Type";
import { ResponsivePie } from "@nivo/pie";
import LoadingProcess from "./LoadingProcess";
import useLocalStorageProvider from "../Provider/LocalStorageProvider";
import { useUtilProvider } from "../Provider/UtilProvider";

const PieChart: React.FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [data, setData] = useLocalStorageProvider("Piechart", []);
  const [loading, setLoading] = useState(true);

  const { summaryData } = useUtilProvider();

  const countryArr = [
    "new-zealand",
    "australia",
    "china",
    "united-states",
    "korea-south",
    "united-kingdom",
    "japan",
    "canada",
  ];
  const fetchPieData = useCallback(async () => {
    const res = await summaryData;
    const arr: CountryData[] = res.Countries;
    let resArray: PieChartData[] = [];
    countryArr.forEach((countryName) => {
      let target: CountryData | undefined = arr.find(
        (it) => it.Slug === countryName
      );
      resArray.push({
        id: target?.Country,
        label: target?.CountryCode,
        value: target?.TotalConfirmed,
      });
    });
    setData(resArray);
    setLoading(false);
  }, [data]);

  useEffect(() => {
    if (data.length !== 0) setLoading(false);
    const timeoutId = setTimeout(() => {
      if (data.length === 0) {
        fetchPieData();
      }
    }, 2000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      {loading ? (
        <LoadingProcess />
      ) : (
        <ResponsivePie
          data={data}
          theme={{
            tooltip: {
              container: {
                background: colors.primary[400],
                color: colors.black[800],
                fontSize: 12,
              },
            },
          }}
          margin={{ top: 80, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          cornerRadius={1}
          activeOuterRadiusOffset={8}
          borderWidth={1}
          borderColor={{
            from: "color",
            modifiers: [["darker", 0.2]],
          }}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor={colors.black[800]}
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{
            from: "color",
            modifiers: [["darker", 2]],
          }}
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          fill={[
            {
              match: {
                id: "New Zealand",
              },
              id: "dots",
            },
            {
              match: {
                id: "China",
              },
              id: "dots",
            },
            {
              match: {
                id: "Australia",
              },
              id: "dots",
            },
            {
              match: {
                id: "United States of America",
              },
              id: "dots",
            },
            {
              match: {
                id: "Canada",
              },
              id: "lines",
            },
            {
              match: {
                id: "United Kingdom",
              },
              id: "lines",
            },
            {
              match: {
                id: "Japan",
              },
              id: "lines",
            },
            {
              match: {
                id: "Korea South",
              },
              id: "lines",
            },
          ]}
          legends={[
            {
              anchor: "bottom",
              direction: "row",
              justify: false,
              translateX: 0,
              translateY: 56,
              itemsSpacing: 0,
              itemWidth: 100,
              itemHeight: 18,
              itemTextColor: colors.black[800],
              itemDirection: "left-to-right",
              itemOpacity: 1,
              symbolSize: 18,
              symbolShape: "circle",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: colors.black[800],
                  },
                },
              ],
            },
          ]}
        />
      )}
    </>
  );
};

export default PieChart;
