import Link from "next/link";
import styles from "@/styles/scss/footer.module.scss";
const Footer = () => {
  return (
    <>
      <main>
        <div className={styles.container}>
          <div className={styles.linksContainer}>
            <h1 className={styles.Logo}>Acoustic Arts</h1>
            <Link href="mailto:acousticarts@gmail.com" className={styles.Links}>
              <p className={styles.Links}>acousticarts@gmail.com</p>
            </Link>
          </div>
          <div className={styles.linksContainer}>
            <h1 className={styles.Title}>Useful Links</h1>
            <Link href="/" className={styles.Links}>
              <p className={styles.Links}>Home</p>
            </Link>
            <Link href="/product" className={styles.Links}>
              <p className={styles.Links}>Product</p>
            </Link>
            <Link href="/price" className={styles.Links}>
              <p className={styles.Links}>Price & Offers</p>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Footer;
