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
  mensajes: any[] = [];
  elemento!: HTMLElement;

  constructor(public chatService: ChatService) {}

  ngOnInit(): void {
    this.elemento = document.getElementById('chat-mensajes') as HTMLElement;
    this.mensajesSubscription = this.chatService
      .getMessages()
      .subscribe((msg) => {
        console.log(msg);
        this.mensajes.push(msg);
        setTimeout(() => {
          this.elemento.scrollTop = this.elemento.scrollHeight; // Para hacer scroll automático
        }, 50);
      });
  }

  ngOnDestroy(): void {
    this, this.mensajesSubscription.unsubscribe();
  }

  enviar() {
    if (this.texto.trim().length === 0) {
      return;
    }
    this.chatService.sendMessage(this.texto);
    this.texto = ''; // limpia el texto del formulario enviado
  }
}
