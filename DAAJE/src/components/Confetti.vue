<template>
    <router-link to="/results"><button type="button" @click="showConfetti">Se resultatet</button></router-link>
</template>

<script>
    import JSConfetti from 'js-confetti'

    export default {
        name: 'Confetti',
        data() {
            return {
                result: 10
            }
        },

        methods: {
            showConfetti() {
                const jsConfetti = new JSConfetti()
                if (this.result >= 10) {
                    jsConfetti.addConfetti({
                        confettiRadius: 5,
                        confettiColors: [
                            'yellow',
                            'blue',
                            'red',
                            'green',
                            'orange'
                        ],
                        confettiNumber: 500,
                    })
                } else {
                    jsConfetti.addConfetti({
                        emojis: ['😢'],
                        emojiSize: 40,
                        confettiNumber: 50,
                    })
                }
            }
        }
    }
</script>

<style></style>
