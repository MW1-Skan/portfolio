import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ScrollRevealDirective],
  template: `
    <section class="hero-section">
      <div class="container hero-content" appScrollReveal>
        <div class="avatar-container">
          <img src="assets/profile.png" alt="Profile" class="profile-avatar" onerror="this.style.display='none'"/>
          <div class="avatar-glow"></div>
        </div>
        <div class="badge-glass">Software Engineer &#64; Padoa</div>
        <h1 class="hero-title">
          Architecting Scale.<br>
          <span class="text-gradient-primary">Orchestrating Innovation.</span>
        </h1>
        <p class="hero-subtitle">
          Engineering
          <span class="highlight">health-tech at scale</span>
          by day — building
          <span class="highlight">AI-powered products</span>
          in the lab.
        </p>

        <div class="tech-ticker">
          <span class="tech-item">Angular</span>
          <span class="separator">/</span>
          <span class="tech-item">Node.js</span>
          <span class="separator">/</span>
          <span class="tech-item">PostgreSQL</span>
          <span class="separator">/</span>
          <span class="tech-item">Redis</span>
          <span class="separator">/</span>
          <span class="tech-item accent">Claude Code</span>
          <span class="separator">/</span>
          <span class="tech-item accent">Vertex AI</span>
          <span class="separator">/</span>
          <span class="tech-item accent">Gemini</span>
        </div>
      </div>
      
      <!-- Abstract Background Elements -->
      <div class="glow-orb primary"></div>
      <div class="glow-orb accent"></div>
    </section>
  `,
  styles: [`
    .hero-section {
      position: relative;
      min-height: 90vh;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      text-align: center;
    }

    .hero-content {
      position: relative;
      z-index: 10;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
    }

    .badge-glass {
      background: var(--color-bg-glass);
      border: var(--border-glass);
      padding: 0.5rem 1.5rem;
      border-radius: 50px;
      font-size: 0.875rem;
      font-weight: 500;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: var(--color-text-muted);
      backdrop-filter: blur(8px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }

    .avatar-container {
      position: relative;
      width: 120px;
      height: 120px;
      margin-bottom: 1rem;
    }

    .profile-avatar {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
      position: relative;
      z-index: 2;
      border: 3px solid rgba(255,255,255,0.1);
      background: var(--color-bg-surface); /* Fallback */
    }

    .avatar-glow {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 140%;
      height: 140%;
      background: radial-gradient(circle, var(--color-primary-glow) 0%, transparent 70%);
      z-index: 1;
      opacity: 0.6;
      animation: pulse-glow 3s infinite ease-in-out;
    }

    @keyframes pulse-glow {
      0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
      50% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.1); }
    }

    .hero-title {
      font-size: clamp(2.5rem, 5vw, 4.5rem);
      letter-spacing: -0.02em;
      margin-bottom: 0.5rem;
    }

    .hero-subtitle {
      font-size: clamp(1.125rem, 2vw, 1.5rem);
      color: var(--color-text-muted);
      max-width: 700px;
      line-height: 1.6;
    }

    .highlight {
      color: var(--color-text-main);
      font-weight: 600;
      border-bottom: 1px dashed var(--color-primary);
    }

    .tech-ticker {
      margin-top: 2rem;
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: center;
      align-items: center;
      font-family: var(--font-display);
      color: var(--color-text-dim);
      font-weight: 500;
    }

    .tech-item {
      transition: color 0.3s ease;
    }
    
    .tech-item:hover {
      color: var(--color-text-main);
    }

    .tech-item.accent {
      color: var(--color-accent);
    }
    
    .tech-item.accent:hover {
      color: #34d399;
      text-shadow: 0 0 10px rgba(16, 185, 129, 0.4);
    }

    .separator {
      opacity: 0.3;
    }

    /* Background Orbs */
    .glow-orb {
      position: absolute;
      border-radius: 50%;
      filter: blur(120px);
      z-index: 0;
      opacity: 0.15;
      pointer-events: none;
    }

    .glow-orb.primary {
      width: 600px;
      height: 600px;
      background: var(--color-primary);
      top: -20%;
      left: -20%;
      animation: float 20s infinite ease-in-out;
    }

    .glow-orb.accent {
      width: 500px;
      height: 500px;
      background: var(--color-accent);
      top: -10%;
      right: -10%;
      animation: float 15s infinite ease-in-out reverse;
    }

    @keyframes float {
      0%, 100% { transform: translate(0, 0); }
      50% { transform: translate(40px, 60px); }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent { }
