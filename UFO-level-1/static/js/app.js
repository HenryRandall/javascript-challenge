// pull data
var tableData = data;

// reference table body
var tbody = d3.select("tbody");

// add data
tableData.forEach(function(ufoSighting) {
    
    // add each row
    var row = tbody.append("tr");

    // store each row
    Object.entries(ufoSighting).forEach(function([key, value]) {
      
      // add cells to each row
      var cell = row.append("td");
      cell.text(value);
    });
  });


// button
var button = d3.select("#filter-btn");
button.on("click", function() {

    tbody.html("");

    // store value
    var dateelement = d3.select("#date");
    var datevalue = dateelement.property("value");
    console.log(datevalue);

    // filter data and store
    var filteredData = tableData.filter(sighting => sighting.datetime === datevalue);
    filteredData.forEach(function(selections) {

    // add each filtered row
    var row = tbody.append("tr");
    
    // store each row
    Object.entries(selections).forEach(function([key, value]) {
        // add cells to each row
        var cell = row.append("td");
        cell.text(value);
    });
  });
});