import styled from "styled-components";
import Button from "./components/Button";
import Banner from "./containers/Banner";
import Header from "./containers/Header";
import Banner2 from "./containers/Banner2";
import Footer from "./containers/Footer";
import Content from "./containers/Content";

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Banner2></Banner2>
      <Content />
      <Footer />
    </>
  );
}

export default App;
