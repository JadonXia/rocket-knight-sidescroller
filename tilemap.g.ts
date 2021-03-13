// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`50000800020303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030104000000000000000000000000000000000014000000000000000000001400000000000000000000000000140000000000000000000000140000000000000000140000000000140000000000000000060400000000000000000000000000000000001400000000000000000000140000000000000000000000000014000000000000000000000000000000000000000000000000000014000000000000000006040000000000000000000000000000000000140000000000140000000014000000000000000000000000000000000000000000000000000000000000000000000000000000001400000000000000000604000000000000000000001400000000000000000000000014000000000000000000000014140000000000000000000014000000000000000000000000000000000000000000140000000000000000060400000013131313130000140000000000000000000000000000000000000000000000000014000000000000000000001400000000000014000000000000140000000000000000000000000000000006050000000000000000000014000000000000000000000000000000000000000000000000001400000000001400000000140000000000001400000000000014000000000000000000000000001100000708080808080e0b0a0808080909080e0b0c0c0d1010090e1010101010101010100b0c0c0c0c0d0809090e0e0e0b0c0c0c0c0c0c0c0d0f090909090909090909120b0c0c0c0d0f090909120b0c0c0d0f0e`, img`
22222222222222222222222222222222222222222222222222222222222222222222222222222222
2..............................................................................2
2..............................................................................2
2..............................................................................2
2..............................................................................2
2..............................................................................2
2..............................................................................2
2222222222222222222..22.........222222222222222222222222222222222222222222222222
`, [myTiles.transparency16,sprites.builtin.forestTiles7,sprites.builtin.forestTiles5,sprites.builtin.forestTiles6,sprites.builtin.forestTiles9,sprites.builtin.forestTiles13,sprites.builtin.forestTiles11,sprites.builtin.forestTiles15,sprites.builtin.forestTiles24,sprites.builtin.forestTiles28,sprites.builtin.forestTiles20,sprites.builtin.forestTiles21,sprites.builtin.forestTiles22,sprites.builtin.forestTiles23,sprites.builtin.forestTiles26,sprites.builtin.forestTiles27,sprites.dungeon.hazardLava0,sprites.dungeon.chestClosed,sprites.builtin.forestTiles29,sprites.dungeon.buttonTeal,sprites.dungeon.floorDarkDiamond], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
