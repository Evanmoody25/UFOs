// import data from data.js
const tableData = data;

// reference the HTML table(output) using d3 library
var tbody = d3.select('tbody');

// Function of populate data into html table
function buildTable(data) {
    // init table data
    tbody.html('');

    // first array loop for <tr>
    data.forEach((dataRow) => {
        let row = tbody.append('tr'); //html
        //second loop for <td>
        Object.values(dataRow).forEach((val) =>{
            let cell = row.append('td'); //html
            // d3 funtion 
            cell.text(val);
        });
    });

};

var clearEntries = d3.select("#clear-btn");
clearEntries.on("click", function() {
  location.reload();
});



//Creating a variable, tracking filters
var filters = {
};

// updating filters
function updateFilters() {
    let inputElement = d3.select(this);
    let inputValue = inputElement.property("value");
    let inputID = inputElement.attr("id");
      if (inputValue) {
        filters[inputID] = inputValue;
    } else{filters ={};};
    filterTable(filters);
};

//Use this function to filter the table when data is entered.
function filterTable(obj) {
    let filteredData = tableData;
    Object.entries(obj).forEach(([fkey, fval]) =>{
        
      filteredData = filteredData.filter((row) => row[fkey] === fval)
          

  });
  
    // rebuild the table using the filtered data
    buildTable(filteredData);
};
  
  // Attach an event to listen for changes to each filter
  d3.selectAll("input").on("change",updateFilters);
  
  // Build the table when the page loads
  buildTable(tableData);