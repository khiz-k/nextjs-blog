import Cors from 'cors';
import initMiddleware from '../../lib/init-middleware';

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET', 'POST', 'OPTIONS'],
  })
);

export default async function handler(req, res) {
  // Run cors
  await cors(req, res);

  // Rest of the API logic
  res.json({ message: 'Hello Everyone!' });
}

// index.js:
// export default function Index() {
//   return (
//     <p>
//       To test the CORS route, open the console in a new tab on a different
//       domain and make a POST / GET / OPTIONS request to <b>/api/cors</b>. Using
//       a different method from those mentioned will be blocked by CORS
//     </p>
//   );
// }
