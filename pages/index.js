import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { easeInOut, motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <main>
        <div className={styles.container}>
          <div className={styles.containerLanding}>
            {/* <motion.div
              initial="hidden"
              animate="visible"
              variants={TitleAnimation}
            > */}

            <h1 className={styles.landingTitle}>
              Introducing{" "}
              <span className={styles.spanLanding}>ElectraViolin</span>
            </h1>
            {/* </motion.div> */}
          </div>
          <div className={styles.ContainerBruh}>
            <div className={styles.containerImage}>
              <Image
                src="/electraviolinhome.jpg"
                width={480}
                height={300}
                className={styles.Image}
                draggable="false"
              />
              <p className={styles.introProduct}>
                At Acoustic Arts, we have developed an innovative product that
                seamlessly connects a microphone directly to your violin,
                unlocking a world of enhanced sound and performance. Experience
                the true beauty and power of your instrument with our
                cutting-edge technology. Get ready to amplify your violin's
                voice like never before!
              </p>
              {/* <Image src="/electraviolin.png" width={1920} height={1080} /> */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
