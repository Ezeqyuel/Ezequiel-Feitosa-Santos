
import '@angular/compiler';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideZonelessChangeDetection } from '@angular/core';
import { AppComponent } from './src/app.component';
// fix: Replaced withAnchorScrolling with withInMemoryScrolling as it is the correct function.
import { provideRouter, withHashLocation, withInMemoryScrolling } from '@angular/router';
import { routes } from './src/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(
      routes, 
      withHashLocation(), 
      // fix: Correctly configure anchor scrolling using withInMemoryScrolling.
      withInMemoryScrolling({ anchorScrolling: 'enabled' })
    )
  ]
}).catch(err => console.error(err));
    

// AI Studio always uses an `index.tsx` file for all project types.