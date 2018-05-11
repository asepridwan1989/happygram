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
      <center><h2> posted by : {{ item.userId.username }}</h2></center>
      <center><img :src="item.imageUrl"></center>
      <br/>
      <center><h2>{{ item.caption }}</h2></center>
    </div>
  </div>

  `
})
