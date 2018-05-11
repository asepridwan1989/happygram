var addpost = Vue.component('addpost', {
  props: ['', '', ''],
  data() {
      return {
        caption: '',
        imageUrl: '',
      }
  },
  methods: {
    uploadImg: function(){
        let fileInput = document.querySelector('#image');
        console.log(fileInput)

        let formData = new FormData()
        formData.append('caption', this.caption)
        formData.append('image', fileInput.files[0])

        let token = localStorage.getItem('happy-token');

        axios.post('http://localhost:3000/images',formData,  { headers: { 'x-auth': token } })
         .then( response => {
             console.log(response)
         })
         .catch( error => {
             console.log('error dari upload.html',error)
         })
    }
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
      <div class="ui positive right labeled icon button" @click="uploadImg">
        Happy Post Time :)
        <i class="checkmark icon"></i>
      </div>
    </div>
  </div>
  `
})




