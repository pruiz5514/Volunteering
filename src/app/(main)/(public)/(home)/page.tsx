import Button from '@/components/atoms/Button/Button';
import './home.scss'
import Header from "@/components/organisms/Header/Header";
import Link from 'next/link';

export default function Home() {
    return (
      <>
        <Header leftSectionContent = {<h2 className='header_left-content'>VolunteerConnect</h2>}>
          <li><a href="/login">Iniciar sesión</a></li>
          <li><a href="/register"><Button className='dark-button'>Registrase</Button></a></li>
        </Header>

        <main className='home-main'>
          <div className='home_text-container'>
            <h1 className="home-h1">Conecta, Colabora, Cambia el mundo</h1>
            <p className='home-p'>Unete a nuestra comunidad de voluntarios y organizadores. Encuentra proyectos que te apasionen o crea los tuyos propios para hacer una diferencia en tu comunidad </p>

            <div className="home_buttons-container">
              <div>
                <Link href='./login'><Button className='dark-button'>Explorar proyectos</Button></Link>
              </div>
              <div>
                <Link href='/login'><Button className='light-button'>Comenzar como organizador</Button></Link>
              </div>                
            </div>
          </div>
          
        </main>
      </>
    );
  }
  