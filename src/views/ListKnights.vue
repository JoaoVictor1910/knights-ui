<template>
    <div>
      <div>
        <div class="row">
          <div class="col-1"></div>
          <div class="col-1 mt-4">
              <div class="">
                  <button class="btn" type="submit" @click="filteredPeople(person)">Heróis</button>
              </div>
          </div>
          <div class="col-1 mt-4 ml-4">
              <div class="">
                  <button class="btn" type="submit" @click="listAll(person)">Todos</button>
              </div>
          </div>
        </div>
      </div>
      <list-table :people="people" @edit="editPerson" @delete="deletePerson" @view="viewPerson" @filter="filterHeroes" @list="listAll"/>
    </div>
  </template>
  
  <script>
  import ListTable from "@/components/ListTable.vue"
  import api from '@/store/api.js';
  
  export default {
    components: {
        ListTable
    },
    data() {
      return {
        people: []
      };
    },
    async created() {
      const list = await api.getList();
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
      },
      async viewPerson(person){
        this.$router.push({
          path: "/view",
          query: { id: person.id }
        });
      },
      async filterHeroes(){
        const list = await api.getList({filter: 'heroes'});
        this.people = list.data;
      },
      async listAll(){
        const list = await api.getList();
        this.people = list.data;
      }
    }
  };
  </script>
  
  <style>
  </style>
  