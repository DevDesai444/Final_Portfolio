import { NextApiRequest } from 'next';
import { NextRequest } from 'next/server';
declare const getBody: (req: NextApiRequest | NextRequest | Request) => Promise<any>;
export { getBody };
