import GitHubIcon from "@mui/icons-material/GitHub";
import { Chip, Divider } from "@mui/material";

const Footer = () => {
  return (
    <div className="footer">
      <Chip
        clickable
        component="a"
        href="https://github.com/NoahMLoomis"
        label="Github"
        icon={<GitHubIcon />}
        color="primary"
        className="github"
      />
    </div>
  );
};

export default Footer;
