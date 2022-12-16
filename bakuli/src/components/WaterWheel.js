import React from "react";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js"

import { Doughnut } from "react-chartjs-2";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

const WaterWheel = (props) => {

    const quantity = props.quantity / 10
    const left = 2000 - (props.quantity / 10)

    const data = {
        labels: ['Quantity Left', 'Your progress'],
        datasets: [{
            label: 'Water Tracker',
            data: [left, quantity],
            backgroundColor: ['#D2E4F9', '#1C78E3'],
            borderColor: ['#D2E4F9','#1C78E3']
        }]
    }

    const options = {}

    return (
        <div style={{width: "258px", height: "258px", margin: "auto"}} >
            <Doughnut
                data= {data}
                options= {options}
            ></Doughnut>
        </div>
    )
}

export default WaterWheel;