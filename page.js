player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("Player1_name").innerHTML = player1_name + ":";
document.getElementById("Player2_name").innerHTML = player2_name + ":";

document.getElementById("Player1_score").innerHTML = player1_score;
document.getElementById("Player2_score").innerHTML = player2_score;

document.getElementById("Player_Question").innerHTML = "Question Turn - "+player1_name;
document.getElementById("Player_Answer").innerHTML = "Answer Turn - " + player2_name;

function send()
{
    number1 = document.getElementById("no_1").value;
    number2 = document.getElementById("no_2").value;
actual_answer = parseInt(number1) * parseInt(number2)
console.log(actual_answer)

 question_number = "<h4>Q. "+ number1 +" X " +number2 + "</h4>";
 input_box = "<br><br> Answer: <input type='text' id='input_box'>";
 check_button = "<br><br><button class='btn btn-primary' onclick='check()'>Check</button>"
 row = question_number + input_box + check_button;
 document.getElementById("output").innerHTML = row;
 document.getElementById("no_1").value = "";
 document.getElementById("no_2").value = "";

}

question_turn = "player1";
answer_turn = "player2";

function check()
{
    get_answer = document.getElementById("input_box").value;

    if(get_answer == actual_answer)
    {
        if(answer_turn == "player1"){
            player1_score = player1_score + 1;
            document.getElementById("Player1_score").innerHTML = player1_score;
    
        }
        else{
            player2_score = player2_score + 1;
            document.getElementById("Player2_score").innerHTML = player2_score;
        }
    }
    if (question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("Player_Question").innerHTML = "Question Turn - "+ player2_name;
    }
    else{
        question_turn = "player1";
        document.getElementById("Player_Question").innerHTML = "Question Turn - "+ player1_name;
    }
    if (answer_turn == "player1"){
        answer_turn = "player2";
        document.getElementById("Player_Answer").innerHTML = "Answer Turn - "+ player2_name;
    }
    else{
        answer_turn = "player1";
        document.getElementById("Player_Answer").innerHTML = "Answer Turn - "+ player1_name;
    }
}