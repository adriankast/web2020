
/**
 * handle the social icons fade-in/fade-out
 */
let socialmouse = false
document.getElementById("sociallinks").addEventListener("mouseover", (ht,el) => {
    socialmouse = true
    document.getElementById("sociallinks").style.backgroundImage = "none"
    document.getElementById("sociallinks").style.width = "300px"
    const socitems = document.getElementById("sociallinks").getElementsByTagName("div")
    let count = 0
    nextEl()
    
    function nextEl() {
        if (socitems.item(count) !== null && socialmouse) {
            socitems.item(count).style.display = "inline"
            count++
            setTimeout(nextEl, 400)
        }
    }
})
document.getElementById("sociallinks").addEventListener("mouseout", (ht,el) => {
    socialmouse = false
    document.getElementById("sociallinks").style.width = "80px"
    const socitems = document.getElementById("sociallinks").getElementsByTagName("div")
    let count = socitems.length - 1
    nextEl()
    
    function nextEl() {
        if (socitems.item(count) !== null && !socialmouse) {
            socitems.item(count).style.display = "none"
            count--
            setTimeout(nextEl, 400)
        } 
        else if(!socialmouse) {
            document.getElementById("sociallinks").style.backgroundImage = ""
        }
    }
})

/**
 * Change question mark orientation
 */
document.getElementById("moretocome").addEventListener("mouseover", () => {
    const helper = document.getElementById("moretocome").innerHTML.replace("¿", "?")
    document.getElementById("moretocome").innerHTML = helper
})
document.getElementById("moretocome").addEventListener("mouseout", () => {
    const helper = document.getElementById("moretocome").innerHTML.replace("?", "¿")
    document.getElementById("moretocome").innerHTML = helper
})