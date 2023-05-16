import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { makeStyles } from "@material-ui/core";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const useStyles = makeStyles((theme) => ({
  root: {},
}));
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "member chart",
    },
  },
};

export function ChartVirticalMmber() {
  const [memberChart, setMemberChart] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/memberschart").then(async (res) => {
      const data = await res.json();
      setMemberChart(data);
    });
  }, []);
  let labels = [];
  memberChart.forEach(({ libelle }) => {
    labels.push(libelle);
  });
  // console.log(memberChart);
  let data = {
    labels,
    datasets: [
      //   {
      //     label: "Dataset 1",
      //     data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      //     backgroundColor: "rgba(255, 99, 132, 0.5)",
      //   },
      {
        label: "members",
        data: memberChart.map(({ count }) => count),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return <Bar className={useStyles.root} options={options} data={data} />;
}
