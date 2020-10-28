<template>
  <section id="register-form">
    <h1>新規登録画面</h1>
    <div class="form">
      <div class="form-group">
      <label for="user-name">ユーザー名</label>
      <input type="text" name="user-name" id="user-name" v-model="userName">
      </div>
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
        <div class="register-button">
        <input type="submit" value="送信" @click="register">
        </div>
        </router-link>
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
import axios from '../axios-auth';
export default {
  data() {
    return {
      userName: '',
      email: '',
      password: ''
    }
  },
  methods: {
    register(){
      axios.post('/accounts:signUp?key=AIzaSyCKJ0DuTg_vfGYHvlCiyEDRv6AxM-N4gG4',
      {
      userName: this.userName,
      email: this.email,
      password: this.password,
      returnSecureToken: true
      }
      ).then(response => {
        console.log(response);
      });
    }
  }
}
</script>