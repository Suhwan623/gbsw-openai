import { Module } from '@nestjs/common';
import { OpenaiController } from './openai.controller';
import { AiService } from './ai.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageEntity } from 'src/entities/message.entity';
import { OpenaiService } from './openai.service';

@Module({
  imports: [TypeOrmModule.forFeature([MessageEntity])],
  providers: [OpenaiService, AiService],
  controllers: [OpenaiController]
})
export class OpenaiModule {}
