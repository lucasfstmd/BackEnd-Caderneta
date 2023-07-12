import { DataSource } from 'typeorm';
import { DataBaseView } from '../models/database/entities/database.entity';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'caderneta',
        synchronize: true,
        entities: [__dirname + '/../**/*.entity{.ts,.js}', DataBaseView],
      });

      return await dataSource.connect();
    },
  },
];
