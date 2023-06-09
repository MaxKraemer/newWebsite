import { Component, OnInit } from '@angular/core';
import { __classPrivateFieldSet } from 'tslib';
import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GsapService } from 'src/service/gsap.service';
import { DarkModeService } from 'src/service/dark-mode.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public gsap: GsapService, public darkMode: DarkModeService) { }

  ngOnInit(): void {
    this.gsap.gsapAnimationHeader();
  }


  public showImage = false;
  public status = 'Enable'; 


  public toggleImage(): void {
    this.showImage = !this.showImage;
    this.status = this.showImage ? 'Enable' : 'Disable';
  }

  showMenu(){
      document.getElementById('menu')?.classList.remove('d-none');
  }
  closeMenu(){
      document.getElementById('menu')?.classList.add('d-none');
  }



  

}
