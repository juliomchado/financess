import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 538px;

  padding: 32px;

  h3 {
    color: var(--secondary-text-color);
    margin-bottom: 32px;
  }

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 480px;

    gap: 18px;

    input {
      width: 100%;
      height: 40px;

      border-radius: 5px;
      border: 1px solid var(--primary-color);

      padding: 0 16px;
      
    }

    button {
      width: 100%;
      border-radius: 5px;

      height: 48px;

      border: transparent;

      transition: 0.8s;

      background-color: var(--income-color);

      color: var(--text-dif-color);

      font-weight: 400;
      font-size: 2rem;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;
