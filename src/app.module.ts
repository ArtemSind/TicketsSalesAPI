import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {UsersService} from "./services/users/users.service";
import {MongooseModule} from "@nestjs/mongoose";
import {ToursModule} from "./controllers/tours/tours.module";
import {OrdersModule} from "./controllers/orders/orders.module";
import {UsersModule} from "./controllers/users/users.module";
import {TourItemModule} from "./controllers/tour-item/tour-item.module";

@Module({
  imports: [
      UsersModule,
      ToursModule,
      OrdersModule,
      TourItemModule,
    MongooseModule.forRoot('mongodb://localhost:27017/nest')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
