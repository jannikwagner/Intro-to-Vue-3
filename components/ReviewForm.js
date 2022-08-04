app.component('review-form', {
    template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit">
      <h3>Leave a review</h3>
      <label for="name">Name:</label>
      <input id="name" v-model="name">
  
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

      <input type="checkbox" id="wouldRecommend" name="wouldRecommend"
      checked v-model.bool="wouldRecommend">
<label for="wouldRecommend">I would recommend this product</label>
  
      <input class="button" type="submit" value="Submit">
    </form>`,
    data() {
      return {
        name: '',
        review: '',
        rating: null,
        wouldRecommend: null,
      }
    },
    methods: {
        onSubmit() {
            if (this.review == '' || this.name == '' || this.rating == null || this.wouldRecommend == null) {
                alert("Please fill out all fields!")
                return
            }
            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating,
                wouldRecommend: this.wouldRecommend,
            }
            this.$emit('review-submitted', productReview)
        }
    }
  })