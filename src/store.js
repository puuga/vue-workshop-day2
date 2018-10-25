import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        productsInCart: [],
        totalPrice: 0
    },
    mutations: {
        addProduct (state, newProduct) {
            state.productsInCart.push(newProduct)
        },
        updateTotalPrice (state) {
            state.totalPrice = state.productsInCart.reduce( (sum, it) => sum + it.Price, 0 )
        }
    },
    actions: {
        addToCart (context, product) {
            context.commit('addProduct', product)
            context.commit('updateTotalPrice', product)
        }
    },
    getters: {
        totalPrice (state) {
            return `${state.totalPrice} USD`
        },
        totalProduct (state) {
            return state.productsInCart.length
        }
    }
})
