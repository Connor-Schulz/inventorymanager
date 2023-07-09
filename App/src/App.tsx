import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Move } from "./pages/Move";
import { Navbar } from "./components/Navbar";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { Product } from "./pages/Product";
import Styles from "./Styles";

const Body = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${Styles.fontFamily};
  }

  &::selection {
    background: ${Styles.primary2};
    color: ${Styles.white1};
  }
`;

const AppBody = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 50px 1fr;
  grid-template-areas:
    "header  header"
    "sidebar content";
  height: 100vh;
  width: 100vw;
  background-color: #121212;
`;

const MainDisplay = styled.div`
  grid-area: content;
  padding-left: 50px;
  overflow-y: auto;
  margin: 10px;

  &::-webkit-scrollbar {
    width: 15px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 8px;
    background: #201e38;
  }

  &::-webkit-scrollbar-thumb {
    background: #8a88f7;
    border-radius: 8px;
    position: absolute;
    left: -10px;

    &:hover {
      background: #7275f5;
    }
  }
`;

function App() {
  return (
    <>
      <Body />
      <AppBody>
        <Navbar />
        <MainDisplay className="main-display" id="main-display">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/move" element={<Move />} />
            <Route path="/product" element={<Product />} />
          </Routes>
        </MainDisplay>
      </AppBody>
    </>
  );
}

export default App;
