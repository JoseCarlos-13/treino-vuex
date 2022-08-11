<template>
   <div class="buttons">
      <button style="background-color: blue" @click="add">
          Adicionar
      <br>Pessoa
      </button>

      <button style="background-color: red" @click="remove">
          Remover
      <br>Pessoa
      </button>

      <button style="background-color: grey" @click="clearList">
          Limpar
      <br>Lista
      </button>
    </div>
</template>

<script>
export default {
  props: ['add', 'remove', 'clearList']
};
</script>

<style>
  .buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
}

.buttons button {
  margin-left: 5px;
  color: white;
  padding: 10px;
  border-radius: 5px;
  border: 0px;
  box-shadow: 1px 2px 2px black;
  margin-right: 5px;
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
