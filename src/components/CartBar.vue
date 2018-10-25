<template>
    <div class="cart-bar">
        You have {{ totalProduct }} product(s) in cart | Total {{ totalPrice }}
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'CartBar',
    computed: {
        ...mapGetters([
            'totalPrice',
            'totalProduct'
        ])
    }
}
</script>

<style>
.cart-bar {
    border-bottom: 2px solid black;
    margin-top: 1rem;
    margin-bottom: 2rem;
}
</style>
