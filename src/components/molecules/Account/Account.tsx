import { IoChevronDown } from 'react-icons/io5'
import './Account.scss'

import { useSession } from "next-auth/react";

const Account = () => {
  const { data: session, status } = useSession();
  console.log(session);

  let url 
  if(session?.user.photo){
    url = session.user.photo
  }else{
    url = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcincodias.elpais.com%2Fsmartlife%2F2016%2F07%2F04%2Flifestyle%2F1467646262_522853.html&psig=AOvVaw334gXG_lY2R3rkBea-Y-Ag&ust=1731706292933000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKje8Obi3IkDFQAAAAAdAAAAABAE'
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