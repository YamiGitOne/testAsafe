import { swaggerUi, swaggerSpec } from '../../utils/swagger'

export default function handler(req, res) {
  if (req.method === 'GET') {
    return swaggerUi.setup(swaggerSpec)(req, res);
  }
  res.status(405).end();
}
