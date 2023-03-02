<script setup>
import { useRoute } from 'vue-router';
import { ref, computed } from 'vue';
import TheQuestion from '../components/TheQuestion.vue';
import TheResults from '../components/TheResults.vue';
import QuizHeader from '../components/QuizHeader.vue';
import Confetti from '../components/Confetti.vue';
import axios from 'axios';

const currentQuestionIndex = ref(0);
const sumOfCorrectAnswers = ref(0);
const showResults = ref(false)

const route = useRoute();
const paramsId = parseInt(route.params.id);

const result = await axios.get('http://localhost:8080/quiz_questions');
const quizes = ref(result.data);

const quizToShow = quizes.value.find(quiz => quiz.id === paramsId);
const quizStatus = computed(() => `${currentQuestionIndex.value}/${quizToShow.questions.length}`)
const completionPercentage = computed(() => `${currentQuestionIndex.value / quizToShow.questions.length * 100}%`)

const onChoiceSelected = (isCorrect) => {
	if (isCorrect) {
		sumOfCorrectAnswers.value++;
	}

	if (quizToShow.questions.length - 1 === currentQuestionIndex.value) {
		showResults.value = true
	}

	currentQuestionIndex.value++;
}
</script>

<template>
	<div>
		<QuizHeader :quizStatus="quizStatus" :completionPercentage="completionPercentage" />
		<div>
			<TheQuestion v-if="!showResults" :question="quizToShow.questions[currentQuestionIndex]"
				@selectChoice="onChoiceSelected" />
			<TheResults v-else :quizLength="quizToShow.questions.length" :sumOfCorrectAnswers="sumOfCorrectAnswers" />
		</div>
	</div>
    <Confetti v-if="showResults.value == true"/> //vet ej om v if funkar
</template>
