// Supporting create migration files
import { connectorConfig } from '@/Config';
import fs from 'fs';

fs.writeFileSync(
  'ormconfig.json',
  JSON.stringify(
    {
      ...connectorConfig.getTypeOrmConfig(),
      seeds: ['src/Seeds/*{.ts,.js}'],
      factories: ['src/Factories/*{.ts,.js}'],
    },
    null,
    2,
  ),
);
