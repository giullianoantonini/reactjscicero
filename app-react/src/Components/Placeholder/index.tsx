import { ReactNode } from "react";

interface PlaceholderProps {
  children: ReactNode;
}

const Placeholder = ({ children }: PlaceholderProps) => {
  return (
    <>
      <hr />
      <div>{children}</div>
      <hr />
    </>
  );
};

export default Placeholder;
