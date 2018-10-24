<template>
  <div class="bg">
    <div class="logo" style="margin-left: -45px;padding-top: 20px">
      <router-link to="/">
        <img src="https://cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png"/>
      </router-link>
    </div>

      <div class="main">
        <div>
          <p>登录</p>
        </div>
        <b-form-group id="exampleInputGroup1"
                      label-for="exampleInput1">
          <b-form-input id="exampleInput1"
                        type="email"
                        v-model="email"
                        required
                        placeholder="邮箱">
          </b-form-input>
        </b-form-group>

        <b-form-group id="exampleInputGroup2"
                      label-for="exampleInput2">
          <b-form-input id="exampleInput2"
                        type="password"
                        v-model="password"
                        required

                        placeholder="密码">
          </b-form-input>
        </b-form-group>
        <b-button type="button" variant="primary" class="sign-in-btn" @click="onClick">SignIn</b-button>
      </div>
    </div>

</template>

<script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      onClick() {
        var that = this;
        this.$http
          .post('http://localhost:8080/user/sign_in', {"email": this.email, "password": this.password})
          .then(function (response) {
            alert(JSON.stringify(response.data.data));
            localStorage.setItem("loginUser", JSON.stringify(response.data.data))
            that.$router.push("/")
          })
      }
    }
  }
</script>

<style scoped>
  .bg {
    background-color: #EEE;
    width: 100%;
    height: 1200px;
  }

  .logo {
    position: absolute;
    top: 50px;
    left: 50px;
  }

  .main {
    width: 400px;
    margin: 100px auto 0 420px;
    padding: 50px 50px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .1);
    vertical-align: middle;
    display: inline-block;
  }

  .sign-in-btn {
    width: 300px;
    height: 40px;
    border-radius: 30px;
  }
</style>
