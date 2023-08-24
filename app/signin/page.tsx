import 'server-only'
import SignInForm, { GoogleSigninButton } from "./signin";

export const metadata = {
    title: 'Sign-In',
    description: 'Sign In to learn more about SayHeySounds',
  }

export default function Page() {
    return (
        <>
    <div className="flex">
        <div className="mx-auto relative">
            <SignInForm/>
            <h2 className="text-center">or</h2>
            <GoogleSigninButton/>
        </div>
    </div>
    </>
    );
}