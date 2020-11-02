<template>
  <section id="register-form">
    <h1>ログイン画面</h1>
    <div class="form">
      <div class="form-group">
      <label for="email">メールアドレス</label>
      <input type="text" name="email" id="email">
      </div>
      <div class="form-group">
      <label for="password">パスワード</label>
      <input type="text" name="password" id="password">
      </div>
      <div class="button-wrap">
        <router-link to="/">
        <div class="login-button">
        <input type="submit" value="送信">
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