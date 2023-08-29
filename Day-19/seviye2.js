function getDateAndTime(){
    const dateObject = new Date()

    function getHours(){
        return `Hour: ${dateObject.getHours()}`;
    }

    function getMinutes(){
        return `Minutes: ${dateObject.getMinutes()}`;
    }

    function getDate(){
        return `Date: ${dateObject.getDate()}`;
    }

    return {
        getHours: getHours(),
        getMinutes: getMinutes(),
        getDate: getDate()
    }
    
}

const dateAndTime = getDateAndTime();

dateAndTime.getDate   
dateAndTime.getHours  
dateAndTime.getMinutes