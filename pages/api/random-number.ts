import { NextApiRequest, NextApiResponse } from 'next';

export default function randomNumber(req: NextApiRequest, res: NextApiResponse) {
    res.json({status: 'ok', value: Math.random()})
}

// https://localhost:3000/random-number
