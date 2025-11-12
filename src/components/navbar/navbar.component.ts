import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(window:scroll)': 'onWindowScroll()',
    '[class.bg-slate-900/80]': 'isScrolled()',
    '[class.backdrop-blur-lg]': 'isScrolled()',
    'class': 'fixed top-0 left-0 right-0 z-30 transition-colors duration-300'
  }
})
export class NavbarComponent {
  isMenuOpen = signal(false);
  isScrolled = signal(false);

  toggleMenu(): void {
    this.isMenuOpen.update(open => !open);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  onWindowScroll(): void {
    const scrollOffset = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled.set(scrollOffset > 10);
  }
}
