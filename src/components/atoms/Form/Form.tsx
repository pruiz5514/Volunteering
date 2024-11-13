import './Form.scss'

interface FormProps{
    children: React.ReactNode;
    onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
    id?: string;
}

const Form : React.FC<FormProps> = ({children, onSubmit, id}) => {
  return (
    <form onSubmit={onSubmit} className='form' id={id}>
        {children}
    </form>
  )
}

export default Form