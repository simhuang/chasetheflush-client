import { Button } from "antd";

import PropTypes from "prop-types";

import styled from "styled-components";

const StyledPrimaryButton = styled(Button)`
  background: #2bae66ff;
  border-color: #2bae66ff;
  border-radius: 4px;
  margin: 10px;
  &:hover {
    background: #2bae66ff;
  }
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
      onClick={() => onClick}
      loading={false}
      size="large"
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
