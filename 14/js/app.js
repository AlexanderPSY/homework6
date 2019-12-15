var liElement = document.getElementById('myunique')

var newLiElement = document.createElement('li')
newLiElement.innerText='!!!'
liElement.parentNode.insertBefore(newLiElement,liElement)
