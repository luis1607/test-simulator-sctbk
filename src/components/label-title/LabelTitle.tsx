import "./LabelTitle.scss"

type Props = {
    children: string,
  };

export const LabelTitle = ({children}: Props) => {
  return (
    <p className='label-title'>{children}</p>
  )
}
