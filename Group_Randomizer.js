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
