import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../../models/project.model';

@Component({
    selector: 'app-project-card',
    standalone: true,
    imports: [CommonModule],
    template: `
    <article 
      class="glass-panel card" 
      [class.enterprise]="project().type === 'enterprise'"
      [class.lab]="project().type === 'lab'">
      
      <!-- Card Header -->
      <div class="card-header">
        <div class="role-badge">{{ project().role }}</div>
        @if (project().current) {
          <div class="ai-badge">
            <span class="pulse"></span>
            Current
          </div>
        } @else if (project().aiAgentUsed && project().aiAgentUsed !== 'None') {
          <div class="ai-badge">
            <span class="pulse"></span>
            Agent: {{ project().aiAgentUsed }}
          </div>
        } @else if (project().period) {
          <div class="period-badge">{{ project().period }}</div>
        }
      </div>

      <!-- Content -->
      <div>
        <h3 class="title">{{ project().title }}</h3>
        @if (project().company) {
          <div class="company-line">
            {{ project().company }}@if (project().current && project().period) {<span class="period-inline"> · {{ project().period }}</span>}
          </div>
        }
      </div>
      <p class="description">{{ project().fullDescription }}</p>

      <!-- Metrics (Enterprise) -->
      @if (project().metrics; as metrics) {
        <div class="metrics-grid">
          @for (metric of metrics; track metric) {
            <div class="metric-item">
              <span class="check-icon">✓</span> {{ metric }}
            </div>
          }
        </div>
      }

      <!-- Tech Stack -->
      <div class="tech-stack">
        @for (tech of project().techStack; track tech) {
          <span class="tech-pill">{{ tech }}</span>
        }
      </div>

      <!-- Links (Lab) -->
      @if (project().links; as links) {
        <div class="card-actions">
          @if (links.demo) {
            <a [href]="links.demo" target="_blank" class="btn btn-primary">Live Demo</a>
          }
          @if (links.repo) {
            <a [href]="links.repo" target="_blank" class="btn btn-outline">Repo</a>
          }
        </div>
      }
    </article>
  `,
    styles: [`
    .card {
      padding: 2rem;
      border-radius: var(--radius-lg);
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 40px rgba(0,0,0,0.4);
      border-color: rgba(255,255,255,0.15);
    }

    /* Type Specific Specifics */
    .card.enterprise {
      border-left: 4px solid var(--color-primary);
    }

    .card.lab {
      border-left: 4px solid var(--color-accent);
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.5rem;
    }

    .role-badge {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--color-text-muted);
      font-weight: 600;
    }

    .ai-badge {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.75rem;
      color: var(--color-accent);
      background: rgba(16, 185, 129, 0.1);
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      border: 1px solid rgba(16, 185, 129, 0.2);
    }

    .pulse {
      width: 6px;
      height: 6px;
      background: var(--color-accent);
      border-radius: 50%;
      animation: pulse 2s infinite;
    }

    .period-badge {
      font-size: 0.75rem;
      letter-spacing: 0.05em;
      color: var(--color-text-dim);
      white-space: nowrap;
    }

    .title {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
      color: var(--color-text-main);
    }

    .company-line {
      font-size: 0.9rem;
      font-weight: 500;
      color: var(--color-text-dim);
    }

    .period-inline {
      font-weight: 400;
    }

    .description {
      color: var(--color-text-muted);
      font-size: 0.95rem;
      flex-grow: 1; /* Pushes footer down */
      line-height: 1.6;
    }

    .metrics-grid {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      padding: 1rem 0;
      border-top: 1px solid rgba(255,255,255,0.05);
      border-bottom: 1px solid rgba(255,255,255,0.05);
    }

    .metric-item {
      font-family: var(--font-display);
      font-weight: 700;
      color: var(--color-text-main);
      font-size: 0.9rem;
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }
    
    .check-icon {
      color: var(--color-primary);
    }

    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .tech-pill {
      font-size: 0.8rem;
      color: var(--color-text-dim);
      background: rgba(255,255,255,0.03);
      padding: 0.25rem 0.75rem;
      border-radius: 4px;
      transition: all 0.2s ease;
      border: 1px solid transparent;
    }

    .card:hover .tech-pill {
      background: rgba(255,255,255,0.08);
      color: var(--color-text-main);
      border-color: rgba(255,255,255,0.1);
    }

    .card-actions {
      display: flex;
      gap: 1rem;
      margin-top: auto;
    }

    .btn {
      padding: 0.5rem 1rem;
      border-radius: var(--radius-sm);
      font-size: 0.9rem;
      font-weight: 500;
      text-decoration: none;
      transition: all 0.2s ease;
      cursor: pointer;
    }

    .btn-primary {
      background: var(--color-primary);
      color: white;
    }
    
    .btn-primary:hover {
      background: #4338ca;
      box-shadow: 0 0 15px var(--color-primary-glow);
    }

    .btn-outline {
      border: 1px solid var(--border-glass);
      color: var(--color-text-main);
    }
    
    .btn-outline:hover {
      border-color: var(--color-text-muted);
      background: rgba(255,255,255,0.05);
    }

    @keyframes pulse {
      0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4); }
      70% { box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
      100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
    }
  `],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectCardComponent {
    project = input.required<Project>();
}
