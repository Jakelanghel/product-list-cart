import styled from "styled-components";

export const StyledCart = styled.div`
  width: 85%;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin: 3rem auto;
  background-color: #ffffff;
  padding: 2rem;

  border-radius: 15px;
  h2 {
    color: var(--red);
  }

  .container-empty-img {
    width: 100%;
  }

  .empty-img {
    width: 50%;
    margin: 2rem auto;
  }

  .empty-cart-txt {
    color: var(--rose-500);
  }
`;
