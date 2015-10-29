var work=function(){
	console.log("This is work function");
};
//here the abstraction work

var dowork=function(func){
    func();
};

dowork(work);