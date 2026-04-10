import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432, //
      username: 'postgres',
      password: 'postgres',
      database: 'money_manager',
      autoLoadEntities: true,
      synchronize: true, // dev only
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
