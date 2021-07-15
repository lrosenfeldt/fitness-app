import styled from "styled-components";
import PropTypes from "prop-types";
import randomId from "@utils/randomId";

const RadioGroupWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const RadioWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.pink};
  border-radius: 5px;
  margin: 2px 2px;
  position: relative;
  text-align: center;
`;

const StyledRadioInput = styled.input.attrs({
  type: "radio",
})`
  height: 0;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 0;

  &:checked ~ label {
    border-radius: 5px;
    border: 2px solid ${({ theme }) => theme.color.navy};
  }
`;

const StyledLabel = styled.label.attrs({
  small: true,
})`
  font-size: ${({ theme }) => theme.fontSize.text};
  font-weight: ${({ theme }) => theme.fontWeight.text};
  line-height: ${({ theme }) => theme.lineHeight.text};
  color: ${({ theme }) => theme.color.navy};
  display: block;
  width: 100%;
  height: 100%;
  padding: 5px 20px;
`;

const RadioButton = ({
  className,
  checked,
  groupName,
  label,
  onChange,
  value,
}) => {
  const id = randomId(value);
  return (
    <RadioWrapper className={className}>
      <StyledRadioInput
        checked={checked}
        id={id}
        name={groupName}
        onChange={onChange}
        value={value}
      />
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
    </RadioWrapper>
  );
};

RadioButton.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  groupName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

const RadioGroup = ({
  className,
  changeHandler,
  groupName,
  radios,
  selectedValue,
}) => {
  return (
    <RadioGroupWrapper className={className}>
      {radios.map(({ label, value }) => (
        <RadioButton
          checked={value === selectedValue}
          groupName={groupName}
          label={label}
          key={value}
          onChange={() => {
            changeHandler(value);
          }}
          value={value}
        />
      ))}
    </RadioGroupWrapper>
  );
};

RadioGroup.propTypes = {
  className: PropTypes.string,
  changeHandler: PropTypes.func.isRequired,
  groupName: PropTypes.string.isRequired,
  radios: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default RadioGroup;
