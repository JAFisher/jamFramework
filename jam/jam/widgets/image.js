(function(){
	
	jamFrameWork = jamFrameWork;
 	
	jamFrameWork.createImage = function (args){
		
		 	var label = {};
			//checks the arguments coming in then sets defaults values if not defined.
 			this.top = typeof(args.top) != 'undefined' ? args.top : 0;
			this.left = typeof(args.left) != 'undefined' ? args.left : 0;
			this.right = typeof(args.right) != 'undefined' ? args.right : 0;
			this.bottom = typeof(args.bottom) != 'undefined' ? args.bottom: 0;
			this.text = typeof(args.text) != 'undefined' ? args.text : '';
			
			this.width = typeof(args.width) != 'undefined' ? args.width: "auto";
			this.height = typeof(args.height) != 'undefined' ? args.height: "auto";
			
			this.src = typeof(args.src) != 'undefined' ? args.src: null;

    
			
			if(this.id === undefined){
			this.id = "image" + jamFrameWork.imageList.length;
			jamFrameWork.imageList.push(this.id);
			jamFrameWork.objectList.children.push(this.id);
		 	} 
		 	
		 	
		 	 
			 
					
			//creates the label that has been initalized the build function is important and must be defined in every Add function
			this.build = function (args){
				
 			var style = "style='width:" +args.width+ "px; height:" +args.height+ "px; position:absolute" + "top:" + args.top + "bottom:" +args.bottom+ "px;left:" +args.left+ "px;right:" 
			+this.right+"px;'";
			
 			var construction = "<img "+style+" src='"+args.src+"' />";
 
			return construction	;
 
			}(this);
			
					 

			
			//Events to fire when values change
			//The setters for sticking in the values.
		  
		   this.text = function(args){
	 	  	$('#'+this.id).html(args);
		  }
		  
		  
		   this.top = function(args){
		  	$('#'+this.id).css("top",args + 'px');
		  }
		  
		    this.left = function(args){
		  	$('#'+this.id).css("left",args + 'px');
		  }
		 
		 
		   this.right = function(args){
		  	$('#'+this.id).css("right",args + 'px');
		  }	
		  
		  this.bottom = function(args){
		  	$('#'+this.id).css("bottom",args + 'px');
		  }
		  
		 
	 			
		}

	
 

//returns new methods for jamFrameWork able to extend - passes the methods of the label constructor and it capable events.
jamFrameWork = jamFrameWork;

	
})();
