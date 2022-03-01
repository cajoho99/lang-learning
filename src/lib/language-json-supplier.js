import path from 'path';
import fs from 'fs';
import fsPromises from 'fs/promises'

const languageDir = path.join(process.cwd(), 'static', 'language-files');

export const  getAllJsonFileNames = async () => {
  return await fs.readdirSync(languageDir, function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    // files.forEach(function (file) {
    //     console.log(file); 
    // });
    return files;
  });
};

export const getLanguage = async (name) => {
  let allFiles = await getAllJsonFileNames();
  if(allFiles.indexOf(name+'.json') > -1) {
    const data = await fs.readFileSync(languageDir+'/'+name+'.json')
    const obj = JSON.parse(data)
    return obj;
  }  
  return console.error("Language: " + name + "does not exist");
};

