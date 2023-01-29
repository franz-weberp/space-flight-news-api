<template>
	<header>
		<NavArea @searchFor="search" @changeSort="sort" />
	</header>

	<Banner />

	<main>
		<Articles 
			:articles-params-search="[
				this.searchForTitle, 
				this.sortDefault, 
				this.amountArticles
			]"
		/>
	</main>
</template>

<script>
import NavArea from './components/C-NavArea.vue'
import Banner from './components/C-Banner.vue'
import Articles from './components/C-Articles.vue'

export default {
	components: {
		NavArea,
		Banner,
		Articles
	},
	
	data: () => ({
		searchForTitle: '',
		sortDefault: false,
		amountArticles: 10
	}),

	methods: {
		search (event) { this.searchForTitle = event },
		sort (event) { this.sortDefault = event },
		checkThereAreInitialParamsUrl() {
            let uri = window.location.search.substring();
            let params = new URLSearchParams(uri);

			this.searchForTitle = params.get("_contains") != null ? 
				params.get("_contains") : this.searchForTitle,
				
			this.amountArticles = params.get("_limit") != null ? 
				params.get("_limit") : 10
        },
	},

	created () { this.checkThereAreInitialParamsUrl() }
}

</script>

<style lang="scss">
body {
	font-family: $font-family-robotocondensed-regular;
	font-weight: $font-weight-robotocondensed-regular;
}

</style>
