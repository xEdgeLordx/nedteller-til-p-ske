
updateView()
function updateView(){
    app.innerHTML = `<div class = "wrapper">
<div class = "countdown">Nedteller til påske: <div>${getTimeRemaining()}</div></div><br>
<div class = "facts">Påske Facts:<br>${getFact()}</div>
        `

}