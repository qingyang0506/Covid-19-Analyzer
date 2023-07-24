import { Box } from "@mui/material";
import PageHeader from "../Component/PageHeader";
import CountryTable from "../Component/CountryTable";
import { useUtilProvider } from "../Provider/UtilProvider";
import { useEffect } from "react";

const Country: React.FC = () => {
  const { setInfoContent, infoContent } = useUtilProvider();

  useEffect(() => {
    setInfoContent(
      "we use table to list all countries around world with " +
        "their countryCode, total number of confirmed and deaths " +
        "you can use the tool bar to filter,export and sort data"
    );
  }, [infoContent]);
  return (
    <Box>
      <PageHeader
        title={"Countries Summary"}
        subtitle={"Using Table to show all countries Covid-19 data"}
      />
      <CountryTable />
    </Box>
  );
};

export default Country;
