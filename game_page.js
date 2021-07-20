player1Name=localStorage.getItem("Player1_Name");
player2Name=localStorage.getItem("Player2_Name");
player1Score=0;
player2Score=0;
document.getElementById("player1Name").innerHTML = player1Name + " : ";
document.getElementById("player2Name").innerHTML = player2Name + " : ";
document.getElementById("player1Score").innerHTML = player1Score;
document.getElementById("player2Score").innerHTML = player2Score;
document.getElementById("playerQuestion").innerHTML = "Question Turn - " + player1Name ;
document.getElementById("playerAnswer").innerHTML = "Answer Turn - " + player2Name ;

function send(){
    getWord=document.getElementById("word").value;
    getWord=getWord.toLowerCase();

    secondLetter=getWord.charAt(1);

    middlePosition=Math.floor(getWord.length/2);
    middleLetter=getWord.charAt(middlePosition);

    lastPosition=getWord.length-1;
    lastLetter=getWord.charAt(lastPosition);

    word=getWord.replace(secondLetter,"_");
    word=word.replace(middleLetter,"_");

    word=word.replace(lastLetter,"_");
    question_word = "<h4 id='word_display'> Q. "+word+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick;='check()'>Check</button>";
    row=question_word+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
    

    
}