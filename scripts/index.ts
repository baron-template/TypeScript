import { EnchantScriptsP, betterOption } from 'enchant-script';

type Tag = 'optimization' | 'doc';
type Custom = {
  tags: [Tag, ...Tag[]];
};

export const scripts = new Set<EnchantScriptsP<Custom>>();
scripts.add({
  script: ['npx eslint configs/.eslintrc.js  --fix --no-ignore'],
  ...betterOption,
  opt: {
    name: 'eslint -> .eslintrc.js',
    description: 'eslintを適用する -> .eslintrc.js',
    custom: {
      tags: ['optimization'],
    },
  },
});
scripts.add({
  script: ['npx eslint {src,configs,scripts,types}/**/*.{ts,tsx,js,json} --fix'],
  ...betterOption,
  opt: {
    name: 'eslint -> code',
    description: 'eslintを適用する -> ソースコード全般',
    custom: {
      tags: ['optimization'],
    },
  },
});
scripts.add({
  script: ['npx jscpd src -c .jscpd.json'],
  ...betterOption,
  opt: {
    name: 'jscpd',
    description: 'コードの冗長な部分の検出',
    custom: {
      tags: ['optimization'],
    },
  },
});
scripts.add({
  script: ['npx tsc'],
  ...betterOption,
  opt: {
    name: 'tsc',
    description: '型チェック',
    custom: {
      tags: ['optimization'],
    },
  },
});
scripts.add({
  script: ['npx jest'],
  ...betterOption,
  opt: {
    name: 'test',
    description: '単体テスト',
    custom: {
      tags: ['optimization'],
    },
  },
});

scripts.add({
  script: ['npx typedoc src/ --exclude **/*.{spec,test}.ts --includeDeclarations --out build/docs'],
  ...betterOption,
  opt: {
    name: 'typedoc',
    description: 'typedocを出力',
    custom: {
      tags: ['doc'],
    },
  },
});
