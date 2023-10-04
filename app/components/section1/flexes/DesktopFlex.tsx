import styles from "../section1.module.css";

export default function DesktopTwoContainer() {
  return (
    <div className={`${styles.twoBoxContainer}`}>
      <div className={`placeholder-box ${styles.flexItem} ${styles.left}`}>
        <img
          className={styles.imageFill}
          src="https://fastly.picsum.photos/id/892/700/815.jpg?hmac=wZfsXJYn-gDdyFimSYfDJ1wo0Y-6VtOlctXjQ1Zvn2E"
        />
      </div>
      <div className={`placeholder-box ${styles.flexItem} ${styles.right}`}>
        <img
          className={styles.imageFill}
          src="https://fastly.picsum.photos/id/137/600/690.jpg?hmac=yRDxJMbETe2xc4tHBINSwHwRnrY68udKYEgJhpTRQ1M"
        />
      </div>
    </div>
  );
}
