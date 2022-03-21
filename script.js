var courses = ['free', 'standart', 'premium']



fillCards()
function fillCards(){
    var origCard = document.getElementById("origCard")
    for(var i = 0; i < courses.length; i++){
        var cloneCard = origCard.cloneNode(true)
        var cardBox = document.getElementsByClassName("cardBox")[0]
        cardBox.appendChild(cloneCard)
        var mainText = cloneCard.getElementsByClassName("mainText")[0]
        mainText.innerHTML = courses[i]
    }
}   