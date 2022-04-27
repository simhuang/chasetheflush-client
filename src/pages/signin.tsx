import { getProviders, signIn } from "next-auth/react";

import SecondaryButton from "../components/SecondaryButton";

interface SignInProps {
  providers: any;
}

const SignIn = ({ providers }: SignInProps) => {
  // const session = useSession();

  return (
    <div>
      {Object.values(providers).map((provider: any) => {
        return (
          <SecondaryButton
            key={provider.id}
            name={`Sign In with ${provider.name}`}
            onClick={() => signIn(provider.id)}
          />
        );
      })}
    </div>
  );
};

export default SignIn;

export const getServerSideProps = async (context: any) => {
  const providers = await getProviders();
  return {
    props: {
      providers: providers,
    },
  };
};
