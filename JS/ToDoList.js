function  ToDo (  ) {
	var done = false;
	var list = [];

	while (!done) {
		var cmd = prompt("What would you like to do?");

		if (cmd.toLowerCase() == "quit") {
			console.log ("Quitting");
			done = true
		}
		else if (cmd.toLowerCase() == "list") {
			console.log("---- LIST -----");
			
			list.forEach(function(item) { 
         	 	    var itemNumber = list.indexOf(item);
					if (itemNumber == -1)
			   			alert("error at line 17");
                    itemNumber+=1;
					console.log( itemNumber + " : " + item); 
				} );
			console.log("---- END -----");
		}
		else if (cmd.toLowerCase() == "delete") {
			var item = prompt ("what Item Number to delete?");
            console.log("deleteing item # " + item);
			if (item < 1 ) {
				console.log("invalid item");
			}
			else if (item > list.length) {
				console.log("invalid item");
			}
			else {
                if (item == 1) {
                    var newList = list.slice(1,list.length);
                    list = newList;
                }
                else {
                    var left = list.slice(0,item-1);
                    var right = list.slice(item,list.length);
                    list = left.concat(right);
                    console.log("left: " + left);
                    console.log("right: " +  right);
                    console.log("list: " + list);
                }
			}
		}
		else if (cmd.toLowerCase() == "new") {
			var addEntry = prompt("What do you want to add?");
			var count = list.push(addEntry);
			console.log(addEntry + " added to the list");
			console.log (count + " items in list");
		}
	}

}


