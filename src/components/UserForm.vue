<template>

  <div>
    <h3>
      User
    </h3>

    <div class="form-group">
      <label>Имя</label>
      <input type="text" class="form-control" name="firstName" v-model="user.firstName" />
    </div>

    <div class="form-group">
      <label>Фамилия</label>
      <input type="text" class="form-control" name="lastName" v-model="user.lastName" />
    </div>

    <div class="form-group">
      <label>Email</label>
      <input type="text" class="form-control" name="email" v-model="user.email" />
    </div>

    <div class="form-group">
      <img class="img-thumbnail" :src="user.picture" alt="" />
      <label>URL картинки</label>
      <input type="text" v-model="user.picture" />
    </div>

    <div class="form-group">
      <label>Возраст</label>
      <input type="number" class="form-control" v-model="user.age" />
    </div>

    <div class="form-group">
      <label>Активный</label>
      <div class="checkbox-inline">
        <input type="checkbox" v-model="user.isActive" /> Да
      </div>
    </div>

    <div class="form-group">
      <label>Уровень доступа</label>
      <select class="form-control" v-model="user.accesLevel">
        <option v-for="item in user.accesLevel" :key="item">
          {{item}}
        </option>
      </select>
    </div>

    <div class="form-group">
      <label>Баланс</label>
      <input type="text" class="form-control" v-model="user.balance" />
    </div>

    <div class="form-group">
      <label>Телефон</label>
      <input type="text" class="form-control" :value="user.phone" @input="user.phone = $event.target.value" />
    </div>

    <div class="form-group">
      <label>Адрес</label>
      <input type="text" class="form-control" v-model="user.address" />
    </div>

    <div class="form-group">
      <label>Компания</label>
      <input type="text" class="form-control" v-model="user.company" />
    </div>

    <div class="form-group">
      <label>Биография</label>
      <textarea class="form-control" v-model="user.about"></textarea>
    </div>

    <div class="form-group">
      <label>Дата регистрации</label>
      <input type="date" v-model="user.registered" />
    </div>
    <hr>
    <pre>
          {{user}}
      </pre>
    <hr>
    <button class="btn btn-access"> Create user </button>
  </div>

</template>

<script>
  export default {
    name: 'User',
    props: {
      user: {
        type: Object
      }
    }
  }

</script>

<style>


</style>
