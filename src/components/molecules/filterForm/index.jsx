import styled from "styled-components";
import PropTypes from "prop-types";
import { useEffect, useReducer, useRef } from "react";
import H3 from "components/atoms/h3";
import RadioGroup from "components/atoms/radioGroup";
import iconSort from "assets/images/icon_sort.png";

const StyledForm = styled.form`
  background-color: ${({ theme }) => theme.color.beige};
  border-radius: 5px;
  padding: 20px 8px;
`;

const SortingOrderRadios = [
  { label: "Absteigend", value: "DESC" },
  { label: "Aufsteigend", value: "ASC" },
];

const SortingCriteriaRadios = [
  { label: "Datum", value: "_createdAt" },
  { label: "Titel", value: "title" },
];

const StyledH3 = styled(H3)`
  &::before {
    content: "";
    background: url(${iconSort});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    display: inline-block;
    height: 1.2em;
    margin-right: 2px;
    width: 1.2em;
  }
`;

const FilterForm = ({ className, refetch }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "sortingOrder":
        return { ...state, sortOrder: action.value };
      case "sortingCriteria":
        return { ...state, sortCriteria: action.value };
      default:
        throw new Error(
          "Invalid action type `" +
            `${action.type}` +
            "´ given to reducer of FilterForm"
        );
    }
  };

  const formRef = useRef();

  const [formState, dispatch] = useReducer(reducer, {
    sortCriteria: SortingCriteriaRadios[0].value,
    sortOrder: SortingOrderRadios[0].value,
  });

  const handleSubmit = (event) => {
    event.preventDefault(event);
    const sortObject = {};
    sortObject[formState.sortCriteria] = formState.sortOrder;
    refetch({ sort: [sortObject] });
  };

  useEffect(() => formRef.current.requestSubmit(), [formState]);

  return (
    <StyledForm className={className} onSubmit={handleSubmit} ref={formRef}>
      <StyledH3>Sortieren</StyledH3>
      <RadioGroup
        changeHandler={(value) => dispatch({ type: "sortingOrder", value })}
        groupName="sortOrder"
        radios={SortingOrderRadios}
        selectedValue={formState.sortOrder}
      />
      <RadioGroup
        changeHandler={(value) => dispatch({ type: "sortingCriteria", value })}
        groupName="sortCriteria"
        radios={SortingCriteriaRadios}
        selectedValue={formState.sortCriteria}
      />
    </StyledForm>
  );
};

FilterForm.propTypes = {
  className: PropTypes.string,
  refetch: PropTypes.func.isRequired,
};

export default FilterForm;
