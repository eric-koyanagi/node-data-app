#!/usr/bin/env node

// Run this from the project root by using `node ./scripts/migrate.js`
import 'dotenv/config';
import { migrationService } from '../src/services/migration.js';

const result = await migrationService.migrateJsonToDB('migration_source_data/models');

console.log("--> Migration complete, data is now ready to access via API", result);
process.exit(0);