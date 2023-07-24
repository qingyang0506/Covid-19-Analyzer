import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useCallback, useEffect, useState } from "react";
import { tokens } from "../theme";
import { CountryData, UsedCountryData } from "../Type";
import LoadingProcess from "./LoadingProcess";
import useLocalStorageProvider from "../Provider/LocalStorageProvider";
import { useUtilProvider } from "../Provider/UtilProvider";

const CountryTable: React.FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [data, setData] = useLocalStorageProvider("countryTable", []);
  const [loading, setLoading] = useState(true);
  const { summaryData } = useUtilProvider();
  const fetchCountryData = useCallback(async () => {
    const allSummaryData = await summaryData;
    const countries: Array<CountryData> = allSummaryData.Countries;
    const newData: Array<UsedCountryData> = countries.map((country, index) => ({
      id: index + 1,
      country: country.Country,
      countryCode: country.CountryCode,
      totalConfirmed: country.TotalConfirmed,
      totalDeaths: country.TotalDeaths,
    }));
    setData(newData);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (data.length !== 0) setLoading(false);
    const timoutId = setTimeout(() => {
      if (data.length === 0) {
        fetchCountryData();
      }
    }, 2000);

    return () => {
      clearTimeout(timoutId);
    };
  }, []);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "country", headerName: "Country", flex: 1.5 },
    {
      field: "countryCode",
      headerName: "CountryCode",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "totalConfirmed",
      headerName: "Total Confirmed",
      flex: 1,
    },
    {
      field: "totalDeaths",
      headerName: "Total Deaths",
      flex: 1,
    },
  ];
  return (
    <Box
      height="76vh"
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      mt={3}
      sx={{
        "& .name-column--cell": {
          color: colors.orange[700],
        },
        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
          color: `${colors.blueAccent[700]} !important`,
        },
        "& .cold": {
          backgroundColor: colors.black[200],
        },
        "& .hot": {},
      }}
    >
      {loading ? (
        <LoadingProcess />
      ) : (
        <DataGrid
          sx={{
            color: colors.black[900],
          }}
          rows={data}
          columns={columns}
          getRowClassName={(params) => {
            return params.indexRelativeToCurrentPage % 2 === 0 ? "hot" : "cold";
          }}
          slots={{
            toolbar: GridToolbar,
          }}
        />
      )}
    </Box>
  );
};

export default CountryTable;
