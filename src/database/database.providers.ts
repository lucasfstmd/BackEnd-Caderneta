import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'us-cdbr-east-06.cleardb.net',
        port: 3306,
        username: 'bda77cfb67a2d9',
        password: '60cd6af0',
        database: 'heroku_cdcda3cf3bf842e',
        synchronize: true,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      });

      return await dataSource.connect();
    },
  },
];