<template>
	<RouterLink to="/">Home</RouterLink> |
	<RouterLink to="/about">About</RouterLink> |
	<RouterLink to="/quiz">Quiz</RouterLink> |
	<RouterLink to="/results">Results</RouterLink>

	<div class="container">
		<Suspense>
			<RouterView></RouterView>
		</Suspense>
	</div>
</template>

<script>
</script>
<style scoped>
.container {
	padding: 0 1.2rem;
	/* extra padding + btstrap col padding*/
	height: 100vh;

	background-color: #a4508b;
	background-image: linear-gradient(286deg, #a4508b 0%, #5f0a87 84%);
}
</style>
