import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";

import styles from "./style.module.css";

export const Card = ({ data, allowEditIcons, onUpdateBlog, onDeleteBlog }) => {
  return (
    <div className={styles.cardContainer}>
      <img src={data.image} alt="blog" />
      <div className={styles.titleContainer}>
        <p className={styles.title}>{data.title}</p>
        {allowEditIcons && (
          <div className={styles.iconContaier}>
            <CiEdit
              className={styles.editIcon}
              onClick={() => onUpdateBlog(data)}
            />
            <MdOutlineDeleteOutline
              className={styles.deleteIcon}
              onClick={() => onDeleteBlog(data)}
            />
          </div>
        )}
      </div>
      <span className={styles.divider} />
      <p className={styles.time}>{data.time}</p>
      <p className={styles.description}>{data.description}</p>
    </div>
  );
};
