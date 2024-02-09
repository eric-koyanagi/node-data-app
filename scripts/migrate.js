#!/usr/bin/env node

// Run this from the project root by using `node ./scripts/migrate.js`
import 'dotenv/config';
import { MigrationService } from '../src/services/MigrationService.js';

const migration = new MigrationService();
const result = await migration.migrateJsonToDB('migration_source_data/models');

console.log("--> Migration complete, data is now ready to access via API", result);
process.exit(0);