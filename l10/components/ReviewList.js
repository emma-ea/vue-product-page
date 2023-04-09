app.component('review-list', {
    props: {
        reviews: {
            type: Array,
            required: true,
        }
    },
    template:
    /* html */
    `<div class="review-container">
        <h3>Reviews</h3>
        <ul style="list-style-type: disc">
            <li v-for="(review, index) in reviews" :key="index">
            {{ review.name }} rates product with {{ review.rating }} stars
            <br>
            "{{ review.review }}"
            <br>
            Recommend to someone: {{ review.recommend }}
            </li>
        </ul>
    </div>
    `
})
