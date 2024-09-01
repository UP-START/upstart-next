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
      <CardHeader className="relative">
        <div className="flex flex-col items-center justify-center relative mb-2">
          <CardTitle className="text-3xl">Login</CardTitle>
          <span className="absolute top-0 right-0">
            <ThemeToggle />
          </span>
        </div>
        <CardDescription className="text-lg text-center mt-4">
          Welcome Back to UPSTART!
        </CardDescription>
      </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <OAuthButtons />
          <div className="text-center text-sm">
            Don&apos;t have an account?{" "}
            <button formAction={signup} form="login-form" className="text-primary hover:underline">
              Sign up
            </button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}