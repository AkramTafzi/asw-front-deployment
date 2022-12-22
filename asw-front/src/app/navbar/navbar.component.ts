import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  public getNews(): void {
    this.router.navigate(['view-newest']);
  }

  public getAsk(): void {
    this.router.navigate(['ask']);
  }

  public getShow(): void {
    this.router.navigate(['show']);
  }

  public getSubmit(): void {
    this.router.navigate(['submit-view']);
  }

  public getProfile(): void {
    this.router.navigate(['profile-view']);
  }

  public getThreads(): void {
    this.router.navigate(['threads']);
  }

  public getHome(): void {
    this.router.navigate(['']);
  }
}
