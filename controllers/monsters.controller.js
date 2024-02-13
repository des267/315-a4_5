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

export const getMonsters = async (req, res, next) => {
	try {
		const monsters = await getMonstersFromRepository();
		res.status(200).send(monsters);
	} catch (e) {
		next();
		res.status(500).send(`FAILED TO GET MONSTERS: ${e.message}`);
	}
}

export const getMonster = async (req, res, next) => {
	const {id} = req.params;
	try {
		const monster = await getMonstersFromRepository({id: id});
		res.status(200).send(monster);
	} catch (e) {
		next();
		res.status(500).send(`FAILED TO GET MONSTER: ${e.message}`);
	}
}

export const updateMonster = async (req, res, next) => {
	const {id} = req.params;
	console.log(req.params);
	const {body} = req;
	try {
		const monster = await updateMonsterInRepository({id: id}, body);
		res.status(200).send(monster);
	} catch (e) {
		next(e);
		res.status(500).send(`FAILED TO PATCH MONSTER: ${e.message}`);
	}
}

export const deleteMonster = async (req, res, next) => {
	const {id} = req.params;
	try {
		const monsterDeleted = await deleteMonsterFromRepository({id: id});
		if (monsterDeleted) {
			res.status(204).send(`Monster ${id} deleted`);
		} else {
			res.status(404).send(e.message, `Failed to delete monster ${id}`);
		}
	} catch (e) {
		next();
		res.status(500).send(`FAILED TO DELETE MONSTER: ${e.message}`);
	}
}

export const createMonster = async (req, res, next) => {
	const {body} = req;
	try {
		const monster = await createMonsterInRepository(body);
		console.log(monster);
		res.status(200).send(monster);
	} catch (e) {
		next();
		res.status(500).send(`FAILED TO CREATE MONSTER: ${e.message}`);
	}
}