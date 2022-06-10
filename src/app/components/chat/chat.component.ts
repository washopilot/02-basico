import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit, OnDestroy {
  texto = '';
  mensajesSubscription: Subscription = new Subscription();

  constructor(public chatService: ChatService) {}

  ngOnInit(): void {
    this.mensajesSubscription = this.chatService
      .getMessages()
      .subscribe((msg) => {
        console.log(msg);
      });
  }

  ngOnDestroy(): void {
    this, this.mensajesSubscription.unsubscribe();
  }

  enviar() {
    console.log('Emitiendo ', this.texto);
    this.chatService.sendMessage(this.texto);
    this.texto = ''; // limpia el texto del formulario enviado
  }
}
