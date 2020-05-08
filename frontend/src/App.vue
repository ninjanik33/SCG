<template>
  <div id="app">
    <div id="nav">
      <b-navbar toggleable="lg">
        <b-navbar-brand>
          <router-link to="/">SCG Assignment</router-link>
        </b-navbar-brand>
        <b-navbar-toggle target="nav_collapse"/>
        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav class="ml-auto">
            <b-nav-item>
              <router-link to="/Assignment1">Assignment 1</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link to="/Assignment2">Assignment 2</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link to="/Assignment3">Assignment 3</router-link>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <b-container>
      <router-view/>
    </b-container>
    <div style="min-height:610px;">
    </div>
    <div>
      <div class="fluid-container footer">
        <strong>By Asawachat B.</strong>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      'default',
      'absolute',
      'fixed'
    ],
    padless: false,
    variant: 'fixed'
  }),
  computed: {
    localAttrs () {
      const attrs = {}
      if (this.variant === 'default') {
        attrs.absolute = false
        attrs.fixed = false
      } else {
        attrs[this.variant] = true
      }
      return attrs
    }
  }
}
</script>

<style scoped>
#nav{
  background: aquamarine;
}
.a{
  color: #4066d2;
}
.fluid-container.footer{
  background: aquamarine;
}
.fluid-container.footer > *:last-child {
  margin-bottom: 0px;
  color: #4066d2;
}
</style>
