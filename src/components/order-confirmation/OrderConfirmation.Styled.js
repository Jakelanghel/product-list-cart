import styled from "styled-components";

export const StyledOrderConfirmation = styled.div`
  width: 100%;
  height: 90%;
  position: absolute;
  top: 100px;
  z-index: 0;
  background-color: white;
  padding: 3rem 2rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;

  .confirm-icon {
    width: 55px;
    margin-bottom: 2rem;
  }

  h3 {
    width: 200px;
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  .msg {
    margin-bottom: 1rem;
  }

  .container-total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
  }

  .total-txt {
    font-size: 1rem;
  }

  .total-dol {
    font-size: 1.25rem;
    font-weight: 900;
  }

  .container-receipt {
    background-color: var(--rose-50);
    border-radius: 15px;
    margin-bottom: 2rem;
  }

  .container-btn {
    width: 100%;
    display: flex;
    justify-content: center;
    align-self: center;
  }
`;
