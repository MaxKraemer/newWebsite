import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  constructor() { }

  public toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
 }

 
}
