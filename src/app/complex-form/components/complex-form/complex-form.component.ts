import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from '../../../shared/material.module';
import { CommonModule } from '@angular/common';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-complex-form',
  standalone: true,
  imports: [
    MaterialModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './complex-form.component.html',
  styleUrl: './complex-form.component.scss'
})
export class ComplexFormComponent implements OnInit {

  mainForm!: FormGroup
  personalInfoForm!: FormGroup;
  contactPreferenceCtrl!: FormControl;
  emailCtrl!: FormControl;
  confirmEmailCtrl!: FormControl;
  emailForm!: FormGroup;
  phoneCtrl!: FormControl;
  passwordCtrl!: FormControl;
  confirmPasswordCtrl!: FormControl;
  loginInfoForm!: FormGroup;  
  showEmailCtrl$!: Observable<boolean>;
  showPhoneCtrl$!: Observable<boolean>;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.initFormControls();
    this.initMainForm();
    this.initFormObservables();
  }

  private initMainForm(): void {
    this.mainForm = this.formBuilder.group({
        personalInfo: this.personalInfoForm,
        contactPreference: this.contactPreferenceCtrl,
        email: this.emailForm,
        phone: this.phoneCtrl,
        loginInfo: this.loginInfoForm
    });
  }
  private initFormControls(): void {
    this.personalInfoForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
    });
    this.contactPreferenceCtrl = this.formBuilder.control('email');
    this.emailCtrl = this.formBuilder.control('');
    this.confirmEmailCtrl = this.formBuilder.control('');
    this.emailForm = this.formBuilder.group({
        email: this.emailCtrl,
        confirm: this.confirmEmailCtrl
    });
    this.phoneCtrl = this.formBuilder.control('');
    this.passwordCtrl = this.formBuilder.control('', Validators.required);
    this.confirmPasswordCtrl = this.formBuilder.control('', Validators.required);
    this.loginInfoForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: this.passwordCtrl,
        confirmPassword: this.confirmPasswordCtrl
    });
  }
  
  private initFormObservables() {
    this.showEmailCtrl$ = this.contactPreferenceCtrl.valueChanges.pipe(
        startWith(this.contactPreferenceCtrl.value),
        map(preference => preference === 'email'),
    );
    this.showPhoneCtrl$ = this.contactPreferenceCtrl.valueChanges.pipe(
        startWith(this.contactPreferenceCtrl.value),
        map(preference => preference === 'phone')
    );
  }
  
  onSubmitForm() {
    console.log(this.mainForm.value);
  }
}

// private getCountryCode(): void {
//   this.http.get('https://ipinfo.io/json') // Utilisation de l'API ipapi.co
//     .subscribe((data: any) => {
//       this.countryCode = data.country_calling_code || ''; // Mise à jour de l'indicatif de pays
//       console.log('Indicatif de pays détecté :', this.countryCode);

//       // Si vous voulez préremplir le champ du numéro de téléphone avec l'indicatif
//       const phoneControlValue = this.phoneCtrl.value || ''; 
//       this.phoneCtrl.setValue(`${this.countryCode} ${phoneControlValue}`);
//     });
// }