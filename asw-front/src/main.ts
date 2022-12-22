import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
localStorage.setItem('username', 'a');
localStorage.setItem(
  'apiKey',
  '$2a$10$qTCgKY4zTmr.ff39e9/lbusDClZTP14BTrwyWoVQ8Iz1/P6Ahx50m'
);
