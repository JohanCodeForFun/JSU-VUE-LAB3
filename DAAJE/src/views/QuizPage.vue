<script setup>

import QuizForm from '../components/QuizForm.vue'
import QuizQuestions from '../components/QuizQuestions.vue';
import Confetti from '../components/Confetti.vue';

</script>

<template>
    <Suspense>
        <div>
            <h1>Quiz page view</h1>
            <div class="quiz-container">
                <QuizQuestions />
                <QuizForm />
            </div>
        </div>
        </Suspense>
        <Confetti />
</template>

<style scoped>
.quiz-container {
    display: flex;
}
</style>
