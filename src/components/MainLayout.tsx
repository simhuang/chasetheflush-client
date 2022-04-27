import { Layout, Menu } from "antd";

import PropTypes from "prop-types";

import HeaderBar from "../containers/Headerbar";

import { PRIMARY_WHITE, PRIMARY_GREY } from "../constants/style";

const { Header, Content, Footer, Sider } = Layout;

const MainLayout: React.FunctionComponent<MainLayout> = ({
  leftSiderContent,
  centerContent,
  rightSiderContent,
}) => {
  return (
    <Layout
      hasSider
      style={{
        background: PRIMARY_GREY,
      }}
    >
      <Header
        style={{
          top: 0,
          position: "fixed",
          zIndex: 1,
          width: "100%",
          background: PRIMARY_WHITE,
        }}
      >
        <HeaderBar />
      </Header>
      <div
        style={{
          width: "1300px",
          marginLeft: "auto",
          marginRight: "auto",
          background: PRIMARY_WHITE,
        }}
      >
        <Layout className="main-body">
          <Sider
            style={{
              background: PRIMARY_WHITE,
              height: "auto",
              marginTop: "64px",
            }}
          >
            {leftSiderContent}
          </Sider>
          <Content
            style={{
              marginTop: "64px",
              background: "blue",
              height: "auto",
              width: "1000px",
            }}
          >
            {centerContent}
          </Content>
          <Sider
            style={{
              marginTop: "64px",
              background: PRIMARY_WHITE,
              height: "auto",
            }}
          >
            {rightSiderContent}
          </Sider>
        </Layout>
      </div>
      <Footer
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          background: PRIMARY_WHITE,
        }}
      >
        <div
          style={{
            margin: "auto",
            width: "1400px",
          }}
        >
          footer
        </div>
      </Footer>
    </Layout>
  );
};

MainLayout.propTypes = {
  leftSiderContent: PropTypes.element,
  centerContent: PropTypes.element,
  rightSiderContent: PropTypes.element,
};

type MainLayout = {
  leftSiderContent: any;
  centerContent: any;
  rightSiderContent: any;
};

export default MainLayout;
