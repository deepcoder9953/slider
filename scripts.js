 let index = 0;
slideFun(index)


function onSlide(num){
    index = index + num
    slideFun(index)
}

function slideFun(idx){
    var alldivs = document.querySelectorAll(".slides")


    if(idx<=0){
        index = alldivs.length
    }
    
    else if(idx>alldivs.length){
        index = 1
    }

    for(var i=0; i<alldivs.length; i++){
        alldivs[i].style.display = "none"
    }

   if (alldivs[index - 1]) {
    alldivs[index - 1].style.display = "block";
} else {
    console.error("Slide not found for index:", index);
}
}
