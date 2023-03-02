<template>
    <div id="rsltBtn">
        <router-link to="/results" id="btn"><button type="button" @click="showConfetti">Se resultatet</button></router-link>
    </div>

</template>

<script>
    import JSConfetti from 'js-confetti'

    export default {
        name: 'Confetti',
        data() {
            return {
                //
            }
        },

        methods: {
            showConfetti() {
                const jsConfetti = new JSConfetti()
                if (this.sumOfCorrectAnswers >= 8) {
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

<style>
#rsltBtn{
    display: flex;
    justify-content: center;
}
</style>
