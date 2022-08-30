import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Chip,
  Divider,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";

const getRandomColor = (): IColors => {
  const colors: IColors[] = [
    "default",
    "primary",
    "secondary",
    "error",
    "info",
    "success",
    "warning",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const ProjectCard = ({
  title,
  img,
  desc,
  tech,
  src,
  liveLink,
}: IProjectCard) => {
  return (
    <Card raised sx={{ height: "100%" }}>
      <CardMedia
        component="img"
        alt="Project Image"
        style={{
          width: "auto",
          height: "150px",
          margin: "0 auto",
        }}
        image={img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Chip
          clickable
          component="a"
          href={src}
          label="Source"
          icon={<CodeIcon />}
          color="warning"
          variant="filled"
          sx={{ mx: "0.1em", mb: "1em" }}
        />
        {liveLink && (
          <Chip
            clickable
            component="a"
            icon={<OpenInBrowserIcon />}
            href={liveLink}
            label="Live"
            color="info"
            variant="filled"
            sx={{ mx: "0.1em", mb: "1em" }}
          />
        )}
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
      <Divider variant="middle" />
      <CardActions>
        {tech.map((t) => (
          <Chip
            label={t}
            color={getRandomColor()}
            className="github"
            variant="outlined"
            key={t}
          />
        ))}
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
