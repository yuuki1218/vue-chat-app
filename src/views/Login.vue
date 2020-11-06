<template>
  <section id="register-form">
    <h1>ログイン画面</h1>
    <div v-if="errorMsg" class="error-msg">{{ errorMsg }}</div>
    <div class="form">
      <div class="form-group">
        <label for="email">メールアドレス</label>
        <input type="text" name="email" id="email" v-model="email" />
      </div>
      <div class="form-group">
        <label for="password">パスワード</label>
        <input type="text" name="password" id="password" v-model="password" />
      </div>
      <div class="button-wrap">
        <div class="login-button">
          <input type="submit" value="送信" @click="login" />
        </div>
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
    return {
      email: '',
      password: '',
      errorMsg: '',
    };
  },
  methods: {
    login() {
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password,
      });
      setTimeout(this.checkError, 1000);
      this.email = '';
      this.password = '';
    },
    checkError(){
      if(!this.$store.getters.errorMsg){
          this.$router.push('/');
        }
      this.errorMsg = this.$store.getters.errorMsg;
    }
  },
};
</script>

<style scoped>
.error-msg {
  color: red;
}
</style>
