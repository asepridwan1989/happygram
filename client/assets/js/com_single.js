var singlepost = Vue.component('singlepost', {
  props: ['item', '', ''],
  data() {
      return {
      }
  },
  methods: {
  },
  template:
  `
  <div class="container-card">
    <div class="image">
      <br/>
      <center><h2> posted by : {{ item.userId }}</h2>
      <center><img :src="item.imageUrl">
      <br/>
      <center><h2>{{ item.caption }}</h2>
    </div>
  </div>

  `
})
