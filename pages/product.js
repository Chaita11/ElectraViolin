import styles from "@/styles/scss/about.module.scss";
import Information from "@/jsonElements/information.json";
import { CloseCircleFilled, SoundFilled } from "@ant-design/icons";
import Image from "next/image";
const About = () => {
  return (
    <>
      <main>
        <div className={styles.container}>
          <h1 className={styles.landingTitle}>
            About <span className={styles.spanTitle}>ElectraViolin</span>
          </h1>
          <p className={styles.slogan}>"Where Tradition Meets Technology"</p>
        </div>
        <div className={styles.boxContainer}>
          {Information &&
            Information.map((info) => (
              <div key={info.id}>
                <div className={styles.infoContainer}>
                  <Image
                    src={info.link}
                    width={30}
                    height={50}
                    draggable="false"
                    className={styles.linkImage}
                  />
                  <h1 className={styles.infoTitle}>
                    {info.title}{" "}
                    <span className={styles.infoTitleGrad}>{info.grad}</span>
                  </h1>
                  <p className={styles.infoSubtitle}>{info.subTitle}</p>
                </div>
              </div>
            ))}
        </div>
      </main>
    </>
  );
};

export default About;
