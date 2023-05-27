export const treasureEncodeTypes = {
    treasure: {
        isMimic: 'bool',
        weapon: {
            name: 'string',
            damage: 'uint256',
            range: 'uint256',
        },
    },
}

export const weaponEncodeTypes = {
    weapon: {
        name: 'string',
        damage: 'uint256',
        range: 'uint256',
        speed: 'uint256',
    },
}

export const levelEncodeTypes = {
    level: {
        name: 'string',
        enemies: 'string[]',
    },
}
