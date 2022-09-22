import { AbstractControl, ValidatorFn } from "@angular/forms";

function ageRangeValidator(min: number, max: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
        if (control.value !== undefined && (isNaN(control.value) 
        || control.value < min || control.value > max)) {
            return { 'age': true };
        }
        return null;
    };
}

export default ageRangeValidator;