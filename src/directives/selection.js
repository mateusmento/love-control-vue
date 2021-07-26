export let selection = {
	mounted(el, binding) {
		el.addEventListener('selected', (e) => {
			if (binding.arg === 'multiple') {
				binding.value.push(e.detail);
			} else {
				binding.value.value = e.detail;
			}
		});
	},
	umounted() {
	},
};

export let selectable = {
	mounted(el, binding) {
		el.addEventListener('click', () => {
			el.dispatchEvent(new CustomEvent('selected', {detail: binding.value, bubbles: true}));
		});
	},
	umounted() {
	},
};
