import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserProfile } from '../../model/profile-model'; 
import { checkValidName } from '../../validator/profile.validator';
import { checkValidEmail } from '../../validator/profile.validator';

@Component({
  selector: 'app-reactive-list',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss'],
})
export class ProfileFormComponent implements OnInit {
  userProfileForm: FormGroup;
  // powerFormArray: FormArray;

  // constructor
  constructor(private fb: FormBuilder) {
    this.userProfileForm = this.fb.group({
      // firstName: [
      //   { value: 'Bruce', disabled: false },
      //   // [Validators.required, checkHasNumberValidator()],
      // ],
      name: 
      [
        { value: 'Diana', disabled: false},
        [Validators.required, checkValidName()]
      ],
      email: [
        { value: 'dmiranda@77soft.com', disabled: false},
        [Validators.required, checkValidEmail()]
      ],
      bio: 'from Taytay',
      // powers: this.fb.array([new FormControl('fly'), new FormControl('zap')]),
    });

    // this.powerFormArray = this.antiHeroForm.controls['powers'] as FormArray;
  }

  exampleJSON = () => {
    const obj = {
      name: {
        first: '',
        middle: '',
        last: '',
      },
      email: '',
      bio: '',
      
    };

    return obj;
  };

  ngOnInit(): void {
    // this.antiHeroForm.valueChanges.subscribe((x) => console.log(x));
  }

  onSubmit = () => {
    console.log(this.userProfileForm.value);
    // console.log(this.antiHeroForm.value);
    // console.log(this.antiHeroForm);
    // console.log(this.antiHeroForm.getRawValue())
    // const antiHero: AntiHero = this.antiHeroForm.getRawValue() as AntiHero;

    console.log(this.name.errors);
  };

  get error() {
    return  this.name.errors
  }

  addPower() {
    // this.powerFormArray.push(new FormControl(''));
  }
  addUser() {
    this.userProfileForm.addControl('newControl', new FormControl(''));
  }

  deletePower(index: number) {
    // this.powerFormArray.removeAt(index);
  }

  clear = () => {
    this.userProfileForm.reset();
  };

  // manualChangeState = () => {
  //   this.userProfileForm.get('knownAs')?.setErrors({ incorrect: true });
  //   this.userProfileForm.get('lastName')?.disable();
  //   this.userProfileForm.addControl('otherControl', new FormControl());
  // };

  get name() {
    return this.userProfileForm.get('name') as FormControl;
  }
  get email() {
    return this.userProfileForm.get('email') as FormControl;
  }
}