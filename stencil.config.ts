import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'delegate-cash-button',
  outputTargets: [
    {
      type: 'dist-custom-elements',
      externalRuntime: false,
      generateTypeDeclarations: true,
      autoDefineCustomElements: true
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [sass()],
};
