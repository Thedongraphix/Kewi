import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <SignUp 
        redirectUrl="/dashboard" 
        appearance={{
          elements: {
            formButtonPrimary: "bg-primary hover:bg-primary/90",
            card: "shadow-md rounded-md",
          },
          variables: {
            colorPrimary: "hsl(var(--primary))",
          }
        }}
      />
    </div>
  );
} 