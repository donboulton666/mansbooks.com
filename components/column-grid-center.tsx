import { ReactNode, FC } from "react";

interface ColumnGridCenterProps {
  children: ReactNode;
}

const ColumnGridCenter: FC<ColumnGridCenterProps> = (props) => {
  const { children } = props;
  return (
    <>
      <div className="flex flex-wrap items-center">{children}</div>
    </>
  );
};

export default ColumnGridCenter;
