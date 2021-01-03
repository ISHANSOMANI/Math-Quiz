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

number1 = document.getElementById("Numbers").value;
number2 = document.getElementById("Number").value;

function send()
{
    get_word = document.getElementById("Answer").value;
    word = get_word.toLowerCase();
    console.log("word in lowercase - " + word);


mid = Math.floor(word.length/2);
charAt2 = word.charAt(mid);
console.log(charAt2);



remove_charAt2 = word.replace(charAt2,"_");

console.log(remove_charAt2);

question_word = "<h4 id='word_display'>Q. "+ remove_charAt2+"</h4>";
input_box = "<br> Answer: <input type='text' id='input_check_box'>";
check_button = "<br><br> <button class='btn btn-info' onclick='check()'> Check</button>";
row = question_word + input_box + check_button;
document.getElementById("output").innerHTML = row;
document.getElementById("Answer").value = "";
}

question_turn = "player1";
answer_turn = "player2";

function check()
{
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log("word in lowercase -" + answer)

    if(answer == word)
    {
if(answer_turn == "player1")
{
    player1_score = player1_score + 1;
    document.getElementById("Player1_score").innerHTML = player1_score;
}
else
{
    player2_score = player2_score + 1;
    document.getElementById("Player2_score").innerHTML = player2_score;

}
    }

    if (question_turn == "player1")
    {
question_turn = "player2";
document.getElementById("Player_Question").innerHTML = "Question Turn - "+ player2_name;
    }
    else
    {
        question_turn = "player1";
document.getElementById("Player_Question").innerHTML = "Question Turn - "+ player1_name;
    }
    
    if (answer_turn == "player1")
    {
answer_turn = "player2";
document.getElementById("Player_Answer").innerHTML = "Answer Turn - "+ player2_name;
    }
    else
    {
        question_turn = "player1";
document.getElementById("Player_Answer").innerHTML = "Answer Turn - "+ player1_name;
    }

    document.getElementById("output").innerHTML = "";

}





