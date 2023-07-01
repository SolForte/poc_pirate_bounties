import { Request, Response } from "express";
import bountyRepository from "../repositories/bounty.repository";
import httpStatus from "http-status";

async function createPirateBounty(req: Request, res: Response){
    const { name, nickname, bounty } = req.body;
    try{
        const result = await bountyRepository.createBounty(name, nickname, bounty);
        res.status(httpStatus.CREATED).send(result);
    }
    catch(error){
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}
async function getAllPirateBounties(_req: Request, res: Response){
    try{
        const result = await bountyRepository.getAllBounties();
        res.status(httpStatus.OK).send(result);
    }
    catch(error){
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}
async function updatePirateBountyByName(req: Request, res: Response){
    const {name, bounty} = req.body;
    try{
        const result = await bountyRepository.updateBountyByName(name, bounty);
        res.status(httpStatus.OK).send(result);
    }
    catch(error){
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}
async function deletePirateBountyByName(req: Request, res: Response){
    const {name} = req.body;
    try{
        await bountyRepository.deleteBountyByName(name);
        res.sendStatus(httpStatus.NO_CONTENT);
    }
    catch(error){
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

const bountyController = {
    createPirateBounty,
    getAllPirateBounties,
    updatePirateBountyByName,
    deletePirateBountyByName,
}

export default bountyController;