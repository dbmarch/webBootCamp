function kebabToSnake ( str ) {
	var newStr = str.replace(/-/gi,'_');
	return (newStr);

	// do {
	// 	var newStr = str.replace(/-/gi,'_');
	// 	str = newStr;
	// 	var dash = str.indexOf ("-");
	// } while ( dash != -1);
 // return(str);	
}