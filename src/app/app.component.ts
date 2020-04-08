import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, FormsModule} from '@angular/forms';
import {AppService} from './app.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(private appService: AppService) {
    }

    form: FormGroup;

    data = {
        type: 'Весы',
        status: 'Готов к работе',
        manufacturer: 'Ohaus',
        model: 'AX-123',
        responsibleDepartment: 'Группа обслуживания лаброаторного оборудования',
        operatingDivision: 'Химико-аналитическая лаборатория 2.0',
        mol: 'Иванов Иван Иванович',
        area: 'г. Санкт-Петербург (Нойдорф)',
        serialNumber: 'B715976163',
        guid: '508b2a71-662e-4983-ae0c-3cb0c1cd21c5',
        bimsId: '49db8db1-585f-4b9e-bbf0-8a59698edc8b',
        tam: 'А-001234'
    };

    timeOptions = [
        {
            name: '1 month',
            value: 31
        }, {
            name: '2 month',
            value: 62
        },
    ];
    loading: boolean;
    typeOfReport = ['Calibraton', 'Measuring', 'Using'];

    currentType = 'Calibraton';
    title = 'A-001234';
    image = '';
    name = '';

    ngOnInit(): void {
        this.getData();
        this.form = new FormGroup({
            period: new FormControl(31),
            type: new FormControl(this.currentType)
        });
    }

    getData(): void {
        this.loading = true;
        this.appService.getData(this.title).then(result => {
            this.name = result.name;
            this.image = result.image;
            this.data = result.data;
            this.loading = false;
        });
    }



}
