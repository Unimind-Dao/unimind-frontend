import { ButtonLink } from "../components/Button";
import useWallet from "../hooks/useWallet";
import { shortenAddress } from "../utils";

const AdminPage = () => {
  const { address, isLoading, isAllowed, isConnecting } = useWallet();

  if (!address && !isConnecting) return <h1>Please connect your wallet. 💳</h1>;

  if (isLoading) return <h1>Checking your status... 👷</h1>;

  if (!isAllowed && !isLoading) return <h1>You are not allowed here. 🚨</h1>;

  if (isAllowed && !isLoading)
    return (
      <>
        <h1>Hello, {shortenAddress(address)}! 🎉</h1>
        <ButtonLink>Add a Post</ButtonLink>
      </>
    );
};

export default AdminPage;
