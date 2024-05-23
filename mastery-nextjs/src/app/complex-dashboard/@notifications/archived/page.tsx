import Card from "@/components/card"
import Link from "next/link";

export default function ArchivedNotifications() {
  // here we can fetch the data for the archived notifications
  // and add a loading handler to it too
  return (
    <div>
      <Card>
        <div>Archived Notifications</div>
        <Link href={"/complex-dashboard"}>Default</Link>
      </Card>

    </div>
  );
}