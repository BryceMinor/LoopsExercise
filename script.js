for (i = 1; i <= 7; i++) {
    console.log(i);
}

for (i = 5; i <= 25; i+=4){
    console.log(i);
}

const wizards = ["Harry Potter", "Hermione Granger", "Ron Weasley"];
for (items of wizards){
    console.log(items);
}

let harryPotterMovies = 0;

while (harryPotterMovies < 8){
    (harryPotterMovies++);
}

console.log(harryPotterMovies);

const hogwartsHouses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

for (houses of hogwartsHouses){
    for (letters of houses){
        console.log(letters);
    }
}
