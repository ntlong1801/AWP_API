import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from './user/user.entity';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  port: parseInt(process.env.DB_PORT) ?? 3000,
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: false,
  entities: [User],
};
