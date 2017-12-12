<template>
  <div>
     <h3> Edit user {{id}}</h3>
          <user-form v-if="user" :user="user"></user-form>
  </div>
</template>

<script>
import UserForm from '@/components/UserForm.vue';
import axios from 'axios';

export default {
   name: 'UserEdit',
   props : {
       id : String
   },
   components : {
       UserForm
   },
   data: () => ({
       url : 'http://localhost:3000/users/',

       user : null
   }),
   computed : {
     userUrl () {
        return `${this.url}${this.id}`
     }
   },
   methods : {
        loadData(){
           axios.get(this.userUrl)
           .then(resp => resp.data)
           .then(resp =>{
               this.user = resp
               window.USER = this.user;
           })
        }
    },
    mounted : function(){
       this.loadData()
    }
}
</script>

<style>

</style>
