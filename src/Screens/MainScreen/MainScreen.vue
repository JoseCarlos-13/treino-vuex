<template>
  <div>
    <div class="mainDiv">
      <div class="form">
        <label>Nome:</label>
          <input type="text" v-model="name">
        <label>Idade:</label>
          <input type="number" v-model="age">

        <FormButtons :add="add" :remove="remove" :clearList="clearPeople" />
      </div>

      <StudentsList />
    </div>
  </div>
</template>

<script>
import StudentsList from "@/components/StudentsList/StudentsList";
import FormButtons from "@/components/Form/FormButtons";
import { mapActions, mapMutations } from "vuex";
export default {
  components: {
    StudentsList,
    FormButtons
  },

  data() {
    return {
      id: 0,
      age: "",
      name: ""
    };
  },

  methods: {
    ...mapActions(["addPerson", "removePerson"]),
    ...mapMutations(["clearPeople"]),

    clearFields() {
      this.name = "";
      this.age = "";
    },

    add() {
      const person = {
        id: this.id++,
        name: this.name,
        age: this.age
      };
      this.addPerson(person);
      this.clearFields();
    },

    remove() {
      this.removePerson();
    }
  }
};
</script>

<style>
body {
  background-image: url(https://cdn.hipwallpaper.com/i/17/64/J26r98.jpg);
}

.mainDiv {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
}

.form {
  display: flex;
  margin: 100px auto;
  flex-direction: column;
  justify-content: center;
  background-color: darkblue;
  color: white;
  border-radius: 5px;
  padding: 50px;
}

.form input {
  padding: 5px;
  font-size: 15px;
  border-radius: 5px;
  margin-bottom: 10px;
}
</style>


