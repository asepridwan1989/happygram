var mainpage = Vue.component('mainpage', {
  props: ['arrcontents', '', ''],
  data() {
      return {

      }
  },
  methods: {
    getOneContent: function(id){

      let url =  'http://localhost:3000/contents/getOne/' + id;
      // console.log(url)
      axios.get(url)
      .then(result=>{
        this.$emit('objimage', result)
      })
      .catch()
    }
  },
  template:`
  <div class="container-head ui grid">
    <div class="container-grid four wide column" v-for="item in arrcontents">
      <div class="container-card">
        <div class="ui card">
          <div class="content">
            <p>{{ item.userId.username }}</p>
          </div>
          <div class="image">
            <img :src="item.imageUrl">
          </div>
          <div class="content">
            <button class="ui icon button right floated">
              <a href="./assets/images/happygram1.jpeg" download>
              <i class="cloud download icon"></i>
              </a>
            </button>
            <div class="ui red button">
              <i class="heart icon"></i> Like
            </div>
            <a class="ui basic red left pointing label next">
              1,048
            </a>
          </div>
          <div class="extra content">
            <div class="ui large transparent left icon input">
              <div class="left floated">
                <i class="heart outline icon"></i>
              </div>
              <p>{{ item.caption }}</p>
            </div>
            <button @click="getOneContent(item._id)">Continue</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
})
