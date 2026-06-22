export const orderSchema = {
    getOrder: (query: string) => `
        query getOrder($order: OrderInput) {
            getOrder(order: $order){
                ${query}
            }
        }
    `,
    getOrders: (query: string) => `
        query getOrders($orderIds: [String], $order: OrderInput, $limit: Int, $skip: Int){
            getOrders(orderIds: $orderIds, order: $order, limit: $limit, skip: $skip){
                ${query}
            }
        }
    `,
}