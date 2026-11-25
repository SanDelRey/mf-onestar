import { mkdirSync, writeFileSync } from 'node:fs';
// one line, exactly as the judge reads it
const LINE = 'One star. Four billion years of free service and it still gets in my eyes every single morning I drive east.';
const out = (process.env.MAKEFUN_OUTPUT_DIR ?? '/output').replace(/\/$/, '');
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, `${LINE}\n`);
