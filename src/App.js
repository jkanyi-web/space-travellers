import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
/* eslint-disable */

// import RootLayout from "./layout/RootLayout";
// import MissionsPage from "./pages/MissionsPage";
// import MyProfilePage from "./Pages/MyProfilePage";
// import RocketsPage from "./Pages/RocketsPage";
import RootLayout from './layout/RootLayout';
// import MissionsPage from "./Pages/MissionPage";
// import RocketsPage from "./"
import RocketsPage from './Page/RocketsPage';
import MissionsPage from './Page/MissionPage.js';
import MyProfilePage from './Page/MyProfilePage.js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      {/* <Route index element={<RocketsPage />} /> */}
      <Route path="missions" element={<MissionsPage />} />
      <Route path="my-profile" element={<MyProfilePage />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
