import { Component, OnInit } from '@angular/core';
import { __classPrivateFieldSet } from 'tslib';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public showImage = false;


  public toggleImage(): void {
    this.showImage = !this.showImage;
  }

  showMenu(){
      document.getElementById('menu')?.classList.remove('d-none');
  }
  closeMenu(){
      document.getElementById('menu')?.classList.add('d-none');
  }

  

}
