import { HeaderMap } from '@apollo/server';
import { NextApiRequest } from 'next';
import { NextRequest } from 'next/server';
declare const getHeaders: (req: NextApiRequest | NextRequest | Request) => HeaderMap;
export { getHeaders };
