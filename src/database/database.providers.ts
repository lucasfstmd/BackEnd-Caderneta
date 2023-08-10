import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: '10.3.225.101',
        port: 3306,
        username: 'caderneta@ccs',
        password: 'caderneta-db@ccs2023',
        database: 'caderneta-db',
        synchronize: true,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      });

      return await dataSource.connect();
    },
  },
];
