import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function SignInButton(){
    return (
        <Button type="submit" variant="secondary" className="w-full bg-yellow-300"  > Sign In</Button>
    )
}