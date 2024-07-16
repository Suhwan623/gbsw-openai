import { Injectable } from '@nestjs/common';

@Injectable()
export class OpenaiService {
  createMessage(content: { message: string }) {
    const message = [{ role: 'user', content: content.message }];
    return message;
  }
}