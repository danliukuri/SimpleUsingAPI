function GetCountryData(countryName)
{
  //Create request
  let request = new XMLHttpRequest();
  //Setting request
  request.open("GET", "https://covid-19-data.p.rapidapi.com/country?name="+countryName+"&format=json");
  request.setRequestHeader("x-rapidapi-key", "ee846d23cdmsh187974b70a52be6p160f83jsnf587f225711f");
  request.setRequestHeader("x-rapidapi-host", "covid-19-data.p.rapidapi.com");
  request.responseType = "json";
  //Send request
  request.send();
  //On load output data
  request.onload = function () 
  {
    let colNames = ["Country", "Confirmed", "Recovered", "Critical", "Deaths", "Date"];
    let response = request.response[0];
    let data = [response.country, response.confirmed, response.recovered, response.critical, response.deaths, response.lastUpdate];
    OutputData(colNames,data); 
  };
}

function OutputData(colNames,data)
{
  //Get section element
  let section = document.querySelector("section");
  //Create table
  let table = document.createElement("table");
  table.classList.add("table", "table-bordered");
  //Create table heading
  let thead = document.createElement("thead");
  thead.classList.add("thead-dark");

  //Create table heading row and add elements to it
  let tr = document.createElement("tr");
  tr.classList.add("text-center");

  let t;
  for (var i = 0; i < colNames.length; i++)
  {
    t = document.createElement("th");
    t.textContent = colNames[i];
    t.scope = "col";
    tr.appendChild(t);
  }

  thead.appendChild(tr);
  table.appendChild(thead);

  //Add table rows from each json object
  tr = document.createElement("tr");
  tr.classList.add("table-secondary", "text-center");
  
  //Create table heading row and add elements to it  
  for (var i = 0; i < data.length; i++)
  {
    t = document.createElement("th");
    t.textContent = data[i];
    t.scope = "row";
    tr.appendChild(t);
  }
  
  table.appendChild(tr);  
  section.appendChild(table);
  
}