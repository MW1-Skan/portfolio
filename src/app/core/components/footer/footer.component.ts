import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ScrollRevealDirective } from '../../../shared/directives/scroll-reveal.directive';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [ScrollRevealDirective],
    template: `
    <footer class="footer">
      <div class="container footer-content">
        <h2 class="footer-cta" appScrollReveal>Ready to scale?</h2>
        <div class="footer-links" appScrollReveal [revealDelay]="200">
          <a href="https://github.com/MW1-Skan" target="_blank" class="footer-link">GitHub</a>
          <a href="https://www.linkedin.com/in/skander-sayadi/" target="_blank" class="footer-link">LinkedIn</a>
          <a href="mailto:skandersayadi7@gmail.com" class="footer-link">Email</a>
        </div>
        <div class="footer-copy">
          &copy; {{ year }} Skander. All rights reserved.
        </div>
      </div>
    </footer>
  `,
    styles: [`
    .footer {
      padding: 6rem 0 3rem;
      border-top: 1px solid rgba(255,255,255,0.05);
      background: linear-gradient(to top, var(--color-bg-surface), transparent);
    }

    .footer-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      text-align: center;
    }

    .footer-cta {
      font-size: 3rem;
      color: var(--color-text-main);
      background: linear-gradient(135deg, #fff 0%, var(--color-text-muted) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 1rem;
    }

    .footer-links {
      display: flex;
      gap: 2rem;
    }

    .footer-link {
      font-size: 1.1rem;
      color: var(--color-text-muted);
      font-weight: 500;
      position: relative;
    }

    .footer-link::after {
      content: '';
      position: absolute;
      width: 0;
      height: 1px;
      bottom: -4px;
      left: 0;
      background: var(--color-accent);
      transition: width 0.3s ease;
    }

    .footer-link:hover {
      color: var(--color-text-main);
    }
    
    .footer-link:hover::after {
      width: 100%;
    }

    .footer-copy {
      margin-top: 3rem;
      font-size: 0.9rem;
      color: var(--color-text-dim);
    }
  `],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
    year = new Date().getFullYear();
}
