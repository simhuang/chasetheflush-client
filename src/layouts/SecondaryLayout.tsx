import { Layout, Menu } from "antd";

import PropTypes from "prop-types";

import HeaderBar from "src/containers/Headerbar";

import { PRIMARY_WHITE } from "src/constants/style";

const { Header, Content, Sider } = Layout;

const SecondaryLayout: React.FunctionComponent<SecondaryLayout> = ({
  centerContent,
  sideContent,
}) => {
  return (
    <Layout style={{ background: PRIMARY_WHITE }}>
      <Header
        style={{
          top: 0,
          position: "fixed",
          zIndex: 1,
          width: "100%",
          padding: 0,
          background: PRIMARY_WHITE,
        }}
      >
        <HeaderBar />
      </Header>
      <Layout style={{ background: PRIMARY_WHITE }}>
        <Layout
          style={{
            width: "800px",
            marginTop: "75px",
            marginLeft: "auto",
            marginRight: "auto",
            background: PRIMARY_WHITE,
          }}
        >
          <Content
            style={{
              margin: "12px",
              padding: "12px",
            }}
          >
            {centerContent}
          </Content>
          {sideContent && (
            <Sider
              style={{
                marginTop: "24px",
                background: PRIMARY_WHITE,
                height: "auto",
              }}
            >
              {sideContent}
            </Sider>
          )}
        </Layout>
      </Layout>
    </Layout>
  );
};

SecondaryLayout.propTypes = {
  centerContent: PropTypes.element,
  sideContent: PropTypes.element,
};

type SecondaryLayout = {
  centerContent: any;
  sideContent?: any;
};

export default SecondaryLayout;
