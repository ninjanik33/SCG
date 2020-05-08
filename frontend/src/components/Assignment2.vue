<template>
  <div class="assign2">
    <h2>Assignment 2</h2>
    <span>
      <strong>Question : </strong>
      <strong>If A=21, A+B=23, A+C=-21 - Please create a new function for finding B and C value</strong>
    </span>
    <p><strong>Answer > {{posts}}</strong></p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      posts: [],
      errors: []
    }
  },
  created () {
    this.$api.get('doAssignment2')
      .then(response => {
        this.posts = response.data
        console.log(response)
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>
