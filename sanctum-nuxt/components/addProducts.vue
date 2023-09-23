<script lang="ts" setup>
const form = ref({
    title: ""
});
const productStore = useProductStore();


async function addProduct(){
    await productStore.addProduct(form.value);
    
}


</script>

<template>
    <div class="p-4 md:w-1/3">
        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-sm overflow-hidden">
            <div class="p-6">
                <form action="" @submit.prevent="addProduct">
                    <div class="relative mb-4">

                        <label for="title" class="leading-7 text-sm text-gray-600">Title</label>
                        <input type="title" id="title" name="title"
                            v-model="form.title" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                    </div>
                    <button class="rounded-sm bg-slate-400 text-gray-800 text-sm px-3 py-1">Add Product</button>
                </form>
            </div>

        </div>
    </div>
</template>