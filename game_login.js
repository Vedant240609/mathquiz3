function login(){
Player1_name=document.getElementById("Player1_name").value;
Player2_name=document.getElementById("Player2_name").value;
localStorage.setItem("player1",Player1_name);
localStorage.setItem("player2",Player2_name);
window.location="game_page.html";
}
