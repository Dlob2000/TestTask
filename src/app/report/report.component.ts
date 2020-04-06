import { Component, OnInit } from '@angular/core';

export  interface Report {
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

  constructor() { }

  ngOnInit(): void {
  }

}
