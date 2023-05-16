import { Card } from "@material-ui/core";
import React from "react";
// import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { ChartVirticalMmber } from "../charts/chartVirticalMmber";

const Dashboard = () => {
  return (
    <Card>
      <ChartVirticalMmber />
    </Card>
  );
};

export default Dashboard;
