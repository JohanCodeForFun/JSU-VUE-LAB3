<script setup>
import { defineProps } from 'vue';

const { quizStatus, completionPercentage } = defineProps(['quizStatus', 'completionPercentage'])
</script>

<template>
	<header>
		<h5>Fråga {{ quizStatus }}</h5>
		<div class="progress">
			<div class="completion" :style="{ width: completionPercentage }"></div>
		</div>
	</header>
</template>

<style scoped>
header {
	margin: 1rem 0;
}

h5 {
	color: #d9d7d7;
}

.progress {
	width: 16rem;
	height: 2rem;
	border: 3px solid purple;
}

.completion {
	height: 100%;
	width: 66%;
	background-color: purple;
}
</style>
