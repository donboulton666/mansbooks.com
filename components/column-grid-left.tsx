import { ReactNode, FC } from "react";

interface ColumnGridLeftProps {
  children: ReactNode;
}

const ColumnGridLeft: FC<ColumnGridLeftProps> = (props) => {
  const { children } = props;
  return (
    <>
      <div className="flex flex-wrap">{children}</div>
    </>
  );
};

export default ColumnGridLeft;
