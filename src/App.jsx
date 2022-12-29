import { React, lazy, Suspense, useContext } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import './services/i18n';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import { ThemeContext, getThemeProps} from './components/ThemeProvider';
import styles from './App.module.scss';

const MainPage = lazy(() => import("./pages/MainPage/MainPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));
const PromoPage = lazy(() => import("./pages/PromoPage/PromoPage"));

function App() {
  const [{theme}] = useContext(ThemeContext);

  return (
    <div className={styles.appContainer} style={getThemeProps(theme, "backgroundColor", "color", "backgroundImage")}>
      <Header />
      <main className={styles.mainContainer}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Outlet />}>
              <Route index element={<MainPage />} />
              <Route path={"/portfolio"} element={<PromoPage />} />
              <Route path={"/contacts"} element={<ContactsPage />} />
              <Route path="*" element={<MainPage />} />
            </Route>
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
