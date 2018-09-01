<script>
import { mapState } from 'vuex';
import Hundo from '~/components/Hundo';
import axios from 'axios';

export default {
  components: { Hundo },

  data() {
    return { stats: {} };
  },

  methods: {
    sort: (a, b, i, arr) =>
      arr.filter(v => v === a).length >= arr.filter(v => v === b).length
        ? a
        : b,
  },

  computed: {
    most() {
      return this.triggers
        .map(t => t.words)
        .reduce((a, b, i, arr) => this.sort(a, b, i, arr), 'oof');
    },

    ...mapState(['triggers']),
  },

  created() {
    axios
      .get('https://discordbots.org/api/bots/474240197329158165/stats')
      .then(res => {
        this.stats = res.data;
      })
      .catch(e => console.log(e));
  },
};
</script>

<template>
  <div class="stats">
    <div class="row">
      <div class="col-sm-4">
        <Hundo :width="75" :height="75" :text="triggers.length" />
        <div class="title">number of triggers</div>
      </div>

      <div class="col-sm-4">
        <Hundo :width="75" :height="75" :text="stats.server_count" />
        <div class="title">servers</div>
      </div>

      <div class="col-sm-4">
        <Hundo :width="75" :height="75" :text="most" />
        <div class="title">most common trigger</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.stats {
  text-align: center;
}

.stats {
  font-size: 16px;
  font-family: sans-serif;
  font-weight: 800;
  color: #bb1a34;
}
</style>

