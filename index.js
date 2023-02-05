let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 
'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 
'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 
'Chris', 'Pine,', 'Learn', 'JavaScript'];
secretMessage.pop();
console.log(secretMessage.length);
//Use an array method to add the words
secretMessage.push('to','Program');
/*
Change the word easily to the word right by accessing the index and replacing it.*/
secretMessage [7] = 'right';
//Use an array method to remove the first string of the array.
secretMessage.shift();
//Use an array method to add the string Programming to the beginning of the array.
secretMessage.unshift('Programming');
/*Use an array method to re
move the strings get, right, the, first,
 time,, and replace them with the single string know,
 (where start to remove, how many num do u want remove ,
  the number you want to remove).*/
secretMessage.splice(6,5,'know');
console.log(secretMessage )
