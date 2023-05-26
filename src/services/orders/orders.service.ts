import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Order, OrderDocument} from "../../schemas/order";
import {Model} from "mongoose";
import {OrderDto} from "../../dto/order-dto";

@Injectable()
export class OrdersService {

    constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>) {}

    async sendOrder(data: OrderDto): Promise<Order> {
        const orderData = new this.orderModel(data);
        return orderData.save();
    }

    async getAllOrders(): Promise<OrderDto[]> {
        return this.orderModel.find({});
    }
}
