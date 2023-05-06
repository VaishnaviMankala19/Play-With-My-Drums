var len=document.querySelectorAll(".drum").length;

// click listeners
for(var i=0;i<len;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
    {
        var b=this.innerHTML;
        sounds(b);
        animate(b);
    });
}


// keypress listners
document.addEventListener("keypress",function(event){
    sounds(event.key);
    sounds(event.key);
})



//function of sounds 
function sounds(key)
{
    switch(key)
    {
      case "w":
            var t=new Audio("tom-1.mp3");
            t.play();
            break;
        
    case "a":
        var tom2 = new Audio("tom-2.mp3");
        tom2.play();
        break;
  
      case "s":
        var tom3 = new Audio('tom-3.mp3');
        tom3.play();
        break;
  
      case "d":
        var tom4 = new Audio('tom-4.mp3');
        tom4.play();
        break;
  
      case "j":
        var snare = new Audio('snare.mp3');
        snare.play();
        break;
  
      case "k":
        var crash = new Audio('crash.mp3');
        crash.play();
        break;
  
      case "l":
        var kick = new Audio('kick-bass.mp3');
        kick.play();
        break;
  
  
      default: console.log(key); 
    
    }

}


function animate(key)
{
    var f = document.querySelector("." + key);
    f.classList.add("animates");

    setTimeout(function(){
        f.classList.remove("animates")
    },100);
}





