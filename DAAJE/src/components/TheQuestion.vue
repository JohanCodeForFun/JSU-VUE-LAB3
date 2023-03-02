<script setup>
import { defineProps, defineEmits } from 'vue';
const { question } = defineProps(['question']);
const emit = defineEmits(['selectChoice']);
const emitSelectedChoise = (isCorrect) => {
	emit('selectChoice', isCorrect)
};
</script>

<template>
	<div class="question-container">
		<h3 class="question">
			{{ question.text }}
		</h3>
	</div>
	<div class="options-container">
		<div v-for="option in question.options" class="option" @click="emitSelectedChoise(option.isCorrect)">
			<p class="option-label">{{ option.label }}</p>
			<div class="option-value">
				{{ option.text }}
			</div>
		</div>
	</div>
</template>

<style scoped>
.question-container {
	margin: 1rem 0;
}

.question {
	margin-bottom: 1rem;
	color: white;
}

.options-container {
	display: flex;
	flex-direction: column;
	color: white;
	gap: 1rem 0;
}

.option {
	display: flex;
	cursor: pointer;
}

.option-label {
	display: flex;
	align-items: center;
	justify-content: center;
	background-image: linear-gradient(180deg, #5b6aac 0%, #5f0a87 84%);
	border-radius: 5rem;
	width: 2rem;
	height: 2rem;
}

.option-value {
	border-radius: 5rem;
	color: white;
	width: 100%;
	padding: 0 1rem;
	height: 2rem;
}
</style>