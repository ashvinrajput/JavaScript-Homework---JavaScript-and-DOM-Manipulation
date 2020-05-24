// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");

tableData.forEach(UFO_data) {
console.log(UFO_data)

var row = tbody.append("tr");

Object.enteries(UFO_data).forEach([key, value]) {
var cell = tbody.append("td")
cell.text(value)
}
}
var button = d3.select("#filter-btn");

// Define button click
button.on("click", function() {

    d3.event.preventDefault();

    tbody.selectAll('*').remove();

    var inputDate = d3.select("#datetime");
    var inputText = inputDate.property("value")
    var filteredData = tableData.filter(x => x.datetime === inputText);
  
    filteredData.forEach(UFO_data) {

      console.log(UFO_data);

      var row = tbody.append("tr");
      Object.entries(UFO_data).forEach([key, value]) {
         
          var cell = tbody.append("td");
          cell.text(value)
      }
    }
  }
