import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Import Sockets
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';

// SocketIOConfig
const config: SocketIoConfig = { url: environment.wsUrl, options: {} };

@NgModule({
  declarations: [AppComponent, FooterComponent],
  imports: [BrowserModule, SocketIoModule.forRoot(config)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
