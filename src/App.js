import { Route, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import ProductPage from './pages/Product';
import MainLayout from './Layouts/MainLayout';
import DetailProductPage from './pages/Detail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductPage />

  },
  {
    path: "/Detail",
    element: <DetailProductPage />
  }
])

function App() {
  return (
    <div className="App">


      <MainLayout className="main-layout">
        <RouterProvider router={router} />
      </MainLayout>

    </div>
  );
}

export default App;
