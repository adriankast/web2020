/**
 * Init text insertion
 */
const textLines = document.getElementById("middlecont").getElementsByTagName("span")
for (line in textLines) {
    if (textLines.hasOwnProperty(line)) {
        const safeHtml = textLines[line].innerHTML
        textLines[line].innerHTML = ""
        let count = 1
        for (el of safeHtml) {
            const offset = 1000 + 250 * count
            setTimeout((tar, currentEl) => {
                tar.innerHTML += currentEl 
            }, offset, textLines[line], el)
            count++
        }
    }
}

/**
 * handle the social icons fade-in/fade-out
 */
let socialmouse = false
document.getElementById("sociallinks").addEventListener("mouseover", (ht,el) => {
    socialmouse = true
    document.getElementById("sociallinks").style.backgroundImage = "none"
    document.getElementById("sociallinks").style.width = "350px"
    document.getElementById("sociallinks").style.backgroundColor = "white"
    const socitems = document.getElementById("sociallinks").getElementsByTagName("div")
    let count = 0
    nextEl()
    
    function nextEl() {
        if (socitems.item(count) !== null && socialmouse) {
            socitems.item(count).style.display = "inline"
            count++
            setTimeout(nextEl, 300)
        }
    }
})

document.getElementById("sociallinks").addEventListener("mouseleave", (ht,el) => {
    socialmouse = false
    document.getElementById("sociallinks").style.width = "80px"
    document.getElementById("sociallinks").style.backgroundColor = ""
    const socitems = document.getElementById("sociallinks").getElementsByTagName("div")
    let count = socitems.length - 1
    nextEl()
    
    function nextEl() {
        if (socitems.item(count) !== null && !socialmouse) {
            socitems.item(count).style.display = "none"
            count--
            setTimeout(nextEl, 300)
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