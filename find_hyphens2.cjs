const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
    let results = [];
    fs.readdir(dir, function(err, list) {
        if (err) return callback(err);
        let pending = list.length;
        if (!pending) return callback(null, results);
        list.forEach(function(file) {
            file = path.resolve(dir, file);
            fs.stat(file, function(err, stat) {
                if (stat && stat.isDirectory()) {
                    walk(file, function(err, res) {
                        results = results.concat(res);
                        if (!--pending) callback(null, results);
                    });
                } else {
                    if (file.endsWith('.tsx') || file.endsWith('.ts')) {
                        results.push(file);
                    }
                    if (!--pending) callback(null, results);
                }
            });
        });
    });
}

function processFiles(files) {
    const wordWordRegex = /([a-zA-Z]+)-([a-zA-Z]+)/g;
    
    files.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');
        const lines = content.split('\n');
        let fileChanged = false;
        
        for (let i = 0; i < lines.length; i++) {
            let line = lines[i];
            
            // basic exclusions to skip entire line
            if (line.trim().startsWith('import') || line.trim().startsWith('export')) continue;
            
            // skip if looks like an SVG path or purely technical component
            if (line.includes('stroke=')) continue;
            if (line.includes('d="M')) continue;
            
            // To safely find text nodes, let's find matches and see their context.
            // A match is valid if it's NOT inside a string literal, NOT inside a className, NOT inside a tag <...>
            // Let's do a naive approach: we show matches and their lines.
            
            let match;
            while ((match = wordWordRegex.exec(line)) !== null) {
                const word = match[0];
                const index = match.index;
                
                // check if it's inside quotes on the same line
                let inDouble = false;
                let inSingle = false;
                let inTag = false;
                
                // let's count quotes before index on the line
                let dQ = (line.substring(0, index).match(/"/g) || []).length;
                let sQ = (line.substring(0, index).match(/'/g) || []).length;
                let openAngle = (line.substring(0, index).match(/</g) || []).length;
                let closeAngle = (line.substring(0, index).match(/>/g) || []).length;
                let openBrace = (line.substring(0, index).match(/\{/g) || []).length;
                let closeBrace = (line.substring(0, index).match(/\}/g) || []).length;
                
                if (dQ % 2 !== 0) continue; // inside double quotes
                if (sQ % 2 !== 0) continue; // inside single quotes
                if (openAngle > closeAngle) continue; // inside an unclosed tag <...
                
                // This means it's likely outside of tags and quotes.
                // Examples: "data-driven" as text.
                
                // Let's print the line to manually inspect.
                console.log(`FILE: ${file}:${i+1} | MATCH: ${word} | LINE: ${line.trim()}`);
            }
        }
    });
}

walk('c:\\Users\\SAAD\\OneDrive\\Documents\\scale-tik-shop-builder\\src', function(err, results) {
    if (err) throw err;
    processFiles(results);
});
