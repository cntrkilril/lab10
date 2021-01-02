var FirstSum=0;
var SecondSum=0;
var NumberOfPlayers=1;
var NumberOfWinner=1;
var Znak=[" ","X","O"]
var a=["1","2","3","4","5","6","7","8","9","10"]
var start=1;
function NewRound() {
    start=1;
    Game();
}
function ChangePlayers() {
    if (NumberOfPlayers==1) {
        document.getElementById("NumberPlayers").innerHTML="Первый";
        document.getElementById("ZnakPlayers").innerHTML=Znak[1];
    }
    else {
        document.getElementById("NumberPlayers").innerHTML="Второй";
        document.getElementById("ZnakPlayers").innerHTML=Znak[2];
    }
}
function ChangeInfo() {
        document.getElementById("Znak1").innerHTML=Znak[1];
        document.getElementById("Znak2").innerHTML=Znak[2];
}
function ChangeSum() {
    if (NumberOfPlayers==1) {
        FirstSum++
        document.getElementById("sch1").innerHTML=FirstSum;
    }
    else {
        SecondSum++
        document.getElementById("sch2").innerHTML=SecondSum;
    }
}
function Game() {
    var area = document.getElementById("area");
    var ctx = area.getContext('2d');
    Cancel()
    function DrawStartArea() {
        ctx.fillStyle="white"
        ctx.fillRect(0, 0, area.width, area.height);
        ctx.beginPath();
        ctx.moveTo(100,0);
        ctx.lineTo(100,300);
        ctx.moveTo(200,300);
        ctx.lineTo(200,0);
        ctx.moveTo(0,100);
        ctx.lineTo(300,100);
        ctx.moveTo(300,200);
        ctx.lineTo(0,200);
        ctx.strokeStyle="black";
        ctx.stroke();
    }
    function DrawWinner() {
        ctx.globalAlpha=0.5;
        ctx.fillStyle="white";
        ctx.fillRect(0, 0, area.width, area.height);
        ctx.font="25px Arial";
        ctx.textAlign = "center";
        ctx.fillStyle="black";
        ctx.globalAlpha=1;
        if (NumberOfWinner==1) {
            ctx.fillText("Выиграл Первый",150,150);
        }
        if (NumberOfWinner==2) {
            ctx.fillText("Выиграл Второй",150,150);
        }
    }
    function DrawNichya() {
        ctx.globalAlpha=0.5;
        ctx.fillStyle="white";
        ctx.fillRect(0, 0, area.width, area.height);
        ctx.font="25px Arial";
        ctx.textAlign = "center";
        ctx.fillStyle="black";
        ctx.globalAlpha=1;
        ctx.fillText("Ничья",150,150);
    }
    function Cancel() {
        if (start==1) {
            if (a[1]==a[2] && a[2]==a[3] || a[4]==a[5] && a[5]==a[6] || a[7]==a[8] && a[8]==a[9] || a[1]==a[4] && a[4]==a[7] || a[2]==a[5] && a[5]==a[8] || a[3]==a[6] && a[6]==a[9] || a[1]==a[5] && a[5]==a[9] || a[3]==a[5] && a[5]==a[7]) {
                DrawStartArea();
                if (NumberOfWinner==1) {
                    Znak=[" ","X","O"];
                }
                else {
                    Znak=[" ","O","X"];
                }
                if (NumberOfPlayers==1) {
                    document.getElementById("NumberPlayers").innerHTML="Второй";
                    document.getElementById("ZnakPlayers").innerHTML=Znak[2];
                    NumberOfPlayers=2;
                }
                else {
                    document.getElementById("NumberPlayers").innerHTML="Первый";
                    document.getElementById("ZnakPlayers").innerHTML=Znak[1];
                    NumberOfPlayers=1;
                }
                ChangeInfo()
                a=["1","2","3","4","5","6","7","8","9","10"]
            }
            else {
                DrawStartArea();
                if (NumberOfWinner==1) {
                    Znak=[" ","X","O"];
                }
                else {
                    Znak=[" ","O","X"];
                }
                if (NumberOfWinner==1) {
                    document.getElementById("NumberPlayers").innerHTML="Первый";
                    document.getElementById("ZnakPlayers").innerHTML=Znak[1];
                    NumberOfPlayers=1;
                }
                else {
                    document.getElementById("NumberPlayers").innerHTML="Второй";
                    document.getElementById("ZnakPlayers").innerHTML=Znak[2];
                    NumberOfPlayers=2;
                }
                ChangeInfo()
                a=["1","2","3","4","5","6","7","8","9","10"]
            }
            start=0;
        }
        else {
        FirstSum=0;
        SecondSum=0;
        NumberOfPlayers=1;
        NumberOfWinner=1;
        Znak=[" ","X","O"]
        a=["1","2","3","4","5","6","7","8","9","10"]
        document.getElementById("sch1").innerHTML=0;
        document.getElementById("sch2").innerHTML=0;
        DrawStartArea()
        ChangePlayers()
        ChangeInfo()
        }
}
    function Krestik(x,y) {
        ctx.beginPath();
        ctx.moveTo(x-25,y-25);
        ctx.lineTo(x+25,y+25);
        ctx.moveTo(x-25,y+25);
        ctx.lineTo(x+25,y-25);
        ctx.strokeStyle="blue";
        ctx.stroke();                 
    }
    function Nolik(x,y) {
        ctx.beginPath();
        ctx.arc(x,y,25,0,Math.PI*2,true)
        ctx.strokeStyle="red";
        ctx.stroke();                 
    }
    function Proverka() {
            if (a[1]==a[2] && a[2]==a[3] || a[4]==a[5] && a[5]==a[6] || a[7]==a[8] && a[8]==a[9] || a[1]==a[4] && a[4]==a[7] || a[2]==a[5] && a[5]==a[8] || a[3]==a[6] && a[6]==a[9] || a[1]==a[5] && a[5]==a[9] || a[3]==a[5] && a[5]==a[7]) {
                NumberOfWinner=NumberOfPlayers;
                DrawWinner();
                ChangeSum();
            }
            else {
                var g=0;
                for (var j=1;j<10;j++) {
                    if (a[j]=="X" || a[j]=="O") {
                        g++
                    }
                }
                if (g==9) {
                    DrawNichya();
                }
                else {
                    g=0;
                }
            }
        }
    function LogicOfGame(x,y,k) {
        if (a[k]!="X" && a[k]!="O") {
            if (NumberOfPlayers==1) {
            a[k]=Znak[1];
            if (Znak[1]=="X") {
                Krestik(x,y)
            }
            else {
                Nolik(x,y)
            }
            Proverka();
            NumberOfPlayers=2;
            ChangePlayers();
        }
            else if (NumberOfPlayers==2) {
                a[k]=Znak[2];
                if (Znak[2]=="X") {
                    Krestik(x,y)
            }
                else {
                    Nolik(x,y)
                }
            Proverka();
            NumberOfPlayers=1;
            ChangePlayers()
        }
        }
    }
    area.onclick = function () {
        var x=event.offsetX;
        var y=event.offsetY;
        if (x>0 && x<100 && y>0 && y<100) {
            x=50
            y=50
            k=1
            LogicOfGame(x,y,k)
        }
        if (x>100 && x<200 && y>0 && y<100) {
            x=150
            y=50
            k=2
            LogicOfGame(x,y,k)
        }
        if (x>200 && x<300 && y>0 && y<100) {
            x=250
            y=50
            k=3
            LogicOfGame(x,y,k)
        }
        if (x>0 && x<100 && y>100 && y<200) {
            x=50
            y=150
            k=4
            LogicOfGame(x,y,k)
        }
        if (x>100 && x<200 && y>100 && y<200) {
            x=150
            y=150
            k=5
            LogicOfGame(x,y,k)
        }
        if (x>200 && x<300 && y>100 && y<200) {
            x=250
            y=150
            k=6
            LogicOfGame(x,y,k)
        }
        if (x>0 && x<100 && y>200 && y<300) {
            x=50
            y=250
            k=7
            LogicOfGame(x,y,k)
        }
        if (x>100 && x<200 && y>200 && y<300) {
            x=150
            y=250
            k=8
            LogicOfGame(x,y,k)
        }
        if (x>200 && x<300 && y>200 && y<300) {
            x=250
            y=250
            k=9
            LogicOfGame(x,y,k)
        }
    };
}

