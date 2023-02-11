<template>
    <div>
      <list-table :people="people" @edit="editPerson" @delete="deletePerson" />
    </div>
  </template>
  
  <script>
  import ListTable from "@/components/ListTable.vue"
  
  export default {
    components: {
        ListTable
    },
    data() {
      return {
        people: [
          { id: 1,
            name: 'Pastel',
            age: 10,
            weapons: 2,
            attributes: 30,
            attack: 20,
            experience: 15000
          },
          { id: 2,
            name: 'Baguete',
            age: 21,
            weapons: 1,
            attributes: 23,
            attack: 12,
            experience: 26000
          },
        ]
      };
    },
    methods: {
      editPerson(person) {
        // Add code to edit a person
        console.log(person);
      },
      deletePerson(person) {
        // Add code to delete a person
        console.log(person);
      }
    }
  };
  </script>
  
  <style>
  
  </style>
  