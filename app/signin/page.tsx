import 'server-only'
import SignInForm, { GoogleSigninButton } from "./signin";
import { Animation } from '@/utils/animation/animation';
import Nav from '@/components/nav';
import LoginButton from '@/components/login';

export const metadata = {
    title: 'Sign-In',
    description: 'Sign In to learn more about SayHeySounds',
  }

export default function Page() {
    return (
        <>
        <Nav><LoginButton/></Nav>
<Animation mode={'wait'} initial={'false'}>
    <div className="flex mt-20">
        <div className="mx-auto relative">
            <SignInForm/>
            <h2 className="text-center">or</h2>
            <GoogleSigninButton/>
        </div>
    </div>
</Animation>
</>
    );
}