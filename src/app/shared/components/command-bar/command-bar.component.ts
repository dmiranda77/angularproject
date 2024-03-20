import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrl: './command-bar.component.scss'
})
export class CommandBarComponent {
  constructor(private router: Router) {} 
  command1(): void {
    this.router.navigate(['/user'])
  }

  command2(): void {
    this.router.navigate(['book/form'])
  }

  command3(): void {
    this.router.navigate(['blog/form'])
  }

  command4(): void {
    this.router.navigate(['blog/list/empty'])
  }
}
