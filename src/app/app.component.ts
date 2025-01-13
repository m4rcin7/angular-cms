import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ServerStatusComponent } from './bashboard/server-status/server-status.component';
import { TrafficComponent } from './bashboard/traffic/traffic.component';
import { TicketsComponent } from './bashboard/tickets/tickets.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    ServerStatusComponent,
    TrafficComponent,
    TicketsComponent,
  ],
})
export class AppComponent {}
