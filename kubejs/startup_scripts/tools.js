
// Add Copper tier
ItemEvents.toolTierRegistry(event => {
  event.add('copper', tier => {
    tier.uses = 350
    tier.speed = 6
    tier.attackDamageBonus = 1
    tier.incorrectBlocksForDropsTag = 'minecraft:incorrect_for_stone_tool'
    tier.enchantmentValue = 12
    tier.repairIngredient = 'minecraft:copper'
  })
})

StartupEvents.registry('item', event => {

  // Copper Tools:
    // copper sword
    event.create('aethernauts:copper_sword', 'sword').texture('aethernauts:item/copper_sword').tier('copper')
    // copper pickaxe
    event.create('aethernauts:copper_pickaxe', 'pickaxe').texture('aethernauts:item/copper_pickaxe').tier('copper')
    // copper axe
    event.create('aethernauts:copper_axe', 'axe').texture('aethernauts:item/copper_axe').tier('copper')
    // copper shovel
    event.create('aethernauts:copper_shovel', 'shovel').texture('aethernauts:item/copper_shovel').tier('copper')
    // copper hoe
    event.create('aethernauts:copper_hoe', 'hoe').texture('aethernauts:item/copper_hoe').tier('copper')


})

ItemEvents.modification(event => {

  // Wood tools
  event.modify('minecraft:wooden_pickaxe', item => {
    item.tier = tier => {
      tier.speed = 3
      item.maxDamage = 121
    }
  })
  // event.modify('minecraft:wooden_axe', item => {
  //   item.digSpeed = 3
  //   item.maxDamage = 121
  // })
  // event.modify('minecraft:wooden_shovel', item => {
  //   item.digSpeed = 3
  //   item.maxDamage = 121
  // })
  // event.modify('minecraft:wooden_hoe', item => {
  //   item.digSpeed = 3
  //   item.maxDamage = 121
  // })
  // event.modify('minecraft:wooden_sword', item => {
  //   item.digSpeed = 3
  //   item.maxDamage = 121
  // })
  
  // // Iron tools
  // event.modify('minecraft:iron_pickaxe', item => {
  //   item.digSpeed = 3
  //   item.maxDamage = 121
  // })
  // event.modify('minecraft:iron_axe', item => {
  //   item.digSpeed = 3
  //   item.maxDamage = 121
  // })
  // event.modify('minecraft:iron_shovel', item => {
  //   item.digSpeed = 3
  //   item.maxDamage = 121
  // })
  // event.modify('minecraft:iron_hoe', item => {
  //   item.digSpeed = 3
  //   item.maxDamage = 121
  // })
  // event.modify('minecraft:iron_sword', item => {
  //   item.digSpeed = 3
  //   item.maxDamage = 121
  // })

  // // Gold tools
  // event.modify('minecraft:golden_pickaxe', item => {
  //   item.digSpeed = 3
  //   item.maxDamage = 121
  // })
  // event.modify('minecraft:golden_axe', item => {
  //   item.digSpeed = 3
  //   item.maxDamage = 121
  // })
  // event.modify('minecraft:golden_shovel', item => {
  //   item.digSpeed = 3
  //   item.maxDamage = 121
  // })
  // event.modify('minecraft:golden_hoe', item => {
  //   item.digSpeed = 3
  //   item.maxDamage = 121
  // })
  // event.modify('minecraft:golden_sword', item => {
  //   item.digSpeed = 3
  //   item.maxDamage = 121
  // })

  // // Diamond tools
  // event.modify('minecraft:diamond_pickaxe', item => {
  //   item.digSpeed = 3
  //   item.maxDamage = 121
  // })
  // event.modify('minecraft:diamond_axe', item => {
  //   item.digSpeed = 3
  //   item.maxDamage = 121
  // })
  // event.modify('minecraft:diamond_shovel', item => {
  //   item.digSpeed = 3
  //   item.maxDamage = 121
  // })
  // event.modify('minecraft:diamond_hoe', item => {
  //   item.digSpeed = 3
  //   item.maxDamage = 121
  // })
  // event.modify('minecraft:diamond_sword', item => {
  //   item.digSpeed = 3
  //   item.maxDamage = 121
  // })

  // // Netherite tools
  // event.modify('minecraft:netherite_pickaxe', item => {
  //   item.digSpeed = 3
  //   item.maxDamage = 121
  // })
  // event.modify('minecraft:netherite_axe', item => {
  //   item.digSpeed = 3
  //   item.maxDamage = 121
  // })
  // event.modify('minecraft:netherite_shovel', item => {
  //   item.digSpeed = 3
  //   item.maxDamage = 121
  // })
  // event.modify('minecraft:netherite_hoe', item => {
  //   item.digSpeed = 3
  //   item.maxDamage = 121
  // })
  // event.modify('minecraft:netherite_sword', item => {
  //   item.digSpeed = 3
  //   item.maxDamage = 121
  // })
})