<template>
  <div id="app" class="app">
    <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-6">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link class="navbar-brand" to="/">
          Brand
        </router-link>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <router-link tag="li" to="/list" active-class="active" exact>
            <a>Home</a>
          </router-link>
          <router-link tag="li" to="/user/add" active-class="active" exact>
            <a>Add user</a>
          </router-link>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </nav>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
 .app{
   margin-top: 60px;
 }
</style>
