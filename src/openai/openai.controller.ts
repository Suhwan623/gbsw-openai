import { Controller, Post, Body } from '@nestjs/common';
import { AiService } from './ai.service';
import { OpenaiService } from './openai.service';

@Controller('messages')
export class OpenaiController {
  constructor(
    private readonly aiService: AiService,
    private readonly openaiService: OpenaiService,
  ) {}

  @Post()
  async createMessage(@Body() content: { message: string }) {
    const message = this.openaiService.createMessage(content);
    const msg = await this.aiService.chat(message);
    return msg;
  }
}