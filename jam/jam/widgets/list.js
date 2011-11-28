(function() {

	jamFrameWork.createList = (function(args) {

		this.buildActive = false;
		// ul li children
		this.children = new Array();
		//font size
		this.size = typeof(args.size) ===  'undefined' ? args.size : "12";
		//position parameters;
		this.top = typeof(args.top) !==  'undefined' ? args.top : 0 ;
		this.left = typeof(args.left) !== 'undefined' ? args.left : 0 ;
		this.right = typeof(args.right) !== 'undefined' ? args.right : 0 ;
		this.bottom = typeof(args.bottom) !== 'undefined' ? args.bottom : 0 ;
		//height width
		this.height = typeof(args.height) !== 'undefined' ? args.height : 200;
		this.width = typeof(args.width) !== 'undefined' ? args.width : 200;

		//assigns an id to the list if one isn't defined then pushes the object list and listObject array.

		if(this.id === undefined) {

			this.id = "list" + jamFrameWork.listList.length;
			jamFrameWork.listList.push(this.id);
			jamFrameWork.objectList.children.push(this.id);

		} else {

			this.id = args.id;
			jamFrameWork.listList.push(this.id);
			jamFrameWork.objectList.children.push(this.id);

		}

		//build command that run the formatted code.

		// adds children list to this list array;
		this.add = function (/*String*/ title,/* HREF */link) {

			var liStyle = "style='font-size:" +args.size+ "px;'";

			//when the list is being displayed it will append the latest children to the ul

			$('#' + this.id).append("<li " + liStyle + ">" + title + "</li>");

		}
		this.build = function(args) {
			this.buildActive = true;
			var divStyle = "style='overflow-x:hidden;overflow-y:auto;position:absolute;left:" + args.left + "px; top:" + args.top  + "px; bottom: " + args.bottom + "px;" + "px; right:" + args.right
			+ "px; width:" +args.width + "px;height:" + args.height + "px;'";
			var listHolder;

			var builder = "<div "+divStyle+" > <ul id='"+args.id+"'  data-role='listview'> ";

			builder = builder + "</ul> </div>";

			return builder;

		}(this);
	});
	jamFrameWork = jamFrameWork;

})();
