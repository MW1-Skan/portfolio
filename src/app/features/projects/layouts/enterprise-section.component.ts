import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ProjectCardComponent } from '../components/project-card/project-card.component';
import { PORTFOLIO_DATA } from '../../../data/portfolio.data';
import { Project } from '../../../models/project.model';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-enterprise-section',
  standalone: true,
  imports: [ProjectCardComponent, ScrollRevealDirective],
  template: `
    <section class="section">
      <div class="container">
        <div class="section-header" appScrollReveal>
          <h2 class="section-title">Professional <span class="text-gradient">Experience</span></h2>
          <p class="section-subtitle">
            Engineering France's leading occupational-health platform — regulated health data at
            scale, event-driven microservices, and hard legal deadlines.
          </p>
        </div>

        @for (project of currentProjects; track project.id) {
          <app-project-card class="current-card" [project]="project" appScrollReveal />
        }

        <div class="previously-label" appScrollReveal>
          Previously · Consulting &#64; Viveris Systèmes · Intern → Lead Developer in under 2 years
        </div>

        <div class="projects-grid">
          @for (project of previousProjects; track project.id; let i = $index) {
            <app-project-card [project]="project" appScrollReveal [revealDelay]="i * 100" />
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section {
      padding: 6rem 0;
      position: relative;
    }

    .section-header {
      margin-bottom: 4rem;
    }

    .section-title {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    .section-subtitle {
      color: var(--color-text-muted);
      max-width: 600px;
      font-size: 1.1rem;
    }

    .current-card {
      display: block;
      margin-bottom: 3.5rem;
    }

    .previously-label {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 2rem;
      color: var(--color-text-dim);
      font-size: 0.8rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.12em;
    }

    .previously-label::after {
      content: '';
      flex: 1;
      height: 1px;
      background: rgba(255,255,255,0.08);
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EnterpriseSectionComponent {
  currentProjects: Project[] = PORTFOLIO_DATA.filter(p => p.type === 'enterprise' && p.current);
  previousProjects: Project[] = PORTFOLIO_DATA.filter(p => p.type === 'enterprise' && !p.current);
}
