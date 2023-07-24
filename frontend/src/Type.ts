import { PaletteMode, Theme } from "@mui/material";

export interface ColorData {
  colorMode: PaletteMode;
  setLightMode: () => void;
  setDarkMode: () => void;
  theme: Theme;
}

export interface UtilData {
  drawerOpen: boolean;
  handleOpenDrawer: () => void;
  handleCloseDrawer: () => void;
  infoModal: null | HTMLElement;
  handleOpenInfoModal: (event: React.MouseEvent<HTMLElement>) => void;
  handleCloseInfoModal: (event: React.MouseEvent<HTMLElement>) => void;
  infoContent: string;
  setInfoContent: (text: string) => void;
  summaryData: any;
}

export interface ItemProp {
  title: String;
  to: any;
  icon: any;
  selected: String;
  setSelected: any;
}

export interface HeaderProp {
  title: string;
  subtitle: string;
}

export interface CountryData {
  Country: string;
  CountryCode: string;
  Date: string;
  ID: string;
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  Premium: {};
  Slug: string;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}

export interface WorldData {
  Date: string;
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
}

export interface UsedCountryData {
  id: number;
  country: string;
  countryCode: string;
  totalConfirmed: number;
  totalDeaths: number;
}

export interface DayOneData {
  Active: number;
  City: string;
  CityCode: string;
  Comment: string;
  Confirmed: number;
  Country: string;
  CountryCode: string;
  Date: string;
  Deaths: number;
  Lat: string;
  Lon: string;
  Province: string;
  Recovered: number;
}

export interface LineChartData {
  id: string;
  color: string;
  data: Array<any>;
}

export interface BarChartData {
  date: string;
  confirmed: number;
  active: number;
  deaths: number;
}

export interface PieChartData {
  id: string | undefined;
  label: string | undefined;
  value: number | undefined;
}

export interface CountryISO2 {
  Country: string;
  Slug: string;
  ISO2: string;
}

export interface GeoData {
  id: string;
  value: number | undefined;
}
