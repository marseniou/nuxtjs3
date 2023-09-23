import { defineStore } from "pinia";

type Product = {
    id: number;
    title: string;
}
type Data = {
    title: string;
}
export const useProductStore = defineStore('productStore', () => {
    const product = ref<Product | null>(null)

    async function addProduct(product_data: Data) {
        await useApiFetch('/sanctum/csrf-cookie');
        const {data} = await useApiFetch('/api/product', {
            method: 'POST',
            body: product_data
        });
        
        product.value = data.value as Product
    }
    return {product, addProduct};
})