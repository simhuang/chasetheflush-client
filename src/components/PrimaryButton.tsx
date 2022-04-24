import { Button } from "antd";

import PropTypes from "prop-types";

const PrimaryButton: React.FunctionComponent<PrimaryButtonType> = ({
  name,
  disabled,
  onClick,
}) => {
  return (
    <Button
      type="primary"
      disabled={disabled}
      shape="default"
      onClick={() => onClick}
      loading={false}
      size="large"
    >
      {name}
    </Button>
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
