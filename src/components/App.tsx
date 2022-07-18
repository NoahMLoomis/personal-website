import { useState } from "react";
import { Tabs, Tab, Box, Container } from "@mui/material";

import About from "./About";
import Projects from "./Projects";
import Home from "./Home";

import TabPanel from "./TabPanel";
import a11yProps from "../assets/a11y";

const App = () => {
  const [selected, setSelected] = useState<number>(0);

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={selected}
          onChange={(_, val: number) => setSelected(val)}
          variant="fullWidth"
        >
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="About" {...a11yProps(1)} />
          <Tab label="Projects" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <Container maxWidth="xl">
        <TabPanel value={selected} index={0}>
          <Home />
        </TabPanel>
        <TabPanel value={selected} index={1}>
          <About />
        </TabPanel>
        <TabPanel value={selected} index={2}>
          <Projects />
        </TabPanel>
      </Container>
    </>
  );
};

export default App;
