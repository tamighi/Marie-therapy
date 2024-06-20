type Props = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export const BaseSection = ({ children, ...rest }: Props) => {
  return (
    <div
      className="h-screen py-24 box-border w-11/12 lg:w-4/5 m-auto"
      {...rest}
    >
      {children}
    </div>
  );
};
