export class Utils {

    static getConstants():any{
        return {
            //API_HOST:'http://genlem.iologue.co:1339/api/',
            // API_HOST:'http://localhost:1337/api/',
            API_HOST:'http://localhost:3000/api/',
            CURRENCY:'$',
        };
    }

    static parseAnalyticsChartData(data) :any{
        // [ '20190526', '1', '1', '0.0', '1', '100.0', '0.0', '0.0', '0.0' ],
        // [date, session, bounces, sessionDuration, hits, bounceRate,
        // avgSessionDuration, avgServerResponse, avgPageLoadTime

        //only parse date, session, hits

        const dates = []; const hits = []; const sessions = [];

        data.map(function (k,i){
            const row = data[i];
            let year = row[0].substring(0,4);
            let month = row[0].substring(4,6);
            let day = row[0].substring(6);



            const formatted_date = year+"/"+month+"/"+day;

            dates.push(formatted_date);
            hits.push([formatted_date,row[4]]);
            sessions.push([formatted_date,row[1]]);

        })

        return {
            dates: dates,
            hits: hits,
            sessions: sessions
        };

    }

    static isMobile() {
        return window && window.matchMedia('(max-width: 767px)').matches;
    }
    static ngbDateToDate(ngbDate: { month, day, year }) {
        if (!ngbDate) {
            return null;
        }
        return new Date(`${ngbDate.month}/${ngbDate.day}/${ngbDate.year}`);
    }
    static dateToNgbDate(date: Date) {
        if (!date) {
            return null;
        }
        date = new Date(date);
        return { month: date.getMonth() + 1, day: date.getDate(), year: date.getFullYear() };
    }
    static scrollToTop(selector: string) {
        if (document) {
            const element = <HTMLElement>document.querySelector(selector);
            element.scrollTop = 0;
        }
    }
    static genId() {
        let text = '';
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
}
