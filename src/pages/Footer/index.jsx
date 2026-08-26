import "./footer-styles.css"

export function Footer (){
    return(
        <section id="contact" className="section-footer">
            <div className="contact-box">
                <span className="section-tag">// 04. VAMOS CONVERSAR?</span>
                <h2>Entre em Contato</h2>
                <p>Estou em busca de novas oportunidades como Desenvolvedor de Software / Front-End. Sinta-se à vontade para mandar uma mensagem!</p>

                <div className="contact-info-list">
                    <div className="info-item" onclick="navigator.clipboard.writeText('lfelipe2305@hotmail.com.br'); alert('E-mail copiado!');">
                        <i className="fa-regular fa-envelope"></i> lfelipe2305@hotmail.com.br
                    </div>
                    <div className="info-item" onclick="navigator.clipboard.writeText('(15) 98152-0688'); alert('Telefone copiado!');">
                        <i className="fa-solid fa-phone"></i> (15) 98152-0688
                    </div>
                    <div className="info-item">
                        <i className="fa-solid fa-location-dot"></i> Boituva - SP
                    </div>
                </div>

                <a href="mailto:lfelipe2305@hotmail.com.br" className="btn btn-primary">
                    <i className="fa-paper-plane fa-regular"></i> Enviar Mensagem Direta
                </a>
            </div>
            <div className="container">
                <p>© 2026 Luis Felipe dos Santos Gianoni — Engenharia da Computação & Front-End Developer</p>
            </div>
        </section>
    )
}