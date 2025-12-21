import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './features/hero/hero.component';
import { EnterpriseSectionComponent } from './features/projects/layouts/enterprise-section.component';
import { LabSectionComponent } from './features/projects/layouts/lab-section.component';
import { RadarSectionComponent } from './features/projects/layouts/radar-section.component';
import { FooterComponent } from './core/components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroComponent, EnterpriseSectionComponent, LabSectionComponent, RadarSectionComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App { }
