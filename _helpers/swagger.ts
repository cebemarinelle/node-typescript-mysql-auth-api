import express from 'express';
const router = express.Router();
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import path from 'path';

const swaggerPath = path.join(__dirname, '../swagger.yaml');
console.log('Loading swagger from:', swaggerPath);

try {
    const swaggerDocument = YAML.load(swaggerPath);
    console.log('Swagger loaded successfully');
    router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
} catch (error) {
    console.error('Error loading swagger:', error);
    router.use('/', swaggerUi.serve, swaggerUi.setup({
        openapi: '3.0.0',
        info: { title: 'API', version: '1.0.0' },
        paths: {}
    }));
}

export default router;