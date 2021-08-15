/**
 * Automatically imports all the modules and export them
 */

const modules = {};
const requiredModules = require.context(
  // The relative path of the components folder
  '.',
  // Whether or not to look in subfolders
  false,
  // The regular expression used to match base component filenames
  /Store\.js$/,
);

requiredModules.keys().forEach((filename) => {
  // Create the module name from filename
  // Remove the Store.js extension and capitalize
  const moduleName = filename.replace(/(\.\/|Store\.js)/g, '').replace(/^\w/, (c) => c.toUpperCase());
  modules[moduleName] = requiredModules(filename).default || requiredModules(filename);
});

export default modules;
