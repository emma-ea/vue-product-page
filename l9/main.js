const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true,
            free: false,
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id);
        },
        removeCartItem(id) {
            console.log(id);
            var temp = this.cart;
            this.cart = temp.filter(item => item !== id);
        }
    },
    computed: {
        cartSize() {
            return this.cart.length
        }
    }
})
