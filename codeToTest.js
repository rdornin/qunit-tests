
//reverse a string
function reverse(s) {
  return s.split('').reverse().join('');
}


function bubbleSort(theArray) {
 var i, j;
 //console.log(theArray);
 for (i = theArray.length - 1; i >= 0; i--) {
	 for (j = 0; j <= i; j++) {
		 if (theArray[j + 1] < theArray[j]) {
			 var temp = theArray[j];
			 theArray[j] = theArray[j + 1];
			 theArray[j + 1] = temp;
		 }
	 }
 }
 console.log(theArray);
 return theArray;
}


