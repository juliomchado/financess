import { Container, Table, THead, TBody } from "./styles";



const TableInfo = () => {


  return (
    <Container>
      <p>Transações recentes</p>
      <Table>
        <THead>
          <tr>
            <th>Descrição </th>
            <th>Categoria</th>
            <th>Valor</th>
            <th>Data</th>
            <th>Tipo</th>
          </tr>
        </THead>
        <TBody>
          <tr>
            <td>Hamburgueria x</td>
            <td>Alimentação</td>
            <td>R$ 150,00</td>
            <td>23/11/2021 13:00</td>
            <td>
              <svg width="65" height="19" viewBox="0 0 65 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M36.2334 12.4333L37.1934 11.4733L33.94 8.22L31.7467 10.4133C31.4867 10.6733 31.0667 10.6733 30.8067 10.4133L26.8067 6.40667C26.5467 6.14667 26.5467 5.72667 26.8067 5.46667C27.0667 5.20667 27.4867 5.20667 27.7467 5.46667L31.2734 9L33.4667 6.80667C33.7267 6.54667 34.1467 6.54667 34.4067 6.80667L38.1334 10.5267L39.0934 9.56667C39.3 9.36 39.66 9.50667 39.66 9.8V12.66C39.66 12.8467 39.5134 12.9933 39.3267 12.9933H36.4667C36.1734 13 36.0267 12.64 36.2334 12.4333Z" fill="#F44336" />
                <path d="M5 0.5H60C62.4853 0.5 64.5 2.51472 64.5 5V14C64.5 16.4853 62.4853 18.5 60 18.5H5C2.51472 18.5 0.5 16.4853 0.5 14V5C0.5 2.51472 2.51472 0.5 5 0.5Z" fill="#F44336" fillOpacity="0.2" stroke="#F44336" />
              </svg>
            </td>
          </tr>
          <tr>
            <td>Hamburgueria x</td>
            <td>Alimentação</td>
            <td>R$ 150,00</td>
            <td>23/11/2021 13:00</td>
            <td>
              <svg width="65" height="19" viewBox="0 0 65 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M36.2334 5.56667L37.1934 6.52667L33.94 9.78L31.7467 7.58667C31.4867 7.32667 31.0667 7.32667 30.8067 7.58667L26.8067 11.5933C26.5467 11.8533 26.5467 12.2733 26.8067 12.5333C27.0667 12.7933 27.4867 12.7933 27.7467 12.5333L31.2734 9L33.4667 11.1933C33.7267 11.4533 34.1467 11.4533 34.4067 11.1933L38.1334 7.47333L39.0934 8.43333C39.3 8.64 39.66 8.49333 39.66 8.2V5.33333C39.6667 5.14667 39.52 5 39.3334 5H36.4734C36.1734 5 36.0267 5.36 36.2334 5.56667Z" fill="#8BC34A" />
                <path d="M0.5 5C0.5 2.51472 2.51472 0.5 5 0.5H60C62.4853 0.5 64.5 2.51472 64.5 5V14C64.5 16.4853 62.4853 18.5 60 18.5H5C2.51472 18.5 0.5 16.4853 0.5 14V5Z" fill="#8BC34A" fillOpacity="0.2" stroke="#8BC34A" />
              </svg>

            </td>
          </tr>
        </TBody>
      </Table>
    </Container>
  );
};

export { TableInfo };
