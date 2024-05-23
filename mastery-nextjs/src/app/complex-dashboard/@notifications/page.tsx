import Card from "@/components/card"
import Link from "next/link";

export default function Notifications() {
  return (
    <div>
      <Card>
        <div>Notifications</div>
        <Link href={"/complex-dashboard/archived"}>Archived</Link>
      </Card>

    </div>
  );
}