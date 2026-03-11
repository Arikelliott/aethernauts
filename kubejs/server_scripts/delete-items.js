ServerEvents.recipes(event => {
	// Remove Dragons Plus dye recipes
	event.remove({ type: 'create:mixing', mod: 'create_dragons_plus' })

})
