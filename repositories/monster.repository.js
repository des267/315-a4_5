/**
 * monster.repository.js
 *
 * Author: Desmond Stular
 */

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
		// Increment monster ID section; if empty collection monster id = 1, else increment from max
		const monsterCount = await Monster.find().countDocuments();
		if (monsterCount === 12) {
			payload['id'] = 1;
		}
		else {
			const largestID = await Monster.find().sort({id:-1}).limit(1);
			payload['id'] = largestID[0].id + 1;
		}
		const newMonster = new Monster(payload);
		const savedMonster = await newMonster.save();
		return savedMonster;
	} catch (e) {
		throw e;
	}
}