function ChangeText() {
    i++;
    document.getElementById("sch1").innerHTML=i;
}
var i=0
function Cancel() {
    i=0
    document.getElementById("sch1").innerHTML=i;
}
    var area = document.getElementById("area"),
    ctx = area.getContext("2d");
    ctx.fillStyle="#FF0000";
    ctx.fillRect(0, 0, area.width, area.height);
    ctx.moveTo(50, 50);
ctx.lineTo(150, 50);
