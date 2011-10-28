(function(){
	
	jamFrameWork = jamFrameWork;
 	
	jamFrameWork.createLabel = function (args){
		
		 	var label = {};
			//checks the arguments coming in then sets defaults values if not defined.
 			this.top = typeof(args.top) != 'undefined' ? args.top : 0;
			this.left = typeof(args.left) != 'undefined' ? args.left : 0;
			this.right = typeof(args.right) != 'undefined' ? args.right : 0;
			this.bottom = typeof(args.bottom) != 'undefined' ? args.bottom: 0;
			this.text = typeof(args.text) != 'undefined' ? args.text : '';
			this.width = typeof(args.width) != 'undefined' ? args.width: "auto";
			this.height = typeof(args.height) != 'undefined' ? args.height: "auto";
			this.font = typeof(args.font) != 'undefined' ? args.font: "Arial";
	 		this.color = typeof(args.color) != 'undefined' ? args.color: "#fff";
	 		this.size = typeof(args.size) != 'undefined' ? args.size: 12;
 
			
			if(this.id === undefined){
			this.id = "label" + jamFrameWork.labelList.length;
			jamFrameWork.labelList.push(this.id);
			jamFrameWork.objectList.children.push(this.id);
		 	} 
		 	
		 	
		 	 
			
			 
					
		//creates the label that has been initalized the build function is important and must be defined in every Add function
		this.build = function (args){
			
			var style = "font-size:"+args.size+"px;color:"+args.color+ ";position:absolute; top:"+args.top+"px;left:"+args.left+"px;right:"+args.right+"px;bottom:"+args.bottom+"px;width:"+args.width+"px;height:"+args.height+"px;font-family:"+args.font;
	 	
	 		return  "<div id='" +args.id+ "' style='"+style+"'>"+args.text+"</div>";
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
	  
	  this.font = function(args){
	  	$('#'+this.id).css("font-family",args);
	  }		
 			
	}

	
 

//returns new methods for jamFrameWork able to extend - passes the methods of the label constructor and it capable events.
jamFrameWork = jamFrameWork;

	
})();
