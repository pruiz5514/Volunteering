'use client';

import './TdActions.scss';
import { GoPencil } from 'react-icons/go'
import { useState } from 'react';
import Button from '@/components/atoms/Button/Button';

interface ITdActions{
  data?: any;
  feature ?: string
}



const TdActions: React.FC<ITdActions> = ({data, feature}) => {


  const [modal, setModal] = useState(false);

  const handleCloseModal = ()=> setModal(false);

  return (
    <div className='td_action-container'>
        <Button className='edit-button'>Editar</Button>
        <Button className='delete-button'>Eliminar</Button>

        {/* {modal && 
          <Modal propFunction={handleCloseModal}> 
              {renderForm()}
          </Modal>
        } */}
    </div>
  )
}

export default TdActions