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
      name: 
      [
        { value: '', disabled: false},
        [Validators.required, checkValidName()]
      ],
      email: [
        { value: '', disabled: false},
        [Validators.required, checkValidEmail()]
      ],
      bio: '',
    });
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

  onSubmit = () => {
    if (this.userProfileForm.valid) {
      localStorage.setItem('userProfile', JSON.stringify(this.userProfileForm.value));
      console.log('Form data saved to local storage:', this.userProfileForm.value);
  } else {
      console.log('Form is invalid. Cannot save to local storage.');
      
  }
    console.log(this.userProfileForm.value);

    console.log(this.name.errors);
  };

  get error() {
    return  this.name.errors
  }
  addUser() {
    this.userProfileForm.addControl('newControl', new FormControl(''));
  }

  clear = () => {
    this.userProfileForm.reset();
  };

  get name() {
    return this.userProfileForm.get('name') as FormControl;
  }
  get email() {
    return this.userProfileForm.get('email') as FormControl;
  }
  ngOnInit(): void {
    // // Load saved data from local storage
    // // const savedUserProfile = localStorage.getItem('userProfile');
    // if (savedUserProfile) {
    //     this.userProfileForm.patchValue(JSON.parse(savedUserProfile));
    // }
}
}