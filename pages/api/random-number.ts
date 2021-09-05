import { NextApiRequest, NextApiResponse } from 'next';

export default function randomNumber(req: NextApiRequest, res: NextApiResponse) {
    //req.body
    //req.query
    //res.setCookie res.statusCode
    res.json({status: 'ok', value: Math.random()})
}

// https://localhost:3000/random-number
