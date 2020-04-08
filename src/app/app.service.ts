import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    image = '../assets/scale.png';
    name = 'Аналитические весы OHAUS Adventurer АХ324 (B715976163)';

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

    getData(title): Promise<any> {
        return new Promise<any>(
            resolve => {
                setTimeout(() => {
                    resolve({
                        image: this.image,
                        name: this.name,
                        data: this.data
                    });
                }, 2000);
            }
        );
    }

    getDescription(title): Promise<any> {
        return new Promise<any>(
            resolve => {
                setTimeout(() => {
                    resolve(this.data);
                }, 2000);
            }
        );
    }
}
