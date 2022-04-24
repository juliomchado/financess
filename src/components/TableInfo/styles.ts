import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 1200px;

  padding: 32px 0;

  background-color: var(--background-sections-color);

  border-radius: 10px;

  margin: 16px auto 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  p {
    width: 100%;
    align-items: flex-start;

    font-weight: 400;
    color: var(--primary-text-color);
    font-size: 3.2rem;

    margin-bottom: 32px;

    padding: 0 32px;
  }
`;

export const Table = styled.table`
  width: 100%;
  height: 100%;

  padding: 0 32px;
`;

export const THead = styled.thead`
  width: 100%;
  height: 56px;

  tr {
    width: 100%;
    height: 100%;

  }

  th {
    flex: 1;
    
    text-align: center;
    color: var(--tertiary-text-color);
    font-size: 2rem;
    font-weight: 400;

  }
`;

export const TBody = styled.tbody`
  width: 100%;
  height: 64px;

  tr:nth-child(odd) {
    background-color: var(--background-color);
  }

  td {
    text-align: center;
    height: 64px;
  }
`;
