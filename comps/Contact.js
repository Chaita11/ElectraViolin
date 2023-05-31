import info from "@/jsonElements/contactInfo.json";
import styles from "@/styles/scss/price.module.scss";
const Contact = () => {
  return (
    <>
      <main>
        <div className={styles.containerContact}>
          {info.map((info) => (
            <div key={info.id} className={styles.contactBox}>
              <div className={styles.boxContainer}>
                <h1 className={styles.infoTitle}>
                  {info.title}{" "}
                  <span className={styles.infoTitleGrad}>{info.grad}</span>
                </h1>
                <p className={styles.infoInfo}>{info.info}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Contact;
