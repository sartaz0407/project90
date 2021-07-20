function addUser() {
    player1Name = document.getElementById("player1name").value;
    player2Name = document.getElementById("player2name").value;
    localStorage.setItem("Player1_Name", player1Name);
    localStorage.setItem("Player2_Name", player2Name);
    window.location = "game_page.html";

}
