function bold() {
  var ban = document.getElementById("texto").style.fontWeight;
   if (ban == 'normal') {
       document.getElementById("texto").style.fontWeight ="bold";
   }  else {
       document.getElementById("texto").style.fontWeight ="normal";
   } 
}
function italic() {
    var italic = document.getElementById("texto").style.fontStyle;
    if (italic == 'normal'){
        document.getElementById("texto").style.fontStyle="italic";
    } else {
        document.getElementById("texto").style.fontStyle="normal";
    }
}
function underline() {
    document.getElementById("texto").style.textDecoration="underline";
}
var changefont = function(font){
    console.log(font.value)
    document.getElementById("texto").style.fontFamily=font.value;
}
var changesize = function(size){
    console.log(size.value)
    document.getElementById("texto").style.fontSize=size.value;
}
    $(".btn").hide();

    $("#b1").mouseenter(function(){
        $("#btn1").show();
    })
    $("#b1").mouseleave(function(){
        $("#btn1").hide()
    })
    
    $("#b2").mouseenter(function(){
        $("#btn2").show();
    })
    $("#b2").mouseleave(function(){
        $("#btn2").hide()
    })
    
    $("#b3").mouseenter(function(){
        $("#btn3").show();
    })
    $("#b3").mouseleave(function(){
        $("#btn3").hide()
    })
    
    $("#a1").mouseenter(function(){
        $("#btn4").show();
    })
    $("#a1").mouseleave(function(){
        $("#btn4").hide()
    })
    
    $("#a2").mouseenter(function(){
        $("#btn5").show();
    })
    $("#a2").mouseleave(function(){
        $("#btn5").hide()
    })
    
    $("#a3").mouseenter(function(){
        $("#btn6").show();
    })
    $("#a3").mouseleave(function(){
        $("#btn6").hide()
    })
    var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("btn1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

  