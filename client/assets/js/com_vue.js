new Vue({
  el: '#app',
  data: {
    arrcontents: [],
    item_contents: [],
    test_caption: '',
    hi: 'halooo'
  },
  component: {
    navbar: navbar,
    mainpage: mainpage,
    addpost: addpost
  },
  created: function() {
    this.getContents()
    let token = localStorage.getItem('happy-token');
    if (!token) {
      window.location.replace("http://127.0.0.1:8080/login.html");
    }
  },
  methods: {
    getContents: function () {



      axios.get('http://localhost:3000/images')
        .then(results => {
          // let arrResult = results.data.result;
          // this.arrcontents = results.data.result;
          // console.log('contents from server new', this.arrcontents);
          this.arrcontents = results.data.images;
          console.log(this.arrcontents);
        })
        .catch(err => {

          console.log('Error getting contents from server',err)

        })
    },
  }
})
