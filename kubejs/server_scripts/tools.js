ServerEvents.recipes(event => {

    // Add copper tools:
    event.shaped(
        Item.of('aethernauts:copper_sword', 1),
        [
            ' A ',
            ' A ',
            ' B '
        ],
        {
            A: 'minecraft:copper_ingot',
            B: 'minecraft:stick'
        }
    )
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
    event.shaped(
        Item.of('aethernauts:copper_axe', 1),
        [
            'AA ',
            'AB ',
            ' B '
        ],
        {
            A: 'minecraft:copper_ingot',
            B: 'minecraft:stick'
        }
    )
    event.shaped(
        Item.of('aethernauts:copper_shovel', 1),
        [
            ' A ',
            ' B ',
            ' B '
        ],
        {
            A: 'minecraft:copper_ingot',
            B: 'minecraft:stick'
        }
    )
    event.shaped(
        Item.of('aethernauts:copper_hoe', 1),
        [
            'AA ',
            ' B ',
            ' B '
        ],
        {
            A: 'minecraft:copper_ingot',
            B: 'minecraft:stick'
        }
    )
})