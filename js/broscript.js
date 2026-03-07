const ITEMS = [{"name": "Oak Log", "price": 2.0, "cat": "Logs"}, {"name": "Spruce Log", "price": 2.0, "cat": "Logs"}, {"name": "Birch Log", "price": 2.0, "cat": "Logs"}, {"name": "Jungle Log", "price": 2.0, "cat": "Logs"}, {"name": "Acacia Log", "price": 2.0, "cat": "Logs"}, {"name": "Dark Oak Log", "price": 2.0, "cat": "Logs"}, {"name": "Pale Oak Log", "price": 2.0, "cat": "Logs"}, {"name": "Mangrove Log", "price": 2.0, "cat": "Logs"}, {"name": "Cherry Log", "price": 2.5, "cat": "Logs"}, {"name": "Crimson Stem", "price": 2.5, "cat": "Logs"}, {"name": "Warped Stem", "price": 2.5, "cat": "Logs"}, {"name": "Bamboo Block", "price": 1.5, "cat": "Logs"}, {"name": "Stripped Oak Log", "price": 2.5, "cat": "Stripped Logs"}, {"name": "Stripped Spruce Log", "price": 2.5, "cat": "Stripped Logs"}, {"name": "Stripped Birch Log", "price": 2.5, "cat": "Stripped Logs"}, {"name": "Stripped Jungle Log", "price": 2.5, "cat": "Stripped Logs"}, {"name": "Stripped Acacia Log", "price": 2.5, "cat": "Stripped Logs"}, {"name": "Stripped Dark Oak Log", "price": 2.5, "cat": "Stripped Logs"}, {"name": "Stripped Mangrove Log", "price": 2.5, "cat": "Stripped Logs"}, {"name": "Stripped Cherry Log", "price": 3.0, "cat": "Stripped Logs"}, {"name": "Stripped Pale Oak Log", "price": 2.5, "cat": "Stripped Logs"}, {"name": "Oak Planks", "price": 0.75, "cat": "Planks"}, {"name": "Spruce Planks", "price": 0.75, "cat": "Planks"}, {"name": "Birch Planks", "price": 0.75, "cat": "Planks"}, {"name": "Jungle Planks", "price": 0.75, "cat": "Planks"}, {"name": "Acacia Planks", "price": 0.75, "cat": "Planks"}, {"name": "Dark Oak Planks", "price": 0.75, "cat": "Planks"}, {"name": "Mangrove Planks", "price": 0.75, "cat": "Planks"}, {"name": "Cherry Planks", "price": 1.0, "cat": "Planks"}, {"name": "Crimson Planks", "price": 0.75, "cat": "Planks"}, {"name": "Warped Planks", "price": 0.75, "cat": "Planks"}, {"name": "Bamboo Planks", "price": 0.5, "cat": "Planks"}, {"name": "Pale Oak Planks", "price": 0.75, "cat": "Planks"}, {"name": "Bamboo Mosaic", "price": 3.0, "cat": "Planks"}, {"name": "Oak Leaves", "price": 0.5, "cat": "Leaves & Saplings"}, {"name": "Spruce Leaves", "price": 0.5, "cat": "Leaves & Saplings"}, {"name": "Birch Leaves", "price": 0.5, "cat": "Leaves & Saplings"}, {"name": "Jungle Leaves", "price": 0.5, "cat": "Leaves & Saplings"}, {"name": "Acacia Leaves", "price": 0.5, "cat": "Leaves & Saplings"}, {"name": "Dark Oak Leaves", "price": 0.5, "cat": "Leaves & Saplings"}, {"name": "Mangrove Leaves", "price": 0.5, "cat": "Leaves & Saplings"}, {"name": "Cherry Leaves", "price": 1.0, "cat": "Leaves & Saplings"}, {"name": "Pale Oak Leaves", "price": 0.5, "cat": "Leaves & Saplings"}, {"name": "Azalea Leaves", "price": 1.0, "cat": "Leaves & Saplings"}, {"name": "Flowering Azalea Leaves", "price": 1.5, "cat": "Leaves & Saplings"}, {"name": "Oak Sapling", "price": 2.0, "cat": "Leaves & Saplings"}, {"name": "Spruce Sapling", "price": 2.0, "cat": "Leaves & Saplings"}, {"name": "Birch Sapling", "price": 2.0, "cat": "Leaves & Saplings"}, {"name": "Jungle Sapling", "price": 2.5, "cat": "Leaves & Saplings"}, {"name": "Acacia Sapling", "price": 2.0, "cat": "Leaves & Saplings"}, {"name": "Dark Oak Sapling", "price": 2.0, "cat": "Leaves & Saplings"}, {"name": "Cherry Sapling", "price": 3.0, "cat": "Leaves & Saplings"}, {"name": "Mangrove Propagule", "price": 2.0, "cat": "Leaves & Saplings"}, {"name": "Pale Oak Sapling", "price": 2.0, "cat": "Leaves & Saplings"}, {"name": "Cobblestone", "price": 1.0, "cat": "Stone & Earth"}, {"name": "Stone", "price": 2.0, "cat": "Stone & Earth"}, {"name": "Smooth Stone", "price": 3.0, "cat": "Stone & Earth"}, {"name": "Granite", "price": 1.5, "cat": "Stone & Earth"}, {"name": "Diorite", "price": 1.5, "cat": "Stone & Earth"}, {"name": "Andesite", "price": 1.5, "cat": "Stone & Earth"}, {"name": "Polished Granite", "price": 2.5, "cat": "Stone & Earth"}, {"name": "Polished Diorite", "price": 2.5, "cat": "Stone & Earth"}, {"name": "Polished Andesite", "price": 2.5, "cat": "Stone & Earth"}, {"name": "Dirt", "price": 0.5, "cat": "Stone & Earth"}, {"name": "Coarse Dirt", "price": 0.5, "cat": "Stone & Earth"}, {"name": "Rooted Dirt", "price": 0.5, "cat": "Stone & Earth"}, {"name": "Grass Block", "price": 1.0, "cat": "Stone & Earth"}, {"name": "Podzol", "price": 1.0, "cat": "Stone & Earth"}, {"name": "Mycelium", "price": 2.0, "cat": "Stone & Earth"}, {"name": "Sand", "price": 1.0, "cat": "Stone & Earth"}, {"name": "Red Sand", "price": 1.5, "cat": "Stone & Earth"}, {"name": "Sandstone", "price": 2.0, "cat": "Stone & Earth"}, {"name": "Red Sandstone", "price": 2.5, "cat": "Stone & Earth"}, {"name": "Smooth Sandstone", "price": 3.0, "cat": "Stone & Earth"}, {"name": "Smooth Red Sandstone", "price": 3.5, "cat": "Stone & Earth"}, {"name": "Chiseled Sandstone", "price": 3.0, "cat": "Stone & Earth"}, {"name": "Chiseled Red Sandstone", "price": 3.5, "cat": "Stone & Earth"}, {"name": "Clay", "price": 12.0, "cat": "Stone & Earth"}, {"name": "Clay Ball", "price": 3.0, "cat": "Stone & Earth"}, {"name": "Flint", "price": 3.0, "cat": "Stone & Earth"}, {"name": "Gravel", "price": 1.0, "cat": "Stone & Earth"}, {"name": "Mud", "price": 1.0, "cat": "Stone & Earth"}, {"name": "Packed Mud", "price": 3.0, "cat": "Stone & Earth"}, {"name": "Mud Bricks", "price": 5.0, "cat": "Stone & Earth"}, {"name": "Deepslate", "price": 2.0, "cat": "Deepslate"}, {"name": "Cobbled Deepslate", "price": 1.5, "cat": "Deepslate"}, {"name": "Polished Deepslate", "price": 3.0, "cat": "Deepslate"}, {"name": "Deepslate Bricks", "price": 4.0, "cat": "Deepslate"}, {"name": "Deepslate Tiles", "price": 5.0, "cat": "Deepslate"}, {"name": "Chiseled Deepslate", "price": 4.0, "cat": "Deepslate"}, {"name": "Stone Bricks", "price": 3.0, "cat": "Bricks"}, {"name": "Mossy Stone Bricks", "price": 8.0, "cat": "Bricks"}, {"name": "Cracked Stone Bricks", "price": 4.0, "cat": "Bricks"}, {"name": "Chiseled Stone Bricks", "price": 5.0, "cat": "Bricks"}, {"name": "Mossy Cobblestone", "price": 5.0, "cat": "Bricks"}, {"name": "Brick", "price": 21.0, "cat": "Bricks"}, {"name": "Bricks", "price": 18.0, "cat": "Bricks"}, {"name": "Tuff", "price": 2.0, "cat": "Tuff"}, {"name": "Polished Tuff", "price": 3.0, "cat": "Tuff"}, {"name": "Tuff Bricks", "price": 4.0, "cat": "Tuff"}, {"name": "Chiseled Tuff", "price": 5.0, "cat": "Tuff"}, {"name": "Tuff Brick Slab", "price": 2.0, "cat": "Tuff"}, {"name": "Tuff Brick Stairs", "price": 3.0, "cat": "Tuff"}, {"name": "Tuff Brick Wall", "price": 3.0, "cat": "Tuff"}, {"name": "Coal Ore", "price": 15.0, "cat": "Ores"}, {"name": "Iron Ore", "price": 18.0, "cat": "Ores"}, {"name": "Gold Ore", "price": 45.0, "cat": "Ores"}, {"name": "Diamond Ore", "price": 200.0, "cat": "Ores"}, {"name": "Emerald Ore", "price": 280.0, "cat": "Ores"}, {"name": "Lapis Ore", "price": 100.0, "cat": "Ores"}, {"name": "Redstone Ore", "price": 30.0, "cat": "Ores"}, {"name": "Copper Ore", "price": 15.0, "cat": "Ores"}, {"name": "Deepslate Coal Ore", "price": 18.0, "cat": "Ores"}, {"name": "Deepslate Iron Ore", "price": 25.0, "cat": "Ores"}, {"name": "Deepslate Gold Ore", "price": 55.0, "cat": "Ores"}, {"name": "Deepslate Diamond Ore", "price": 250.0, "cat": "Ores"}, {"name": "Deepslate Emerald Ore", "price": 320.0, "cat": "Ores"}, {"name": "Deepslate Lapis Ore", "price": 120.0, "cat": "Ores"}, {"name": "Deepslate Redstone Ore", "price": 38.0, "cat": "Ores"}, {"name": "Deepslate Copper Ore", "price": 18.0, "cat": "Ores"}, {"name": "Nether Gold Ore", "price": 40.0, "cat": "Ores"}, {"name": "Nether Quartz Ore", "price": 25.0, "cat": "Ores"}, {"name": "Ancient Debris", "price": 300.0, "cat": "Ores"}, {"name": "Coal", "price": 15.0, "cat": "Materials"}, {"name": "Charcoal", "price": 10.0, "cat": "Materials"}, {"name": "Raw Iron", "price": 15.0, "cat": "Materials"}, {"name": "Iron Ingot", "price": 22.0, "cat": "Materials"}, {"name": "Iron Nugget", "price": 3.0, "cat": "Materials"}, {"name": "Raw Gold", "price": 80.0, "cat": "Materials"}, {"name": "Gold Ingot", "price": 105.0, "cat": "Materials"}, {"name": "Gold Nugget", "price": 12.0, "cat": "Materials"}, {"name": "Diamond", "price": 180.0, "cat": "Materials"}, {"name": "Emerald", "price": 250.0, "cat": "Materials"}, {"name": "Quartz", "price": 25.0, "cat": "Materials"}, {"name": "Raw Copper", "price": 8.0, "cat": "Materials"}, {"name": "Copper Ingot", "price": 10.0, "cat": "Materials"}, {"name": "Amethyst Shard", "price": 30.0, "cat": "Materials"}, {"name": "Echo Shard", "price": 500.0, "cat": "Materials"}, {"name": "Disc Fragment 5", "price": 200.0, "cat": "Materials"}, {"name": "Netherite Scrap", "price": 300.0, "cat": "Materials"}, {"name": "Netherite Ingot", "price": 1300.0, "cat": "Materials"}, {"name": "Netherite Upgrade Template", "price": 800.0, "cat": "Materials"}, {"name": "Coal Block", "price": 135.0, "cat": "Material Blocks"}, {"name": "Iron Block", "price": 198.0, "cat": "Material Blocks"}, {"name": "Gold Block", "price": 945.0, "cat": "Material Blocks"}, {"name": "Diamond Block", "price": 1600.0, "cat": "Material Blocks"}, {"name": "Emerald Block", "price": 2250.0, "cat": "Material Blocks"}, {"name": "Lapis Block", "price": 90.0, "cat": "Material Blocks"}, {"name": "Redstone Block", "price": 270.0, "cat": "Material Blocks"}, {"name": "Copper Block", "price": 90.0, "cat": "Material Blocks"}, {"name": "Netherite Block", "price": 11700.0, "cat": "Material Blocks"}, {"name": "Amethyst Block", "price": 120.0, "cat": "Material Blocks"}, {"name": "Quartz Block", "price": 90.0, "cat": "Material Blocks"}, {"name": "Smooth Quartz", "price": 95.0, "cat": "Material Blocks"}, {"name": "Exposed Copper", "price": 10.0, "cat": "Copper Variants"}, {"name": "Weathered Copper", "price": 10.0, "cat": "Copper Variants"}, {"name": "Oxidized Copper", "price": 10.0, "cat": "Copper Variants"}, {"name": "Cut Copper", "price": 12.0, "cat": "Copper Variants"}, {"name": "Chiseled Copper", "price": 12.0, "cat": "Copper Variants"}, {"name": "Waxed Copper Block", "price": 12.0, "cat": "Copper Variants"}, {"name": "Waxed Cut Copper", "price": 14.0, "cat": "Copper Variants"}, {"name": "Copper Grate", "price": 15.0, "cat": "Copper Variants"}, {"name": "Copper Bulb", "price": 20.0, "cat": "Copper Variants"}, {"name": "Netherrack", "price": 0.5, "cat": "Nether"}, {"name": "Nether Brick", "price": 5.0, "cat": "Nether"}, {"name": "Nether Bricks", "price": 5.0, "cat": "Nether"}, {"name": "Nether Brick Fence", "price": 3.0, "cat": "Nether"}, {"name": "Red Nether Bricks", "price": 8.0, "cat": "Nether"}, {"name": "Soul Sand", "price": 5.0, "cat": "Nether"}, {"name": "Soul Soil", "price": 5.0, "cat": "Nether"}, {"name": "Magma Block", "price": 15.0, "cat": "Nether"}, {"name": "Shroomlight", "price": 25.0, "cat": "Nether"}, {"name": "Glowstone", "price": 30.0, "cat": "Nether"}, {"name": "Glowstone Dust", "price": 10.0, "cat": "Nether"}, {"name": "Blaze Rod", "price": 40.0, "cat": "Nether"}, {"name": "Nether Star", "price": 5000.0, "cat": "Nether"}, {"name": "Basalt", "price": 2.0, "cat": "Nether"}, {"name": "Blackstone", "price": 3.0, "cat": "Nether"}, {"name": "Gilded Blackstone", "price": 80.0, "cat": "Nether"}, {"name": "Crying Obsidian", "price": 100.0, "cat": "Nether"}, {"name": "Respawn Anchor", "price": 500.0, "cat": "Nether"}, {"name": "Nether Wart", "price": 15.0, "cat": "Nether"}, {"name": "End Stone", "price": 5.0, "cat": "The End"}, {"name": "End Stone Bricks", "price": 8.0, "cat": "The End"}, {"name": "Purpur Block", "price": 8.0, "cat": "The End"}, {"name": "Purpur Pillar", "price": 8.0, "cat": "The End"}, {"name": "Chorus Fruit", "price": 15.0, "cat": "The End"}, {"name": "Popped Chorus Fruit", "price": 20.0, "cat": "The End"}, {"name": "End Rod", "price": 10.0, "cat": "The End"}, {"name": "Shulker Shell", "price": 350.0, "cat": "The End"}, {"name": "Elytra", "price": 5000.0, "cat": "The End"}, {"name": "End Crystal", "price": 500.0, "cat": "The End"}, {"name": "Bone Block", "price": 18.0, "cat": "The End"}, {"name": "Prismarine", "price": 20.0, "cat": "Ocean"}, {"name": "Prismarine Bricks", "price": 25.0, "cat": "Ocean"}, {"name": "Dark Prismarine", "price": 30.0, "cat": "Ocean"}, {"name": "Prismarine Shard", "price": 15.0, "cat": "Ocean"}, {"name": "Prismarine Crystals", "price": 20.0, "cat": "Ocean"}, {"name": "Sea Lantern", "price": 50.0, "cat": "Ocean"}, {"name": "Wet Sponge", "price": 40.0, "cat": "Ocean"}, {"name": "Heart of the Sea", "price": 1000.0, "cat": "Ocean"}, {"name": "Nautilus Shell", "price": 150.0, "cat": "Ocean"}, {"name": "Conduit", "price": 2500.0, "cat": "Ocean"}, {"name": "Scute", "price": 100.0, "cat": "Ocean"}, {"name": "Turtle Egg", "price": 50.0, "cat": "Ocean"}, {"name": "Kelp", "price": 2.0, "cat": "Ocean"}, {"name": "Dried Kelp", "price": 1.0, "cat": "Ocean"}, {"name": "Dried Kelp Block", "price": 5.0, "cat": "Ocean"}, {"name": "Seagrass", "price": 1.0, "cat": "Ocean"}, {"name": "Sea Pickle", "price": 5.0, "cat": "Ocean"}, {"name": "Coral Block", "price": 20.0, "cat": "Ocean"}, {"name": "Coral", "price": 10.0, "cat": "Ocean"}, {"name": "Coral Fan", "price": 8.0, "cat": "Ocean"}, {"name": "Mangrove Roots", "price": 1.0, "cat": "Swamp"}, {"name": "Muddy Mangrove Roots", "price": 2.0, "cat": "Swamp"}, {"name": "Ochre Froglight", "price": 20.0, "cat": "Swamp"}, {"name": "Verdant Froglight", "price": 20.0, "cat": "Swamp"}, {"name": "Pearlescent Froglight", "price": 20.0, "cat": "Swamp"}, {"name": "Frogspawn", "price": 30.0, "cat": "Swamp"}, {"name": "Sculk Vein", "price": 3.0, "cat": "Sculk"}, {"name": "Sculk", "price": 5.0, "cat": "Sculk"}, {"name": "Sculk Sensor", "price": 40.0, "cat": "Sculk"}, {"name": "Sculk Catalyst", "price": 80.0, "cat": "Sculk"}, {"name": "Sculk Shrieker", "price": 100.0, "cat": "Sculk"}, {"name": "Calibrated Sculk Sensor", "price": 120.0, "cat": "Sculk"}, {"name": "Wind Charge", "price": 20.0, "cat": "Trial Chambers"}, {"name": "Trial Key", "price": 30.0, "cat": "Trial Chambers"}, {"name": "Ominous Bottle", "price": 50.0, "cat": "Trial Chambers"}, {"name": "Breeze Rod", "price": 80.0, "cat": "Trial Chambers"}, {"name": "Ominous Trial Key", "price": 100.0, "cat": "Trial Chambers"}, {"name": "Sentry Armor Trim", "price": 100.0, "cat": "Armor Trims"}, {"name": "Coast Armor Trim", "price": 100.0, "cat": "Armor Trims"}, {"name": "Wild Armor Trim", "price": 120.0, "cat": "Armor Trims"}, {"name": "Tide Armor Trim", "price": 120.0, "cat": "Armor Trims"}, {"name": "Dune Armor Trim", "price": 120.0, "cat": "Armor Trims"}, {"name": "Snout Armor Trim", "price": 150.0, "cat": "Armor Trims"}, {"name": "Rib Armor Trim", "price": 150.0, "cat": "Armor Trims"}, {"name": "Eye Armor Trim", "price": 150.0, "cat": "Armor Trims"}, {"name": "Vex Armor Trim", "price": 150.0, "cat": "Armor Trims"}, {"name": "Wayfinder Armor Trim", "price": 180.0, "cat": "Armor Trims"}, {"name": "Raiser Armor Trim", "price": 180.0, "cat": "Armor Trims"}, {"name": "Shaper Armor Trim", "price": 180.0, "cat": "Armor Trims"}, {"name": "Host Armor Trim", "price": 180.0, "cat": "Armor Trims"}, {"name": "Spire Armor Trim", "price": 200.0, "cat": "Armor Trims"}, {"name": "Flow Armor Trim", "price": 300.0, "cat": "Armor Trims"}, {"name": "Bolt Armor Trim", "price": 300.0, "cat": "Armor Trims"}, {"name": "Ward Armor Trim", "price": 300.0, "cat": "Armor Trims"}, {"name": "Silence Armor Trim", "price": 500.0, "cat": "Armor Trims"}, {"name": "Mace", "price": 1200.0, "cat": "Trial Chambers"}, {"name": "Heavy Core", "price": 900.0, "cat": "Trial Chambers"}, {"name": "Arms Up Pottery Sherd", "price": 60.0, "cat": "Pottery Sherds"}, {"name": "Brewer Pottery Sherd", "price": 60.0, "cat": "Pottery Sherds"}, {"name": "Burn Pottery Sherd", "price": 60.0, "cat": "Pottery Sherds"}, {"name": "Danger Pottery Sherd", "price": 60.0, "cat": "Pottery Sherds"}, {"name": "Explorer Pottery Sherd", "price": 60.0, "cat": "Pottery Sherds"}, {"name": "Friend Pottery Sherd", "price": 60.0, "cat": "Pottery Sherds"}, {"name": "Heart Pottery Sherd", "price": 60.0, "cat": "Pottery Sherds"}, {"name": "Heartbreak Pottery Sherd", "price": 60.0, "cat": "Pottery Sherds"}, {"name": "Miner Pottery Sherd", "price": 60.0, "cat": "Pottery Sherds"}, {"name": "Mourner Pottery Sherd", "price": 60.0, "cat": "Pottery Sherds"}, {"name": "Plenty Pottery Sherd", "price": 60.0, "cat": "Pottery Sherds"}, {"name": "Scrape Pottery Sherd", "price": 60.0, "cat": "Pottery Sherds"}, {"name": "Sheaf Pottery Sherd", "price": 60.0, "cat": "Pottery Sherds"}, {"name": "Shelter Pottery Sherd", "price": 60.0, "cat": "Pottery Sherds"}, {"name": "Snort Pottery Sherd", "price": 60.0, "cat": "Pottery Sherds"}, {"name": "Flow Pottery Sherd", "price": 80.0, "cat": "Pottery Sherds"}, {"name": "Guster Pottery Sherd", "price": 80.0, "cat": "Pottery Sherds"}, {"name": "Howl Pottery Sherd", "price": 80.0, "cat": "Pottery Sherds"}, {"name": "Prize Pottery Sherd", "price": 80.0, "cat": "Pottery Sherds"}, {"name": "Skull Pottery Sherd", "price": 80.0, "cat": "Pottery Sherds"}, {"name": "Decorated Pot", "price": 80.0, "cat": "Pottery Sherds"}, {"name": "Armadillo Scute", "price": 60.0, "cat": "Armadillo"}, {"name": "Wolf Armor", "price": 250.0, "cat": "Armadillo"}, {"name": "Pale Moss Carpet", "price": 3.0, "cat": "Pale Garden"}, {"name": "Pale Moss Block", "price": 5.0, "cat": "Pale Garden"}, {"name": "Pale Hanging Moss", "price": 5.0, "cat": "Pale Garden"}, {"name": "Eyeblossom", "price": 10.0, "cat": "Pale Garden"}, {"name": "Creaking Heart", "price": 300.0, "cat": "Pale Garden"}, {"name": "Resin Clump", "price": 8.0, "cat": "Resin"}, {"name": "Resin Brick", "price": 15.0, "cat": "Resin"}, {"name": "Chiseled Resin Bricks", "price": 20.0, "cat": "Resin"}, {"name": "Resin Block", "price": 120.0, "cat": "Resin"}, {"name": "Sniffer Egg", "price": 200.0, "cat": "Sniffer"}, {"name": "Rotten Flesh", "price": 1.0, "cat": "Mob Drops"}, {"name": "Bone", "price": 2.0, "cat": "Mob Drops"}, {"name": "String", "price": 5.0, "cat": "Mob Drops"}, {"name": "Gunpowder", "price": 22.0, "cat": "Mob Drops"}, {"name": "Slimeball", "price": 50.0, "cat": "Mob Drops"}, {"name": "Ender Pearl", "price": 50.0, "cat": "Mob Drops"}, {"name": "Ender Eye", "price": 80.0, "cat": "Mob Drops"}, {"name": "Feather", "price": 3.0, "cat": "Mob Drops"}, {"name": "Leather", "price": 10.0, "cat": "Mob Drops"}, {"name": "Rabbit Hide", "price": 8.0, "cat": "Mob Drops"}, {"name": "Glow Ink Sac", "price": 30.0, "cat": "Mob Drops"}, {"name": "Egg", "price": 1.0, "cat": "Mob Drops"}, {"name": "Totem of Undying", "price": 800.0, "cat": "Mob Drops"}, {"name": "Wither Skeleton Skull", "price": 500.0, "cat": "Mob Drops"}, {"name": "Skeleton Skull", "price": 100.0, "cat": "Mob Drops"}, {"name": "Zombie Head", "price": 80.0, "cat": "Mob Drops"}, {"name": "Creeper Head", "price": 200.0, "cat": "Mob Drops"}, {"name": "Trident", "price": 500.0, "cat": "Mob Drops"}, {"name": "Phantom Membrane", "price": 80.0, "cat": "Mob Drops"}, {"name": "Ghast Tear", "price": 150.0, "cat": "Mob Drops"}, {"name": "Turtle Scute", "price": 100.0, "cat": "Mob Drops"}, {"name": "Dragon Breath", "price": 200.0, "cat": "Mob Drops"}, {"name": "Spider Eye", "price": 8.0, "cat": "Mob Drops"}, {"name": "Rabbit Foot", "price": 50.0, "cat": "Mob Drops"}, {"name": "Pufferfish", "price": 10.0, "cat": "Mob Drops"}, {"name": "Blaze Powder", "price": 22.0, "cat": "Mob Drops"}, {"name": "Magma Cream", "price": 20.0, "cat": "Mob Drops"}, {"name": "Apple", "price": 10.0, "cat": "Food"}, {"name": "Golden Apple", "price": 100.0, "cat": "Food"}, {"name": "Enchanted Golden Apple", "price": 2000.0, "cat": "Food"}, {"name": "Bread", "price": 30.0, "cat": "Food"}, {"name": "Wheat", "price": 9.0, "cat": "Food"}, {"name": "Carrot", "price": 5.0, "cat": "Food"}, {"name": "Potato", "price": 4.0, "cat": "Food"}, {"name": "Baked Potato", "price": 8.0, "cat": "Food"}, {"name": "Poisonous Potato", "price": 1.0, "cat": "Food"}, {"name": "Beetroot", "price": 5.0, "cat": "Food"}, {"name": "Beetroot Soup", "price": 20.0, "cat": "Food"}, {"name": "Melon Slice", "price": 1.5, "cat": "Food"}, {"name": "Pumpkin Pie", "price": 25.0, "cat": "Food"}, {"name": "Sweet Berries", "price": 3.0, "cat": "Food"}, {"name": "Glow Berries", "price": 5.0, "cat": "Food"}, {"name": "Cookie", "price": 3.0, "cat": "Food"}, {"name": "Cake", "price": 180.0, "cat": "Food"}, {"name": "Mushroom Stew", "price": 4.5, "cat": "Food"}, {"name": "Rabbit Stew", "price": 30.0, "cat": "Food"}, {"name": "Suspicious Stew", "price": 10.0, "cat": "Food"}, {"name": "Cooked Beef", "price": 12.0, "cat": "Food"}, {"name": "Cooked Porkchop", "price": 7.0, "cat": "Food"}, {"name": "Cooked Chicken", "price": 8.0, "cat": "Food"}, {"name": "Cooked Mutton", "price": 10.0, "cat": "Food"}, {"name": "Cooked Rabbit", "price": 10.0, "cat": "Food"}, {"name": "Cooked Cod", "price": 7.0, "cat": "Food"}, {"name": "Cooked Salmon", "price": 10.0, "cat": "Food"}, {"name": "Tropical Fish", "price": 8.0, "cat": "Food"}, {"name": "Honey Bottle", "price": 20.0, "cat": "Food"}, {"name": "Honeycomb", "price": 15.0, "cat": "Food"}, {"name": "Sugar Cane", "price": 10.0, "cat": "Food"}, {"name": "Sugar", "price": 10.0, "cat": "Food"}, {"name": "Golden Carrot", "price": 80.0, "cat": "Food"}, {"name": "Glistering Melon Slice", "price": 40.0, "cat": "Food"}, {"name": "Wheat Seeds", "price": 2.0, "cat": "Plants"}, {"name": "Melon Seeds", "price": 3.0, "cat": "Plants"}, {"name": "Pumpkin Seeds", "price": 3.0, "cat": "Plants"}, {"name": "Beetroot Seeds", "price": 2.0, "cat": "Plants"}, {"name": "Torchflower Seeds", "price": 20.0, "cat": "Sniffer"}, {"name": "Pitcher Pod", "price": 20.0, "cat": "Sniffer"}, {"name": "Bamboo", "price": 1.0, "cat": "Plants"}, {"name": "Cactus", "price": 10.0, "cat": "Plants"}, {"name": "Brown Mushroom", "price": 2.0, "cat": "Plants"}, {"name": "Red Mushroom", "price": 2.0, "cat": "Plants"}, {"name": "Crimson Fungus", "price": 5.0, "cat": "Plants"}, {"name": "Warped Fungus", "price": 5.0, "cat": "Plants"}, {"name": "Lily Pad", "price": 3.0, "cat": "Plants"}, {"name": "Dandelion", "price": 2.0, "cat": "Plants"}, {"name": "Poppy", "price": 2.0, "cat": "Plants"}, {"name": "Blue Orchid", "price": 5.0, "cat": "Plants"}, {"name": "Allium", "price": 5.0, "cat": "Plants"}, {"name": "Azure Bluet", "price": 5.0, "cat": "Plants"}, {"name": "Red Tulip", "price": 5.0, "cat": "Plants"}, {"name": "Orange Tulip", "price": 5.0, "cat": "Plants"}, {"name": "White Tulip", "price": 5.0, "cat": "Plants"}, {"name": "Pink Tulip", "price": 5.0, "cat": "Plants"}, {"name": "Oxeye Daisy", "price": 5.0, "cat": "Plants"}, {"name": "Cornflower", "price": 5.0, "cat": "Plants"}, {"name": "Lily of the Valley", "price": 5.0, "cat": "Plants"}, {"name": "Wither Rose", "price": 50.0, "cat": "Plants"}, {"name": "Sunflower", "price": 8.0, "cat": "Plants"}, {"name": "Lilac", "price": 8.0, "cat": "Plants"}, {"name": "Rose Bush", "price": 8.0, "cat": "Plants"}, {"name": "Peony", "price": 8.0, "cat": "Plants"}, {"name": "Pitcher Plant", "price": 25.0, "cat": "Sniffer"}, {"name": "Torchflower", "price": 25.0, "cat": "Sniffer"}, {"name": "Spore Blossom", "price": 30.0, "cat": "Plants"}, {"name": "Azalea", "price": 15.0, "cat": "Plants"}, {"name": "Flowering Azalea", "price": 20.0, "cat": "Plants"}, {"name": "Moss Block", "price": 5.0, "cat": "Plants"}, {"name": "Moss Carpet", "price": 3.0, "cat": "Plants"}, {"name": "Vine", "price": 1.0, "cat": "Plants"}, {"name": "Glow Lichen", "price": 5.0, "cat": "Plants"}, {"name": "White Wool", "price": 20.0, "cat": "Wool & Fabric"}, {"name": "White Carpet", "price": 8.0, "cat": "Wool & Fabric"}, {"name": "White Dye", "price": 5.0, "cat": "Dyes"}, {"name": "White Terracotta", "price": 4.0, "cat": "Terracotta"}, {"name": "White Concrete", "price": 5.0, "cat": "Concrete"}, {"name": "White Stained Glass", "price": 5.0, "cat": "Glass"}, {"name": "Orange Wool", "price": 20.0, "cat": "Wool & Fabric"}, {"name": "Orange Carpet", "price": 8.0, "cat": "Wool & Fabric"}, {"name": "Orange Dye", "price": 5.0, "cat": "Dyes"}, {"name": "Orange Terracotta", "price": 4.0, "cat": "Terracotta"}, {"name": "Orange Concrete", "price": 5.0, "cat": "Concrete"}, {"name": "Orange Stained Glass", "price": 5.0, "cat": "Glass"}, {"name": "Magenta Wool", "price": 20.0, "cat": "Wool & Fabric"}, {"name": "Magenta Carpet", "price": 8.0, "cat": "Wool & Fabric"}, {"name": "Magenta Dye", "price": 5.0, "cat": "Dyes"}, {"name": "Magenta Terracotta", "price": 4.0, "cat": "Terracotta"}, {"name": "Magenta Concrete", "price": 5.0, "cat": "Concrete"}, {"name": "Magenta Stained Glass", "price": 5.0, "cat": "Glass"}, {"name": "Light Blue Wool", "price": 20.0, "cat": "Wool & Fabric"}, {"name": "Light Blue Carpet", "price": 8.0, "cat": "Wool & Fabric"}, {"name": "Light Blue Dye", "price": 5.0, "cat": "Dyes"}, {"name": "Light Blue Terracotta", "price": 4.0, "cat": "Terracotta"}, {"name": "Light Blue Concrete", "price": 5.0, "cat": "Concrete"}, {"name": "Light Blue Stained Glass", "price": 5.0, "cat": "Glass"}, {"name": "Yellow Wool", "price": 20.0, "cat": "Wool & Fabric"}, {"name": "Yellow Carpet", "price": 8.0, "cat": "Wool & Fabric"}, {"name": "Yellow Dye", "price": 5.0, "cat": "Dyes"}, {"name": "Yellow Terracotta", "price": 4.0, "cat": "Terracotta"}, {"name": "Yellow Concrete", "price": 5.0, "cat": "Concrete"}, {"name": "Yellow Stained Glass", "price": 5.0, "cat": "Glass"}, {"name": "Lime Wool", "price": 20.0, "cat": "Wool & Fabric"}, {"name": "Lime Carpet", "price": 8.0, "cat": "Wool & Fabric"}, {"name": "Lime Dye", "price": 5.0, "cat": "Dyes"}, {"name": "Lime Terracotta", "price": 4.0, "cat": "Terracotta"}, {"name": "Lime Concrete", "price": 5.0, "cat": "Concrete"}, {"name": "Lime Stained Glass", "price": 5.0, "cat": "Glass"}, {"name": "Pink Wool", "price": 20.0, "cat": "Wool & Fabric"}, {"name": "Pink Carpet", "price": 8.0, "cat": "Wool & Fabric"}, {"name": "Pink Dye", "price": 5.0, "cat": "Dyes"}, {"name": "Pink Terracotta", "price": 4.0, "cat": "Terracotta"}, {"name": "Pink Concrete", "price": 5.0, "cat": "Concrete"}, {"name": "Pink Stained Glass", "price": 5.0, "cat": "Glass"}, {"name": "Gray Wool", "price": 20.0, "cat": "Wool & Fabric"}, {"name": "Gray Carpet", "price": 8.0, "cat": "Wool & Fabric"}, {"name": "Gray Dye", "price": 5.0, "cat": "Dyes"}, {"name": "Gray Terracotta", "price": 4.0, "cat": "Terracotta"}, {"name": "Gray Concrete", "price": 5.0, "cat": "Concrete"}, {"name": "Gray Stained Glass", "price": 5.0, "cat": "Glass"}, {"name": "Light Gray Wool", "price": 20.0, "cat": "Wool & Fabric"}, {"name": "Light Gray Carpet", "price": 8.0, "cat": "Wool & Fabric"}, {"name": "Light Gray Dye", "price": 5.0, "cat": "Dyes"}, {"name": "Light Gray Terracotta", "price": 4.0, "cat": "Terracotta"}, {"name": "Light Gray Concrete", "price": 5.0, "cat": "Concrete"}, {"name": "Light Gray Stained Glass", "price": 5.0, "cat": "Glass"}, {"name": "Cyan Wool", "price": 20.0, "cat": "Wool & Fabric"}, {"name": "Cyan Carpet", "price": 8.0, "cat": "Wool & Fabric"}, {"name": "Cyan Dye", "price": 5.0, "cat": "Dyes"}, {"name": "Cyan Terracotta", "price": 4.0, "cat": "Terracotta"}, {"name": "Cyan Concrete", "price": 5.0, "cat": "Concrete"}, {"name": "Cyan Stained Glass", "price": 5.0, "cat": "Glass"}, {"name": "Purple Wool", "price": 20.0, "cat": "Wool & Fabric"}, {"name": "Purple Carpet", "price": 8.0, "cat": "Wool & Fabric"}, {"name": "Purple Dye", "price": 5.0, "cat": "Dyes"}, {"name": "Purple Terracotta", "price": 4.0, "cat": "Terracotta"}, {"name": "Purple Concrete", "price": 5.0, "cat": "Concrete"}, {"name": "Purple Stained Glass", "price": 5.0, "cat": "Glass"}, {"name": "Blue Wool", "price": 20.0, "cat": "Wool & Fabric"}, {"name": "Blue Carpet", "price": 8.0, "cat": "Wool & Fabric"}, {"name": "Blue Dye", "price": 5.0, "cat": "Dyes"}, {"name": "Blue Terracotta", "price": 4.0, "cat": "Terracotta"}, {"name": "Blue Concrete", "price": 5.0, "cat": "Concrete"}, {"name": "Blue Stained Glass", "price": 5.0, "cat": "Glass"}, {"name": "Brown Wool", "price": 20.0, "cat": "Wool & Fabric"}, {"name": "Brown Carpet", "price": 8.0, "cat": "Wool & Fabric"}, {"name": "Brown Dye", "price": 5.0, "cat": "Dyes"}, {"name": "Brown Terracotta", "price": 4.0, "cat": "Terracotta"}, {"name": "Brown Concrete", "price": 5.0, "cat": "Concrete"}, {"name": "Brown Stained Glass", "price": 5.0, "cat": "Glass"}, {"name": "Green Wool", "price": 20.0, "cat": "Wool & Fabric"}, {"name": "Green Carpet", "price": 8.0, "cat": "Wool & Fabric"}, {"name": "Green Dye", "price": 5.0, "cat": "Dyes"}, {"name": "Green Terracotta", "price": 4.0, "cat": "Terracotta"}, {"name": "Green Concrete", "price": 5.0, "cat": "Concrete"}, {"name": "Green Stained Glass", "price": 5.0, "cat": "Glass"}, {"name": "Red Wool", "price": 20.0, "cat": "Wool & Fabric"}, {"name": "Red Carpet", "price": 8.0, "cat": "Wool & Fabric"}, {"name": "Red Dye", "price": 5.0, "cat": "Dyes"}, {"name": "Red Terracotta", "price": 4.0, "cat": "Terracotta"}, {"name": "Red Concrete", "price": 5.0, "cat": "Concrete"}, {"name": "Red Stained Glass", "price": 5.0, "cat": "Glass"}, {"name": "Black Wool", "price": 20.0, "cat": "Wool & Fabric"}, {"name": "Black Carpet", "price": 8.0, "cat": "Wool & Fabric"}, {"name": "Black Dye", "price": 5.0, "cat": "Dyes"}, {"name": "Black Terracotta", "price": 4.0, "cat": "Terracotta"}, {"name": "Black Concrete", "price": 5.0, "cat": "Concrete"}, {"name": "Black Stained Glass", "price": 5.0, "cat": "Glass"}, {"name": "Bone Meal", "price": 3.0, "cat": "Dyes"}, {"name": "Ink Sac", "price": 10.0, "cat": "Dyes"}, {"name": "Cocoa Beans", "price": 5.0, "cat": "Dyes"}, {"name": "Lapis Lazuli", "price": 10.0, "cat": "Dyes"}, {"name": "Glass", "price": 3.0, "cat": "Glass"}, {"name": "Glass Pane", "price": 2.0, "cat": "Glass"}, {"name": "Stick", "price": 0.25, "cat": "Misc"}, {"name": "Paper", "price": 10.0, "cat": "Misc"}, {"name": "Book", "price": 45.0, "cat": "Misc"}, {"name": "Bookshelf", "price": 140.0, "cat": "Misc"}, {"name": "Chiseled Bookshelf", "price": 60.0, "cat": "Misc"}, {"name": "Saddle", "price": 100.0, "cat": "Misc"}, {"name": "Name Tag", "price": 100.0, "cat": "Misc"}, {"name": "Lead", "price": 20.0, "cat": "Misc"}, {"name": "Map", "price": 20.0, "cat": "Misc"}, {"name": "Clock", "price": 30.0, "cat": "Misc"}, {"name": "Fishing Rod", "price": 10.0, "cat": "Misc"}, {"name": "Brush", "price": 40.0, "cat": "Misc"}, {"name": "Spyglass", "price": 80.0, "cat": "Misc"}, {"name": "Flint and Steel", "price": 25.0, "cat": "Misc"}, {"name": "Compass", "price": 22.0, "cat": "Misc"}, {"name": "Bucket", "price": 22.0, "cat": "Misc"}, {"name": "Shears", "price": 20.0, "cat": "Misc"}, {"name": "Obsidian", "price": 130.0, "cat": "Misc"}, {"name": "TNT", "price": 100.0, "cat": "Misc"}, {"name": "Torch", "price": 4.0, "cat": "Misc"}, {"name": "Lantern", "price": 15.0, "cat": "Misc"}, {"name": "Soul Torch", "price": 5.0, "cat": "Misc"}, {"name": "Soul Lantern", "price": 15.0, "cat": "Misc"}, {"name": "Water Bucket", "price": 40.0, "cat": "Misc"}, {"name": "Lava Bucket", "price": 40.0, "cat": "Misc"}, {"name": "Milk Bucket", "price": 40.0, "cat": "Misc"}, {"name": "Powder Snow Bucket", "price": 30.0, "cat": "Misc"}, {"name": "Bundle", "price": 15.0, "cat": "Misc"}, {"name": "Lodestone", "price": 300.0, "cat": "Misc"}, {"name": "Minecart", "price": 23.0, "cat": "Transport"}, {"name": "Chest Minecart", "price": 30.0, "cat": "Transport"}, {"name": "Hopper Minecart", "price": 80.0, "cat": "Transport"}, {"name": "Furnace Minecart", "price": 32.0, "cat": "Transport"}, {"name": "TNT Minecart", "price": 80.0, "cat": "Transport"}, {"name": "Rails", "price": 22.0, "cat": "Transport"}, {"name": "Powered Rail", "price": 60.0, "cat": "Transport"}, {"name": "Detector Rail", "price": 50.0, "cat": "Transport"}, {"name": "Activator Rail", "price": 50.0, "cat": "Transport"}, {"name": "Oak Boat", "price": 3.0, "cat": "Transport"}, {"name": "Spruce Boat", "price": 3.0, "cat": "Transport"}, {"name": "Birch Boat", "price": 3.0, "cat": "Transport"}, {"name": "Jungle Boat", "price": 3.0, "cat": "Transport"}, {"name": "Acacia Boat", "price": 3.0, "cat": "Transport"}, {"name": "Dark Oak Boat", "price": 3.0, "cat": "Transport"}, {"name": "Mangrove Boat", "price": 3.0, "cat": "Transport"}, {"name": "Cherry Boat", "price": 4.0, "cat": "Transport"}, {"name": "Snowball", "price": 1.0, "cat": "Decoration"}, {"name": "Snow Block", "price": 5.0, "cat": "Decoration"}, {"name": "Ice", "price": 5.0, "cat": "Decoration"}, {"name": "Packed Ice", "price": 10.0, "cat": "Decoration"}, {"name": "Blue Ice", "price": 25.0, "cat": "Decoration"}, {"name": "Painting", "price": 25.0, "cat": "Decoration"}, {"name": "Item Frame", "price": 10.0, "cat": "Decoration"}, {"name": "Glow Item Frame", "price": 20.0, "cat": "Decoration"}, {"name": "Armor Stand", "price": 15.0, "cat": "Decoration"}, {"name": "Flower Pot", "price": 8.0, "cat": "Decoration"}, {"name": "Bowl", "price": 0.5, "cat": "Decoration"}, {"name": "Chest", "price": 4.0, "cat": "Decoration"}, {"name": "Trapped Chest", "price": 10.0, "cat": "Decoration"}, {"name": "Ender Chest", "price": 300.0, "cat": "Decoration"}, {"name": "Shulker Box", "price": 700.0, "cat": "Decoration"}, {"name": "Bed", "price": 68.0, "cat": "Decoration"}, {"name": "Sponge", "price": 80.0, "cat": "Decoration"}, {"name": "Honeycomb Block", "price": 40.0, "cat": "Decoration"}, {"name": "Candle", "price": 20.0, "cat": "Decoration"}, {"name": "Melon", "price": 8.0, "cat": "Decoration"}, {"name": "Pumpkin", "price": 8.0, "cat": "Decoration"}, {"name": "Oak Fence", "price": 1.0, "cat": "Decoration"}, {"name": "Ladder", "price": 0.5, "cat": "Decoration"}, {"name": "Scaffolding", "price": 0.5, "cat": "Decoration"}, {"name": "Oak Stairs", "price": 1.0, "cat": "Decoration"}, {"name": "Cobblestone Stairs", "price": 1.5, "cat": "Decoration"}, {"name": "Oak Slab", "price": 0.5, "cat": "Decoration"}, {"name": "Stone Slab", "price": 1.5, "cat": "Decoration"}, {"name": "Oak Sign", "price": 1.5, "cat": "Decoration"}, {"name": "Wall Sign", "price": 1.0, "cat": "Decoration"}, {"name": "Redstone", "price": 30.0, "cat": "Redstone"}, {"name": "Redstone Torch", "price": 32.0, "cat": "Redstone"}, {"name": "Repeater", "price": 110.0, "cat": "Redstone"}, {"name": "Comparator", "price": 60.0, "cat": "Redstone"}, {"name": "Observer", "price": 30.0, "cat": "Redstone"}, {"name": "Piston", "price": 20.0, "cat": "Redstone"}, {"name": "Sticky Piston", "price": 25.0, "cat": "Redstone"}, {"name": "Hopper", "price": 50.0, "cat": "Redstone"}, {"name": "Dropper", "price": 20.0, "cat": "Redstone"}, {"name": "Dispenser", "price": 58.0, "cat": "Redstone"}, {"name": "Note Block", "price": 36.0, "cat": "Redstone"}, {"name": "Daylight Detector", "price": 40.0, "cat": "Redstone"}, {"name": "Target", "price": 10.0, "cat": "Redstone"}, {"name": "Lever", "price": 1.0, "cat": "Redstone"}, {"name": "Stone Button", "price": 6.0, "cat": "Redstone"}, {"name": "Oak Button", "price": 4.0, "cat": "Redstone"}, {"name": "Pressure Plate", "price": 6.0, "cat": "Redstone"}, {"name": "Tripwire Hook", "price": 5.0, "cat": "Redstone"}, {"name": "Crafting Table", "price": 2.5, "cat": "Workstations"}, {"name": "Furnace", "price": 8.5, "cat": "Workstations"}, {"name": "Blast Furnace", "price": 40.0, "cat": "Workstations"}, {"name": "Smoker", "price": 15.0, "cat": "Workstations"}, {"name": "Anvil", "price": 80.0, "cat": "Workstations"}, {"name": "Enchanting Table", "price": 500.0, "cat": "Workstations"}, {"name": "Grindstone", "price": 15.0, "cat": "Workstations"}, {"name": "Stonecutter", "price": 15.0, "cat": "Workstations"}, {"name": "Loom", "price": 10.0, "cat": "Workstations"}, {"name": "Cartography Table", "price": 10.0, "cat": "Workstations"}, {"name": "Fletching Table", "price": 10.0, "cat": "Workstations"}, {"name": "Smithing Table", "price": 15.0, "cat": "Workstations"}, {"name": "Composter", "price": 10.0, "cat": "Workstations"}, {"name": "Lectern", "price": 20.0, "cat": "Workstations"}, {"name": "Bell", "price": 200.0, "cat": "Workstations"}, {"name": "Brewing Stand", "price": 50.0, "cat": "Workstations"}, {"name": "Cauldron", "price": 30.0, "cat": "Workstations"}, {"name": "Beacon", "price": 8000.0, "cat": "Workstations"}, {"name": "Jukebox", "price": 100.0, "cat": "Workstations"}, {"name": "Crafter", "price": 150.0, "cat": "Workstations"}, {"name": "Glass Bottle", "price": 2.0, "cat": "Brewing"}, {"name": "Water Bottle", "price": 3.0, "cat": "Brewing"}, {"name": "Fermented Spider Eye", "price": 20.0, "cat": "Brewing"}, {"name": "Wooden Sword", "price": 1.0, "cat": "Gear"}, {"name": "Wooden Pickaxe", "price": 2.0, "cat": "Gear"}, {"name": "Wooden Axe", "price": 2.0, "cat": "Gear"}, {"name": "Wooden Shovel", "price": 1.0, "cat": "Gear"}, {"name": "Wooden Hoe", "price": 2.0, "cat": "Gear"}, {"name": "Stone Sword", "price": 2.5, "cat": "Gear"}, {"name": "Stone Pickaxe", "price": 4.0, "cat": "Gear"}, {"name": "Stone Axe", "price": 3.0, "cat": "Gear"}, {"name": "Stone Shovel", "price": 1.5, "cat": "Gear"}, {"name": "Stone Hoe", "price": 2.5, "cat": "Gear"}, {"name": "Iron Sword", "price": 22.0, "cat": "Gear"}, {"name": "Iron Pickaxe", "price": 22.0, "cat": "Gear"}, {"name": "Iron Axe", "price": 22.0, "cat": "Gear"}, {"name": "Iron Shovel", "price": 22.0, "cat": "Gear"}, {"name": "Iron Hoe", "price": 22.0, "cat": "Gear"}, {"name": "Iron Helmet", "price": 22.0, "cat": "Gear"}, {"name": "Iron Chestplate", "price": 22.0, "cat": "Gear"}, {"name": "Iron Leggings", "price": 22.0, "cat": "Gear"}, {"name": "Iron Boots", "price": 22.0, "cat": "Gear"}, {"name": "Shield", "price": 30.0, "cat": "Gear"}, {"name": "Golden Sword", "price": 6.0, "cat": "Gear"}, {"name": "Golden Pickaxe", "price": 6.0, "cat": "Gear"}, {"name": "Golden Axe", "price": 6.0, "cat": "Gear"}, {"name": "Golden Shovel", "price": 6.0, "cat": "Gear"}, {"name": "Golden Hoe", "price": 6.0, "cat": "Gear"}, {"name": "Golden Helmet", "price": 6.0, "cat": "Gear"}, {"name": "Golden Chestplate", "price": 6.5, "cat": "Gear"}, {"name": "Golden Leggings", "price": 6.0, "cat": "Gear"}, {"name": "Golden Boots", "price": 6.0, "cat": "Gear"}, {"name": "Chainmail Helmet", "price": 40.0, "cat": "Gear"}, {"name": "Chainmail Chestplate", "price": 40.0, "cat": "Gear"}, {"name": "Chainmail Leggings", "price": 50.0, "cat": "Gear"}, {"name": "Chainmail Boots", "price": 30.0, "cat": "Gear"}, {"name": "Leather Helmet", "price": 52.0, "cat": "Gear"}, {"name": "Leather Chestplate", "price": 85.0, "cat": "Gear"}, {"name": "Leather Leggings", "price": 75.0, "cat": "Gear"}, {"name": "Leather Boots", "price": 42.0, "cat": "Gear"}, {"name": "Diamond Sword", "price": 420.0, "cat": "Gear"}, {"name": "Diamond Pickaxe", "price": 650.0, "cat": "Gear"}, {"name": "Diamond Axe", "price": 650.0, "cat": "Gear"}, {"name": "Diamond Shovel", "price": 210.0, "cat": "Gear"}, {"name": "Diamond Hoe", "price": 400.0, "cat": "Gear"}, {"name": "Diamond Helmet", "price": 1000.0, "cat": "Gear"}, {"name": "Diamond Chestplate", "price": 1750.0, "cat": "Gear"}, {"name": "Diamond Leggings", "price": 1500.0, "cat": "Gear"}, {"name": "Diamond Boots", "price": 850.0, "cat": "Gear"}, {"name": "Netherite Sword", "price": 2800.0, "cat": "Gear"}, {"name": "Netherite Pickaxe", "price": 3500.0, "cat": "Gear"}, {"name": "Netherite Axe", "price": 3500.0, "cat": "Gear"}, {"name": "Netherite Shovel", "price": 1800.0, "cat": "Gear"}, {"name": "Netherite Hoe", "price": 2500.0, "cat": "Gear"}, {"name": "Netherite Helmet", "price": 4000.0, "cat": "Gear"}, {"name": "Netherite Chestplate", "price": 5500.0, "cat": "Gear"}, {"name": "Netherite Leggings", "price": 5000.0, "cat": "Gear"}, {"name": "Netherite Boots", "price": 3500.0, "cat": "Gear"}, {"name": "Bow", "price": 15.0, "cat": "Gear"}, {"name": "Crossbow", "price": 40.0, "cat": "Gear"}, {"name": "Arrow", "price": 3.5, "cat": "Gear"}, {"name": "Spectral Arrow", "price": 5.0, "cat": "Gear"}, {"name": "Leather Horse Armor", "price": 50.0, "cat": "Gear"}, {"name": "Iron Horse Armor", "price": 100.0, "cat": "Gear"}, {"name": "Golden Horse Armor", "price": 80.0, "cat": "Gear"}, {"name": "Diamond Horse Armor", "price": 500.0, "cat": "Gear"}, {"name": "Music Disc 13", "price": 150.0, "cat": "Music Discs"}, {"name": "Music Disc Cat", "price": 150.0, "cat": "Music Discs"}, {"name": "Music Disc Blocks", "price": 150.0, "cat": "Music Discs"}, {"name": "Music Disc Chirp", "price": 150.0, "cat": "Music Discs"}, {"name": "Music Disc Far", "price": 150.0, "cat": "Music Discs"}, {"name": "Music Disc Mall", "price": 150.0, "cat": "Music Discs"}, {"name": "Music Disc Mellohi", "price": 150.0, "cat": "Music Discs"}, {"name": "Music Disc Stal", "price": 150.0, "cat": "Music Discs"}, {"name": "Music Disc Strad", "price": 150.0, "cat": "Music Discs"}, {"name": "Music Disc Ward", "price": 150.0, "cat": "Music Discs"}, {"name": "Music Disc 11", "price": 300.0, "cat": "Music Discs"}, {"name": "Music Disc Wait", "price": 150.0, "cat": "Music Discs"}, {"name": "Music Disc Otherside", "price": 300.0, "cat": "Music Discs"}, {"name": "Music Disc 5", "price": 500.0, "cat": "Music Discs"}, {"name": "Music Disc Pigstep", "price": 400.0, "cat": "Music Discs"}, {"name": "Music Disc Relic", "price": 400.0, "cat": "Music Discs"}, {"name": "Music Disc Creator", "price": 300.0, "cat": "Music Discs"}, {"name": "Music Disc Precipice", "price": 300.0, "cat": "Music Discs"}, {"name": "Piglin Head", "price": 80.0, "cat": "Mob Drops"}, {"name": "Dragon Head", "price": 800.0, "cat": "Mob Drops"}, {"name": "Raw Beef", "price": 5.0, "cat": "Mob Drops"}, {"name": "Raw Porkchop", "price": 4.0, "cat": "Mob Drops"}, {"name": "Raw Chicken", "price": 3.0, "cat": "Mob Drops"}, {"name": "Raw Mutton", "price": 4.0, "cat": "Mob Drops"}, {"name": "Raw Rabbit", "price": 4.0, "cat": "Mob Drops"}, {"name": "Raw Cod", "price": 3.0, "cat": "Mob Drops"}, {"name": "Raw Salmon", "price": 4.0, "cat": "Mob Drops"}, {"name": "Goat Horn", "price": 40.0, "cat": "Mob Drops"}];

const CAT_EMOJI = {
    "Logs":"🪵","Stripped Logs":"🪵","Planks":"🪚","Leaves & Saplings":"🍃",
    "Stone & Earth":"⛏️","Deepslate":"🪨","Bricks":"🧱","Tuff":"🪨",
    "Ores":"💎","Materials":"⚗️","Material Blocks":"📦",
    "Copper Variants":"🟤","Nether":"🔥","The End":"🌌",
    "Ocean":"🌊","Swamp":"🐸","Sculk":"🔊",
    "Trial Chambers":"⚗️","Armor Trims":"✨","Pottery Sherds":"🏺",
    "Armadillo":"🛡️","Sniffer":"🦕",
    "Pale Garden":"🌿","Resin":"🟠",
    "Mob Drops":"💀","Food":"🍎","Plants":"🌱",
    "Wool & Fabric":"🧶","Dyes":"🎨","Terracotta":"🏺","Concrete":"🧱",
    "Glass":"🪟","Misc":"🛠️","Transport":"🚂","Decoration":"🏠",
    "Redstone":"⚡","Workstations":"🔨","Brewing":"🧪","Gear":"⚔️",
    "Music Discs":"🎵"
};

const CAT_ORDER = ["Logs","Stripped Logs","Planks","Leaves & Saplings",
"Stone & Earth","Deepslate","Bricks","Tuff","Ores","Materials","Material Blocks",
"Copper Variants","Nether","The End","Ocean","Swamp","Sculk",
"Trial Chambers","Armor Trims","Pottery Sherds","Armadillo","Sniffer",
"Pale Garden","Resin","Mob Drops","Food","Plants",
"Wool & Fabric","Dyes","Terracotta","Concrete","Glass",
"Misc","Transport","Decoration","Redstone","Workstations","Brewing","Gear","Music Discs"];

let globalSort = null;
let activeCategory = 'All';
let compareList = [];
let sectionSorts = {};

// Init
function init() {
    document.getElementById('totalCount').textContent = ITEMS.length;
    buildTabs();
    renderAll(ITEMS);
}

function pc(p) {
    if (p < 10) return 'p1'; if (p < 50) return 'p2';
    if (p < 200) return 'p3'; if (p < 1000) return 'p4'; return 'p5';
}

function fmt(p) { 
    return p === Math.floor(p) ? p.toString() : p.toString(); 
}

function esc(s) { 
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); 
}

function hl(text, q) {
    if (!q) return esc(text);
    const re = new RegExp('(' + q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
    return esc(text).replace(re, '<mark>$1</mark>');
}

// Tabs
function buildTabs() {
    const tabs = document.getElementById('tabs');
    const cats = ['All', ...CAT_ORDER];
    tabs.innerHTML = cats.map(c =>
        `<div class="tab${c===activeCategory?' active':''}" onclick="setCategory('${c}')">${c==='All'?'🏪 All':((CAT_EMOJI[c]||'')+'  '+c)}</div>`
    ).join('');
}

function setCategory(cat) {
    activeCategory = cat;
    buildTabs();
    applyFilters();
}

// Sort
function setGlobalSort(type) {
    globalSort = globalSort === type ? null : type;
    document.querySelectorAll('#sortAsc,#sortDesc,#sortAZ').forEach(b => b.classList.remove('active'));
    if (globalSort) {
        const map = {asc:'sortAsc',desc:'sortDesc',az:'sortAZ'};
        document.getElementById(map[globalSort]).classList.add('active');
    }
    applyFilters();
}

function setSectionSort(cat, type, btn) {
    const cur = sectionSorts[cat];
    sectionSorts[cat] = cur === type ? null : type;
    document.querySelectorAll(`.ssort-btn[data-cat="${CSS.escape(cat)}"]`).forEach(b => b.classList.remove('active'));
    if (sectionSorts[cat]) btn.classList.add('active');
    applyFilters();
}

// Filters
function applyFilters() {
    const q = document.getElementById('searchInput').value.trim().toLowerCase();
    const minV = parseFloat(document.getElementById('minPrice').value);
    const maxV = parseFloat(document.getElementById('maxPrice').value);
    const hasMin = !isNaN(minV), hasMax = !isNaN(maxV);
    const hasFilters = q || hasMin || hasMax || globalSort || activeCategory !== 'All';

    let filtered = ITEMS.filter(item => {
        if (activeCategory !== 'All' && item.cat !== activeCategory) return false;
        if (q && !item.name.toLowerCase().includes(q)) return false;
        if (hasMin && item.price < minV) return false;
        if (hasMax && item.price > maxV) return false;
        return true;
    });

    document.getElementById('resultsBar').style.display = hasFilters ? 'flex' : 'none';
    document.getElementById('resultCount').textContent = filtered.length;
    document.getElementById('searchHint').textContent = q ? `Searching for "${q}"` : '';

    if (globalSort) {
        if (globalSort === 'asc') filtered.sort((a,b) => a.price - b.price);
        else if (globalSort === 'desc') filtered.sort((a,b) => b.price - a.price);
        else filtered.sort((a,b) => a.name.localeCompare(b.name));
    }

    renderAll(filtered, q);
}

// Render
function renderAll(items, q = '') {
    const main = document.getElementById('main');
    if (items.length === 0) {
        main.innerHTML = '<div class="no-results">😔 No items found<br><br>Try a different search</div>';
        return;
    }

    const isGrouped = !globalSort || activeCategory !== 'All';
    if (globalSort && activeCategory === 'All' && !document.getElementById('searchInput').value && !document.getElementById('minPrice').value && !document.getElementById('maxPrice').value) {
        // flat sorted view
        main.innerHTML = renderFlatSection('All Items', items, q, 'all');
        return;
    }

    // Group by category
    const groups = {};
    CAT_ORDER.forEach(c => { groups[c] = []; });
    items.forEach(item => { if (!groups[item.cat]) groups[item.cat] = []; groups[item.cat].push(item); });

    let html = '';
    CAT_ORDER.forEach(cat => {
        const catItems = groups[cat];
        if (!catItems || catItems.length === 0) return;
        html += renderSection(cat, catItems, q);
    });
    main.innerHTML = html || '<div class="no-results">😔 No items found</div>';
    attachSortListeners();
}

function renderSection(cat, items, q) {
    const sort = sectionSorts[cat];
    let sorted = [...items];
    if (sort === 'asc') sorted.sort((a,b) => a.price - b.price);
    else if (sort === 'desc') sorted.sort((a,b) => b.price - a.price);
    else if (sort === 'az') sorted.sort((a,b) => a.name.localeCompare(b.name));
    else sorted.sort((a,b) => a.name.localeCompare(b.name));

    const em = CAT_EMOJI[cat] || '📦';
    const catEsc = cat.replace(/"/g,'&quot;');
    return `
    <div class="section" id="sec-${cat.replace(/\s+/g,'-').replace(/[^a-zA-Z0-9-]/g,'')}">
    <div class="section-header">
        <div class="section-title">
        <span class="emoji">${em}</span> ${cat}
        <span class="section-count">${items.length}</span>
        </div>
        <div class="section-line"></div>
        <div class="section-sort">
        <button class="ssort-btn${sort==='az'?' active':''}" data-cat="${catEsc}" data-type="az" title="Sort A-Z">A–Z</button>
        <button class="ssort-btn${sort==='asc'?' active':''}" data-cat="${catEsc}" data-type="asc" title="Sort Price Low">💰↑</button>
        <button class="ssort-btn${sort==='desc'?' active':''}" data-cat="${catEsc}" data-type="desc" title="Sort Price High">💰↓</button>
        </div>
    </div>
    <div class="grid">${sorted.map(item => renderItem(item, q)).join('')}</div>
    </div>`;
}

function renderFlatSection(title, items, q, id) {
    return `<div class="section"><div class="grid">${items.map(item => renderItem(item, q, true)).join('')}</div></div>`;
}

function renderItem(item, q, showCat = false) {
    const inCmp = compareList.some(c => c.name === item.name);
    const nameHtml = hl(item.name, q);
    const p = pc(item.price);
    const safeN = item.name.replace(/'/g,"\\'");
    return `<div class="item${inCmp?' in-compare':''}" onclick="handleItemClick('${safeN}',${item.price},'${item.cat.replace(/'/g,"\\'")}')">
    <div class="item-name">${nameHtml}${showCat?`<span class="item-cat-tag">${item.cat}</span>`:''}</div>
    <div class="item-right">
        <span class="item-price ${p}">💰 ${fmt(item.price)}</span>
        <button class="add-compare-btn" title="Add to compare">+</button>
    </div>
    </div>`;
}

function attachSortListeners() {
    document.querySelectorAll('.ssort-btn').forEach(btn => {
        btn.addEventListener('click', e => {
        e.stopPropagation();
        const cat = btn.dataset.cat;
        const type = btn.dataset.type;
        const cur = sectionSorts[cat];
        sectionSorts[cat] = cur === type ? null : type;
        document.querySelectorAll(`.ssort-btn[data-cat="${CSS.escape(cat)}"]`).forEach(b => b.classList.remove('active'));
        if (sectionSorts[cat]) btn.classList.add('active');
        applyFilters();
        });
    });
}

// Compare Mode Toggle
let compareModeOn = false;
function toggleCompareMode() {
    if (compareModeOn && compareList.length > 0) {
        openCompare(); return;
    }
    compareModeOn = !compareModeOn;
    document.body.classList.toggle('compare-mode', compareModeOn);
    if (!compareModeOn && compareList.length === 0) {
        showToast('Compare mode OFF');
    } else if (compareModeOn) {
        showToast('⚡ Compare mode ON — click items!');
    }
}

function handleItemClick(name, price, cat) {
    if (!compareModeOn) return;
    toggleCompare(name, price, cat);
}

// Compare
function toggleCompare(name, price, cat) {
    const idx = compareList.findIndex(c => c.name === name);
    if (idx >= 0) {
        compareList.splice(idx, 1);
        showToast(`Removed: ${name}`);
    } else {
        if (compareList.length >= 8) { showToast('⚠ Max 8 items to compare!'); return; }
        compareList.push({ name, price, cat });
        showToast(`Added: ${name}`);
    }
    updateCompareTray();
    applyFilters();
}

function updateCompareTray() {
    const tray = document.getElementById('compareTray');
    const trayItems = document.getElementById('trayItems');
    const count = compareList.length;
    document.getElementById('compareCount').textContent = count;
    document.getElementById('compareCountHeader').textContent = count;

    if (count === 0) { tray.style.display = 'none'; return; }
    tray.style.display = 'block';
    trayItems.innerHTML = compareList.map(item => `
        <div class="tray-item">
        ${esc(item.name)} <span class="tray-item-price">💰${fmt(item.price)}</span>
        <button class="tray-remove" onclick="event.stopPropagation();toggleCompare('${item.name.replace(/'/g,"\\'")}',${item.price},'${item.cat.replace(/'/g,"\\'")}')">✕</button>
        </div>`).join('');
}

function clearCompare() {
    compareList = [];
    updateCompareTray();
    applyFilters();
}

function openCompare() {
    if (compareList.length === 0) { showToast('Add items to compare first!'); return; }
    const modal = document.getElementById('modal');
    const body = document.getElementById('modalBody');
    modal.classList.add('open');

    const maxPrice = Math.max(...compareList.map(i => i.price));
    const minPrice = Math.min(...compareList.map(i => i.price));
    const avgPrice = compareList.reduce((s,i) => s+i.price, 0) / compareList.length;
    const totalPrice = compareList.reduce((s,i) => s+i.price, 0);

    const sorted = [...compareList].sort((a,b) => a.price - b.price);

    body.innerHTML = `
        <div class="compare-grid" style="grid-template-columns:repeat(auto-fill,minmax(260px,1fr))">
        ${compareList.map(item => {
            const isMax = item.price === maxPrice && compareList.filter(i=>i.price===maxPrice).length < compareList.length;
            const isMin = item.price === minPrice && compareList.filter(i=>i.price===minPrice).length < compareList.length;
            const barPct = maxPrice > 0 ? Math.round((item.price/maxPrice)*100) : 100;
            const barColor = item.price === maxPrice ? 'var(--red)' : item.price === minPrice ? 'var(--accent)' : 'var(--accent2)';
            return `<div class="compare-card${isMax?' highest':isMin?' lowest':''}">
            <div>
                <div class="compare-card-name">${esc(item.name)}</div>
                <div class="compare-card-cat">${esc(item.cat)}</div>
                ${isMin ? '<span class="compare-badge badge-cheapest">✓ Cheapest</span>' : ''}
                ${isMax ? '<span class="compare-badge badge-priciest">⬆ Priciest</span>' : ''}
                <div class="compare-bar-wrap">
                <div class="compare-bar-label">Relative Price</div>
                <div class="compare-bar-track">
                    <div class="compare-bar-fill" style="width:${barPct}%;background:${barColor}"></div>
                </div>
                </div>
            </div>
            <div>
                <div class="compare-price-big ${pc(item.price)}">💰${fmt(item.price)}</div>
                <div class="compare-price-label">per item</div>
            </div>
            </div>`;
        }).join('')}
        </div>
        <div class="compare-summary">
        <div class="summary-stat">
            <div class="summary-val p1">💰${fmt(minPrice)}</div>
            <div class="summary-lbl">Cheapest</div>
        </div>
        <div class="summary-stat">
            <div class="summary-val p4">💰${fmt(maxPrice)}</div>
            <div class="summary-lbl">Priciest</div>
        </div>
        <div class="summary-stat">
            <div class="summary-val p2">💰${fmt(Math.round(avgPrice*100)/100)}</div>
            <div class="summary-lbl">Average</div>
        </div>
        <div class="summary-stat">
            <div class="summary-val p3">💰${fmt(Math.round(totalPrice*100)/100)}</div>
            <div class="summary-lbl">Total (${compareList.length} items)</div>
        </div>
        <div class="summary-stat">
            <div class="summary-val" style="color:var(--accent2)">💰${fmt(Math.round((maxPrice-minPrice)*100)/100)}</div>
            <div class="summary-lbl">Price Difference</div>
        </div>
        </div>`;
}

function closeCompare() {
    document.getElementById('modal').classList.remove('open');
}

// Copy IP
function copyIP() {
    navigator.clipboard.writeText('kuma.mcnibro.net').then(() => {
        const btn = document.getElementById('copyBtn');
        btn.textContent = 'COPIED!'; btn.classList.add('copied');
        showToast('✅ IP Copied: kuma.mcnibro.net');
        setTimeout(() => { btn.textContent = 'COPY'; btn.classList.remove('copied'); }, 2000);
    });
}

// Toast
function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg; t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2000);
}

// Clear
function clearAll() {
    document.getElementById('searchInput').value = '';
    document.getElementById('minPrice').value = '';
    document.getElementById('maxPrice').value = '';
    globalSort = null; sectionSorts = {}; activeCategory = 'All';
    compareModeOn = false; document.body.classList.remove('compare-mode');
    document.querySelectorAll('.btn').forEach(b => b.classList.remove('active'));
    buildTabs(); applyFilters();
}

// Keyboard shortcut
document.addEventListener('keydown', e => {
    if ((e.key === '/' || e.key === 'f') && !e.target.matches('input')) {
        e.preventDefault();
        document.getElementById('searchInput').focus();
    }
    if (e.key === 'Escape') closeCompare();
});


const footer = document.querySelector('.footer');
function handleFooterVisibility() {
    const pageScrollable = document.body.scrollHeight > window.innerHeight;
    const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 60;
    const show = !pageScrollable || scrolledToBottom;
    footer.style.opacity = show ? '1' : '0';
    footer.style.pointerEvents = show ? 'auto' : 'none';
    footer.style.transform = show ? 'translateY(0)' : 'translateY(100%)';
}
window.addEventListener('scroll', handleFooterVisibility);
window.addEventListener('resize', handleFooterVisibility);
handleFooterVisibility();

init();