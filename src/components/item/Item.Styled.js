import styled from "styled-components";

export const StyledItem = styled.main`
  width: 100%;

  .container-img {
    max-width: 900%;
    position: relative;
  }

  .menu-img {
    max-width: 100%; /* Ensures the image doesn't exceed the width of its container */
    height: auto; /* Maintains the aspect ratio */
    display: block; /* Removes any extra space below the image */
    border-radius: 10px;
    margin: 2rem 0;
    border: solid 3px transparent;
  }

  .active {
    border: solid 3px var(--red);
  }

  .category {
    font-size: 1rem;
    color: #c0b1ae;
    margin-bottom: 0.5rem;
  }

  .name {
    font-size: 1.125rem;
    font-weight: 600;
    color: #604e4a;
    margin-bottom: 0.5rem;
  }

  .price {
    font-size: 1.15rem;
    color: var(--red);
  }

  .cart-btn,
  .cart-btn-active {
    width: 60%;
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    border-radius: 250px;
    align-items: center;
    padding: 0.65rem 0;
    font-size: 1rem;
    font-weight: 900;
  }

  .cart-btn {
    gap: 7px;
    font-size: 1rem;
    font-weight: 700;
    background-color: var(--rose-50);
    border: solid 1px black;
    justify-content: center;
    padding: 1rem;
  }

  .cart-btn-active {
    background-color: var(--red);
    color: white;
    justify-content: space-between;
    padding-left: 15px;
    padding-right: 15px;
  }

  .active-btns {
    color: white;
    background-color: transparent;
    border: solid 1px white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    padding: 10px;
  }

  .quantity {
    font-size: 1rem;
    font-weight: 400;
  }
`;
