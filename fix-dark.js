const fs = require('fs');
const path = require('path');

const EXTs = ['.tsx', '.ts'];

const replacements = [
  { regex: /(?<!dark:)bg-white/g, replacement: 'bg-white dark:bg-slate-900' },
  { regex: /(?<!dark:)bg-slate-50(?![\/\-])/g, replacement: 'bg-slate-50 dark:bg-slate-900/50' },
  { regex: /(?<!dark:)border-slate-200/g, replacement: 'border-slate-200 dark:border-slate-800' },
  { regex: /(?<!dark:)border-slate-100/g, replacement: 'border-slate-100 dark:border-slate-800/50' },
  { regex: /(?<!dark:)border-slate-300/g, replacement: 'border-slate-300 dark:border-slate-700' },
  { regex: /(?<!dark:)text-navy/g, replacement: 'text-navy dark:text-white' },
  { regex: /(?<!dark:)text-slate-500/g, replacement: 'text-slate-500 dark:text-slate-400' },
  { regex: /(?<!dark:)text-slate-600/g, replacement: 'text-slate-600 dark:text-slate-300' },
  { regex: /(?<!dark:)text-slate-700/g, replacement: 'text-slate-700 dark:text-slate-200' },
  { regex: /(?<!dark:)text-slate-800/g, replacement: 'text-slate-800 dark:text-slate-100' },
  { regex: /(?<!dark:)text-slate-900/g, replacement: 'text-slate-900 dark:text-white' },
];

function processDirectory(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (EXTs.includes(path.extname(fullPath))) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let original = content;
      replacements.forEach(({ regex, replacement }) => {
        content = content.replace(regex, replacement);
      });
      if (content !== original) {
        fs.writeFileSync(fullPath, content);
        console.log('Fixed', fullPath);
      }
    }
  }
}

const targets = [
  path.join(__dirname, 'src/app/app'),
  path.join(__dirname, 'src/components'),
  path.join(__dirname, 'src/app/login'),
  path.join(__dirname, 'src/app/(marketing)')
];

targets.forEach(t => processDirectory(t));
console.log('Done');
