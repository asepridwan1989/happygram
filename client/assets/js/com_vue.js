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
  },
  methods: {
    getContents: function () {

      axios.get('http://localhost:3000/contents')
        .then(results => {

          let arrResult = results.data.result;

          this.arrcontents = results.data.result;
          console.log('contents from server new', this.arrcontents);
          
        })
        .catch(err => {

          console.log('Error getting contents from server',err)

        })
    },
  }
})
