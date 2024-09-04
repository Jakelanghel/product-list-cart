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

  .cart-btn {
    width: 60%;
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 7px;
    font-size: 1rem;
    font-weight: 900;
    background-color: var(--rose-50);
    border: solid 1px black;
    border-radius: 250px;
    justify-content: center;
    align-items: center;
    padding: 0.65rem 0;
  }
`;
