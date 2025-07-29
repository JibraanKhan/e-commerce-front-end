"use client";

import ProductListComponent from "./components/ProductList";
import "./css/home.css";
import { useEffect } from "react";
import { usePage } from "./context/PageContext";

export default function Home() {
  const { setTitle } = usePage();

  useEffect(() => {
    setTitle("Home");
  }, []);

  const pageCSS = {
    main_container: "main-container",
    section: "section",
    product_list_container:
      "product-list-container fixed-grid has-3-cols is-fluid",
  };

  return (
    <div className={pageCSS.main_container}>
      <div className={pageCSS.section}>
        <div className={pageCSS.product_list_container}>
          <ProductListComponent />
        </div>
      </div>
    </div>
  );
}
