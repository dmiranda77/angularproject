import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AntiHero } from '../../model/anti-hero';
import { checkHasNumberValidator } from '../../validator/custom.validator';

@Component({
  selector: 'app-reactive-list',
  templateUrl: './reactive-list.component.html',
  styleUrls: ['./reactive-list.component.scss'],
})
export class ReactiveListComponent implements OnInit {
  antiHeroForm: FormGroup;
  powerFormArray: FormArray;

  // constructor
  constructor(private fb: FormBuilder) {
    this.antiHeroForm = this.fb.group({
      firstName: [
        { value: 'Bruce', disabled: false },
        [Validators.required, checkHasNumberValidator()],
      ],
      lastName: 'Wayne',
      knownAs: 'Batman',
      address: this.fb.group({
        bldgNo: ['2312'],
        street: [''],
        city: [''],
        country: [''],
      }),
      powers: this.fb.array([new FormControl('fly'), new FormControl('zap')]),
    });

    this.powerFormArray = this.antiHeroForm.controls['powers'] as FormArray;
  }

  exampleJSON = () => {
    const obj = {
      firstName: '',
      lastName: '',
      knownAs: '',
      address: {
        bldgNo: '',
        street: '',
        city: '',
        country: '',
      },
    };

    return obj;
  };

  ngOnInit(): void {
    // this.antiHeroForm.valueChanges.subscribe((x) => console.log(x));
  }

  onSubmit = () => {
    // console.log(this.antiHeroForm.value);
    // console.log(this.antiHeroForm);
    // console.log(this.antiHeroForm.getRawValue())
    // const antiHero: AntiHero = this.antiHeroForm.getRawValue() as AntiHero;

    console.log(this.firstName.errors);
  };

  addPower() {
    this.powerFormArray.push(new FormControl(''));
  }

  deletePower(index: number) {
    this.powerFormArray.removeAt(index);
  }

  clear = () => {
    this.antiHeroForm.reset();
  };

  manualChangeState = () => {
    this.antiHeroForm.get('knownAs')?.setErrors({ incorrect: true });
    this.antiHeroForm.get('lastName')?.disable();
    this.antiHeroForm.addControl('otherControl', new FormControl());
  };

  get firstName() {
    return this.antiHeroForm.get('firstName') as FormControl;
  }
}