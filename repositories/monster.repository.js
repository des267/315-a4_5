import Monster from "../models/monster.model.js";

export const getMonstersFromRepository = async (query) => {
	try {
		const monsters = await Monster.find(query);
		return monsters;
	} catch (e) {
		throw e;
	}
}

export const updateMonsterInRepository = async (query, update) => {
	try {
		return await Monster.findOneAndUpdate(
			{...query},
			{...update},
			{new: true}
		).lean();
	} catch (e) {
		throw e;
	}
}

export const deleteMonsterFromRepository = async (query) => {
	try {
		const monster = await Monster.findOneAndDelete({...query});
		return monster;
	} catch (e) {
		throw e;
	}
}

export const createMonsterInRepository = async (payload) => {
	try {
		const newMonster = new Monster(payload);
		const savedMonster = await newMonster.save();
		return savedMonster;
	} catch (e) {
		throw e;
	}
}