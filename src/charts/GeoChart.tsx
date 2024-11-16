import { Chart } from "react-google-charts";
import { data } from "../constants";


export default function GeoChart() {
    return (
        <Chart
            chartEvents={[
                {
                    eventName: "select",
                    callback: ({ chartWrapper }) => {
                        const chart = chartWrapper.getChart();
                        const selection = chart.getSelection();
                        if (selection.length === 0) return;
                        const region = data[selection[0].row + 1];
                        console.log("Selected : " + region);
                    },
                },
            ]}
            chartType="GeoChart"
            width="100%"
            height="300px"
            data={data}
        />
    );
}
