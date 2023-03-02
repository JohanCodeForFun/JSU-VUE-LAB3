<script>
import Chart from 'chart.js/auto'

export default {
	name: 'TheResults',
	props: {
		quizLength: Number,
		sumOfCorrectAnswers: Number
	},
	data() {
		return {
			fetchedResultData: [],
		}
	},
	methods: {
		fetchResults() {
			fetch('https://avancera.app/cities/')
				.then((response) => response.json())
				.then((result) => {
					this.fetchedResultData = result
				})
		}
	},
	mounted() {
		this.fetchResults();
		const ctx = document.getElementById('myChart');
		const MyChart = new Chart(ctx, {
			type: "pie",
			data: {
				labels: ["Rätt svar", "Totala frågor"],
				datasets: [
					{
						label: "Resultat av Quiz",
						data: [this.sumOfCorrectAnswers, this.quizLength],
						// backgroundColor: "rgba(54,73,93,.5)",
						// borderColor: "#36495d",
						borderWidth: 3,
					},
				],
			},
		})
		MyChart;
	}
}

</script>

<template>
	<div class="container">
		<div class="row">
			<div class="col-8">
				<h3>Resultat av ditt quiz!</h3>
				<canvas id="myChart"></canvas>
			</div>
			<div class="col-4">
				<h3>
					Enskilda resultat av frågor:
				</h3>
				<!-- <p v-for="(data, index) in fetchedResultData" :key="data.id">{{ index + 1 }}, {{ data.name }}</p> -->
			</div>
		</div>
	</div>
</template>
