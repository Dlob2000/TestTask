import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-inventory-description',
    templateUrl: './inventory-description.component.html',
    styleUrls: ['./inventory-description.component.scss']
})
export class InventoryDescriptionComponent implements OnInit {

    @Input()
    data = {
        type: '',
        status: '',
        manufacturer: '',
        model: '',
        responsibleDepartment: '',
        operatingDivision: '',
        mol: '',
        area: '',
        serialNumber: '',
        guid: '',
        bimsId: '',
        tam: ''
    };

    @Input()
    loading = true;

    constructor() {
    }

    ngOnInit(): void {
    }

}
