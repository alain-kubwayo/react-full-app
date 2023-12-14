import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div>
      {children}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Alert;
