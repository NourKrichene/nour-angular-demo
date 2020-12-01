import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
    genders = ['male', 'female'];
    signUpForm: FormGroup;
    forbiddenUserNames = ['Chris', 'Anna'];
    isPrice =false;
    constructor() {
    }

    ngOnInit() {
        this.signUpForm = new FormGroup({
            userData: new FormGroup({
                username: new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
                email: new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
            }),
            gender: new FormControl('male'),
            hobbies: new FormArray([])
        });
        this.signUpForm.setValue({
            userData: {
                username: 'John',
                email: 'JohnDoe@test.com'
            },
            gender: 'male',
            hobbies: []
        });
        this.signUpForm.patchValue({
            userData: {
                username: 'John',
            }
        });
    }

    onSubmit() {
        this.signUpForm.reset();
    }

    onAddHobby() {
        const control = new FormControl(null, Validators.required);
        (this.signUpForm.get('hobbies') as FormArray).push(control);
    }

    forbiddenNames(control: FormControl): { [s: string]: boolean } {
        if (this.forbiddenUserNames.indexOf(control.value) !== -1) {
            return {nameIsForbidden: true};
        }
        return null;
    }

    forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
        return new Promise<any>((resolve) => {
            setTimeout(() => {
                if (control.value === 'test@test.com') {
                    resolve({emailIsForbidden: true});
                } else {
                    resolve(null);
                }
            }, 1500);
        });


    }

}
