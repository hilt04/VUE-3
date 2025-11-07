<template>
  <div>

    <ScoreBoard :winCount="this.winCount" :loseCount="this.loseCount" />

    <h1 v-html="this.question"></h1>
    
    <template v-for="(answer, index) in this.answers" v-bind:key="index">
      <input
      :disabled="this.answerSubmitted"
        type="radio" 
        name="options" 
        :value="answer"
        v-model="this.chosen_answer">

      <label v-html="answer"></label><br/>

    </template>
     
    
    <button v-if="!this.answerSubmitted" @click="this.submitAnswer()" class="send" type="button">Send</button>

    <section v-if="this.answerSubmitted" class="result">

      <h4 v-if="this.chosen_answer == this.correct_answer"
      v-html="'&#9989; Congratulation! The answer ' + this.chosen_answer + 'is correct!'">
      </h4>
      <h4 v-else
      v-html="'&#10060; i´m sorry. you picked te wrong answer. The Correct is ' + this.correct_answer + '.'">
      </h4>
      <button @click="this.getNewQuestion()" class="send" type="button">Next Question</button>

    </section>

  </div>
  
</template>

<script>

import ScoreBoard from './components/ScoreBoard.vue';

export default {

  name: 'App',
  components: {
    ScoreBoard
  },
  
  data() {
    return {
      question: undefined,
      incorrect_answers: [],
      correct_answer: undefined,
      chosen_answer: undefined,
      answerSubmitted: false,
      winCouunt: 0,
      loseCount: 0,
    };
  },

  computed: {
    answers() {
      var answers = [...this.incorrect_answers];
      answers.splice( Math.round(Math.random() * answers.length), 0, this.correct_answer);
      return answers;
    }
  
  },
  methods: {

      submitAnswer() {
        if (this.chosen_answer === this.correct_answer) {
          alert('Escolhe logo, abestado!');
        } else {
          this.answerSubmitted = true;
            if(this.chosen_answer == this.correct_answer){
              this.winCouunt++;
            } else {
              this.loseCount++;
            }
          }
      },

      getNewQuestion() {

        this.answerSubmitted = false;
        this.chosen_answer = undefined;
        this.question = undefined;

        this.axios
          .get('https://opentdb.com/api.php?amount=1&category=18')
          .then((response) => {
            this.question = response.data.results[0].question;
            this.incorrect_answers = response.data.results[0].incorrect_answers;
            this.correct_answer = response.data.results[0].correct_answer;
          });
      }
  },
  
  created() {  
    this.getNewQuestion();
  }
}
</script>

<style>
 #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin: 60px auto;
      max-width: 960px;
     
    }
     
    input[type='radio']{
      margin: 12px 4px;
    }

    button.send {
      margin-top: 12px;
      height: 40px;
      min-width: 120px;
      padding: 0 16px;
      color: #fff;
      background-color: #1867c0;
      border: 1px solid #1867c0;
      cursor: pointer;
    }

</style>
