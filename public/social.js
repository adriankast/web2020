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