<template>
	<div class="input-field">
		<div v-if="$slots.prepend" class="prepend">
			<slot name="prepend"/>
		</div>

		<input :value="$attrs.modelValue" @input="$emit('update:modelValue', $event.target.value)"/>

		<div v-if="$slots.append" class="append">
			<slot name="append"/>
		</div>
	</div>
</template>

<script>
export default {
	inheritAttrs: false,
}
</script>

<style scoped>
.input-field {
	display: flex;
	width: fit-content;
	border: 1px solid aquamarine;
	border-radius: 5px;
	outline: none;
	background: white;
	box-sizing: border-box;
}

.input-field:focus-within {
	border-color: blue;
}

input {
	display: block;
	width: 100%;
	border: none;
	outline: none;
	font-size: 1.1em;
}

.append :first-child {
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
}

.prepend :first-child {
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
}

.input-field input:first-of-type {
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
}

.input-field input:last-of-type {
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
}
</style>
