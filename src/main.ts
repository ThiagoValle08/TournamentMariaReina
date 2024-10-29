import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

<<<<<<< HEAD

platformBrowserDynamic().bootstrapModule(AppModule)
=======
platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true
})
>>>>>>> 77fa42b (commit del repocitorio del torneo)
  .catch(err => console.error(err));
