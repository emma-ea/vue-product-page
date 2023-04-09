app.component('product-detail', {
    props: {
        details: {
            type: String,
            required: false
        }
    },
    template: /*html*/ `<p>Product detail: {{ productDetail }}</p>`,
    computed: {
        productDetail() {
            return this.details
        }
    }
})