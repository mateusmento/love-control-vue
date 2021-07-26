let instances = new WeakMap();

export let outside = {
	mounted(el, binding) {
		let refs = binding.instance.$refs;

		let modifiers = Object.keys(binding.modifiers);
		let event = binding.arg;

		let listener = (e) => {
			let contains = (el) => el.contains(e.target);

			if (binding.value && !contains(el) && modifiers.every(name => !contains(refs[name].$el || refs[name])))
				binding.value(e);
		};

		window.addEventListener(event, listener);
		instances.set(el, { listener, event });
	},
	umounted(el) {
		let { listener, event} = instances.get(el);
		window.removeEventListener(event, listener);
	},
};
