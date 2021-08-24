<template>
  <div class="hero-body">
    <div class="container">
      <div class="columns">
        <div class="column">
          <h1 class="title">Engaging line</h1>
          <p class="has-text-centered-mobile">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida
            rutrum quisque non tellus orci ac auctor. Quis enim lobortis
            scelerisque fermentum.
          </p>
          <hr class="rounded" />
          <div class="is-divider" data-content="   "></div>

          <p class="subtitle is-3" style="margin-top: 20px">What we offer</p>
          <p class="has-text-centered-mobile">
            <i
              class="fa fa-check"
              aria-hidden="true"
              style="color: #72ddf7"
            ></i>
            Lorem ipsum dolor sit amet
          </p>
          <p class="has-text-centered-mobile">
            <i
              class="fa fa-check"
              aria-hidden="true"
              style="color: #72ddf7"
            ></i>
            Augue mauris augue neque gravida in
          </p>
          <p class="has-text-centered-mobile">
            <i
              class="fa fa-check"
              aria-hidden="true"
              style="color: #72ddf7"
            ></i>
            Faucibus pulvinar elementum integer
          </p>
          <p class="has-text-centered-mobile">
            <i
              class="fa fa-check"
              aria-hidden="true"
              style="color: #72ddf7"
            ></i>
            Faucibus purus in massa tempor nec
          </p>
          <p class="has-text-centered-mobile">
            <i
              class="fa fa-check"
              aria-hidden="true"
              style="color: #72ddf7"
            ></i>
            Ante metus dictum at tempor commodo
          </p>
          <button
            id="learnbtn"
            type="button"
            class="button is-size-6 is-rounded is-primary"
            style="margin-top: 15px"
          >
            Learn more
          </button>
          <button
            id="learnbtn"
            type="button"
            class="button is-size-6 is-rounded"
            style="margin-top: 15px"
          >
            Learn more
          </button>
        </div>

        <div class="column">
          <HomeWzrd />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  methods: {
    async logout() {
      await this.$auth.logout(); // this method will logout the user and make token to false on the local storage of the user browser
    },
  },
  computed: {
    ...mapGetters(["getUserInfo", "isAuthenticated"]),
  },
};
</script>