import React from "react";
import "./App.css";
import { Container, Typography } from "@mui/material";
import ReactQuery from "./components/Query/Query";
import cloudyImage from "./cloudy-day.png";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Container maxWidth="sm" className="App">
        <img src={cloudyImage} alt="Cloudy Day" className="WeatherImage" />
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Weather search
        </Typography>
        <ReactQuery />
      </Container>
      <Footer />
    </>
  );
}

export default App;
