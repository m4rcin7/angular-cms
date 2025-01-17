import { Component } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
  host: {
    class: 'status',
    id: 'status',
  },
})
export class ServerStatusComponent {
  currentStatus = 'online';
}
