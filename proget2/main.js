var str="X";
var playerq = 0, playerz = 0;

var button = document.getElementsByClassName('player-input3');

function player2(){
    var playerInput2 = document.getElementById('player-input2').value;
    var playerInput5 = document.getElementById('player-input4').value;

        setPlayer2(playerInput2);
        setPlayer7(playerInput5);

};
function setPlayer2(name1) {
    window.localStorage.setItem('currentPlayer2', name1);
    renderPlayer2();
  }
  ///////////////////////
  function setPlayer7(name2) {
    window.localStorage.setItem('currentPlayer3', name2);
    renderPlayer2();
  }

  ///
  var playerxxx;
  var playerzz;
function renderPlayer2() {
     playerxxx = window.localStorage.getItem('currentPlayer2');
     playerzz = window.localStorage.getItem('currentPlayer3'); // problem

    
  }


//////////

function startGame(){
    renderPlayer2();

       setMessage(playerzz + " gets to start");
       //playerplayero();
       playerplayero()


}
function setMessage(msg){
    document.getElementById("message").innerText=msg;
}

//checkWinner
var cek;
var win;
var squares2=[];
function checkWinner(){

for(var i=1; i<=9; i++){
 squares2[i]=document.getElementById('A'+i).innerHTML;

    }


 win = document.getElementById("result")
// check horizomtal 


if(squares2[1]==squares2[2]&& squares2[2]==squares2[3] && squares2[1]!=""){
     win.innerText= "win: "+ squares2[1];
     Counter(squares2[1]);
     format2();


    }

  if(squares2[4]==squares2[5]&& squares2[5]==squares2[6] && squares2[4]!=""){
    win.innerText= "win: "+ squares2[4];
    Counter(squares2[2]);
    format2();

}


// 
 if(squares2[7]==squares2[8]&& squares2[8]==squares2[9] && squares2[7]!=""){
    win.innerText= "win: "+ squares2[7];
    Counter(squares2[7]);
    format2();
}

//check vertical
 if(squares2[1]==squares2[4]&& squares2[4]==squares2[7] && squares2[1]!=""){
    win.innerText= "win: "+ squares2[1];
    Counter(squares2[1]); 
    format2();
}
    //
     if(squares2[2]==squares2[5]&& squares2[5]==squares2[8] && squares2[2]!=""){
    win.innerText= "win: "+ squares2[2];
    Counter(squares2[2]);
    format2();
}
        //
     if (squares2[3]==squares2[6]&& squares2[6]==squares2[9] && squares2[3]!=""){
    win.innerText= "win: "+ squares2[3];
    Counter(squares2[3]);
    format2();
}


//check diaginal
 if(squares2[1]==squares2[5]&& squares2[5]==squares2[9] && squares2[1]!=""){
    win.innerText= "win: "+ squares2[1];
    Counter(squares2[1]);
    format2();
}

 if(squares2[3]==squares2[5]&& squares2[5]==squares2[7] && squares2[3]!=""){
        win.innerText= "win: "+ squares2[3];
        Counter(squares2[3]);
        format2();

    }
    
}

function nextMove(square){
    if (square.innerText==""){
        square.innerText=str; 
        switchTurn();
        checkWinner();




    }else{
        setMessage("that square is already use")
    }
}

// Switch between X || O 

function switchTurn(){
    if(str =="X"){ 
            setMessage ("It's  "+ playerxxx + "  turn ")

        str="O"; //O

} 
else  {
    str="X"; 
    setMessage ("It's  "+ playerzz + "  turn ")

}


}
var playerxa
var playero

function Counter (player){
    if(player =="X"){
        playerq++;
        playerxa = document.getElementById("countx").innerText="     "+playerq;
    }
    if(player =="O") {
        playerz++;
        playero = document.getElementById("counto").innerText=playerz;


    }
}

var aa;
var rr;
function playerplayero(){
    aa =  document.getElementById("one").innerText="Player 1: "+playerzz+" - "; //problem 

    rr =  document.getElementById("two").innerText="Player 2: "+playerxxx+"-  ";

 

}

   

function format2(){
    for(var i=1; i<=squares2.length; i++){
     squares2[i]=document.getElementById('A'+i).innerHTML="";


}
}


