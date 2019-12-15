var olElement = document.getElementsByTagName('ol')[0]

setTimeout(() => {
    console.log(olElement.removeChild(olElement.lastElementChild))
}, 3000)