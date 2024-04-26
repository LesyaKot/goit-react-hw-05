import Navigation from "../Navigation/Navigation";
import { Suspense } from "react";
import Loader from "../Loader/Loader";
import css from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <Suspense fallback={<Loader />}>
      <div className={css.container}>
        <Navigation />
        {children}
      </div>
    </Suspense>
  );
}
