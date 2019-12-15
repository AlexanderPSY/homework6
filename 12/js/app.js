var inputElement = document.getElementById('validate')

function checkAndMark(element){
    isNaN(element.value)?element.style.color='red':element.style.color='green'
}
setInterval(checkAndMark, 200, inputElement)
