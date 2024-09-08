import styled from "styled-components";

export const StyledCart = styled.div`
  width: 90%;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin: 3rem auto;
  background-color: #ffffff;
  padding: 2rem;

  border-radius: 15px;

  h2 {
    color: var(--red);
    padding-bottom: 0.5rem;
  }

  /* Empty Cart */
  .container-empty-img {
    width: 100%;
  }

  .empty-img {
    width: 50%;
    margin: 2rem auto;
  }

  .empty-cart-txt {
    color: var(--rose-500);
    text-align: center;
  }

  /* Full Cart */

  .full-cart {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .order-total-txt {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1.5rem;
    padding-top: 1.5rem;
    border-bottom: solid 1px var(--rose-100);
    font-weight: 400;
  }

  .order-total-dollar {
    font-size: 1.5rem;
    font-weight: 700;
  }

  .container-carbon-neutral {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 1.5rem;
    padding-top: 1.5rem;
    gap: 1rem;
    background-color: var(--rose-100);
    border-radius: 8px;
    padding: 1rem 1.25rem;
    margin-bottom: 1.5rem;
  }

  .carbon-neutral-txt {
    font-size: 0.85rem;
  }

  .carbon-img {
    width: 30px;
  }

  .order-confirm-btn {
    width: 90%;
    background: var(--red);
    padding: 1rem;
    border-radius: 50px;
    border: none;
    font-size: 1rem;
    font-weight: 900;
    color: white;
  }
`;
