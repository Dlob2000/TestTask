import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  form: FormGroup;

  timeOptions = [
    {
      name: '1 month',
      value: 31
    }, {
      name: '2 month',
      value: 62
    },
  ];

  typeOfReport = ['Calibraton', 'Measuring', 'Using'];

  title = 'A-001234';
  image = '../assets/scale.png';
  description = 'Аналитические весы OHAUS Adventurer АХ324 (B715976163)'

  ngOnInit(): void {
    this.form = new FormGroup({
      period: new FormControl(31),
      type: new FormControl(1)
    });
  }
}
