<template>
	<component :is="as" class="list">
		<slot :items="items"/>
	</component>
</template>

<script>
export default {
	props: {
		as: { default: 'ul' },
		items: { default: () => [] },
		labelBy: {},
		trackBy: {},
	},
	provide() {
		let { items, labelBy, trackBy } = this;
		return { items, labelBy, trackBy };
	},
}
</script>

<style scoped>
ul {
  padding: 0;
  margin: 0;
}
</style>
