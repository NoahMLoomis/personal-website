import { Avatar } from "@mui/material";

const Home = () => {
  return (
    <div className="homeContainer">
      <Avatar
        className="img"
        src="/assets/img/me.jpg"
        alt="image of me"
        sx={{ width: 200, height: 200 }}
      />
      <h2 className="header">Hi, I'm Noah</h2>
      <div className="tagline">I write code, and love doing it</div>
      
    </div>
  );
};

export default Home;
