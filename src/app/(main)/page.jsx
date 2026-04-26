import { redirect } from "next/navigation";

export default async function Home() {
  const defaultCatId = "01";
  redirect(`/category/${defaultCatId}`);
}
