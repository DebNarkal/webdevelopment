var coffeeFlavour = "Cappucino";
var coffeeTemperature = "hot";
var coffeeOunces = 100;
var milkinCoffee = true;

//equivalent in object

var myCoffee = {
    
    flavour: "capuccino",
    Temperature: "hot",
    ounces: 100,
    milk: true,
    reheat: function(){
        if(myCoffee.Temperature != "hot" && myCoffee.Temperature === "cold")
        {
            myCoffee.Temperature = "hot";
            alert("Your coffee has been reheated");
        }
        else
        {
            alert("Your coffee temperature is unknown");   
        }
    }
    
};
myCoffee.Temperature="cold";
//equivalent access of the property of myCoffee class
myCoffee["Temperature"]="lukeWarm";
myCoffee.reheat();
alert(myCoffee.flavour);


    