import { Module } from '@nestjs/common';
import { PlanetsModule } from './planets/planets.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoonsModule } from './moons/moons.module';
import { SystemsModule } from './systems/systems.module';
import { GalaxiesModule } from './galaxies/galaxies.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT) || 5432,
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'password',
      database: process.env.DB_NAME || 'planet_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // ← chỉ dùng dev, production phải tắt
      autoLoadEntities: true,
    }),
    PlanetsModule,
    MoonsModule,
    SystemsModule,
    GalaxiesModule,
  ],
  controllers: [],
  providers: [],
})
export class PlanetsAppModule {}
