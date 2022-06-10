import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  texto = '';

  constructor(public chatService: ChatService) {}

  ngOnInit(): void {}

  enviar() {
    console.log('Emitiendo ', this.texto);
    this.chatService.sendMessage(this.texto);
    this.texto = ''; // limpia el texto del formulario enviado
  }
}
