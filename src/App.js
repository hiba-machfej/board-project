import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Boards from "./BoardsList/index.js";
import SideNav from "./SideNav/index.js";
import FootNav from "./Footer/index.js";
import "antd/dist/antd.css";
import "./index.css";
import { Layout } from "antd";
import { BrowserRouter as Router, Route } from "react-router-dom";
import aboutPage from "./SideNav/aboutPage.js";
import MemoriesList from "./MemoriesList/index.js";
import CalenderPage from "./SideNav/Calender.js";
import ListPreview from "./ListPreview/index.js";

const { Footer, Content } = Layout;

function App() {
  return (
    <Router>
      {/* Router is used to navigate between pages */}
      {/* in here we have two things sider to have side nav and layout for the rest of the screen */}

      <SideNav />

      {/* Layout include three things header and content and footer  */}
      <Layout>
        <Content>
          <Route exact path="/" component={Boards}></Route>
          <Route path="/about" component={aboutPage}></Route>
          <Route path="/memory" component={MemoriesList}></Route>
          <Route path="/calender" component={CalenderPage}></Route>
          <Route path="/listPreview" component={ListPreview}></Route>
        </Content>

        <Footer className={"footer"}>
          <FootNav />
        </Footer>
      </Layout>
    </Router>
  );
}

export default App;
