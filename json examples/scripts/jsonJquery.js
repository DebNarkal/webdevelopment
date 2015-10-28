window.$(function () {
    "use strict";
    window.$("#clickMe").click(function () {
        var url = "jsonData/tables.json", delim = "", i = 0;
        var dataString="ddd";
             $.getJSON(url, function (value) {
                printData(value);
            }); 
            //var something = JSON.parse(data.resoponseText);
        //var arr = JSON.parse(data);
        //alert('hi');
        //for (i = 0; i < something.Tables.length; i += 1) {
            //dataString += delim + something.Tables[i].TableName;
           // delim = '<br>';
        //}
        //window.$("#jsonContent").html(dataString);
    });
    
    function printData(values) {
        var delim="", valueString="", i=0;
        for(; i < values.Tables.length; i ++) {
            valueString += delim + values.Tables[i].TableName;
            delim = "<br>";
        }
        window.$("#jsonContent").html(valueString);
    }
    
});