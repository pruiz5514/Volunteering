import './H3.scss';

interface H3Props {
    children: React.ReactNode;
    classname?: string;
}

const H3: React.FC<H3Props> = ({children, classname}) => {
  return (
    <h3 className={`h3 ${classname}`}>{children}</h3>

  )
}

export default H3