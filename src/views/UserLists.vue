<template>
  <section id="user-lists-form">
    <div id="dashbord">
    <p>{{ getUserName() }}さんようこそ！</p>
    <p>残高：1000円</p>
  </div>
    <h1>ユーザー一覧</h1>
    <div class="user-lists">
      <table>
        <thead>
          <tr>
            <th>ユーザー名</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>sampleuser</td>
          </tr>
        </tbody>
      </table>
    </div>
    <router-link to="/login">
    <div class="logout-button">
      <input type="submit" value="ログアウト">
    </div>
    </router-link>
  </section>
</template>

<script>
export default {
  data() {
    return {
      userName: '',
    }
  },
  methods: {
    getUserName(){
      this.userName = this.$store.getters.userName;
      return this.userName;
    }
  }
}
</script>