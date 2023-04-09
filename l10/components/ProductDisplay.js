app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true,
        },
        detail: {
            type: String,
            required: false
        },
    },
    template:
    /*html*/
    `<div class="product-display">
        <div class="product-container">
          <div class="product-image">
            <img v-bind:src="image">
          </div>
          <div class="product-info">
            <h1>{{ title }}</h1>

            <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>
            <p> Shipping: {{ charge }} </p>
            <ul>
              <li v-for="d in details">{{ d }}</li>
            </ul>

            <product-detail :details="productDetail"></product-detail>

            <div
              v-for="(variant, index) in variants"
              :key="variant.id"
              @mouseover="updateVariant(index)"
              class="color-circle"
              :style="{ backgroundColor: variant.color }">
            </div>

            <button 
                class="button" 
                :class="{ disabledButton: !inStock }" 
                :disabled="!inStock" 
                v-on:click="addToCart"
                >Add to Cart</button>
          </div>
        </div>
        <review-list v-if="reviews.length" :reviews="allReviews"></review-list>
        <review-form @upload-review="reviewData"></review-form>
      </div> `,
    data() {
        return {
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 4 },
            ],
            reviews: [],
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
        },
        updateVariant(index) {
            this.selectedVariant = index
        },
        removeFromCart() {
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
        },
        reviewData(data) {
            this.reviews.push(data)
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        charge() {
            if (this.premium) {
                return 'Free'
            }
            return 2.99
        },
        productDetail() {
            return this.detail
        },
        allReviews() {
            return this.reviews
        }
    },
})
