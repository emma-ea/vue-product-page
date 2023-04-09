app.component('review-form', {
    template:
    /*html*/
    `
    <form class="review-form" @submit.prevent="onSubmit">
        <h3>Leave a review</h3>
        <label for="name">Name: </label>
        <input id="name" v-model="name"/>

        <label for="review">Review:</label>
        <textarea id="review" v-model="review"></textarea>

        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
        </select>

        <p>Would you recommend this product?</p>
        <input class="radio" type="radio" id="yes" value="Yes" v-model="recommend"/>
        <label class="radio" for="yes">Yes</label>
        <input class="radio" type="radio" id="no" value="No" v-model="recommend"/>
        <label class="radio" for="no">No</label>

        <input class="button" type="submit" value="Submit"/>
    </form>`,
    data() {
        return {
            name: '',
            review: '',
            rating: null,
            recommend: '',
        }
    },
    methods: {
        onSubmit() {

            if (this.name === '' || this.review === '' || this.rating === null) {
                alert("Review incomplete. Fill all fields to continue");
                return;
            }

            let formData = {
                name: this.name,
                review: this.review,
                rating: this.rating,
                recommend: this.recommend
            }
            this.$emit('upload-review', formData)
        }
    }
})