import { mkdirSync, writeFileSync } from 'node:fs';

const TEXT = 'One star. Four billion years of free service and it still gets in my eyes every single morning I drive east.';
const dir = (process.env.MAKEFUN_OUTPUT_DIR ?? '/output').replace(/\/+$/, '');
mkdirSync(dir, { recursive: true });
// the review, one line, plus the newline that makes it a text file
writeFileSync(`${dir}/entry.txt`, `${TEXT}\n`);
