import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ProjectCardComponent } from '../components/project-card/project-card.component';
import { PORTFOLIO_DATA } from '../../../data/portfolio.data';
import { Project } from '../../../models/project.model';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-lab-section',
  standalone: true,
  imports: [ProjectCardComponent, ScrollRevealDirective],
  template: `
    <section class="section">
      <div class="container">
        <div class="section-header" appScrollReveal>
          <h2 class="section-title">The <span class="text-gradient-primary">Innovation Lab</span></h2>
          <p class="section-subtitle">
            A playground for personal SaaS products, architectural experiments, and AI-driven workflows.
          </p>
        </div>

        <div class="projects-grid">
          @for (project of labProjects; track project.id; let i = $index) {
            <app-project-card [project]="project" appScrollReveal [revealDelay]="i * 100" />
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section {
      padding: 6rem 0;
      background: linear-gradient(to bottom, transparent, rgba(79, 70, 229, 0.05));
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

    .projects-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    @media (min-width: 768px) {
      .projects-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LabSectionComponent {
  labProjects: Project[] = PORTFOLIO_DATA.filter(p => p.type === 'lab');
}
