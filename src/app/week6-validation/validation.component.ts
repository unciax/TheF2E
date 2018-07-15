import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';



@Component({
  selector: 'validation',
   templateUrl: './validation.component.html',
   styleUrls: ['./validation.component.css']
})
export class ValidationComponent {

    constructor(@Inject(FormBuilder)private fb: FormBuilder) { }

    public currentStep: number = 0;

    public step: any = [
        {step:0 , title: 'Create Account', subTitle: 'Glad to see you here!'},
        {step:1 , title: 'General Infomation', subTitle: 'Tell us who you are!'},
        {step:2 , title: 'Update Profile Picture', subTitle: 'We wanna know you more!'},
        {step:3 , title: 'Payment Method', subTitle: 'Add your credit card infomation!'},
    ]

    public accountForm: FormGroup;
    public infoForm: FormGroup;
    public paymentForm: FormGroup;

    ngOnInit() {
        this.accountForm = this.fb.group({
            account: ['', [
                Validators.required, 
                Validators.email
            ]],
            password: ['', [
                Validators.required, 
                Validators.minLength(8)
            ]],
            confirmPassword: ['']
        });
        this.accountForm.controls.confirmPassword.setValidators(
            [
                Validators.required, 
                this.passwordConfirming(this.accountForm.controls.password)
            ]
        );
        this.infoForm = this.fb.group({
            name: ['', null],
            phone: ['', [
                Validators.required, 
                Validators.pattern(/^09[0-9]{8}$/)
            ]],
            birthday: ['', null],
            city: ['', null],
            district: ['', null],
            detailAddress: ['', [
                Validators.required
            ]],
        });
        this.infoForm.controls.city.setValue("Koahsiung City");
        this.infoForm.controls.district.setValue("Yancheng Dist");
    }

    passwordConfirming(anotherControl: AbstractControl): ValidatorFn {
        return (control: AbstractControl): { invalid: boolean } => {
            if (control.value !== anotherControl.value) {
                return {invalid: true};
            }
        };
    }

    nextStep(step: number) {
        switch(step) {
            case 1:
                if (!this.accountForm.valid) {
                    return;
                }
                break;
            case 2:
                if (!this.infoForm.valid) {
                    return;
                }
                break;
            case 3:
                // TODO: image check
                break;
            case 4:
                if (!this.paymentForm.valid) {
                    return;
                }
                break;
            default:
                return;
        }
        this.currentStep = step;
    }

}
