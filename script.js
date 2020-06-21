let socialmouse = false

document.getElementById("sociallinks").addEventListener("mouseover", (ht,el) => {
    socialmouse = true
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
    }
})