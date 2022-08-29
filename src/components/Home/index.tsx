import { Grid, Typography } from "@mui/material";

const Home = () => {
  return (
    <main className="homeMain">
      <Grid container spacing={2} className="homeGrid">
        <Grid item border="1px solid black" xs={10}>
          <div className="headerName">NOAH LOOMIS</div>
        </Grid>
        <Grid item border="1px dashed blue" xs={2}>
          <div>Full Stack Developer</div>
        </Grid>
      </Grid>
    </main>
  );
};

export default Home;
