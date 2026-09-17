export const Moves: {[k: string]: ModdedMoveData} = {
	sheercold: {
		inherit: true,
		accuracy: true,
		pp: 64,
	},
	flamethrower: {
		inherit: true,
		basePower: 999,
		priority: 8,
		accuracy: true,
	},
	protect: {
		inherit: true,
		onPrepareHit(pokemon) {
			return this.singleEvent('PrepareHit', this.dex.moves.get('protect'), pokemon.side.sideConditions['protect'], pokemon);
		},
		onHit(target) {
			if (!target.addVolatile('stall')) return false;
		},
	},
	toxic: {
		inherit: true,
		accuracy: true, // Never misses!
		ignoreImmunity: true, // Forces the move to ignore Steel and Poison-type immunities completely!
		status: 'tox',
		// This custom script runs the instant Toxic hits, immediately scaling the damage counter to maximum
		onHit(target, source, move) {
			if (target.status === 'tox') {
				// If they are already poisoned, this forces it to deal massive flat damage instantly
				this.damage(target.maxhp * 0.99, target, source);
			}
		},
		condition: {
			inherit: true,
			onStart(target) {
				this.add('-status', target, 'tox');
				// Automatically force the toxic counter to stage 15 (max damage multiplier) on turn one!
				target.statusState.stage = 15; 
			},
		},
	},
};

