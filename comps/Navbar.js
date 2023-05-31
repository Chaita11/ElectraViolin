import styles from "@/styles/scss/navbar.module.scss";
import Link from "next/link";
import { useState } from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { motion as m } from "framer-motion";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <main className={styles.NavContainer}>
        <div className={styles.NavLogo}>
          <Link href="/" className={styles.LinkUnderline}>
            <h1>Acoustic Arts</h1>
          </Link>
        </div>
        <div className={styles.NavLinks}>
          <Link href="/" className={styles.LinkUnderline}>
            <h1 className={styles.Links}>Home</h1>
          </Link>
          <Link href="/product" className={styles.LinkUnderline}>
            <h1 className={styles.Links}>Product</h1>
          </Link>
          <Link href="/price" className={styles.LinkUnderline}>
            <h1 className={styles.Links}>Price & Offers</h1>
          </Link>
        </div>
        <div className={styles.Hamburger}>
          <MenuOutlined
            className={styles.hamicon}
            onClick={() => {
              setOpen(!open);
            }}
          />
          {open && (
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <div className={styles.containerHamburger}>
                <div className={styles.HamLinks}>
                  <Link href="/" className={styles.LinkUnderline}>
                    <h1 className={styles.Links}>Home</h1>
                  </Link>
                  <Link href="/product" className={styles.LinkUnderline}>
                    <h1 className={styles.Links}>Product</h1>
                  </Link>
                  <Link href="/price" className={styles.LinkUnderline}>
                    <h1 className={styles.Links}>Price & Offers</h1>
                  </Link>
                  <CloseOutlined
                    className={styles.hamicon}
                    onClick={() => {
                      setOpen(!open);
                    }}
                  />
                </div>
              </div>
            </m.div>
          )}
        </div>
      </main>
    </>
  );
};

export default Navbar;
