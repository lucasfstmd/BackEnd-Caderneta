import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'mysql://bda77cfb67a2d9:60cd6af0@us-cdbr-east-06.cleardb.net/heroku_cdcda3cf3bf842e?reconnect=true',
        username: 'bda77cfb67a2d9',
        password: '60cd6af0',
        database: 'heroku_cdcda3cf3bf842e',
        synchronize: true,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      });

      return dataSource.initialize();
    },
  },
];
