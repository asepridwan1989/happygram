var mainpage = Vue.component('mainpage', {
  props: ['arrcontents', '', ''],
  data() {
      return {
      }
  },
  methods: {
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
              <i class="cloud download icon"></i>
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
          </div>
        </div>   
      </div>     
    </div>
  </div>
  `
})




