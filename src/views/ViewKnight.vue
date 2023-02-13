<template>
    <div>
      <list-table-knight :people="people" @edit="editPerson" @delete="deletePerson"/>
      <div class="img-container">
        <img src="../assets/shiba-hero-transformed.png" alt="">
      </div>
    </div>
  </template>
  
  <script>
  import ListTableKnight from "@/components/ListTableKnight.vue"
  import api from '@/store/api.js';
  
  export default {
    components: {
      ListTableKnight
    },
    data() {
      return {
        people: []
      };
    },
    async created() {
        let id = this.$route.query.id;
        const list = await api.viewKnight(id);
        this.people = list.data;
    },
    methods: {
      async editPerson(person) {
        this.$router.push({
          path: "/edit",
          query: { id: person.id }
        });
      },
      async deletePerson(person) {
        // Add code to delete a person
        const deleteKnight = await api.deleteKnight(person.id);
        if(deleteKnight.data.delete === true){
          alert('DELETADO COM SUCESSO');
          window.location.reload();
        } else {
          alert('FALHA AO DELETAR')
        }
      }
    }
  };
  </script>
  
<style>
.img-container{
    width: 100%;
    height: auto;
    text-align: center;
}
.img-container > img{
    width: auto;
    height: 400px;
}
</style>
  