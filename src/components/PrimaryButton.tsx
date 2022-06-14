import { Button } from "antd";

import PropTypes from "prop-types";

import styled from "styled-components";

const StyledPrimaryButton = styled(Button)`
  margin: 10px;
`;

const PrimaryButton: React.FunctionComponent<PrimaryButtonType> = ({
  name,
  disabled,
  onClick,
}) => {
  return (
    <StyledPrimaryButton
      type="primary"
      disabled={disabled}
      shape="default"
      onClick={() => onClick()}
      loading={false}
    >
      {name}
    </StyledPrimaryButton>
  );
};

PrimaryButton.propTypes = {
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

type PrimaryButtonType = {
  name: string;
  disabled?: boolean;
  onClick: Function;
};

export default PrimaryButton;
