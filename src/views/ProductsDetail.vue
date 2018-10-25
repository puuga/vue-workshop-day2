<template>
    <div class="product-detail">
        <h1>Products Detail</h1>
        <img :src="product.ProductPicUrl" :alt="product.Description" class="product-image"/><br/>
        <strong>{{ product.Name }}</strong><br/>
        <i>{{ product.Description }}</i><br/>
        <strong class="product-price">{{ product.Price }} {{ product.CurrencyCode }}</strong><br/>
        <button class="add-to-cart" @click="addToCart(product)">Add {{ product.Name }} to cart</button>
        <br/>
    </div>
</template>

<script>
import products from '../products.json'
import { mapMutations, mapActions } from 'vuex'

export default {
    name: 'ProductsDetail',
    data () {
        return {
            products: products,
            product: {}
        }
    },
    mounted() {
        this.product = this.products.find(it => it.ProductId === this.$route.params.productId)
    },
    methods: {
        ...mapActions([
            'addToCart'
        ])
    }
}
</script>

<style scoped>
.product-price {
    font-size: 2rem;
    color: green;
}
.add-to-cart {
    padding: 1rem;
}
</style>
