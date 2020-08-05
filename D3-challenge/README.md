# D3 Challenge

This repository includes a scatter plot visualization, which was built using the D3 JavaScript library and is currently deployed [here](https://d3-data-journalism-9cb59.web.app/). The D3 code is available [here](./d3_data_journalism/src/js) inside this repository.

The visualization is intended to show various health risks facing particular demographics across different states in the U.S. (for example, access to healthcare vs median household income). To compare different factors or data variables, you can click on the x and/or y labels to change the view of the visualization.

Each circle on the visualization represents a different state in the U.S. To see the actual values for a particular state, you can hover over the circle for that state to see a tooltip, which contains the actual data values based on the currently selected x and y axis labels. The tooltip was created using d3-tip, a plugin developed by [Justin Palmer](https://github.com/Caged).

The [dataset](./d3_data_journalism/src/data/data.csv) used for this project is based on 2014 ACS 1-year estimates. It includes data on rates of income, obesity, poverty, etc. by state. The information comes from the [U.S. Census Bureau](https://data.census.gov/cedsci/) and the Behavioral Risk Factor Surveillance System.
