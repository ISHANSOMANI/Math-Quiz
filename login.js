function addUser(){
    player1_name = document.getElementById("player1nameinput").value;
    player2_name = document.getElementById("player2nameinput").value;

    localStorage.setItem("player1_name",player1_name);
    localStorage.setItem("player2_name",player2_name);

    window.location = "index2.html";
}

