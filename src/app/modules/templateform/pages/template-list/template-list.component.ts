import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hero } from '../../../../shared/module/hero';

@Component({
  selector: 'app-template-list',
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.scss'],
})
export class TemplateListComponent {
  powers = ['Fly', 'Zap', 'Stick', 'Lazer Eyes', 'Frozen Breath'];
  model = new Hero(20, '', this.powers[1], 'Tony Stark');

  // onSubmit = () => {};

  onSubmit(f: NgForm) {
    console.log(this.model);
    console.log(f.value);
    console.log(f.valid);
  }
}