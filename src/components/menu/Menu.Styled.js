import styled from "styled-components";

export const StyledMenu = styled.main`
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem;

  h1 {
    padding-top: 2rem;
  }

  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
