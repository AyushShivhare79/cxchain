import { getServerSession } from "next-auth";
import Card from "../../components/Card";
import authOptions from "@/app/lib/auth";

export default async function Page() {
  const session = await getServerSession(authOptions);

  return (
    <>
      <Card session={session} />
    </>
  );
}
