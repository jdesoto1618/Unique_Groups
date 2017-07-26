function makeReal(num) {
	//Input is less than 1 or is not an integer
	if (num < 1 || num % 1 !=0) {
		return false;
	//String input
	} else if (typeof(num) == "string") {
		return false;
	} else {
		//Initialize empty array
		var arr = [];
		//Generate the unit position as a 0 or 1. This can be changed as needed
	    arr.push(Math.floor(Math.random()*2));
		//Place a period after the unit position
			arr.push(".");
		//For loop stops at num. This will generate a total of num digits, since i starts at 0
		for(var i=0; i<num; i++) {
			arr.push(Math.floor(Math.random()*10));
	    }
		//Must parseFloat, since this is not an integer. And it must be on the return statement
		return parseFloat(arr.join(""));
	}
}
