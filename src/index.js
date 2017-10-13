#!/usr/bin/env node

import fs from 'fs';
import 'isomorphic-fetch';
import program from 'commander';
import chalk from 'chalk';
import parseHydraDocumentation from '@api-platform/api-doc-parser/lib/hydra/parseHydraDocumentation';
import {version} from '../package.json';

program
  .version(version)
  .description('Check API Hydra documentation parsing')
  .usage('entrypoint')
  .option('-d, --dump [filename]', 'Dump parsed api documentation')
  .parse(process.argv);

if (1 !== program.args.length ) {
  program.help();
}

const entrypoint = program.args[0];

parseHydraDocumentation(entrypoint).then(api => {
  let count = 0;
  let endpoints = [];
  console.log()
  console.log(chalk.green('Checking documentation parsing for API @ ') + entrypoint);
  for (let resource of api.api.resources) {
    count++;
    const nameLc = resource.name.toLowerCase();
    endpoints.push(nameLc);
  }
  console.log(endpoints.sort());
  console.log(chalk.green('Number of endpoints parsed : ') + count);

  if(program.dump) {
    fs.writeFile(program.dump, JSON.stringify(api), (e) => {
      if(e) throw e;
      console.log('Parsed api documentation dumped to file : ' + program.dump);
    });
  }

}).catch((e) => {
  console.log(e);
});
