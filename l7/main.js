const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedIndex: 0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', 'quantity': 40, 'onSale': true },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', 'quantity': 0, 'onSale': false},
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateVariant(index) {
            this.selectedIndex = index
        },
        variant() {
            return this.variants[this.selectedIndex]
        }
    },
    computed: {
        title() {
            return this.product + ' ' + this.brand
        },
        image() {
            return this.variant().image
        },
        inStock() {
            return this.variant().quantity > 0
        },
        productAvailability() {
            if (this.inStock) {
                return "In Stock"
            }
            return "Out of Stock"
        },
        onSale() {
            if (this.variant().onSale) {
                return `: ${this.variant().color.toUpperCase()} ${this.title} is on sale`
            }
        }
    }
})

// access mounted in browser console
const mounted = app.mount('#app');