const FulImgBox = document.getElementById("fulImgBox");
fulImg = document.getElementById("fulImg");

function openFulImg(reference){
    FulImgBox.style.display = "flex";
    fulImg.src =reference
}
function closeImg(){
    FulImgBox.style.display = "none"
}