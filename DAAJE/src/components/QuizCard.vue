<template>
	<div @click="goToQuiz">
		<h3>{{ quiz.name }}</h3>
		<img :src="quiz.img" alt="">
		<p>{{ quiz.questions.length }}st frågor</p>
		<button @click="goToQuiz">Start Quiz!</button>
	</div>
</template>

<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router'

const { quiz } = defineProps(['quiz']);
const router = useRouter();

const goToQuiz = () => {
	router.push(`/quiz/${quiz.id}`)
}

</script>

<style scoped>
div {
	border: 1px solid black;
	border-radius: 1rem;
	padding: .5rem;
	cursor: pointer;
}

img {
	widows: 150px;
	height: 150px;
}
</style>