import { IoChevronDown } from 'react-icons/io5'
import './Account.scss'

import { useSession } from "next-auth/react";

const Account = () => {
  const { data: session } = useSession();

  let url 
  if(session?.user.photo){
    url = session.user.photo
  }else{
    url = 'https://imagenes.elpais.com/resizer/v2/4UPKL26K5ZICHFC6UIAU5DDHWU.jpg?auth=393fdef15d621d403eec4dc5bc104e8ce874f3be8958f4d708d2ca856b646922&width=414'
  }

  return (
    <div className='account-container'>
      <img className='account-img' src={url} alt="profile-photo" />
      <p className='name-account'>{session?.user.email}</p>
      <button> <IoChevronDown /></button>
    </div>
  )
}

export default Account