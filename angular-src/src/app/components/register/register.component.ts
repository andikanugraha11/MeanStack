import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {FlashMessagesService} from 'angular2-flash-messages';

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

	constructor(private validateService : ValidateService, private flashMessage:FlashMessagesService) { }

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
	}

}
