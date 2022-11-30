import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { reactOutputTarget as react } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'delegate-cash-button',
  outputTargets: [
    // react({
    //   componentCorePackage: 'delegatecash-button',
    //   proxiesFile: './libraries/react/src/components/stencil-generated/index.ts',
    //   includeDefineCustomElements: true,
    // }),
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
