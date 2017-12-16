<template>
  <div>
    {{itemsLng}}
<br>
item
{{displayItem}}

    <nav aria-label="Page navigation">
      <ul class="pagination">
        <router-link :to="`/list/page/${item}`" tag="li" v-for="item in displayElements" :key="item">
           <a>
             {{item}}
           </a>
        </router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
import axios from 'axios';

  export default {
    name: 'Pagination',
    data : function() {
       return {
         itemsLng : 0,
         url : 'http://localhost:3000/users/'
       }
    },
    computed : {
       displayElements(){
         if(this.itemsLng != 0){
           return Math.ceil(this.itemsLng / this.displayItem)
         }
       }
    },
    props : ['displayItem'],
    methods : {
      getArrLength(){

       axios.get(this.url)
       .then(resp => resp.data)
       .then(resp => {
         this.itemsLng = resp.length
       })
      }
    },
    mounted(){
      this.getArrLength()
    }
  }

</script>

<style>


</style>
