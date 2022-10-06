import Image from "next/image";
import styles from "./Tool.module.css";

export default function Tool(props) {
  return (
    <div className={styles.tool}>
      <Image src={props.src} alt={props.alt} width={30} height={30} />
      <h3>{props.title}</h3>
    </div>
  );
}
