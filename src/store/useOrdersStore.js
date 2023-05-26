import { createStore } from "../utils/createStore";

const useOrdersStore = createStore(
    (set, get) => ({
        loading: false,
        error: false,
        orders: [],
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
        postOrder: async (order) => {
            set({ loading: true, error: false });
            try {
                const response = await fetch("https://64639233043c103502a665a5.mockapi.io/api/orders", {
                    method: "POST",
                    body: JSON.stringify(order) ,
                    headers: { 'Content-Type': 'application/json' }
                });

                if (!response.ok) {
                    throw new Error(`Could not post, status: ${response.status}`);
                }

                console.log(await response.json());
                get().reset();
                set({ loading: false });
            } catch (e) {
                console.error(e);
                set({ error: true, loading: false })
            }
        },
        reset: () => set({loading: false, error: false, orders: []})
    }),
    'ORDERS',
);

export default useOrdersStore;