import React from 'react';
import { Navigate, Route } from 'react-router';
import { apiDocsPlugin, ApiExplorerPage } from '@backstage/plugin-api-docs';
import {
  CatalogEntityPage,
  CatalogIndexPage,
  catalogPlugin,
} from '@backstage/plugin-catalog';
import {
  CatalogImportPage,
  catalogImportPlugin,
} from '@backstage/plugin-catalog-import';
import { ScaffolderPage, scaffolderPlugin } from '@backstage/plugin-scaffolder';
import { orgPlugin } from '@backstage/plugin-org';
import { SearchPage } from '@backstage/plugin-search';
import { TechRadarPage } from '@backstage/plugin-tech-radar';
import {
  TechDocsIndexPage,
  techdocsPlugin,
  TechDocsReaderPage,
} from '@backstage/plugin-techdocs';
import { UserSettingsPage } from '@backstage/plugin-user-settings';
import { apis } from './apis';
import { entityPage } from './components/catalog/EntityPage';
import { searchPage } from './components/search/SearchPage';
import { Root } from './components/Root';

import { AlertDisplay, OAuthRequestDialog } from '@backstage/core-components';
import { createApp } from '@backstage/app-defaults';
import { FlatRoutes } from '@backstage/core-app-api';
import { CatalogGraphPage } from '@backstage/plugin-catalog-graph';
import { PermissionedRoute } from '@backstage/plugin-permission-react';
import { catalogEntityCreatePermission } from '@backstage/plugin-catalog-common/alpha';

import { HomepageCompositionRoot } from '@backstage/plugin-home';
import { HomePage } from './components/home/HomePage';
import { ManagePage } from './components/manage/ManagePage';


import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import LightIcon from '@material-ui/icons/WbSunny';
import MoonIcon from '@material-ui/icons/Brightness2';

import {
  createTheme,
  genPageTheme,
  lightTheme,
  darkTheme,
  shapes,
} from '@backstage/theme';

const myLightTheme = createTheme({
  palette: {
    ...lightTheme.palette,
    primary: {
      main: '#1A2C65',
    },
    secondary: {
      main: '#F15D31',
    },
    // error: {
    //   main: '#FF0000',
    // },
    // warning: {
    //   main: '#F15D31',
    // },
    // info: {
    //   main: '#1B99D6',
    // },
    // success: {
    //   main: '#8ad33c',
    // },
    background: {
      default: '#f8f8f8',
      paper: '#ffffff',
    },
    // banner: {
    //   info: '#1B99D6',
    //   error: '#F15D31',
    //   text: '#313335',
    //   link: '#313335',
    // },
    // errorBackground: '#8c4351',
    // warningBackground: '#8f5e15',
    // infoBackground: '#343b58',
    // navigation: {
    //   background: '#343b58',
    //   indicator: '#8f5e15',
    //   color: '#d5d6db',
    //   selectedColor: '#ffffff',
    // },
  },
  defaultPageTheme: 'home',
  // fontFamily: 'Comic Sans MS',
  /* below drives the header colors */
  pageTheme: {
    home: genPageTheme(['#0f1a3c', '#53575A'], shapes.wave2),
    documentation: genPageTheme(['#0f1a3c', '#53575A'], shapes.wave2),
    tool: genPageTheme(['#53575A', '#53575A'], shapes.wave2),
    service: genPageTheme(['#1B99D6', '#1B99D6'], shapes.wave2),
    website: genPageTheme(['#f53900', '#f53900'], shapes.wave2),
    library: genPageTheme(['#53575A', '#53575A'], shapes.wave2),
    other: genPageTheme(['#1B99D6', '#1B99D6'], shapes.wave2),
    app: genPageTheme(['#f53900', '#f53900'], shapes.wave2),
    apis: genPageTheme(['#53575A', '#53575A'], shapes.round),
  },
  
});

const myDarkTheme = createTheme({
  palette: {
    ...darkTheme.palette,
    primary: {
      main: '#1A2C65',
    },
    secondary: {
      main: '#F15D31',
    },
  },
  defaultPageTheme: 'home',
  // fontFamily: 'Comic Sans MS',
  /* below drives the header colors */
  pageTheme: {
    home: genPageTheme(['#1B99D6', '#1B99D6'], shapes.wave),
    documentation: genPageTheme(['#f53900', '#f53900'], shapes.wave2),
    tool: genPageTheme(['#53575A', '#53575A'], shapes.wave2),
    service: genPageTheme(['#1B99D6', '#1B99D6'], shapes.wave),
    website: genPageTheme(['#f53900', '#f53900'], shapes.wave2),
    library: genPageTheme(['#53575A', '#53575A'], shapes.wave),
    other: genPageTheme(['#1B99D6', '#1B99D6'], shapes.wave),
    app: genPageTheme(['#f53900', '#f53900'], shapes.wave2),
    apis: genPageTheme(['#53575A', '#53575A'], shapes.round),
  },
  
});

const app = createApp({
  apis,
  bindRoutes({ bind }) {
    bind(catalogPlugin.externalRoutes, {
      createComponent: scaffolderPlugin.routes.root,
      viewTechDoc: techdocsPlugin.routes.docRoot,
    });
    bind(apiDocsPlugin.externalRoutes, {
      registerApi: catalogImportPlugin.routes.importPage,
    });
    bind(scaffolderPlugin.externalRoutes, {
      registerComponent: catalogImportPlugin.routes.importPage,
    });
    bind(orgPlugin.externalRoutes, {
      catalogIndex: catalogPlugin.routes.catalogIndex,
    });
  },
  themes: [{
    id: 'my-theme',
    title: 'Light Theme',
    variant: 'light',
    icon: <LightIcon />,
    Provider: ({ children }) => (
      <ThemeProvider theme={myLightTheme}>
        <CssBaseline>{children}</CssBaseline>
      </ThemeProvider>
    ),
  },
  {
    id: 'dark-theme',
    title: 'Dark Theme',
    variant: 'dark',
    icon: <MoonIcon />,
    Provider: ({ children }) => (
      <ThemeProvider theme={myDarkTheme}>
        <CssBaseline>{children}</CssBaseline>
      </ThemeProvider>
    ),
  },
]
});

const AppProvider = app.getProvider();
const AppRouter = app.getRouter();

const routes = (
  <FlatRoutes>
    {/* <Navigate key="/" to="catalog" /> */}
    <Route path="/" element={<HomepageCompositionRoot />}>
      <HomePage />
    </Route>
    <Route path="/manage" element={<HomepageCompositionRoot />}>
      <ManagePage />
    </Route>
    <Route path="/catalog" element={<CatalogIndexPage />} />
    <Route
      path="/catalog/:namespace/:kind/:name"
      element={<CatalogEntityPage />}
    >
      {entityPage}
    </Route>
    <Route path="/docs" element={<TechDocsIndexPage />} />
    <Route
      path="/docs/:namespace/:kind/:name/*"
      element={<TechDocsReaderPage />}
    />
    <Route path="/create" element={<ScaffolderPage />} />
    <Route path="/api-docs" element={<ApiExplorerPage />} />
    <Route
      path="/tech-radar"
      element={<TechRadarPage width={1500} height={800} />}
    />
    <PermissionedRoute
      path="/catalog-import"
      permission={catalogEntityCreatePermission}
      element={<CatalogImportPage />}
    />
    <Route path="/search" element={<SearchPage />}>
      {searchPage}
    </Route>
    <Route path="/settings" element={<UserSettingsPage />} />
    <Route path="/catalog-graph" element={<CatalogGraphPage />} />
  </FlatRoutes>
);

const App = () => (
  <AppProvider>
    <AlertDisplay />
    <OAuthRequestDialog />
    <AppRouter>
      <Root>{routes}</Root>
    </AppRouter>
  </AppProvider>
);

export default App;
