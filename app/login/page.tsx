import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import  ClientLogin  from "./ClientLogin";  // Adicionada a extensão .tsx
import { handleDiscordLogin } from "./actions";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (user) {
    return redirect("/profile");
  }

  return <ClientLogin message={searchParams.message} onDiscordLogin={handleDiscordLogin} />;
}