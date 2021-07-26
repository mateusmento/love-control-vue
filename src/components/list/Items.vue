<template>
	<li v-for="item in filteredItems" :key="item[trackBy]" class="list-item">
		<slot :label="item[labelBy]">{{item[labelBy]}}</slot>
	</li>
</template>

<script>
export default {
	props: ['filter'],
	inject: ['items', 'labelBy', 'trackBy'],
	computed: {
		filteredItems() {
			return this.filter ? this.items.filter(this.filter) : this.items;
		}
	}
}
</script>

<style scoped>
li {
  display: block;
  padding: 10px 15px;
}

.list-item:not(:last-of-type) {
  border-bottom: 1px solid grey;
}
</style>
