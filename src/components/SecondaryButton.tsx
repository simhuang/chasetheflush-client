import { Button } from "antd";

import PropTypes from "prop-types";

import styled from "styled-components";

import { PRIMARY_GREEN } from "../constants/style";

const SecondaryButtonStyled = styled(Button)`
  &:hover {
    border-color: ${PRIMARY_GREEN};
    color: ${PRIMARY_GREEN};
  }
  &:selection {
    background: ${PRIMARY_GREEN};
    border-color: ${PRIMARY_GREEN};
  }
`;

const SecondaryButton: React.FunctionComponent<SecondaryButton> = ({
  name,
  disabled,
  onClick,
}) => {
  return (
    <SecondaryButtonStyled
      type="ghost"
      disabled={disabled}
      shape="default"
      onClick={() => onClick}
      loading={false}
      size="large"
    >
      {name}
    </SecondaryButtonStyled>
  );
};

SecondaryButton.propTypes = {
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

type SecondaryButton = {
  name: string;
  disabled?: boolean;
  onClick: Function;
};

export default SecondaryButton;
