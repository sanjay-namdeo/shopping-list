import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSignIn(form: NgForm) {
    console.log(this.authService.signIn(form.value.email, form.value.password));
    this.authService.signIn(form.value.email, form.value.password);
    console.log(this.authService.isAuthenticated());

    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/']);
    }
  }

}
