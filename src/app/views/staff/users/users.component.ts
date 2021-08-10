import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../shared/services/user.service";
import {ActivatedRoute} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

    data$;

    constructor(
        private route: ActivatedRoute,
        private userService: UserService,
        private toastrService: ToastrService,
    ) {
    }

    ngOnInit() {
        this.data$ = this.userService.getAllUsers();
    }

    sendResetPasswordLink(_id: any) {
        this.userService.sendResetPasswordLink(_id).subscribe(
            res => {
                this.toastrService.success('Password reset link has been sent to user email.', 'Yippy!')
            },
            error => {
                this.toastrService.error('Failed to send link.', 'Oh!')
            }
        )
    }
}
