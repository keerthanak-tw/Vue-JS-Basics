<template>
  <div>
    <b-nav tabs>
      <b-nav-item disabled><b>Fancy Quiz App</b></b-nav-item>
      <b-nav-item disabled>Total Questions: 10</b-nav-item>
      <b-nav-item disabled>Total Answered: {{ numTotal }}</b-nav-item>
      <b-nav-item disabled>Correct answers: {{ numCorrect }}</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  props: [
    'numCorrect',
    'numTotal'
  ]
}
</script>