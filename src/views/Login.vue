<template>
  <section id="register-form">
    <h1>ログイン画面</h1>
    <div class="form">
      <div class="form-group">
      <label for="email">メールアドレス</label>
      <input type="text" name="email" id="email" v-model="email">
      </div>
      <div class="form-group">
      <label for="password">パスワード</label>
      <input type="text" name="password" id="password" v-model="password">
      </div>
      <div class="button-wrap">
        <router-link to="/">
        <div class="login-button">
        <input type="submit" value="送信" @click="login">
        </div>
        </router-link>
        <div class="register-link">
        <router-link to="/register">
        <a>新規登録の方はこちら</a>
        </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return{
      email: '',
      password: ''
    }
  },
  // methods: {
  //   login() {
  //     this.$store.dispatch('login', {
  //       email: this.email,
  //       password: this.password
  //     })
  //      this.errorMsg = this.$store.getters.errorMsg;
  //       console.log(this.errorMsg);
  //     this.email = '';
  //     this.password = '';
  //   }
  // }
}
</script>