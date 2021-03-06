import {Component, Input, OnInit} from '@angular/core';
import {ReportService} from './report.service';

export interface Report {
    date: string;
    data: string[];
    slope: number;
    offset: number;
    user: string;
}

@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

    loading = false;


    @Input()
    type = '';

    data: Report[] = [
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

    constructor(private reportService: ReportService) {
    }

    generateReport(data) {
        this.loading = true;
        this.type = data.type;
        this.reportService.getData(data.period, data.type).then((result) => {
            this.data = result.data;
            this.loading = false;
        });
    }

    ngOnInit(): void {

    }

}
