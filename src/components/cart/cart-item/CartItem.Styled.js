import styled from "styled-components";

export const StyledCartItem = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;

  .name {
    font-size: 1rem;
    font-weight: 500;
  }

  .details {
    display: flex;
    justify-content: space-between;
  }
`;
