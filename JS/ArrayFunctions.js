function printReverse(elementList) {
   for (var i = elementList.length; i > 0; i--) {
      console.log(elementList[i-1]);
   }

}

function isUniform(list) {
    var  identical= true;
    item1=list[0];
    list.forEach (function (item) {
        if (item !== item1) identical = false;
    } );
    return(identical);
 }


 function sumArray (list) {
    var sum = 0;
    list.forEach( function(item) {
        if (!isNaN(item))
           sum+=item;
    });
    return (sum);
 }

 function max ( list ) {
    var max = Number.MIN_SAFE_INTEGER;
    list.forEach( function (item) {
        var number=Number(item);
        if (!isNaN(number))
           max = number > max ? number : max ;
    });
    return (max);
 }


 Array.prototype.myForEach = function(func) {
  for (var i = 0; i < this.length; i++ ) {
        func(this[i]);
  }
 }