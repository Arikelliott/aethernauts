ServerEvents.recipes(event => {
    event.shaped(
        Item.of('aethernauts:copper_pickaxe', 1),
        [
            'AAA',
            ' B ',
            ' B '
        ],
        {
            A: 'minecraft:copper_ingot',
            B: 'minecraft:stick'
        }
    )
})