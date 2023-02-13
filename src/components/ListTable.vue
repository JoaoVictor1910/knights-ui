<template>
    <div class="table-container">        
        <table class="table">
        <thead>
            <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Armas</th>
            <th>Atributo</th>
            <th>Ataque</th>
            <th>Exp</th>
            <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="person in people" :key="person.id">
            <td>{{ person.name }}</td>
            <td>{{ person.age }}</td>
            <td>{{ person.weapons }}</td>
            <td>{{ person.attribute }}</td>
            <td>{{ person.attack }}</td>
            <td>{{ person.exp }}</td>
            <td>
                <button class="btn btn-primary btn-sm mr-2" @click="editPerson(person)">Edit</button>
                <button class="btn btn-danger btn-sm" @click="deletePerson(person)">Delete</button>
                <button class="btn btn-primary btn-sm ml-2" @click="viewPerson(person)">View</button>
            </td>
            </tr>
        </tbody>
        </table>
    </div>
  </template>
  
  <script lang="js">
  export default {
    props: {
      people: {
        type: Array,
        required: true
      }
    },
    methods: {
      editPerson(person) {
        this.$emit("edit", person);
      },
      deletePerson(person) {
        this.$emit("delete", person);
      },
      viewPerson(person) {
        this.$emit("view", person)
      },
      filteredPeople(){
        this.$emit("filter");
      },
      listAll(){
        this.$emit("list");
      }
    }
  };
  </script>
  
  <style>
  .table-container{
    text-align: -webkit-center;
    padding: 50px 0;
  }
  .table{
    color: #fff;
    width: 90%;
  }
  .search-bar{
    width: 200px;
    background: white;
    border-radius: 8px;
  }
  </style>
  