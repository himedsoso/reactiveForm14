import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from '../utilisateur/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  utlisateur!: User; 


username = new FormControl('');
email = new FormControl('');
password = new FormControl('');
address = new FormControl('');



afficher() {
 
 const nom = this.username.value;
 const mail = this.email.value;
 const mdp = this.password.value;
 const adress = this.address.value;

 this.utlisateur = new User(nom, mail, mdp, adress);
 console.log(this.username);

}


}
