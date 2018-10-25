<template>
    <div class="products">
        <h1>
            Products Page
        </h1>
        
        <div v-for="product in products" :key="product.ProductId" class="product">
            <p>
                <img :src="product.ProductPicUrl" :alt="product.Description" class="product-image"/><br/>
                <strong>{{ product.Name }}</strong><br/>
                <i>{{ product.Description }}</i><br/>
                <strong class="product-price">{{ product.Price }} {{ product.CurrencyCode }}</strong><br/>
                <br/>
                <router-link :to="{ name: 'products-detail', params: { productId: product.ProductId } }">
                    Detail &gt;&gt;&gt;
                </router-link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button class="add-to-cart" @click="addToCart(product)">Add {{ product.Name }} to cart</button>
            </p>
        </div>

    </div>
</template>

<script>
import products from '../products.json'
import { mapMutations, mapActions } from 'vuex'

export default {
    name: 'Products',
    data () {
        return {
            products: products
        }
    },
    methods: {
        ...mapActions([
            'addToCart'
        ])
    }
}
</script>

<style scoped>
.product {
    margin-bottom: 2rem;
}
.product-image {
    max-height: 100px;
}
.product-price {
    font-size: 2rem;
    color: green;
}
</style>
