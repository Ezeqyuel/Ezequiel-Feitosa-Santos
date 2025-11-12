import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { FeaturesSectionComponent } from './components/features-section/features-section.component';
import { CallToActionComponent } from './components/call-to-action/call-to-action.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeroSectionComponent,
    FeaturesSectionComponent,
    CallToActionComponent,
    FooterComponent,
    ReactiveFormsModule // Adiciona ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrls: [], // Tailwind handles styling
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'Ezequiel Marketing Automation';
}