import React from "react";
import { VictoryAxis, VictoryChart, VictoryLine, VictoryTheme } from "victory";
import { addHours, format } from "date-fns";
import "./App.css";

function App() {
  const startTime = new Date();
  const timeSeriesData = [];

  for (let i = 30; i >= 0; i--) {
    const randomNumber = Math.floor(Math.random() * 100);
    timeSeriesData.push({
      dateTime: addHours(startTime, i * -24),
      value: randomNumber
    });
  }

  return (
    <div className="App">
      <h1>👌🏻ocker / React Example</h1>
      <header className="App-header">
        <div style={{ width: "650px" }}>
          <VictoryChart theme={VictoryTheme.material}>
            <VictoryLine
              data={timeSeriesData}
              x="dateTime"
              y="value"
            ></VictoryLine>
            <VictoryAxis
              tickFormat={(d, idx) =>
                idx % 2 === 0 ? `${format(d, "yyyy-MM-dd")}` : ""
              }
            />
            <VictoryAxis dependentAxis />
          </VictoryChart>
        </div>
      </header>
    </div>
  );
}

export default App;
