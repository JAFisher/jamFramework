

(function(){
	
	
	
jamFrameWork.createList = (function(args){
	
	
	// ul li children
	this.children = new Array();
	//font size
	this.size = typeof(args.size) != 'undefined' ? args.size : "12";
    //position parameters;
	this.top = typeof(args.top + 'px') != 'undefined' ? args.top : 0 + 'px';
	this.left = typeof(args.left + 'px') != 'undefined' ? args.left : 0 + 'px';
	this.right = typeof(args.right + 'px') != 'undefined' ? args.right : 0 + 'px';
	this.bottom = typeof(args.bottom + 'px') != 'undefined' ? args.bottom : 0 + 'px';
	//height width
	this.height = typeof(args.height + 'px') != 'undefined' ? args.height : 200 + 'px';
	this.width = typeof(args.width + 'px') != 'undefined' ? args.width : 200 + 'px';
	
	
	
	//assigns an id to the list if one isn't defined then pushes the object list and listObject array.
		    
		    
	if(this.id === undefined){
	    		
	this.id = "list" + jamFrameWork.listList.length;
	jamFrameWork.listList.push(this.id);
    jamFrameWork.objectList.children.push(this.id);
		    
	} else { 
		
	this.id = args.id;	
	jamFrameWork.listList.push(this.id);
	jamFrameWork.objectList.children.push(this.id);		
		     	
	} 
	
	
	
	
	//build command that run the formatted code.
	this.build = function(){
		
	};
	
	
	// adds children list to this list array;
	this.add = function (/*String*/ title,/* HREF */link){
		
	}
	
	

	
	
	
	
	
	
});

	
	
	
	
jamFrameWork = jamFrameWork;

	
})();
