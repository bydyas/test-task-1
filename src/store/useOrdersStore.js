import { createStore } from "../utils/createStore";

const initialOrders= [];

const useOrdersStore = createStore(
    (set, get) => ({
        orders: initialOrders,
        addOrder: (newOrder) => set((state) => ({ orders: [...state.orders, newOrder] })),
        removeOrder: (title) => set((state) => ({ orders: state.orders.filter(order => order.title !== title) })),
        editOrder: (title, key, value) => {
            const orderToEdit =  get().orders.filter(order => order.title === title)[0];
            get().removeOrder(orderToEdit.title);
            const editedOrder = {
                ...orderToEdit,
                [key]: value
            };
            get().addOrder(editedOrder);
        },
    }),
    'ORDERS',
);

export default useOrdersStore;