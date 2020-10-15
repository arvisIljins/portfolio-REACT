import React from "react";
import { useContext } from "react";
import { PortfolioContext } from "../Context";
import styled from "styled-components";
import Title from "./Title";

//get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

export default function PortfolioFilter({ portfolio }) {
  const context = useContext(PortfolioContext);
  const { handleChange, type, method } = context;
  //console.log(context);
  // get unique types
  let types = getUnique(portfolio, "type");
  // add all
  types = ["all", ...types];
  //map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  let methods = getUnique(portfolio, "method");
  // add all
  methods = ["all", ...methods];
  //map to jsx
  methods = methods.map((item, index) => {
    return (
      <option method={item} key={index}>
        {item}
      </option>
    );
  });
  return (
    <FilterContainer>
      <Title title="latest projects" />
      <Form>
        {/*Select type */}
        <div className="form-group">
          <label htmlFor="method">Wep page type</label>
          <select name="type" id="type" value={type} onChange={handleChange}>
            {types}
          </select>
          {/*End of Select type */}
        </div>
        <div className="form-group">
          <label htmlFor="method">Main method used</label>
          <select
            name="method"
            id="method"
            value={method}
            onChange={handleChange}
          >
            {methods}
          </select>
          {/*End of Select type */}
        </div>
      </Form>
    </FilterContainer>
  );
}

const FilterContainer = styled.div`
  padding: 3rem 0 1rem 0;
`;
const Form = styled.form`
  color: var(--mainAccent);
  width: 60vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-column-gap: 2rem;
  background: var(--mainText);
  opacity: 0.6;
  padding: 0.5rem;
  box-shadow: var(--lightShadow);
  .form-group {
    text-transform: capitalize;
    padding-left: 3rem;
  }
  .form-group label {
    display: block;
    letter-spacing: var(--mainSpacing);
    margin-bottom: 0.5rem;
  }

  select {
    font-family: Cursive;
    color: var(--mainAccent);
    border: none;
    width: 80%;
    background: transparent;
    font-size: 1rem;
    outline: none;
    cursor: pointer;
    border-bottom: solid 0.05rem var(--mainAccent);
  }

  select option {
    background: var(--mainDark);
    color: var(--mainAccent);
  }
  select option:first-child {
    color: var(--mainAccent);
  }
  @media screen and (max-width: 850px) {
    .form-group label {
      font-size: 0.8rem;
    }
  }
  @media screen and (max-width: 700px) {
    .form-group {
      padding-left: 0.5rem;
    }
  }
  @media screen and (max-width: 300px) {
    .form-group label {
      font-size: 0.7rem;
    }
  }
`;