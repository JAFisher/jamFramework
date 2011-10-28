// this is an example framework that allows users to create native style applications using an more modular sytnax rather than using 
//this genius piece of work is copyrighted by jamie andrew fisher of soctland a sexy developer with a love for programming meoww ;)



// controls all the master values about objects such as how many children there is the children name yada yada yada 
// this is just the fumblings of a drunken fool lalalalalal
var jamFrameWork = {};
(function(){
	



//collecting information about how many active objects there is god knows why yet but hell YOU NEVER KNOW

// ui holders
jamFrameWork.viewList = new Array();
//compontents
jamFrameWork.labelList = new Array();
jamFrameWork.buttonList = new Array();
jamFrameWork.pageList = new Array();
jamFrameWork.listList = new Array();

//effects
jamFrameWork.fx = new Array('slide','slideup','slidedown','pop','fade','flip');

//master list of objects - ignore clickEvent the now may use this for heatMaps;
jamFrameWork.objectList =  {children : new Array(),clickEvent: new Array()};

this.previousView = null;
this.currentView = null;





jamFrameWork.build = function(){
	
 }();



//builds the active view into the main container
//this is to be done had to 

jamFrameWork.activeView = function(view){
	this.previousView = this.activeView; 
	this.currentView = view;	
 
};





//returns the window the framework
 
 
})();

