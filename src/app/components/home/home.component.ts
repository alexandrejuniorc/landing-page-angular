import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ButtonPrimaryComponent } from '../button-primary/button-primary.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage, HeaderComponent, ButtonPrimaryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
