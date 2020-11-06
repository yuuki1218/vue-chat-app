<template>
  <section id="register-form">
    <h1>新規登録画面</h1>
    <div class="form">
      <div v-if="errorMsg" class="error-msg">{{ errorMsg }}</div>
      <div class="form-group">
        <label for="user-name">ユーザー名</label>
        <input type="text" name="user-name" id="user-name" v-model="userName" />
      </div>
      <div class="form-group">
        <label for="email">メールアドレス</label>
        <input type="text" name="email" id="email" v-model="email" />
      </div>
      <div class="form-group">
        <label for="password">パスワード</label>
        <input type="text" name="password" id="password" v-model="password" />
      </div>
      <div class="button-wrap">
        <!-- <router-link to="/"> -->
        <div class="register-button">
          <input type="submit" value="送信" @click="register" />
        </div>
        <!-- </router-link> -->
        <div class="login-link">
          <router-link to="/login">
            <a>ログインの方はこちら</a>
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
      userName: '',
      email: '',
      password: '',
      errorMsg: '',
    };
  },
  methods: {
    register() {
      this.$store.dispatch('register', {
        userName: this.userName,
        email: this.email,
        password: this.password,
      });
      setTimeout(this._checkError, 1000);
      this.userName = '';
      this.email = '';
      this.password = '';
    },
    _checkError(){
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
