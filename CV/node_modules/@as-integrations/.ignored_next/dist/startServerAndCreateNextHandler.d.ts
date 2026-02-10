import { ApolloServer, BaseContext, ContextFunction } from '@apollo/server';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest } from 'next/server';
type HandlerRequest = NextApiRequest | NextRequest | Request;
interface Options<Req extends HandlerRequest, Context extends BaseContext> {
    context?: ContextFunction<[Req, Req extends NextApiRequest ? NextApiResponse : undefined], Context>;
}
declare function startServerAndCreateNextHandler<Req extends HandlerRequest = NextApiRequest, Context extends BaseContext = object>(server: ApolloServer<Context>, options?: Options<Req, Context>): {
    <HandlerReq extends NextApiRequest>(req: HandlerReq, res: NextApiResponse): Promise<unknown>;
    <HandlerReq extends NextRequest | Request>(req: HandlerReq, res?: undefined): Promise<Response>;
};
export { startServerAndCreateNextHandler };
