/**
 * monsters.controller.js
 *
 * Created by: Desmond Stular
 * 		 Date: February 9, 2024
 */

import {
	getMonstersFromRepository,
	deleteMonsterFromRepository,
	updateMonsterInRepository,
	createMonsterInRepository
} from '../repositories/monster.repository.js';

export const getMonsters = async (req, res) => {
	try {
		const monsters = await getMonstersFromRepository();
		res.status(200).send(monsters);
	} catch (e) {
		res.status(500).send(e.message, "Failed to get list of monster");
	}
}

export const getMonster = async (req, res) => {
	const {id} = req.params;
	try {
		const monster = await getMonstersFromRepository({id: id});
		res.status(200).send(monster);
	} catch (e) {
		res.status(500).send(e.message, `Failed to fetch monster ${id}`);
	}
}

export const updateMonster = async (req, res) => {
	const {id} = req.params;
	const {body} = req;
	try {
		const monster = await updateMonsterInRepository({id: id}, body);
		res.status(200).send(monster);
	} catch (e) {
		res.status(500).send(e.message, "Failed to get list of monster");
	}
}

export const deleteMonster = async (req, res) => {
	const {id} = req.params;
	try {
		const monsterDeleted = await deleteMonsterFromRepository({id: id});
		if (monsterDeleted) {
			res.status(204).send();
		} else {
			res.status(404).send(e.message, `Failed to delete monster ${id}`);
		}
	} catch (e) {
		res.status(500).send(e.message, "Failed to get list of monster");
	}
}

export const createMonster = async (req, res) => {
	const {body} = req;
	try {
		const monster = await createMonsterInRepository(body);
		console.log(monster);
		res.status(200).send(monster);
	} catch (e) {
		res.status(500).send(e.message, "Failed to create monster");
	}
}