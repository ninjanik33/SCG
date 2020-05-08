<template>
  <div class="assign1">
    <h2>Assignment 1</h2>
    <span>
      <strong>Question : </strong>
      <strong>X, Y, 5, 9, 15, 23, Z - Please create a new function for finding X, Y, Z value</strong>
    </span>
    <p><strong>Answer > {{posts}}</strong></p>
      <button  v-on:click="callAPI()">Send</button>
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
  // methods: {
  //   async callAPI () {
  //     const x = await fetch('https://maps.googleapis.com/maps/api/directions/json?origin=centralwOrld&destination=SCG%20Bangsue&key=AIzaSyD6HQXUxZhM04M1dez-EqUxNW-xDd3oc-c',
  //       {
  //         method: 'GET',
  //         mode: 'no-cors',
  //         cache: 'no-cache',
  //         credentials: 'omit',
  //         headers: {
  //           'Content-Type': 'application/json',
  //           'Access-Control-Allow-Origin': '*'
  //         }
  //       }).then((res)=>{
  //         console.log('res', res);
  //     }).catch((err)=>{
  //       console.error(err)
  //     }).finally(() => {
  //       console.log('GG');
  //     })
  //     console.log('xxxx', x)
  //   }
  // }
}
</script>
