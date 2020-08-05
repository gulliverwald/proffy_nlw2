import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem (){
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars3.githubusercontent.com/u/40525167?s=460&u=e19416b4b366bd1065c7790d540af17abb66cfe4&v=4" alt="Gulliver"/>
                        <div>
                            <strong>Gulliver Waldmann</strong>
                            <span>Computação</span>
                        </div>
                    </header>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, obcaecati.
                        <br />
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur officia at deleniti nemo harum assumenda excepturi ex eius fugiat? Id tempore deleniti doloremque quibusdam, voluptas velit doloribus ea aut recusandae!
                    </p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 20,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    );
}

export default TeacherItem;