interface TapeLabelProps {
  children: React.ReactNode;
  className?: string;
}

const TapeLabel = ({ children, className = "" }: TapeLabelProps) => {
  return (
    <span className={`tape-label ${className}`}>
      {children}
    </span>
  );
};

export default TapeLabel;
