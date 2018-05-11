var navbar = Vue.component('navbar', {
  props: ['', '', ''],
  data() {
      return {
      }
  },
  methods: {
    openModal: function () {
      console.log('halo')
      $('.ui.modal').modal('show');
    },
    logout: function() {
      localStorage.removeItem('happy-token');
      window.location.replace("http://127.0.0.1:8080/login.html");
    },
  },
  template:`
    <div class="ui secondary pointing menu">
      <a class="item active">
        Happygram.com
      </a>
      <a class="item" @click="openModal">
        New Post
      </a>
      <div class="right menu">

        <a class="ui item"  @click="logout">
          Logout
        </a>
      </div>
    </div>
    <!-- <div class="ui segment">
      <p>abc</p>
    </div> -->
  `
})
