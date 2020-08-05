import React, { useEffect } from 'react';
import './css/d3Style.css';
import './css/style.css';
import { drawScatterPlot } from './js/app.js';
import csvData from './data/data.csv';

export default function App() {

  useEffect(() => {
    drawScatterPlot(csvData);
  }, [])

  return (   
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-12 d-flex justify-content-center mt-5">
          <h1>D3 Data Journalism</h1>
          <br></br>
        </div>
      </div>
      <div id="scatter">
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-xs-12  col-md-9 mt-4">
          <div className="article">
            <h2 className="mb-3">Correlations Discovered Between Health Risks and Age, Income</h2>
            <p>
              This visualization, built using D3, shows the health risks facing particular demographics across different states in the U.S. (for example, access to healthcare vs median household income). To compare different factors or data variables, you can click on the x and/or y labels to change the view of the visualization.
            </p>

            <p>
              Each circle on the visualization represents a different state in the U.S. To see the actual values for a particular state, you can hover over the circle for that state to see a tooltip, which contains the actual data values based on the currently selected x and y axis labels. The tooltip was created using d3-tip, a plugin developed by <a href="https://github.com/Caged" target="_blank" rel="noopener noreferrer">Justin Palmer</a>.
            </p>

            <p>
              The dataset used for this project is based on 2014 ACS 1-year estimates. It includes data on rates of income, obesity, poverty, etc. by state. The information comes from the <a href="https://data.census.gov/cedsci/" target="_blank" rel="noopener noreferrer">U.S. Census Bureau</a> and the Behavioral Risk Factor Surveillance System.
            </p>
            <p>
              The code for this project is available on <a href="https://github.com/philipstubbs13/D3-challenge" target="_blank" rel="noopener noreferrer">GitHub</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
