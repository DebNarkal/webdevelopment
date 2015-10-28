window.$(function () {
    "use strict";
	window.$("#click").click(function () {
        window.$("div").toggle(function(){
        window.$("div").animate({ right: '=500px',     
                                    opacity: '0.8' },
                                    2000);
        
        function myFunction(arr) {
            var out = "";
            var rowCount = arr.Tables.length, rows = 0;
            for (rows = 0; rows < rowCount; rows++) {
                out +=  arr.Tables[rows].TableName +' <br>';
            }
            window.$("#divs").html(out);
        }
        
        var xmlHttp = new XMLHttpRequest();
        var url = "jsonData/tables.json";
        
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                var myArr = JSON.parse(xmlHttp.responseText);
                myFunction(myArr);
            }
	xmlHttp.open("GET", url, true);
        xmlHttp.send();
        }
        
        });
       
      $("#loads").load("http://www.w3schools.com/jquery");
	});
   
});