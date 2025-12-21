import { Directive, ElementRef, OnInit, inject, Renderer2, Input, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
    selector: '[appScrollReveal]',
    standalone: true
})
export class ScrollRevealDirective implements OnInit {
    private el = inject(ElementRef);
    private renderer = inject(Renderer2);
    private platformId = inject(PLATFORM_ID);

    @Input() revealDelay = 0;

    ngOnInit() {
        // Only run animation logic in the browser to prevent SSR crashes
        if (isPlatformBrowser(this.platformId)) {
            this.renderer.addClass(this.el.nativeElement, 'reveal');

            if (this.revealDelay > 0) {
                this.renderer.setStyle(this.el.nativeElement, 'transition-delay', `${this.revealDelay}ms`);
            }

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.renderer.addClass(this.el.nativeElement, 'reveal-active');
                        observer.unobserve(this.el.nativeElement);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -20px 0px'
            });

            observer.observe(this.el.nativeElement);
        }
    }
}
