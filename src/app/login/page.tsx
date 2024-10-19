"use client";

import LoginForm from "@/app/login/form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import Balancer from "react-wrap-balancer";
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="mx-auto w-1/2 shadow-lg md:max-w-lg">
        <CardHeader>
          <h1
            className="animate-fade-up pb-10 text-left text-3xl font-extrabold tracking-tight"
            style={{
              animationDelay: "0.25s",
              animationFillMode: "forwards",
            }}
          >
            <Balancer>
              <span className="text-muted-foreground">Student Course </span>
              Selection System
            </Balancer>
          </h1>
          <LoginForm />
        </CardHeader>
        <CardContent>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => signIn("github", { callbackUrl: "/" })}
          >
            Sign In with GitHub
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
