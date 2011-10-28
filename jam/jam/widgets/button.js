
(function(){
	

	//builds a basic button with ui interactions such as onclick ontouch so on.
	
	jamFrameWork.createButton = function(args){
	
	this.mouseDownEvent = function(event){
	    	}
	//define ui events above arguments
	
			this.top = typeof(args.top) != 'undefined' ? args.top : 0;
			this.left = typeof(args.left) != 'undefined' ? args.left : 0;
			this.right = typeof(args.right) != 'undefined' ? args.right : 0;
			this.bottom = typeof(args.bottom) != 'undefined' ? args.bottom: 0;
			this.text = typeof(args.text) != 'undefined' ? args.text : '';
			this.width = typeof(args.width) != 'undefined' ? args.width: "";
			this.height = typeof(args.height) != 'undefined' ? args.height: "";
			this.font = typeof(args.font) != 'undefined' ? args.font: "Arial";
 	 		this.size = typeof(args.size) != 'undefined' ? args.size: 12;
	 		this.link = typeof(args.link) != 'undefined' ? args.link: '';
 	    	this.css = typeof(args.css) != 'undefined' ? args.css: '';
 			this.fx = jamFrameWork.fx[args.fx];
 			this.direction = args.direction;
			
 	    	
	    	if(this.id === undefined){
	    		
			this.id = "button" + jamFrameWork.buttonList.length;
			jamFrameWork.buttonList.push(this.id);
		    jamFrameWork.objectList.children.push(this.id);
		    
		 	} else { 
		 		
		 	this.id = args.id;	
			jamFrameWork.buttonList.push(this.id);
		    jamFrameWork.objectList.children.push(this.id);		
		     	
		 	} 
		 	
		 	
		 	
	    	
	    	
	    	
	    	this.build = function(args){
	    		
	    	var construction = "style='display:inline-block;position:absolute;top:"+args.top+"px;height:"+args.height+"px;left:"+args.left+"px;right:"+args.right+"px;bottom:"+args.bottom+"px;"+
	    	"width:"+args.width+"px;font-family"+args.font+";color:"+args.color+";font-size:"+args.size+"px;'"
  	    	
	        var builder = "<div  " +construction+ " class='"+args.css+"'> <a  id='" + args.id + "'  data-role='button'   href='" + args.link + "'>" + args.text + " </a> </div>";
	        
	    	return builder;
	    	}(this);
	    	
	    	
	    	
 	    	
	    	 
	    	
	    	
	};


jamFrameWork = jamFrameWork;


})();
