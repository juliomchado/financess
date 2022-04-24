import { Line } from "react-chartjs-2"
import { Container, LineChart } from "./styles"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
const Graphic = () => {


    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            }
        },
        
    };

    const labels = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 
    'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Entradas',
                data: ["1000", "8000"],
                borderColor: '#8BC34A',
                backgroundColor: '#8BC34A',
            },
            {
                label: 'Saídas',
                data: ["2000", "3000"],
                borderColor: '#F44336',
                backgroundColor: '#F44336',
            },
        ],
    };


    return (
        <Container>
            <LineChart
                options={options}
                data={data}
                
            />
        </Container>
    )
}


export { Graphic }