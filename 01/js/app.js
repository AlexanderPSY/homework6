var i = 1
var scrollConfig = {
    top: 4000,
    behavior: "smooth"
}
setInterval(() => {
    i % 4 === 0 ? scrollConfig.top = 4000 : scrollConfig.top = 0
    window.scrollTo(scrollConfig)
    i++
}, 1000)
