new Vue({
  el: '#app',
  data: {
    arrcontents: [],
    item_contents: [],
    test_caption: '',
    singleimage:'',
    hi: 'halooo'
  },
  component: {
    navbar: navbar,
    addpost: addpost,
    mainpage: mainpage,
    singlepost: singlepost
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
    getObjImage: function(e) {
      console.log('ini dari hasil doa',e)
      this.singleimage = e.data.result
    }

  }
})
