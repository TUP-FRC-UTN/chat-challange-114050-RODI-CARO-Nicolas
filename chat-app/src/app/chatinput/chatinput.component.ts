
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InfoMensaje } from '../interfaces/InfoMessage';


@Component({
  selector: 'app-chatinput',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './chatinput.component.html',
  styleUrl: './chatinput.component.css'
})


export class ChatinputComponent {
  @Input() nombreUsuarioParam !: string;
  @Output() mensajeEnviado = new EventEmitter<InfoMensaje>();

  messageContent: string = '';

  enviarMensaje():void {
    const message : InfoMensaje = {
      nombreUsuario: this.nombreUsuarioParam,
      contenidoMensaje: this.messageContent
    };
    this.mensajeEnviado.emit(message);
    this.messageContent = '';
  }

}
