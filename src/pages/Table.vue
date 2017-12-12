<template>
  <div>
    <select-elements @changeItems="setColElements"></select-elements>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Last Name</th>
          <th>Active</th>
          <th>Balance</th>
          <th>Email</th>
          <th>Phone number</th>
          <th>Sign In (date)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">
            <router-link :to="`/user/${user.id}`"># {{user.id}}</router-link>
          </th>
          <td>{{user.name}}</td>
          <td>{{user.lastName}}</td>
          <td>{{user.isActive}}</td>
          <td>{{user.balance}}</td>
          <td>
            <a v-bind:href="user.email">{{user.email}}</a>
          </td>
          <td>{{user.phone}}</td>
          <td>{{user.registered}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
import Select from '@/components/Select.vue'

  export default {
    name: 'Table',
    data: () => ({
        url : 'http://localhost:3000/users/',
        users : [],
        choseElem : 5,
        page : 1
    }),
    methods : {
        loadData(){
           axios.get(`${this.url}?_page=${this.page}&_limit=${this.choseElem}`)
           .then(resp => resp.data)
           .then(resp =>{
             console.log(resp)
               this.users = resp;
           })
        },
        setColElements(cnt){
          console.log(cnt);
         this.choseElem = cnt;
        }
    },
    watch : {
      choseElem(){
        console.log(this.choseElem);
        this.loadData();
      }
    },
    mounted : function(){
       this.loadData();
    },
    components : {
       'select-elements' : Select 
    }
  }

</script>

<style>


</style>
