import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { UtilData } from "../Type";
import axios from "axios";
import summary from "../Data/dummyData/summaryData.json"

const UtilContext = createContext({} as UtilData);
// @ts-ignore
export const UtilProvider = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [infoModal, setInfoModal] = useState<null | HTMLElement>(null);
  const [infoContent, setInfoContent] = useState("");

  const summaryData = useMemo(async () => {
    //api is charging
    // const res = await axios.get("https://api.covid19api.com/summary");
    // return res.data;
    return summary;
  }, []);

  const handleOpenDrawer = useCallback(() => {
    setDrawerOpen(true);
  }, [drawerOpen, setDrawerOpen]);

  const handleCloseDrawer = useCallback(() => {
    setDrawerOpen(false);
  }, [drawerOpen, setDrawerOpen]);

  const handleOpenInfoModal = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      setInfoModal(event.currentTarget);
    },
    []
  );

  const handleCloseInfoModal = useCallback(() => {
    setInfoModal(null);
  }, []);

  const data = {
    drawerOpen,
    handleOpenDrawer,
    handleCloseDrawer,
    infoModal,
    handleOpenInfoModal,
    handleCloseInfoModal,
    infoContent,
    setInfoContent,
    summaryData,
  };
  return <UtilContext.Provider value={data}>{children}</UtilContext.Provider>;
};

export const useUtilProvider = () => useContext(UtilContext);
