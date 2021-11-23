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
 * Change question mark orientation
 */
// document.getElementById("moretocome").addEventListener("mouseover", () => {
//     const helper = document.getElementById("moretocome").innerHTML.replace("¿", "?")
//     document.getElementById("moretocome").innerHTML = helper
// })
// document.getElementById("moretocome").addEventListener("mouseout", () => {
//     const helper = document.getElementById("moretocome").innerHTML.replace("?", "¿")
//     document.getElementById("moretocome").innerHTML = helper
// })