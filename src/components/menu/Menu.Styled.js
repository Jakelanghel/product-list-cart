import styled from "styled-components";

export const StyledMenu = styled.main`
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  h1 {
    padding-top: 2rem;
    display: block;
  }

  @media only screen and (min-width: 1024px) {
    max-width: none;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 0;
    padding: 0;
  }
`;
