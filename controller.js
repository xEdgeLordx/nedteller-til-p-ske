function getTimeRemaining(){
    let now = new Date().getTime();

    let timeRemaining = påske - now;

    let remainingDays = Math.floor(timeRemaining / (1000 * 60 * 60 * 24))
    let remainingHours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let remainingMin = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    return `<div>Det er ${remainingDays} dager, ${remainingHours} timer og ${remainingMin} minutter til påske.</div>`



}
function getFact(){
    let now = new Date().getTime();

    let timeRemaining = påske - now;

    let remainingDays = Math.floor(timeRemaining / (1000 * 60 * 60 * 24))
    let remainingHours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    if(remainingDays == 3){
        return "Palmesøndag er søndag før påske. Den feires til minne om Jesu inntog i Jerusalem."
    } else if(remainingDays == 2){
        return "Skjærtorsdag er torsdag i den stille uke. Den feires i kirken til minne om at Jesus, etter denne tidens jødiske tradisjon, på denne kvelden spiste påskemåltidet med sine disipler, og at han i løpet av dette måltidet innstiftet nattverden."
    } else if(remainingDays == 1){
        return "Langfredag er fredag i den stille uke. Dagen feires til minne om Jesu død"
    } else if(remainingDays == 0 && remainingHours == 0){
        return "Påskedag er dagen da Jesus, ifølge evangeliene, stod opp fra de døde"
    }
    
}