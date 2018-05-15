$(document).ready(function () {
    $('.restart').hide();
    

    var yourChosen = false;

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
        $(".textBox").text("Message: Please Select Character, TURN UP SOUND to hear epicness!!!");
        startPage.on("click", ".available", function () {
            document.getElementById('audiotag').play().autoplay; 
            //selects character
            $(this).appendTo('#chosenChar').removeClass("available").addClass("chosenOne");
            //inputs object data into chosen character 
            attacker.push(characters[$(this).attr("value")].health);
            attacker.push(characters[$(this).attr("value")].attack);
            attacker.push(characters[$(this).attr("value")].counter);
            attacker.push(characters[$(this).attr("value")].name);
            $(".textBox").text("Great, now please select your opponent! Also if your sound still isn't up, your missing out on epicness");
            $(".available").appendTo("#enemyAvail").removeClass("available").addClass('enemyChoose');
        });
    }

    //we just chose
    yourChosen = true;

    $(".restart").on("click", function(){
        location.reload();
    })

    //choosing the opponent
    function opponentChoose() {
        if (yourChosen === true) {
            startPage.on("click", ".enemyChoose", function () {
                $(this).appendTo("#currentOpp").removeClass("enemyChoose").addClass('fightHim');
                defender.push(characters[$(this).attr("value")].health);
                defender.push(characters[$(this).attr("value")].attack);
                defender.push(characters[$(this).attr("value")].counter);
                defender.push(characters[$(this).attr("value")].name);
                $(".textBox").text("Now attack!!!! He's trying to take your lunch money");
            });
        }
    }

    //fight opponent
    function battle() {
        $(".attackButton").on("click", function () {
            if (attacker[0] > 0) {
                defender[0] = defender[0] - attacker[1];
                attacker[0] = attacker[0] - defender[2];
                $(".textBox").text(`You attacked opponent for ${attacker[1]} damage. Opponent attacked you for ${defender[2]}`);
                $(".chosenOne .card-footer").text(`Health: ${attacker[0]}`);
                $(".fightHim .card-footer").text(`Health: ${defender[0]}`);
                attacker[1] += attacker[1];
                if (defender[0]<= 0){
                    charactersLeft--;
                    $(".textBox").text(`You have defeated ${defender[3]}, and you have ${charactersLeft} characters remaining`);
                    $(".fightHim").remove();
                    defender = [];
                    opponentChoose();
                    if(charactersLeft === 0){
                        $(".textBox").text("You win big man!!!! Hit restart to play again");
                        $(".restart").show();
                        }
                }
            }else{
                $(".textBox").text("You lose loser!!! Hit restart to attempt to win, but I highly doubt it");
                $(".restart").show();
            }
        })
    }

    opponentChoose();
    battle();

    

    




});

