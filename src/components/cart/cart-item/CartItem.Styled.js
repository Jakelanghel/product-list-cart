import styled from "styled-components";

export const StyledCartItem = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  border-bottom: solid 1px var(--rose-100);
  padding-bottom: 1.5rem;

  .name {
    font-size: 1rem;
    font-weight: 600;
  }

  .details {
    display: flex;
    justify-content: space-between;
  }

  .price {
    margin-top: 0.75rem;
    color: #9d9593;
  }

  .quantity {
    color: var(--red);
  }

  .total {
    font-weight: 600;
    padding-left: 10px;
  }

  .remove-item {
    padding: 5px 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: transparent;
    border: solid 1.5px var(--rose-500);
  }

  .remove-img {
    width: 13px;
    height: 13px;
  }
`;
