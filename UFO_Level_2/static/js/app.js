// from data.js
var tableData = data;

tbody = d3.select("tbody")
console.log("Welcome")

// loop 
function displayData(assignment){ 
    tbody.text("")
    assignment.forEach(function(ufo_sighting){
    new_tr = tbody.append("tr")
    Object.entries(ufo_sighting).forEach(function([key, value]){
        new_td = new_tr.append("td").text(value)	
    })
})}

displayData(tableData)

console.log("Welcome again")


// Select the submit button
var submit = d3.select("#submit");

submit.on("click", function() {
    console.log("Welcome to my assignment")

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element 
  var dateInput = d3.select("#datetime");
  var cityInput = d3.select("#city");
  var stateInput = d3.select("#state");
  var countryInput = d3.select("#country");
  var shapeInput = d3.select("#shape");

  // value of the input element
  console.log(dateInput.property("value"));
  console.log(cityInput.property("value"));
  console.log(stateInput.property("value"));
  console.log(countryInput.property("value"));
  console.log(shapeInput.property("value"));

  //create a variable which filters the table for every input value 

 var filtered = tableData.filter(ufo_sighting =>{
  return (ufo_sighting.datetime===dateInput.property("value") || !dateInput.property("value") ) && 
            (ufo_sighting.city===cityInput.property("value") || !cityInput.property("value")) &&
            (ufo_sighting.state===stateInput.property("value") || !stateInput.property("value")) &&
            (ufo_sighting.country===countryInput.property("value") || !countryInput.property("value")) &&
            (ufo_sighting.shape===shapeInput.property("value") || !shapeInput.property("value"))
 })

 displayData(filtered);


});

var filterInputs = d3.selectAll('.form-control');

function clearEntries() {
    filters = {};

    // Sets every input field to empty
    filterInputs._groups[0].forEach(entry => {
        if (entry.value != 0) {
            d3.select('#' + entry.id).node().value = "";
        }
    });
};

var clearButton = d3.select("#clear");
// Clear button on click clears fields
clearButton.on('click', function () {

    // Keeps page from refreshing
    d3.event.preventDefault();

});
