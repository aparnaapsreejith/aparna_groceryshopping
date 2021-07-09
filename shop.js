function ajax() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           var response =JSON.parse(this.responseText);
var output = "";

        for (var i=0; i<response.length; i++) {
            var row = $('<tr><td>' + response[i].serialnumber+ '</td><td>' + response[i].name + '</td><td>' + response[i].quantity + '</td></tr>'  + response[i].unit + '</td></tr>' + response[i].Department +'</td></tr>'+ response[i].Notes);
            $('#myTable').append(response);
            document.getElementById("myTable").innerHTML=response.Notes;    
            }}};
                xhttp.open("GET", "shop.js", true);
                xhttp.send();
            }
            