import path from 'path';
import fs from 'fs';
import { prompt } from 'enquirer';

const emptyDir = (dir: string) => {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach((file) => {
    const abs = path.resolve(dir, file);
    if (fs.lstatSync(abs).isDirectory()) {
      emptyDir(abs);
      fs.rmdirSync(abs);
    } else {
      fs.unlinkSync(abs);
    }
  });
};

const copy = (src: string, dest: string) => {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach((file) => {
      const srcFile = path.resolve(src, file);
      const destFile = path.resolve(dest, file);
      copy(srcFile, destFile);
    });
  } else {
    fs.copyFileSync(src, dest);
  }
};

const createProject = async () => {
  const response = await prompt<{ folder: string }>({
    type: 'input',
    name: 'folder',
    message: 'Enter the application name',
  });

  const target = path.join(process.cwd(), response.folder, '/');
  const template = path.join(__dirname, '..', 'templates', 'app/');

  if (fs.existsSync(target) && fs.readdirSync(target)) {
    const { overwrite } = await prompt<{ overwrite: boolean }>({
      type: 'confirm',
      name: 'overwrite',
      message: `Directory ${response.folder} is not empty. Would you like to overwrite it?`,
    });

    if (!overwrite) {
      process.exit();
    } else {
      emptyDir(target);
    }
  }

  copy(template, target);
  console.info('Application successfully created!');

  return true;
};

createProject();
