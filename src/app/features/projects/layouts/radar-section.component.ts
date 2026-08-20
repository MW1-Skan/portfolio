import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-radar-section',
  standalone: true,
  imports: [ScrollRevealDirective],
  template: `
    <section class="section">
      <div class="container">
        <h2 class="section-title text-center" appScrollReveal>Tech <span class="text-gradient">Radar</span></h2>
        
        <div class="radar-grid">
          <!-- Core Architecture -->
          <div class="radar-quadrant" appScrollReveal [revealDelay]="0">
            <h3 class="quadrant-title">Core Architecture</h3>
            <div class="skill-list">
              <div class="skill-item high">Angular</div>
              <div class="skill-item high">Node.js</div>
              <div class="skill-item high">TypeScript</div>
              <div class="skill-item high">Microservices</div>
              <div class="skill-item medium">RxJS</div>
              <div class="skill-item medium">Nx Monorepo</div>
            </div>
          </div>

          <!-- Cloud & DevOps -->
          <div class="radar-quadrant" appScrollReveal [revealDelay]="100">
            <h3 class="quadrant-title">Cloud & Scale</h3>
            <div class="skill-list">
              <div class="skill-item high">Kubernetes</div>
              <div class="skill-item high">Docker</div>
              <div class="skill-item high">PostgreSQL</div>
              <div class="skill-item high">Redis</div>
              <div class="skill-item medium">Azure</div>
              <div class="skill-item medium">Google Cloud</div>
              <div class="skill-item medium">AWS</div>
              <div class="skill-item medium">ArgoCD</div>
              <div class="skill-item medium">Grafana</div>
              <div class="skill-item medium">ElasticSearch</div>
            </div>
          </div>

          <!-- AI & Agents -->
          <div class="radar-quadrant ai-quadrant" appScrollReveal [revealDelay]="200">
            <h3 class="quadrant-title">AI Engineering</h3>
            <div class="skill-list">
              <div class="skill-item high accent">Python</div>
              <div class="skill-item high accent">FastAPI</div>
              <div class="skill-item high accent">Vertex AI</div>
              <div class="skill-item high accent">Gemini</div>
              <div class="skill-item high accent">Claude Agent SDK</div>
              <div class="skill-item high accent">Claude Code</div>
              <div class="skill-item medium accent">scikit-learn</div>
              <div class="skill-item medium accent">OpenAI API</div>
              <div class="skill-item medium accent">Genkit</div>
              <div class="skill-item medium accent">Codex</div>
            </div>
          </div>

          <!-- UI/UX -->
          <div class="radar-quadrant" appScrollReveal [revealDelay]="300">
            <h3 class="quadrant-title">Experience & Quality</h3>
            <div class="skill-list">
              <div class="skill-item high">CSS/SASS</div>
              <div class="skill-item high">Playwright</div>
              <div class="skill-item medium">Tailwind</div>
              <div class="skill-item medium">Storybook</div>
              <div class="skill-item medium">Angular Material</div>
              <div class="skill-item medium">Figma</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section {
      padding: 6rem 0;
      background: var(--color-bg-surface);
      border-top: 1px solid rgba(255,255,255,0.05);
    }

    .text-center { text-align: center; }

    .section-title {
      font-size: 2.5rem;
      margin-bottom: 4rem;
      text-align: center;
    }

    .radar-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    @media (min-width: 768px) {
      .radar-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    .radar-quadrant {
      background: rgba(255,255,255,0.02);
      border: 1px solid rgba(255,255,255,0.05);
      border-radius: var(--radius-md);
      padding: 2rem;
      transition: background 0.3s;
    }

    .radar-quadrant:hover {
      background: rgba(255,255,255,0.04);
    }

    .ai-quadrant {
      background: rgba(79, 70, 229, 0.05);
      border-color: rgba(79, 70, 229, 0.2);
    }

    .quadrant-title {
      font-size: 1.1rem;
      color: var(--color-text-muted);
      margin-bottom: 1.5rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      border-bottom: 1px solid rgba(255,255,255,0.1);
      padding-bottom: 0.5rem;
    }

    .skill-list {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
    }

    .skill-item {
      font-size: 0.9rem;
      padding: 0.4rem 0.8rem;
      border-radius: 4px;
      background: rgba(0,0,0,0.3);
      border: 1px solid rgba(255,255,255,0.1);
      color: var(--color-text-dim);
    }

    .skill-item.high {
      color: var(--color-text-main);
      border-color: rgba(255,255,255,0.3);
    }
    
    .skill-item.accent {
      color: var(--color-accent);
      border-color: rgba(16, 185, 129, 0.3);
      background: rgba(16, 185, 129, 0.05);
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RadarSectionComponent { }
