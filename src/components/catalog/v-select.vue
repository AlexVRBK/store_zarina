<template>
  <div class='v-select'>
    <p
        class="title"
        @click="areOptionsVisible = !areOptionsVisible"
    >{{selected}}</p>
    <div
        class="options"
        v-if="areOptionsVisible || isExpanded"
    >
      <p
          v-for="option in options"
          :key="option.value"
          @click="selectOption(option)"
      >
        {{option.name}}
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "v-select",
    props: {
      options: {
        type: Array,
        default() {
          return []
        }
      },
      selected: {
        type: String,
        default: ''
      },
      isExpanded: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        areOptionsVisible: false
      }
    },
    methods: {
      selectOption(option) {
        this.$emit('select', option)
        this.areOptionsVisible = false;
      },
      hideSelect() {
        this.areOptionsVisible = false;
      }
    },
    mounted() {
      document.addEventListener('click', this.hideSelect.bind(this), true)
    },
    beforeUnmount() {
      document.removeEventListener('click', this.hideSelect)
    }
  }
</script>

<style>
  .v-select {
    position: relative;
    width: 200px;
    cursor: pointer;
    text-align: left;
    margin-left: 20px;
    margin-bottom: 20px;
    
  }
  .title {
    border: solid 2px #000000;
    padding: 8px;
    border-radius: 7px;
  }
  .v-select p {
    margin: 0;
  }
  .options {
    border: solid 1px #000000;
    background: #dddada;
    position: absolute;
    top: 30px;
    left: 0;
    width: 100%;
    padding: 8px;
  }
  .options p:hover {
    background: #fcf8f8;
  }
</style>
