<template>
    <div class="table-container">
        <div class="row">
            <div class="col-3">
                <div class="form-group search-bar">
                    <input type="text" class="form-control" placeholder="Search" v-model="searchTerm" />
                </div>
            </div>
            <div class="col-1">
                <div class="">
                    <button class="btn" type="submit" @click="filteredPeople(person)">Pesquisar</button>
                </div>
            </div>
        </div>
        
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
            <td>{{ person.attributes }}</td>
            <td>{{ person.attack }}</td>
            <td>{{ person.experience }}</td>
            <td>
                <button class="btn btn-primary btn-sm mr-2" @click="editPerson(person)">Edit</button>
                <button class="btn btn-danger btn-sm" @click="deletePerson(person)">Delete</button>
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
    computed: {
        filteredPeople() {
            return this.people.filter(person => {
                return person.name.toLowerCase().includes(this.searchTerm.toLowerCase());
            });
        }
    },
    methods: {
      editPerson(person) {
        this.$emit("edit", person);
      },
      deletePerson(person) {
        this.$emit("delete", person);
      },
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
  