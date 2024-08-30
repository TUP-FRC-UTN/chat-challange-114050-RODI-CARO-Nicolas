import { Component } from '@angular/core';
import { ChatinputComponent } from "../chatinput/chatinput.component";
import { InfoMensaje } from '../interfaces/InfoMessage';
@Component({
  selector: 'app-chatroom',
  standalone: true,
  imports: [ChatinputComponent],
  templateUrl: './chatroom.component.html',
  styleUrl: './chatroom.component.css'
})
export class ChatroomComponent {
  userName1='Pepito';
  userName2= 'Juana'
  messages: InfoMensaje[] = [];

  onMensajeEnviado(mensaje: InfoMensaje): void {
    this.messages.push(mensaje);
  }


}
