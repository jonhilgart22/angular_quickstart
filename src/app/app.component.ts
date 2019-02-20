import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})

export class AppComponent {
   appTitle: string = 'Welcome';
   appStatus: boolean = true;
   appList: any[] = [ {
      "ID": "1",
      "url" : "app/images/Best_Fitness_copy.png"
   },

   {
      "ID": "2",
      "url" : "app/images/GA_100_10_Fevals_copy.png"
   } ];
}
