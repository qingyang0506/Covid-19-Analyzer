import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../theme";

const ResourceCard: React.FC<{
  title: string;
  type: string;
  content: string;
  link: string;
}> = ({ title, type, content, link }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Card
      sx={{
        gridColumn: { xs: "span 12", sm: "span 6", md: "span 4" },
        backgroundColor: colors.primary[400],
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          color={colors.greenAccent[700]}
        >
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color={colors.black[600]}>
          {type}
        </Typography>
        <Typography variant="body2" color={colors.black[900]}>
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          sx={{
            backgroundColor: colors.pinkAccent[300],
            marginLeft: "10px",
          }}
          color={"secondary"}
          size="small"
          variant={"contained"}
          target={"_blank"}
          href={link}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default ResourceCard;
