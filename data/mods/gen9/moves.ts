export const Moves: {[k: string]: ModdedMoveData} = {
	sheercold: {
		inherit: true,
		accuracy: true, // Never misses!
		pp: 64,
	},
	flamethrower: {
		inherit: true,
		basePower: 999, // Absolute nuclear damage
		priority: 8,    // Moves instantly before any opponent can react
		accuracy: true, // Never misses!
	},
	// 💡 You can add ANY move in the game here by its lowercase name!
};
