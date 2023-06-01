import Contact from "@/comps/Contact";
import styles from "@/styles/scss/price.module.scss";
import Image from "next/image";
const PriceOffers = () => {
  return (
    <>
      <main>
        <div className={styles.container}>
          <div>
            <h1 className={styles.landingTitle}>
              Price & <span className={styles.spanTitle}>Offers</span>
            </h1>
            <p className={styles.subTitle}>
              "Unbeatable Value, Unforgettable Melodies"
            </p>
          </div>
          <div className={styles.containerInfoImage}>
            <div className={styles.containerPriceInfo}>
              <p className={styles.PriceInfo}>
                We strive to offer competitive and affordable prices for our
                violins with tech features. Please note that specific pricing
                details may vary based on the model, brand, and any ongoing
                promotions or discounts. For accurate and up-to-date pricing
                information, please contact our sales team or visit our store.
              </p>
              <p className={styles.PriceInfo}>
                We believe in transparency and providing value to our customers.
                Our pricing ranges generally fall within the following
                categories:
              </p>
              <p className={styles.PriceInfo}>Starting from $199.99 to $250</p>
            </div>
            <Image
              Image
              src="/electraviolin.jpg"
              width={440}
              height={250}
              className={styles.Image}
              draggable="false"
            />
          </div>
          <Contact />
        </div>
      </main>
    </>
  );
};

export default PriceOffers;
