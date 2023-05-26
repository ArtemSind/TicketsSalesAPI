import {Module} from '@nestjs/common';
import {ToursService} from "../../services/tours/tours.service";
import {TourItemController} from "./tour-item.controller";
import {MongooseModule} from "@nestjs/mongoose";
import {Tour, TourSchema} from "../../schemas/tour";
import {PassportModule} from "@nestjs/passport";
import {JwtModule} from "@nestjs/jwt";
import {jwtConstants} from "../../static/private/constant";

@Module({
    controllers: [TourItemController],
    imports: [MongooseModule.forFeature([{name: Tour.name, schema: TourSchema}]),
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret
        })],
    providers: [ToursService]
})
export class TourItemModule {
}
