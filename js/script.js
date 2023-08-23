function typeWrite(text){
    const textArray = text.innerHTML.split('');
    text.innerHTML = ' ';
    textArray.forEach(function(letter, i){
      
    setTimeout(function(){
        text.innerHTML += letter;
    }, 25 * i)

  });
}

var text = document.querySelector("#text-about-me");
typeWrite(text);