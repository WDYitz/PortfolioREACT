import { useEffect } from 'react';
import { CardRepos } from '../components/CardRepos';
import VanillaTilt from 'vanilla-tilt';
import me from '../assets/images/me.jpg'


import '../styles/Home.css'

function Home() {


  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll('.CardRepos'));
  })

  /** ANIMAÇÃO SCROLL !!! */
  window.addEventListener('scroll', () => {
    let topAnime = document.querySelector('.backanime');
    let bottomAnime = document.querySelector('.backanimeBottom');

    let value = window.scrollY;

    if (value >= 140) {
      topAnime.style.opacity = 0;
      bottomAnime.style.opacity = 0;

    } else {
      topAnime.style.opacity = 1;
      bottomAnime.style.opacity = 1;
    }

    if (value >= 80) {
      document.querySelector('.levels-head').style.opacity = 1;

      document.querySelector('.html').style.opacity = 1;
      document.querySelector('.css').style.opacity = 1;
      document.querySelector('.javas').style.opacity = 1;
      document.querySelector('.react').style.opacity = 1;
      document.querySelector('.csharp').style.opacity = 1;
      document.querySelector('.dotnet').style.opacity = 1;

    } else {
      document.querySelector('.levels-head').style.opacity = 0;

      document.querySelector('.html').style.opacity = 0;
      document.querySelector('.css').style.opacity = 0;
      document.querySelector('.javas').style.opacity = 0;
      document.querySelector('.react').style.opacity = 0;
      document.querySelector('.csharp').style.opacity = 0;
      document.querySelector('.dotnet').style.opacity = 0;
    }

  })

  /** INFORMAÇÃO DOS CARDS DE PROJETO  */
  let cardProjetos = [
    {
      title: 'RocketCoffeeUI',
      detail: 'Desafio da RocketSeat Nível intermediário criado com React/Vite',
      url: 'https://wdyitz.github.io/RocketCoffeeUI/'
    },
    {
      title: 'Carrinho de compras',
      detail: 'Shopping Cart com Context API e Reducers - 2023',
      url: 'https://github.com/WDYitz/shopping-cart',
    },
    {
      title: 'Média Escolar UI',
      detail: 'Projeto que calcula a média escolar dos alunos dinamicamente.',
      url: 'https://github.com/WDYitz/MediaEscolar-UI'
    }];


  return (
    // eslint-disable-next-line react/no-unknown-property
    <div className='Home' onLoad={() => {
      /* 
        * ANIMATION ON SCROLL */
      document.querySelector('.Home').style.opacity = 1;
      document.querySelector('.container-perfil').style.opacity = 1;
      document.querySelector('.container-perfil').style.opacity = 1;
      document.querySelector('.sobre-mim p').style.opacity = 1;

      /* IDIOMA ANIMATION */
      document.querySelector('.idiomas-head').style.opacity = 1;
      document.querySelector('.ingles').style.opacity = 1;
      document.querySelector('.espanhol').style.opacity = 1;

    }}>
      <aside>
        <span className='backanime'></span>
        <span className='backanimeBottom'></span>
        <span className='github'><a href="https://github.com/WDYitz" target='_blank' rel="noreferrer"><i className="bi bi-github"></i></a></span>
        <span className='linkedin'><a href="https://www.linkedin.com/in/yitzhak-ben-rodriguez-70797b208/" target='_blank' rel="noreferrer"><i className="bi bi-linkedin"></i></a></span>
        <div className='container-perfil'>
          <img src={me} alt="foto de perfil do portfolio" id='fotoPerfil' data-tilt />
          <div className='container-perfil-name'>
            <h1 className='typingAnimation'>Yitzhak B. Rodriguez</h1>
            <h3>Frontend Developer</h3>
          </div>
        </div>
        <div className='sobre-mim'>
          <p>
            Meu nome é Yitzhak Ben Rodriguez, Tenho 22 anos, nascido na Florida, Estados Unidos sou <b id='frontend-text'>Desenvolvedor Frontend</b> sou graduado no curso técnico de Tecnologia da Informação no SENAC, Possuo conhecimentos intermediários em projetos desenvolvidos com <b id='csharp-text'>C#</b>, <b id='dotnet-text'>.NET</b>, tenho ampla experiência com projetos Frontend criados em <b id='html-text'>HTML</b>, <b id='css-text'>CSS</b>, <b id='javascript-text'>JAVASCRIPT</b>, Conhecimento intermediário em <b>REACT</b>, Experiência com Banco de Dados <b id='sql-text'>SQL Server</b>, Sou estudante de Sistemas de Informação.
          </p>
          <div className='idiomas'>
            <h2 className='idiomas-head'>Idiomas</h2>

            <div className='ingles boxUIall'>
              <h2>Inglês</h2>
              <span></span>
            </div>

            <div className='espanhol boxUIall'>
              <h2>Espanhol</h2>
              <span></span>
            </div>
          </div>
        </div>
        <hr />
        <div className='levels' id='levelsID'>
          <h2 className='levels-head'>Levels</h2>

          <div className='html boxUIall'>
            <h2>Html</h2>
            <span></span>
          </div>

          <div className='css boxUIall'>
            <h2>Css</h2>

            <span></span>
          </div>

          <div className='javas boxUIall'>
            <h2>JavaScript</h2>
            <span></span>
          </div>

          <div className='react boxUIall'>
            <h2>React</h2>
            <span></span>
          </div>

          <div className='csharp boxUIall'>
            <h2>C#</h2>
            <span></span>
          </div>

          <div className='dotnet boxUIall'>
            <h2>.NET</h2>
            <span></span>
          </div>
        </div>
      </aside>
      <main>
        <section className='sec1'>
          <h2>Formação acadêmica</h2>
          <ul>
            <li>Tecnologia da informação</li>
          </ul>
        </section>
        <section className='sec2'>
          <h2>Experiência</h2>
          <ul>
            <li>Participei da 14ª semana do Jovem Empreendedor de Santos na área portuária, Desenvolvendo UIs para o software criado.</li>
            <li>Participei na área de desenvolvimento do <b id="projInteg">Projeto Integrador</b> Happy Mind, aplicação web em ASP.NET.</li>
            <li>Experiência na criação de UIs responsivas e modernas.</li>
            <li>Prototipação de interfaces.</li>
          </ul>
        </section>
        <section className='sec3'>
          <h2>Objetivo</h2>
          <p>Busco uma oportunidade de trabalho na área de Frontend que me permita aplicar meus conhecimentos e habilidades, além de aprimorar meus conhecimentos na área.</p>
        </section>
        <section className='sec4'>
          <h2>Desafios e Projetos</h2>
          <div className="cardsProj">
            {
              cardProjetos.map((e) => (
                // eslint-disable-next-line react/jsx-key
                <CardRepos
                  title={e.title}
                  details={e.detail}
                  url={e.url}
                />
              ))
            }
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
