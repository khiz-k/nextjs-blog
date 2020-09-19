// import { serialize } from 'cookie';
// import { NextApiResponse } from 'next';

// /**
//  * This sets `cookie` using the `res` object
//  */

// type Options = {
//   expires?: Date;
//   maxAge?: number;
// };

// export const setCookie = (
//   res: NextApiResponse,
//   name: string,
//   value: unknown,
//   options: Options = {}
// ) => {
//   const stringValue =
//     typeof value === 'object' ? 'j:' + JSON.stringify(value) : String(value);

//   if ('maxAge' in options) {
//     options.expires = new Date(Date.now() + options.maxAge);
//     options.maxAge /= 1000;
//   }

//   res.setHeader('Set-Cookie', serialize(name, String(stringValue), options));
// };

// // pages/api/cookies.ts

// import { NextApiRequest, NextApiResponse } from 'next';
// import { setCookie } from '../../utils/cookies';

// const handler = (req: NextApiRequest, res: NextApiResponse) => {
//   // Calling our pure function using the `res` object, it will add the `set-cookie` header
//   setCookie(res, 'Next.js', 'api-middleware!');
//   // Return the `set-cookie` header so we can display it in the browser and show that it works!
//   res.end(res.getHeader('Set-Cookie'));
// };

// export default handler;
