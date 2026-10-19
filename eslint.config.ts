import createConfig from '@seedcord/eslint-config';

export default createConfig({
    tsconfigRootDir: import.meta.dirname,
    registerDiscordjsPlugin: true,
    registerImportPlugin: 'off',
    registerSeedcordPlugin: true,
    generalIgnores: ['**/seedcord-gen.d.ts']
});
