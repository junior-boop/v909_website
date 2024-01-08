const month = ['Jan.', 'Fev.', 'Mar.', 'Avr.', 'Mai', 'Juin', 'Juil.', 'Aou.', 'Sept.', 'Oct.', 'Nov.', 'Dec.']
const day = ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.']

export  function GetDate() {
    const dday = new Date()

    const calcjour = dday.getDate() > 9 ? dday.getDate() : `0${dday.getDate()}`

    const dateObject = {
        annee : dday.getFullYear(),
        mois : month[dday.getMonth()],
        journee : day[dday.getDay()],
        jour : calcjour,
        heure : dday.getHours(),
        minute : dday.getMinutes()
    }

    return dateObject
}