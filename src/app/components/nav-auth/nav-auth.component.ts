import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-auth',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './nav-auth.component.html',
  styleUrls: ['./nav-auth.component.scss']
})
export class NavAuthComponent {
  constructor(private _Renderer2:Renderer2){}
  @ViewChild('navBar') navElement!:ElementRef
@HostListener('window:scroll')
onScroll():void{
if(scrollY >100){
  this._Renderer2.addClass(this.navElement.nativeElement , 'px-5')

  this._Renderer2.addClass(this.navElement.nativeElement , 'bg-body-secondary')
  this._Renderer2.addClass(this.navElement.nativeElement , 'shadow')

}else{
  this._Renderer2.removeClass(this.navElement.nativeElement , 'px-5')
  this._Renderer2.removeClass(this.navElement.nativeElement , 'bg-body-secondary')
  this._Renderer2.removeClass(this.navElement.nativeElement , 'shadow')


}

}

}
