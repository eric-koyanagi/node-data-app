import express from 'express';
import { modelService } from '../../services/model.js';
import { configurationService } from '../../services/configuration.js';

const router = express.Router();

router.get("/", async function(request, response, next) {
	const models = await modelService.all();
	if (!models) {
		return response.status(404).json({ message: 'Not Found' });;
	}
	return response.json( models );
});

router.get("/:model_id", async function(request, response, next) {
	const {
		params: {
			model_id,
		},
	} = request;

	const model = await modelService.find(model_id);
	if (!model) {
		return response.status(404).json({ message: 'Not Found' });;
	}
	return response.json( model );
});

router.get("/:model_id/configurations", async function(request, response, next) {
	const {
		params: {
			model_id			
		},
		query: {
			published
		}
	} = request;

	const configurations = await configurationService.all(model_id, published);
	if (!configurations) {
		return response.status(404).json({ message: 'Not Found' });;
	}
	return response.json( configurations );
});

router.get("/:model_id/configurations/:configuration_id", async function(request, response, next) {
	const {
		params: {
			model_id,
			configuration_id,
		},
	} = request;

	const configuration = await configurationService.find(model_id, configuration_id);
	if (!configuration) {
		return response.status(404).json({ message: 'Not Found' });;
	}
	return response.json( configuration );	
});

export default router;