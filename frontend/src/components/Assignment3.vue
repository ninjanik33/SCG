<template>
  <div class="assign3">
    <h2>Assignment 3</h2>
    <span>
      <strong>Question : </strong>
      <strong>Please use “Google API” for finding the best way to go to Central World from SCG Bangsue</strong>
    </span>
    <p><strong>{{posts}}</strong></p>
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
    this.$api.get('doAssignment3')
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
