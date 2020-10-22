// Fetch JSON data from API and pass it into buildTable function

fetch('https://api.github.com/repositories/19438/commits')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        return buildTable(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });

// Build table function

function buildTable(data) {

    var tableBody= document.getElementById("githubDataTable").getElementsByTagName('tbody')[0];
    
    for (var i = 0; i < data.length; i++) {
        var tr = document.createElement("tr");

        // Reformat date for sorting
        var commitDate = new Date(data[i].commit.author.date);

        // Build table with api data
        tr.innerHTML = '<td>' + data[i].commit.author.name + '</td>' + 
                       '<td>' + commitDate + '</td>' +
                       '<td>' + data[i].commit.message + '</td>' +
                       '<td>' + data[i].commit.url + '</td>' ;

        // Append data to <tbody>
        tableBody.appendChild(tr);
    }

    // Initiate table sort
    new Tablesort(document.getElementById('githubDataTable'));
}




