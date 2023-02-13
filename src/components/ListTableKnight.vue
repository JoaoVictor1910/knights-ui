<template>
    <div class="table-container">        
        <table class="table">
        <thead>
            <tr>
            <th>Nome</th>
            <th>Apelido</th>
            <th>Nascimento</th>
            <th>Nome da arma</th>
            <th>Mod da arma</th>
            <th>Atributo da arma</th>
            <th>Equipada</th>
            <th>Força</th>
            <th>Destreza</th>
            <th>Constituição</th>
            <th>Inteligência</th>
            <th>Sabedoria</th>
            <th>Carisma</th>
            <th>Atributo Chave</th>
            <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="person in people" :key="person._id">
            <td>{{ person.name }}</td>
            <td>{{ person.nickname }}</td>
            <td>{{ person.birthday }}</td>
            <td>{{ person.weapons[0].name }}</td>
            <td>{{ person.weapons[0].mod }}</td>
            <td>{{ person.weapons[0].attr }}</td>
            <td>{{ person.weapons[0].equipped ? 'Sim' : 'Não' }}</td>
            <td>{{ person.attributes[0].strength }}</td>
            <td>{{ person.attributes[0].dexterity }}</td>
            <td>{{ person.attributes[0].constitution }}</td>
            <td>{{ person.attributes[0].intelligence }}</td>
            <td>{{ person.attributes[0].wisdom }}</td>
            <td>{{ person.attributes[0].charisma }}</td>
            <td>{{ person.keyAttribute }}</td>
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