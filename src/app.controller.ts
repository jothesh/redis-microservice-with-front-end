import { Controller, Get } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @MessagePattern({cmd: 'greeting'})
  getGreetingMessage(name: string): string {
    const data = {message: `Hello ${name}`};
    const myJSON = JSON.stringify(data);  
    return myJSON;  
  }
  
  @EventPattern('book-created')
  async handleBookCreatedEvent(data: Record<string, unknown>) {
    console.log(data); 


  }
}
