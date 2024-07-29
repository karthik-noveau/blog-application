import styles from "./style.module.css";

export const EmptyState = ({ image }) => {
  return (
    <div className={styles.emptyStateWarper}>
      <img src={image} alt="empty folder" />
      <p>No Blogs Found.</p>
    </div>
  );
};
