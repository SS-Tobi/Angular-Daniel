import { FormGroup } from '@angular/forms';
export function YiiErrorPrinter(errorResponse,formGroup){
    if(errorResponse.message && errorResponse.message!="") {
        return errorResponse.message;
    }else{
        errorResponse.forEach(function (value) {
            const matchingControl = formGroup.controls[value.field];
            if(matchingControl) {
                matchingControl.setErrors(value.message);
            }
        });
    }
}
