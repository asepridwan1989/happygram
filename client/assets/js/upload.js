const app = new Vue({
    el:'#app',
    data: {
        // caption: ''
        // imageUrl: ''
    },
    methods: {
        uploadImg: function(){
            let fileInput = document.querySelector('#image');
            // console.log(fileInput)

            let formData = new FormData()
            // formData.append('caption', this.caption)
            formData.append('image', fileInput.files[0])

            axios.post('http://localhost:3000/upload',formData)
             .then( response => {
                 console.log(response)
             })
             .catch( error => {
                 console.log('error dari upload.html',error)
             })
        }
    }
})