import { createStore } from "../utils/createStore";

const initialShops= [];

const useShopsStore = createStore(
    (set) => ({
        loading: false,
        error: false,
        shops: initialShops,
        fetch: async () => {
            set({ loading: true, error: false });
            try {
                const response = await fetch(import.meta.env.VITE_URL_BASE+"/shops");

                if (!response.ok) {
                    throw new Error(`Could not fetch, status: ${response.status}`);
                }

                set({ shops:  await response.json(), loading: false });
            } catch (e) {
                console.error(e);
                set({ error: true, loading: false })
            }
        }
    }),
    'SHOPS',
);

export default useShopsStore;