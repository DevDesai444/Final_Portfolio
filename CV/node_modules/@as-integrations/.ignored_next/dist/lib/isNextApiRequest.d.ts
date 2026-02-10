import { NextApiRequest } from 'next';
import { NextRequest } from 'next/server';
declare const isNextApiRequest: (req: NextApiRequest | NextRequest | Request) => req is NextApiRequest;
export { isNextApiRequest };
