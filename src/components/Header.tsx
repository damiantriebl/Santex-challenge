import { useSubtotal } from "../hooks/useSubtotal";
import { StyledHeader } from "./StyledHeader";

export function Header() {
  const { loading, error, subtotal } = useSubtotal();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <StyledHeader>
      <img
        src="https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png"
        alt="logo"
      />
      <div className="subtotal">$ {subtotal}</div>
    </StyledHeader>
  );
}
