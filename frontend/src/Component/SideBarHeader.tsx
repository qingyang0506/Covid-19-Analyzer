import { Stack, Typography, useTheme } from "@mui/material";
import styled from "@emotion/styled";
import { tokens } from "../theme";
import MasksIcon from "@mui/icons-material/Masks";
import { useProSidebar } from "react-pro-sidebar";

interface SidebarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const SideBarHeader: React.FC<SidebarHeaderProps> = ({ children, ...rest }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { collapsed } = useProSidebar();

  const StyledSidebarHeader = styled.div`
    height: 80px;
    min-height: 80px;
    display: flex;
    align-items: center;
    padding: 0 20px;

    > div {
      width: 100%;
      overflow: hidden;
    }
  `;

  const StyledLogo = styled.div<{}>`
    width: 35px;
    min-width: 35px;
    height: 35px;
    min-height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    color: white;
    font-size: 10px;
    font-weight: 700;
    background-color: ${colors.purpleAccent[500]};
  `;
  return (
    <StyledSidebarHeader {...rest}>
      <Stack
        spacing={1}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <StyledLogo>
          <MasksIcon />
        </StyledLogo>
        {!collapsed && (
          <Typography
            variant="subtitle1"
            fontWeight={700}
            sx={{
              background: `linear-gradient(to right, ${colors.cyanAccent[600]} 0%, ${colors.purpleAccent[500]} 100%)`,
              backgroundClip: "text",
              color: "transparent",
              fontSize: "1.3rem",
            }}
          >
            Covid-19 Analytic
          </Typography>
        )}
      </Stack>
    </StyledSidebarHeader>
  );
};

export default SideBarHeader;
