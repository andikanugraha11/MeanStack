import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';

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

	constructor(private validateService : ValidateService) { }

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
			console.log('isi semua');
			return false;
		}

		if(!this.validateService.validateEmail(user.email)){
			console.log('email salah');
			return false;
		}
	}

}
