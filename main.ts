import { mkdirSync, writeFileSync } from 'node:fs';

const TEXT = 'One star. Four billion years of free service and it still gets in my eyes every single morning I drive east.';
const dir = (process.env.MAKEFUN_OUTPUT_DIR ?? '/output').replace(/\/+$/, '');
mkdirSync(dir, { recursive: true });
// one line out, and a newline so the file is a text file
writeFileSync(`${dir}/entry.txt`, `${TEXT}\n`);
