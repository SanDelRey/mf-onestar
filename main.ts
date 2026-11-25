import { mkdirSync, writeFileSync } from 'node:fs';
// deadpan one-star review of an everyday essential
// exactly one line, nothing else
const LINE = 'One star. Four billion years of free service and it still gets in my eyes every single morning I drive east.';
const out = (process.env.MAKEFUN_OUTPUT_DIR ?? '/output').replace(/\/$/, '');
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, `${LINE}\n`);
