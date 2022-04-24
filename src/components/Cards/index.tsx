import { Container, CardContent, IncomeIcon, OutcomeIcon } from "./styles"

const Cards = () => {
    return (
        <Container>
            <CardContent>
                <p>Entradas</p>
                <span>R$ 3500,00 <IncomeIcon /> </span>
                <p>Última entrada dia 24 de abril</p>
            </CardContent>
            <CardContent>
                <p>Saídas</p>
                <span>R$ 1500,00 <OutcomeIcon /></span>
                <p>Última saída dia 18 de março</p>
            </CardContent>
            <CardContent>
                <p>Total</p>
                <span>R$ 2000,00</span>
                <p>Hoje</p>
            </CardContent>
        </Container>
    )
}

export { Cards }