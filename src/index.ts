#!/usr/bin/env node

import fs from 'fs';
import { program } from 'commander';
import chalk from 'chalk';
import { parseOpenApi3Documentation, parseHydraDocumentation } from '@api-platform/api-doc-parser';
import parsedJsonReplacer from "./parsedJsonReplacer.js";

type OptionValues = {
  format: string;
  dump: string;
};

program
  .description('Check API Hydra documentation parsing')
  .argument('<entrypoint>', 'Entrypoint to the API documentation')
  .option(
    '-f, --format [hydra|openapi3]',
    '"hydra" or "openapi3"',
    'hydra'
  )
  .option('-d, --dump [filename]', 'Dump parsed API documentation')
  .showHelpAfterError()
  .parse();

const entrypoint = program.args[0];
const options = program.opts<OptionValues>();

const parse = options.format === 'openapi3' ? parseOpenApi3Documentation : parseHydraDocumentation;

parse(entrypoint).then((api) => {
  let count = 0;
  const endpoints: string[] = [];
  console.log()
  console.log(`${chalk.green('Checking documentation parsing for API @')} ${entrypoint}`);
  for (const resource of api.api.resources || []) {
    count++;
    const nameLc = resource.name.toLowerCase();
    endpoints.push(nameLc);
  }
  console.log(endpoints.sort());
  console.log(`${chalk.green('Number of endpoints parsed:')} ${count}`);

  if (options.dump) {
    fs.writeFile(options.dump, JSON.stringify(api, parsedJsonReplacer, 2), (e) => {
      if (e) {
        throw e;
      }
      console.log(`Parsed API documentation dumped to file: ${options.dump}`);
    });
  }
}).catch((e) => {
  console.log(e);
});
