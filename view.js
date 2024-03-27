updateView()
function updateView(){
    let TimeToEaster = new Date()
    app.innerHTML = `<div class = "wrapper">
<div class = "countdown">Nedteller til påske</div>
<div class = "facts">Påske Facts</div>
        <div>${getTimeRemaining()}</div>`

}