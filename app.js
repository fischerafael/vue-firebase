const app = Vue.createApp({
  data() {
    return {
      showTitle: true,
      title: "The Final Empire",
      age: 45,
    };
  },
  methods: {
    changeTitle(title) {
      this.title = title;
    },
    toggleShowTitle() {
      this.showTitle = !this.showTitle;
    },
  },
});

app.mount("#app");
