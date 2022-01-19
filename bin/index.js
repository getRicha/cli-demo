#!/usr/bin/env node
const chalk=require('chalk');
const boxen=require('boxen');

const name=chalk.blue('Name')+': '+chalk.green('Richa Srivastava');
const github=chalk.blue('Github')+': '+chalk.green('https://github.com/getRicha');
const twitter=chalk.blue('Twitter')+': '+chalk.green('https://twitter.com/gettRicha');
const lin=chalk.blue('LinkedIn')+': '+chalk.green('https://linkedin.com/in/richasri');

const box= {
    padding: 1,
    margin: 1,
    borderStyle: 'round',
    borderColor: 'green',
};

const msg=boxen(`${name}\n${github}\n${twitter}\n${lin}`,box);

console.log(msg);