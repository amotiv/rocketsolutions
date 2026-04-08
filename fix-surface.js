const fs = require('fs');
const path = require('path');

const EXTs = ['.tsx', '.ts'];

const replacements = [
  { regex: /(?<!dark:)bg-surface(?!\-)/g, replacement: 'bg-surface dark:bg-slate-900' },
  { regex: /(?<!dark:)border-surface-dark/g, replacement: 'border-surface-dark dark:border-slate-800' },
  { regex: /(?<!dark:)hover:bg-surface(?!\-)/g, replacement: 'hover:bg-surface dark:hover:bg-slate-800' },
  { regex: /(?<!dark:)hover:bg-surface-dark/g, replacement: 'hover:bg-surface-dark dark:hover:bg-slate-700' },
  { regex: /(?<!dark:)bg-surface-dark/g, replacement: 'bg-surface-dark dark:bg-slate-800' },
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
        console.log('Fixed surface variables in', fullPath);
      }
    }
  }
}

const targets = [
  path.join(__dirname, 'src/app'),
  path.join(__dirname, 'src/components')
];

targets.forEach(t => processDirectory(t));
console.log('Done');
