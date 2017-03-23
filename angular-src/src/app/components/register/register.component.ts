import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	nama		: String;
	username 	: String;
	email		: String;
	password	: String;

	constructor(
		private validateService : ValidateService,
		private flashMessage	: FlashMessagesService,
		private authService		: AuthService,
		private router 			: Router
		) { }

	ngOnInit() {

	}

	onRegisterSubmit(){
		const user = {
			nama		: this.nama,
			username	: this.username,
			email		: this.email,
			password	: this.password
		}

		//required
		if(!this.validateService.validateRegister(user)){
			this.flashMessage.show('isi semua', {cssClass:'alert-danger', timeout :3000 });
			return false;
		}

		if(!this.validateService.validateEmail(user.email)){
			this.flashMessage.show('email salah', {cssClass:'alert-danger', timeout :3000 });
			return false;
		}

		//register users
		this.authService.registerUser(user).subscribe(data => {
			if(data.success){
				this.flashMessage.show('Reggister berhasil', {cssClass:'alert-success', timeout :3000 });
				this.router.navigate(['/login']);
			}else{
				this.flashMessage.show('Reggister gagal', {cssClass:'alert-danger', timeout :3000 });
				this.router.navigate(['/register']);
			}
		});
	}

}
