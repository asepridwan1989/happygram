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
    }
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
        <a class="ui item">
          Register
        </a>
        <a class="ui item">
          Sign In
        </a>
        <a class="ui item">
          Logout
        </a>
      </div>
    </div>
    <!-- <div class="ui segment">
      <p>abc</p>
    </div> -->
  `
})




