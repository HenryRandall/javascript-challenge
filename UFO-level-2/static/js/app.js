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

    // store date value
    var dateelement = d3.select("#date");
    var datevalue = dateelement.property("value");
    console.log(datevalue);
    // store city value
    var cityelement = d3.select("#city");
    var cityvalue = cityelement.property("value");
    console.log(cityvalue);
    // store state value
    var stateelement = d3.select("#state");
    var statevalue = stateelement.property("value");
    console.log(statevalue);
    // store country value
    var countryelement = d3.select("#country");
    var countryvalue = countryelement.property("value");
    console.log(countryvalue);
    // store shape value
    var shapeelement = d3.select("#shape");
    var shapevalue = shapeelement.property("value");
    console.log(shapevalue);

    var filteredData = tableData;
    
    // filter data by date
    if (datevalue !== '') {
      var filteredData = filteredData.filter(sighting => sighting.datetime === datevalue);
    }
    // filter data by city
    if (cityvalue !== '') {
      var filteredData = filteredData.filter(sighting => sighting.city === cityvalue);
    }
    // filter data by state
    if (statevalue !== '') {
      var filteredData = filteredData.filter(sighting => sighting.state === statevalue);
    }
    // filter data by country
    if (countryvalue !== '') {
      var filteredData = filteredData.filter(sighting => sighting.country === countryvalue);
    }
    // filter data by shape
    if (shapevalue !== '') {
      var filteredData = filteredData.filter(sighting => sighting.shape === shapevalue);
    }
    
    // add each filtered row
    filteredData.forEach(function(selections) {
    var row = tbody.append("tr");
    
    // store each row
    Object.entries(selections).forEach(function([key, value]) {
        // add cells to each row
        var cell = row.append("td");
        cell.text(value);
    });
  });
});