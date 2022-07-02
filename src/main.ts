import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.REDIS,
    options: {
      url: 'redis://redis-19504.c299.asia-northeast1-1.gce.cloud.redislabs.com:19504',
      password : 'JXT7Tb4RrymslSLgCKvkiVhaXM6qoFip'
    },
  });
  await app.listen();
}
bootstrap();
