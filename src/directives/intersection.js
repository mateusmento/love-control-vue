let instances = new WeakMap();

export let intersection = {
	mounted(el, binding) {
		let observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting && binding.value)
				binding.value();
		});
	
		observer.observe(el);

		instances.set(el, observer);
	},
	updated(el) {
		let observer = instances.get(el);
		observer.disconnect();
		observer.observe(el);
	},
};
