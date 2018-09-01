export const state = () => ({
  triggers: [],
  loading: true,
});

export const mutations = {
  setContent(state, triggers) {
    state.triggers = triggers;
  },

  setLoading(state, mode) {
    state.loading = mode;
  },
};
