import { shortenAddress } from "../utils";
import { ButtonLink } from "../components/Button";
import useWallet from "../hooks/useWallet";

const AdminPage = () => {
  const { address, loading, allowed, isConnecting } = useWallet();

  if (!address && !isConnecting) return <h1>Please connect your wallet. 💳</h1>;

  if (loading) return <h1>Checking your status... 👷</h1>;

  if (!allowed && !loading) return <h1>You are not allowed here. 🚨</h1>;

  if (allowed && !loading) return (
    <>
      <h1>hello, {shortenAddress(address)}! 🎉</h1>
      <ButtonLink>Add a Post</ButtonLink>
    </>
  );

};

export default AdminPage;