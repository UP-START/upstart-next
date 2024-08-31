import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { emailLogin, signup } from "./actions";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { OAuthButtons } from "./oauth-signin";
import { ThemeToggle } from "./submit-button";

export default async function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return redirect("/profile");
  }
  
// Alinhar o botao dia/noite a direita, colocar cor discord no fundo do botao, botao quadrardo,

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-background">
      <Card className="mx-auto max-w-sm text-center">
        <CardHeader>
          <div className="flex justify-center items-center text-center mb-4">
            <CardTitle className="text-3xl items-center">Login</CardTitle>
            <ThemeToggle />
          </div>
          <CardDescription className="text-lg">
            Welcome Back to UPSTART!
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <OAuthButtons />
          <div className="text-center text-sm">
            Don&apos;t have an account?{" "}
            <button formAction={signup} form="login-form" className="underline">
              Sign up
            </button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}