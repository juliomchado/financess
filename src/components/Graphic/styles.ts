import { Line } from "react-chartjs-2";
import styled from "styled-components";

export const Container = styled.section`
  max-width: 1200px;
  width: 100%;
  height: 530px;

  border-radius: 5px;

  background-color: var(--background-sections-color);

  margin: 32px auto 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;


`;


export const LineChart = styled(Line)`
  width: 100%;
  max-height: 530px;

  height: 100%;

  padding: 32px;


`;
