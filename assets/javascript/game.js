$(document).ready(function () {
    $('.restart').hide();

    var yourChosen = false;

    var ash;

    var gary;

    var charactersBeat = 0;

    var gameOver = false;

    var startPage = $("body");

    var characters = [
        {
            name: "Pikachu",
            health: 100,
            attack: 10,
            counter: 15,
        },
        {
            name: "Charizard",
            health: 120,
            attack: 8,
            counter: 17,
        },
        {
            name: "Snorlax",
            health: 150,
            attack: 6,
            counter: 19,
        },
        {
            name: "MewTwo",
            health: 180,
            attack: 6,
            counter: 22,
        }
    ];
    //choose character

    if (yourChosen === false) {
        $(".textBox").text("Message: Please Select Character");
        startPage.on("click", ".available", function () {
            $(this).appendTo('#chosenChar').removeClass("available").addClass("chosenOne");
            $(".textBox").text("Great, now please select your opponent!");
            $(".available").appendTo("#enemyAvail").removeClass("available").addClass('enemyChoose');
        });    
    }

    //we just chose
    yourChosen = true;

    //choosing the opponent
    if (yourChosen === true){
        startPage.on("click", ".enemyChoose", function(){
            $(this).appendTo("#currentOpp").removeClass("enemyChoose").addClass('fightHim');
            $(".textBox").text("Now attack!!!! He's trying to take your lunch money");
        });
    }

    $(".attackButton").on("click", function(){
        

    })
    













        $('.restart').on('click', function () {
            location.reload();
        })


    });


