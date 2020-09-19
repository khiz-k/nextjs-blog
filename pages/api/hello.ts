import { NextApiRequest, NextApiResponse } from 'next';

export default (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ text: 'Hello' });
};

// // hello.js
// export default (req, res) => {
//   res.status(200).json({ text: 'Hello' });
// };
