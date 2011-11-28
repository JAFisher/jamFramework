(function() {

	//views contain all the objects required by the builder it then adds them in by executing there build method.

	jamFrameWork.createView = function(args) {

		this.width = typeof(args.width) !== 'undefined' ? args.width : '320';
		this.height = typeof(args.height) !== 'undefined' ? args.height : '480';
		this.children = new Array();
		this.pageid = 	args.pageid;
		this.pushPageid = typeof(jamFrameWork.pageList.push(args.pageid)) != jamFrameWork.pageList.push(jamFrameWork.pageList.length);
		this.header = args.header;
		//assigns an id if one isn't given

		if(args.id === undefined) {

			this.id = "view" + jamFrameWork.viewList.length;
			jamFrameWork.viewList.push(this.id);
			jamFrameWork.objectList.children.push(this.id);

		} else {
			this.id = args.id;
			jamFrameWork.objectList.children.push(this.id);
		}

		// assigns the touch event to the array of events... this gets checked when an object is added to a view.
		//add a secondary option to allow users to pass there own parameters.
 
		if(args.onTouch != null) {
 			this.onTouch = ({evt : "tap", id : this.id, fnc : args.onTouch.fnc, args: args.onTouch.args });
		} else {
			args.onTouch == null;
		}

		if(args.onSwipe != null) {
			this.onSwipe = ({evt : "swipe", id : this.id, fnc : args.onSwipe});
		} else {
			args.onSwipe == null;
		}

		//configure the page - id:
		//passes all the arguments required to build the div
		this.build = function(args) {

			var id = args.id;
			var hw = "height:" + args.height +"px;" + "width:" + args.width + "px;";
			var page = "<div data-role='page' id='"+ args.pageid+ "' >";
			var view = '<div data-role="content" style="'+hw+'" id="'+id+'"> </div>';
			var pageend = "</div>";

			document.write(page + view + pageend);

			//header
			if(args.header != null) {
				$('#' + args.pageid).prepend('<div data-role="header" >' + args.header + '</div>');
			}

			//event triggers
			if(args.onTouch != null) {
				jamFrameWork.addEvent(args.onTouch);
			};

			if(args.onSwipe != null) {

				jamFrameWork.addEvent(args.onSwipe);
			};

		}({
			onTouch:this.onTouch,
			onSwipe:this.onSwipe,
			height:this.height,
			width:this.width,
			id:this.id,
			pageid:this.pageid,
			header:this.header
		});

		// adds objects into the view. define these methods after the build execution
		this.add = function(Widget) {
			//collects all the children in an array;
			$("#" + this.id).append(Widget.build);

			//checks to see if the Widget has an effect attached to it.
			if(Widget.fx !== undefined) {
				$("#"+ Widget.id).data('transition', Widget.fx);

				if(Widget.direction !== undefined) {
					$("#"+ Widget.id).data('direction', Widget.direction);

				};

			};

			$("#" + Widget.id).data('transition')

			this.children.push(Widget);
		};
		//css method allows you to assign as many css class elements as possible. define methods after build execution
		this.css = function() {

			for (var i=0; i < arguments.length; i++) {
				$("#" + this.id).addClass(arguments[i]);
			};

		}
		//builds all the children in order ^_^.

	};
	jamFrameWork = jamFrameWork;

})();
