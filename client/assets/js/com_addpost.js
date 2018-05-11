var addpost = Vue.component('addpost', {
  props: ['', '', ''],
  data() {
      return {
      }
  },
  methods: {
  },
  template:`
  <div class="ui modal">
    <i class="close icon"></i>
    <div class="header">
      New Happygram Post :D
    </div>
      <p></p><input type="text" placeholder="caption" v-model="caption">    
      <p>Your new post: </p><input type="file" placeholder="image"  id="image">
      <p></p><button @click="uploadImg">Upload</button>
    <div class="actions">
      <div class="ui black deny button">
        Not happy enough :(
      </div>
      <div class="ui positive right labeled icon button">
        Happy Post Time :)
        <i class="checkmark icon"></i>
      </div>
    </div>
  </div>
  `
})




