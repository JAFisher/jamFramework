
(function(){
	
	//this probably needs destoryed and rethought.

	
	jamFrameWork.events = function(args){
	
 
 	this.x = args;
 	
 	
		this.AttachEvents = function(args){
 	  	//loops through all the children and attaches jquery event handlers from the event list;	
		 	 
		for (var i=0; i < jamFrameWork.objectList.clickEvent.length; i++) {
		
		
			if(jamFrameWork.objectList.clickEvent[i] !== undefined ){
 				this.construction = {};
 				
  				
 				
 				this.exe = function(args){
 				construction.id = i;
 				construction.fnc = jamFrameWork.objectList.clickEvent[i];

 				$('#'+jamFrameWork.objectList.children[args.id]).click(function(args){
 				 
  				 this.funcCall = construction.fnc;
 				 this.executeFunction = eval(this.funcCall);

  					
 				});
 					
 				}(this.construction);
 				
			};
			
		};
			 	
			 	
		}(this);
		 
	    	
	};


window.jamFrameWork = jamFrameWork;


})();
