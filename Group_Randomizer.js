var people = ["Joe", "Amy", "Garrett", "Mark", "Matt", "Sandro", "Sharmila", "Rob", "Bri", "Ritzy"];
var num_people = people.length; //Declare the length and store it
rst = {}; //Initialize an empty object. This will contain the unique pairs

while ( num_people > 1 ) { //As long as there are still two people to be paired(since people gets spliced)
    [1,2].forEach( function( num ) { //Place two people [1,2] next to each other in the new object
       var index =  Math.floor(Math.random() * num_people);
	   console.log(num);
       rst[ num ] = people[ index ];
       people.splice( index, 1 );
       num_people--;
   });
    console.log(rst[ 1 ] + " and " + rst[ 2 ] + " are a group!");
}

//Previous attempt//
// Range is 0 to 10, since using floor the program doesn't reach 10. Thus the range is 0 to 9, ten total possibilites
// var used = [];
// for (i = 0; i < 5; i++) { // Run this six times to generate six groups
//   var pick1 = Math.floor(Math.random()*10);
//   var pick2 = Math.floor(Math.random()*10);
//
// Change a number if they are the same
//   while (pick1 == pick2) {
//     pick2 = Math.floor(Math.random()*10);
//   }
//   used.push(people[pick1] + " " + people[pick2]);
// console.log(people[pick1] + " and " + people[pick2] + " are a group!");
// } //ends for loop
// console.log(used);
