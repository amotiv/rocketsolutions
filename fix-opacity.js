const fs = require('fs');
const path = require('path');

const EXTs = ['.tsx', '.ts'];

const replacements = [
  { regex: /bg-white dark:bg-slate-900\/(\d+)/g, replacement: 'bg-white/$1 dark:bg-slate-900/$1' },
  { regex: /hover:bg-white dark:bg-slate-900\/(\d+)/g, replacement: 'hover:bg-white/$1 dark:hover:bg-slate-900/$1' },
  { regex: /hover:bg-white dark:hover:bg-slate-900\/(\d+)/g, replacement: 'hover:bg-white/$1 dark:hover:bg-slate-900/$1' }
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
        console.log('Fixed opacities in', fullPath);
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
