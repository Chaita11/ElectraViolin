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
          <div className={styles.containerImage}>
            <Image
              src="/thirteen  .svg"
              width={500}
              height={500}
              className={styles.rotatingImage}
            />
          </div>
        </div>
      </main>
    </>
  );
}
