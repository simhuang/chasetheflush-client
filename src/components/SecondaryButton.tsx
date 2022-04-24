import { Button } from "antd";

import PropTypes from "prop-types";

const SecondaryButton: React.FunctionComponent<SecondaryButton> = ({
  name,
  disabled,
  onClick,
}) => {
  return (
    <Button
      type="ghost"
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
