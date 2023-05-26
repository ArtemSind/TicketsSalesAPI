import {Body, Controller, Get, Post} from '@nestjs/common';
import {OrdersService} from "../../services/orders/orders.service";
import {OrderDto} from "../../dto/order-dto";

@Controller('orders')
export class OrdersController {

    constructor(private orderService: OrdersService) {
    }

    @Post()
    addOrder(@Body() data: OrderDto): void {
        const orderData = new OrderDto(data.age, data.birthDay, data.cardNumber, data.tourId, data.userId);
        this.orderService.sendOrder(orderData);
    }

    @Get()
    getAllOrders(): Promise<OrderDto[]> {
        return this.orderService.getAllOrders()
    }

}
