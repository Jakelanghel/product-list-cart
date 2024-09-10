import styled from "styled-components";

export const StyledCartItem = styled.div`
  width: 100%;
  border-bottom: solid 1px var(--rose-100);
  padding-bottom: 1.5rem;
  padding-top: 1.5rem;

  .name {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .details {
    display: flex;
    justify-content: space-between;
  }

  .price,
  .quantity {
    font-size: 0.85rem;
  }

  .price {
    font-size: 1rem;
    margin-top: 0.75rem;
    color: #9d9593;
  }

  .quantity {
    color: var(--red);
    margin-right: 10px;
  }

  .total {
    font-weight: 600;
    padding-left: 10px;
  }

  .remove-img {
    width: 12px;
    height: 12px;
  }

  .remove-btn {
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: transparent;
    border: solid 1.5px var(--rose-500);
  }

  .remove-btn:hover {
    cursor: pointer;
  }

  .container-flex-r {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding-bottom: 1.5rem;
    padding-top: 1.5rem;
    padding: 1.5rem;
    border-radius: 5px;
  }

  .container-thumbnail {
    min-width: 75px;
    max-width: 75px;
  }

  .thumbnail-img {
    width: 100%;
    border-radius: 3px;
  }
`;
