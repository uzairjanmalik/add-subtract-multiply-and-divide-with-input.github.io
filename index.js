function add() {
    const num1 = parseInt(document.getElementById("user").value);
    const num2 = parseInt(document.getElementById("type").value);
    document.getElementById("hd").innerText = num1+num2;
    document.getElementById("user").value = "";
    document.getElementById("type").value = "";
}
function sub(){
    const num1=parseInt(document.getElementById("user").value);
    const num2=parseInt(document.getElementById("type").value);
    document.getElementById("hd").innerText =num1-num2;
    document.getElementsByid("user").value="";
    document.getElementsByid("type").value="";
}
function mult(){
    const num1=parseInt(document.getElementById("user").value);
    const num2=parseInt(document.getElementById("type").value);
    document.getElementById("hd").innerText =num1*num2;
    document.getElementsByid("user").value="";
    document.getElementsByid("type").value="";
}
function divi(){
    const num1=parseInt(document.getElementById("user").value);
    const num2=parseInt(document.getElementById("type").value);
    document.getElementById("hd").innerText =num1/num2;
    document.getElementsByid("user").value="";
    document.getElementsByid("type").value="";
}
