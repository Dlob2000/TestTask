import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-inventory-description',
    templateUrl: './inventory-description.component.html',
    styleUrls: ['./inventory-description.component.scss']
})
export class InventoryDescriptionComponent implements OnInit {

    @Input()
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

    constructor() {
    }

    ngOnInit(): void {
    }

}
