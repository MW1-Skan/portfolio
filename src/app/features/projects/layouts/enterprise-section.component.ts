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
          <h2 class="section-title">Enterprise <span class="text-gradient">Ground Truth</span></h2>
          <p class="section-subtitle">
            Leading high-scale architectures where performance and reliability are non-negotiable.
          </p>
        </div>

        <div class="projects-grid">
          @for (project of enterpriseProjects; track project.id; let i = $index) {
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

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EnterpriseSectionComponent {
  enterpriseProjects: Project[] = PORTFOLIO_DATA.filter(p => p.type === 'enterprise');
}
