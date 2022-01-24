import React from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header.js";
import Card from "./components/Card.js";
import Footer from "./components/Footer.js";
import Application from "./components/Application.js";
import { Container } from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/Global.js";
import content from "./content"

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff', 
    footer: '#003333'
  },
  mobile: '768px',
}

function App() {
  return (
    <ThemeProvider theme = {theme}>
    <>
    <GlobalStyles />
      <Header />
      <Container>
        {content.map((item, index) => (
          <Card key={index} item={item} />
        ))}
        
      </Container>
      <Application />
      <Footer />
    </>
    </ThemeProvider>
  );
}

export default App;
