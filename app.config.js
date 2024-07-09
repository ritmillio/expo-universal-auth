module.exports = {
  expo: {
    name: 'expo-universal-auth',
    owner: "ritmillio",
    experiments: {
      typedRoutes: true,
      tsconfigPaths: true,
    },
    slug: 'expo-router-starter-kit',
    version: '3.2.0',
    orientation: 'portrait',
    icon: './src/assets/images/icon.png',
    scheme: 'expo-universal-auth',
    userInterfaceStyle: 'automatic',
    splash: {
      image: './src/assets/images/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#fff',
    },
    updates: {
      fallbackToCacheTimeout: 0,
      url: "https://u.expo.dev/564f22dd-cb02-43e7-b4a9-d0f7c49ea2ef"
    },
    mode: 'production',
    assetBundlePatterns: ['**/*'],
    build: {
      development: {
        distribution: "internal"
      },
      preview: {
        distribution: "internal"
      },
      production: {
        distribution: "store"
      }
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.expo-universal-auth.vador.studio'
    },
    infoPlist: {
      ITSAppUsesNonExemptEncryption: false,
    },
    android: {
      package: 'com.your.bundle.identifier',
      adaptiveIcon: {
        foregroundImage: './src/assets/images/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
      // Add your custom intent filters here for Deep Linking
      intentFilters: [
        {
          action: 'VIEW',
          autoVerify: true,
          data: [
            {
              scheme: 'https',
              host: '*.myapp.io',
              pathPrefix: '/records',
            },
          ],
          category: ['BROWSABLE', 'DEFAULT'],
        },
      ],
    },
    web: {
      bundler: 'metro',
      favicon: './src/assets/images/favicon.png',
    },
    plugins: [
      [
        'expo-router',
      ]
    ],
    runtimeVersion: {
      policy: "appVersion"
    },
    extra: {
      eas: {
        projectId: "564f22dd-cb02-43e7-b4a9-d0f7c49ea2ef"
      }
    },
  },
};
