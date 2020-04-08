import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ReportService {

    data = [
        {
            date: '04.10.19 10:23',
            data: [
                'В1: № 2000460789536: pH 1.09',
                'В2: № 2000460789536: pH 2.00',
                'В3: № 2000460789536: pH 4.01',
                'В4: № 2000460789536: pH 7.00',
                'В5: № 2000460789536: pH 9.21',
            ],
            slope: 98.7,
            offset: -0.3,
            user: 'Иванов Генадий Петрович'
        },
        {
            date: '04.10.19 10:23',
            data: [
                'В1: № 2000460789536: pH 1.09',
                'В2: № 2000460789536: pH 2.00',
                'В3: № 2000460789536: pH 4.01',
                'В4: № 2000460789536: pH 7.00',
                'В5: № 2000460789536: pH 9.21',
            ],
            slope: 98.7,
            offset: -0.3,
            user: 'Иванов Генадий Петрович'
        },
        {
            date: '04.10.19 10:23',
            data: [
                'В1: № 2000460789536: pH 1.09',
                'В2: № 2000460789536: pH 2.00',
                'В3: № 2000460789536: pH 4.01',
                'В4: № 2000460789536: pH 7.00',
                'В5: № 2000460789536: pH 9.21',
            ],
            slope: 98.7,
            offset: -0.3,
            user: 'Иванов Генадий Петрович'
        },
        {
            date: '04.10.19 10:23',
            data: [
                'В1: № 2000460789536: pH 1.09',
                'В2: № 2000460789536: pH 2.00',
                'В3: № 2000460789536: pH 4.01',
                'В4: № 2000460789536: pH 7.00',
                'В5: № 2000460789536: pH 9.21',
            ],
            slope: 90.1,
            offset: -0.3,
            user: 'Иванов Генадий Петрович'
        }
    ];

    constructor() {
    }

    getData(date, type): Promise<any> {
        return new Promise<any>(
            resolve => {
                setTimeout(() => {
                    resolve({
                        data: this.data
                    });
                }, 2000);
            }
        );
    }

}
