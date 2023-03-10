import { useRouter } from "next/router";
import TicketVisual from "./ticket-visual";
import styles from "./ticket-image.module.css";

export default function TicketImage() {
  const { query } = useRouter();
  if (query.ticketNumber) {
    return (
      <div className={styles.background}>
        <div className={styles.page}>
          <TicketVisual
            size={1700 / 650}
            username={query.username ? query.username.toString() : undefined}
            ticketNumber={parseInt(query.ticketNumber.toString(), 10)}
            name={
              query.name
                ? query.name?.toString()
                : query.username
                ? query.username.toString()
                : undefined
            }
          />
        </div>
      </div>
    );
  }
  return <></>;
}
