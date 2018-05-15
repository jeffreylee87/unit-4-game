$(document).ready(function () {
    $('.restart').hide();

    var yourChosen = false;
    
    var oppChosen = false;

    var attacker = [];

    var defender = [];

    var charactersLeft = 3;
    
    var gameOver = false;

    var startPage = $("body");

    var characters = [{
        health: 100,
        attack: 12,
        counter: 5,
        name: "Pikachu",
    }, {
        health: 120,
        attack: 8,
        counter: 10,
        name: "Charizard",
    }, {
        health: 150,
        attack: 4,
        counter: 20,
        name: "Snorlax",
    }, {
        health: 180,
        attack: 2,
        counter: 25,
        name: "MewTwo",
    }
    ];

    if (yourChosen === false) {
        $(".textBox").text("Message: Please Select Character");
        startPage.on("click", ".available", function () {
            //selects character
            $(this).appendTo('#chosenChar').removeClass("available").addClass("chosenOne");
            //inputs object data into chosen character 
            attacker.push(characters[$(this).attr("value")].health);
            attacker.push(characters[$(this).attr("value")].attack);
            attacker.push(characters[$(this).attr("value")].counter);
            attacker.push(characters[$(this).attr("value")].name);
            $(".textBox").text("Great, now please select your opponent!");
            $(".available").appendTo("#enemyAvail").removeClass("available").addClass('enemyChoose');
        });
    }

    //we just chose
    yourChosen = true;

    //choosing the opponent
    function opponentChoose (){
    if (yourChosen === true) {
        startPage.on("click", ".enemyChoose", function () {
            $(this).appendTo("#currentOpp").removeClass("enemyChoose").addClass('fightHim');
            defender.push(characters[$(this).attr("value")].health);
            defender.push(characters[$(this).attr("value")].attack);
            defender.push(characters[$(this).attr("value")].counter);
            defender.push(characters[$(this).attr("value")].name);
            $(".textBox").text("Now attack!!!! He's trying to take your lunch money");
        });
    } else if (charactersLeft === 0){
        
    }
}

opponentChoose();


    $(".attackButton").on("click", function () {
        if (attacker[0]>0 && defender[0] >0){
            defender[0] = defender[0] - attacker[1];
            attacker[0] = attacker[0] - defender[2];
            $(".textBox").text(`You attacked opponent for ${attacker[1]} damage. Opponent attacked you for ${defender[2]}`);
            $(".chosenOne .card-footer").text(`Health: ${attacker[0]}`);
            $(".fightHim .card-footer").text(`Health: ${defender[0]}`);
            attacker[1] += attacker[1];
            if(attacker[0]<= 0){
                $('.textBox').text("You have been defeated loser, press restart to fight again you little man");
                $('.restart').show();
            } else if (defender[0]<= 0) {
                    charactersLeft--;
                    $(".textBox").text(`You have defeated ${defender[3]}, choose another enemy ${charactersLeft} characters left.`);
                    $(".fightHim").remove();
                    opponentChoose();
                    
                }
            }
    })





 








    $('.restart').on('click', function () {
        location.reload();
    })


});


