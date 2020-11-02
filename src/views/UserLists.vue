<template>
  <section id="user-lists-form">
    <Dashbord></Dashbord>
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
import Dashbord from '../components/Dashbord.vue';
export default {
  components: {
    Dashbord,
  }
}
</script>