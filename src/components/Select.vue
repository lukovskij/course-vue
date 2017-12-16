<template>
  <select class="custom-select" v-model="colElem">
    <option selected="selected">Choose...</option>
    <option value="3">3</option>
    <option value="5">5</option>
    <option value="7">7</option>
    <option value="9">9</option>
    <option value="10">10</option>
  </select>
</template>

<script>
  export default {
     name : 'Select',

     data : function(){
       return {
           colElem : 5,
       }
     },

     watch : {
       colElem(){
           this.$emit('changeItems', this.colElem);
       }  
     },
     mounted(){
         this.$emit('changeItems', this.colElem);
     }
  }

</script>

<style>

.custom-select{
    width: 200px;
    margin: 30px 0;
    height: 30px;
}

</style>
