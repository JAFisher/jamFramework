(function() {

	//add the event to the object then pass the event parameters as an obtainable value
	//added a target in so it will stop all propergation on children
	//this is a scaleable method, need a die event to unbind

	jamFrameWork.addEvent = function(args) {
		$('#' + args.id).live(args.evt, function(event) {

			if ($(event.target).is("#" + args.id)) {
				var evt = {};
				evt.x = event.clientX;
				evt.y = event.clientY;
				//evt.target = event.target;
				evt.id = args.id;
				//need to JSON the parameter so it can be passed back through in it orinigal form.
				evt = JSON.stringify(evt);
				arguments = JSON.stringify(args.args);

				this.funcCall = args.fnc +"("+ evt + " , " + arguments + ")";
				console.log(args.fnc);
				Function (this.funcCall)();
			}
		});
	};
	window.jamFrameWork = jamFrameWork;

})();
