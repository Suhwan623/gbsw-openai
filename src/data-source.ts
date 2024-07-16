import * as path from 'path';
import { DataSource } from 'typeorm';
import { CommonBigPKEntity } from './entities/common.entity';
import { MessageEntity } from './entities/message.entity';
import { RoomEntity } from './entities/room.entity';
import { UserEntity } from './entities/user.entity';

export const dataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  database: 'openai',
  username: 'root',
  password: '0000', // MySQL 설치시 설정한 비밀번호를 입력하면 뒵니다.,
  entities: [CommonBigPKEntity, MessageEntity, RoomEntity, UserEntity],
  synchronize: false, // 이건 무조건 false로 해둡시다. 
  logging: true,  // typeorm 쿼리가 실행될 때, 터미널에 MySQL쿼리가 어떻게 짜여졌는지 보여줍니다.
});