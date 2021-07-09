export default {
  animalsCount: (state) => {
    return state.cats.length + state.dogs.length
  }
}
