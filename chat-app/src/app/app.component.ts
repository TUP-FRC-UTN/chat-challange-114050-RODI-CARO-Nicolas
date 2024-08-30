import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatroomComponent } from "./chatroom/chatroom.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChatroomComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chat-app';
}
