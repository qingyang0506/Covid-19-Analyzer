import { useTheme } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { countryISOMapping } from "../Data/ConvertISO2ToISO3";
import { geoFeatures } from "../Data/geoFeature";
import { tokens } from "../theme";
import axios from "axios";
import { CountryData, CountryISO2, GeoData } from "../Type";
import { ResponsiveChoropleth } from "@nivo/geo";
import LoadingProcess from "./LoadingProcess";
import useLocalStorageProvider from "../Provider/LocalStorageProvider";
import { useUtilProvider } from "../Provider/UtilProvider";
import Country from "../Data/dummyData/CountryData.json"

const GeoMap: React.FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [data, setData] = useState<GeoData[]>( []);
  const [loading, setLoading] = useState(true);
  const { summaryData } = useUtilProvider();
  const fetchGeoData = useCallback(async () => {
    const resForConfirmed = await summaryData;
    // the API is not worked
    // const resForCountry = await axios.get(
    //   "https://api.covid19api.com/countries"
    // );

    const resForCountry = Country;

    const arrContainedConfirm: CountryData[] = resForConfirmed.Countries;
    const arrContainedISO2: CountryISO2[] = resForCountry;
    let resArray: GeoData[] = [];
    arrContainedISO2.forEach((countryISO2) => {
      // @ts-ignore
      let matchingISO3 = countryISOMapping[countryISO2.ISO2];
      const dataConfirm = arrContainedConfirm.find(
        (it) => it.Slug === countryISO2.Slug
      );
      resArray.push({
        id: matchingISO3,
        value: dataConfirm?.TotalConfirmed,
      });
      setData(resArray);
      setLoading(false);
    });
  }, []);
  useEffect(() => {
    if (data.length !== 0) setLoading(false);
    const timeoutId = setTimeout(() => {
      if (data.length === 0) {
        fetchGeoData();
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
        <ResponsiveChoropleth
          data={data}
          features={geoFeatures.features}
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
            annotations: {
              text: {
                fontSize: 13,
                fill: colors.black[800],
              },
            },
          }}
          margin={{ top: 20, right: 0, bottom: 20, left: 40 }}
          colors="nivo"
          domain={[0, 20000]}
          unknownColor="pink"
          label="properties.name"
          valueFormat=".2s"
          projectionTranslation={[0.5, 0.5]}
          projectionRotation={[0, 0, 0]}
          graticuleLineColor="#ddd"
          legends={[
            {
              anchor: "bottom-left",
              direction: "column",
              justify: true,
              translateX: 20,
              translateY: -100,
              itemsSpacing: 0,
              itemWidth: 94,
              itemHeight: 18,
              itemDirection: "left-to-right",
              itemTextColor: colors.black[800],
              itemOpacity: 0.85,
              symbolSize: 18,
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: colors.black[800],
                    itemOpacity: 1,
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

export default GeoMap;
