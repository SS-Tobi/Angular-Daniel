import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Utils} from '../utils';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) {

    }

    updateProfile(fieldToSend): Observable<any> {
        return this.http.put(Utils.getConstants().API_HOST + 'user/profile', fieldToSend);
    }

    markOnBoardingDone(): Observable<any> {
        const fieldToSend = {
            on_boarding: 'completed',
        };
        return this.http.put(Utils.getConstants().API_HOST + 'user/profile/on-boarding', fieldToSend);
    }

    updatePassword(old_password, new_password): Observable<any> {
        return this.http.put(Utils.getConstants().API_HOST + 'user/profile/password'
            , {
                old_password: old_password,
                new_password: new_password
            });
    }

    getDashboard() {
        this.http.post(Utils.getConstants().API_HOST + 'dashboard', {}).subscribe(
            (response) => {
                console.log("Dashboard response", response);
            }
        )
    }

    getAllUsers() {
        return this.http.get<any>(Utils.getConstants().API_HOST + 'user/all?role=user');
    }

    getAllStaff() {
        return this.http.get<any>(Utils.getConstants().API_HOST + 'user/all?role=staff');
    }

    getProfile(id) {
        return this.http.get<any>(Utils.getConstants().API_HOST + 'user/profile-details?id=' + id);
    }

    delete(id) {
        return this.http.delete<any>(Utils.getConstants().API_HOST + 'user/' + id);
    }

    verifyEmail(action, code) {
        return this.http.post(Utils.getConstants().API_HOST + 'user/verify-email', {
            action: action,
            code: code
        });
    }

    insertStaff(fields): Observable<any> {
        console.log(fields);
        return this.http.post(Utils.getConstants().API_HOST + 'user', fields);
    }

    updateStaff(fields, id): Observable<any> {
        return this.http.put(Utils.getConstants().API_HOST + 'user/' + id, fields);
    }

    sendResetPasswordLink(id){
        return this.http.get<any>(Utils.getConstants().API_HOST + 'user/profile/send-password-reset-link?id=' + id);
    }

}
