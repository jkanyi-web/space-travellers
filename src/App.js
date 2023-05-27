import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import MissionsPage from "./pages/MissionsPage";
import MyProfilePage from "./pages/MyProfilePage";
import RocketsPage from "./pages/RocketsPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<RocketsPage />} />
      <Route path="missions" element={<MissionsPage />} />
      <Route path="my-profile" element={<MyProfilePage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
