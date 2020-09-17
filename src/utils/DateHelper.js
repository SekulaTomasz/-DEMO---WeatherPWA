import { language } from '../shared/index';

const DateHelper = {
    getDayNameFromDate(date) {
        const dayNumber = date.getDay();
        switch(dayNumber){
            case 0: 
                return language.pl.weekDaysShortName.sunday;
            case 1: 
                return language.pl.weekDaysShortName.monday;
            case 2:
                return language.pl.weekDaysShortName.tuesday;
            case 3: 
                return language.pl.weekDaysShortName.wednesday;
            case 4: 
                return language.pl.weekDaysShortName.thursday;
            case 5:
                return language.pl.weekDaysShortName.friday;
            default:
                return language.pl.weekDaysShortName.saturday;
        }
    }
}

export default DateHelper;