import { Layout, Menu } from "antd";

import PropTypes from "prop-types";

import HeaderBar from "src/containers/Headerbar";

import { PRIMARY_WHITE, PRIMARY_GREY } from "src/constants/style";

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
          height: "100px",
          marginBottom: "24px",
          background: PRIMARY_WHITE,
        }}
      >
        <HeaderBar />
      </Header>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "1482px",
            background: PRIMARY_GREY,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              background: PRIMARY_WHITE,
              height: "700px",
              borderRadius: "8px",
              marginTop: "124px",
              marginLeft: "24px",
              marginRight: "24px",
              width: "250px",
              maxWidth: "250px",
            }}
          >
            {leftSiderContent}
          </div>
          <Content
            style={{
              marginTop: "124px",
              marginBottom: "74px",
              background: PRIMARY_GREY,
              minWidth: "640px",
              maxWidth: "640px",
              width: "640",
            }}
          >
            {centerContent}
          </Content>
          <div
            style={{
              width: "250px",
              maxWidth: "250px",
              borderRadius: "8px",
              marginTop: "124px",
              background: PRIMARY_WHITE,
              minHeight: "500px",
              height: "500px",
              marginLeft: "24px",
              marginRight: "24px",
            }}
          >
            {rightSiderContent}
          </div>
        </div>
      </div>
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
