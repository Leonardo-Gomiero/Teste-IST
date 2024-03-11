document.addEventListener('DOMContentLoaded', function () {

    function changeLanguage(lang) {
        var htmlElement = document.querySelector('html');
        htmlElement.setAttribute('lang', lang);
    }

    document.querySelectorAll('.br').forEach(item => {
        item.addEventListener('click', function () {

            changeLanguage('pt');
            $("#lang-list").toggleClass("hidden disBlock");

            //menu
            $(".nav-list").find(".nav-item").eq(0).find(".nav-link").text("Sobre");
            $(".nav-list").find(".nav-item").eq(1).find(".nav-link").text("Habilidades");
            $(".nav-list").find(".nav-item").eq(2).find(".nav-link").text("Certificados");
            $(".nav-list").find(".nav-item").eq(3).find(".nav-link").text("Background");
            $(".nav-list").find(".nav-item").eq(4).find(".nav-link").text("Idiomas");
            $(".nav-list").find(".nav-item").eq(5).find(".nav-link").text("Referências");
            $(".nav-list").find(".nav-item").eq(6).find(".nav-link").text("Contato");

            //mobile-menu
            $(".mobile-menu").find(".nav-item").eq(0).find(".nav-link").text("Sobre");
            $(".mobile-menu").find(".nav-item").eq(1).find(".nav-link").text("Habilidades");
            $(".mobile-menu").find(".nav-item").eq(2).find(".nav-link").text("Certificados");
            $(".mobile-menu").find(".nav-item").eq(3).find(".nav-link").text("Background");
            $(".mobile-menu").find(".nav-item").eq(4).find(".nav-link").text("Idiomas");
            $(".mobile-menu").find(".nav-item").eq(5).find(".nav-link").text("Referências");
            $(".mobile-menu").find(".nav-item").eq(6).find(".nav-link").text("Contato");

            //menu language icon
            $(".language-selected").addClass("change-br");
            $(".language-selected").removeClass("change-es");
            $(".language-selected").removeClass("change-en");

            //section "about"
            $("#txt1").text("Eu sou");
            $("#txt2").text("Desenvolvedor de Software");
            $("#txt3").text("IDADE");
            $("#txt4").text("ENDEREÇO");
            $("#txt5").text("São Bernardo do Campo, SP - Brasil");
            $("#txt6").text("TELEFONE");

            //section "download-cv"
            $("#txt7").text("Baixar CV");
            document.getElementById('txt7').href = './assets/Curriculo - Leonardo Gomiero C Capoccia.pdf';

            //id "introducing"
            $("#introducing").text("Olá, Mundo! Meu nome é Leonardo Capoccia, e eu sou um desenvolvedor de software web. Eu tenho trabalhado nesse campo por dois anos, adquirindo experiência em várias empresas onde pude aprimorar minhas habilidades técnicas em JavaScript, HTML, CSS, SQL e mais. No meu papel, aprendi a traduzir as necessidades do cliente em soluções de software, focando em feedback periódico e prestando muita atenção aos detalhes.");

            //section "interests"
            $("#txt8").text("Meus Interesses");
            $("#txt9").text("Tenho um grande interesse em artes marciais; tenho praticado Karatê desde 2015. Também gosto de correr e frequentar a academia regularmente. Video games, filmes e leitura são alguns dos meus hobbies. Meu jogo favorito é God of War: Ragnarok, e meu livro preferido é \"Como Fazer Amigos e Influenciar Pessoas\" de Dale Carnegie. Além disso, frequentemente me envolvo em projetos de desenvolvimento durante meu tempo livre como um passatempo recreativo.");

            //section "skills-bar"
            $("#txt10").text("Habilidades Profissionais");
            $("#txt11").text("Análise de Dados");

            //section "project"
            $("#txt12").text("Um Projeto em Java Puro");
            $("#txt13").text("Durante minha formação em Análise e Desenvolvimento de Sistemas, eu concluí um projeto de 5 semanas para reforçar minhas habilidades em Programação Orientada a Objetos. Utilizando Java, simulei batalhas de Pokémon dos consoles Gameboy, Nintendo DS e Nintendo Switch. O projeto destaca minha proficiência em POO, resolução de problemas e aplicação prática de conceitos teóricos. Estou empolgado para discutir este projeto mais detalhadamente em uma entrevista.");

            //section "certificates"
            $("#txt14").text("Meus Certificados");
            $("#txt15").text("A insígnia AWS Cloud Practitioner é uma certificação de nível básico da Amazon Web Services. Ela valida conhecimentos básicos dos serviços de nuvem da AWS, modelos de precificação e segurança.");
            $("#txt16").text("Verificar insígnia");
            $("#txt17").text("A certificação Fundamentos de IA da Microsoft (AI-900) é um exame de certificação da Microsoft Azure que abrange conceitos fundamentais de inteligência artificial (IA) e sua aplicação no Azure. Destina-se a indivíduos que buscam conhecimentos básicos em tecnologias de IA na plataforma Azure.");
            $("#txt18").text("Verificar insígnia");
            $("#txt19").text("A certificação Fundamentos de Dados do Microsoft Azure (DP-900) sinaliza uma base sólida em conceitos-chave de dados para o Azure. Ela demonstra proficiência no manuseio de diversos tipos de dados, conhecimento das cargas de trabalho de dados e familiaridade com os serviços do Azure.");
            $("#txt20").text("Verificar insígnia");
            $("#txt21").text("Essas 11 insígnias abrangem tarefas fundamentais, gerenciamento de recursos em nuvem, redes e fundamentos de computação em nuvem. Notavelmente, as conquistas em Fundamentos do GCP destacam um entendimento sólido de infraestrutura, segurança e redes.");
            $("#txt22").text("Verificar insígnias");

            //section "background"
            $("#txt23").text("Educação");
            $("#txt24").text("Engenharia da Computação");
            $("#txt25").text("Tecnologia em Análise e Desenvolvimento de Sistemas");
            $("#txt26").text("Técnico em Mecatrônica");
            $("#txt27").text("Experiência");
            $("#txt28").text("2023 - agora");
            $("#txt29").text("Analista de Transformação Digital");
            $("#txt30").text("Analista em Engenharia de Controle");
            $("#txt31").text("Desenvolvedor de Software");

            //section "languages"
            $("#txtLang").text("Idiomas");
            $("#txt32").text("Inglês");
            if (document.getElementById('txt33')) {
                txt33.innerHTML = 'Tenho orgulho de possuir um <b style="color: #FEBD40; font-weight: bold; font-style: italic;">Certificado em Inglês Avançado (CAE)</b>, credenciado pela <i>Cambridge</i>, o que atesta minha proficiência no idioma.';
            }
            $("#txt34").text("Português");
            $("#txt35").text("Como cidadão brasileiro, o português é minha língua nativa.");
            $("#txt36").text("Espanhol");
            $("#txt37").text("Atualmente, estou envolvido no estudo do espanhol, tendo alcançado um nível de proficiência próximo ao B1. Isso significa que sou capaz de me comunicar de forma eficaz em situações básicas de linguagem.");
            $("#txt38").text("Italiano");
            $("#txt39").text("Estudei italiano por três anos e estou motivado a continuar devido aos membros da família italianos.");

            //section "testimonials"
            $("#txt40").text("Referências");
            $("#txt41").text("Desenvolvedor de Pegasystems na Accenture | PCSA | PCBA");
            $("#txt42").text("Desde o primeiro ano do ensino médio, tenho estudado junto com Leonardo. Ambos fomos monitores voluntários e nos destacamos entre os 5% melhores alunos do ensino médio, e agora, com orgulho, fazemos parte da mesma universidade. Leonardo é, sem dúvida alguma, um aluno extremamente dedicado, brilhante e compassivo. Ele aprende rapidamente e pensa logicamente, sempre buscando oportunidades para sua carreira e utilizando as lições aprendidas com seus erros passados para superar os desafios atuais.");
            $("#txt43").text("Professora e coordenadora do curso de Análise e Desenvolvimento de Sistemas no SENAI");
            $("#txt44").text("Leo era um aluno muito gentil e dedicado, tanto com seus colegas quanto com seus professores. Ele era responsável em suas tarefas e profundamente comprometido e proativo. É uma pessoa muito culta e inteligente, refletindo sobre questões propostas e buscando mediar todos os tipos de debates com argumentos coerentes. É um verdadeiro orgulho poder recomendá-lo como profissional e, acima de tudo, como pessoa.");
            $("#txt45").text("Instrutor no SENAI (Serviço Nacional de Aprendizagem Industrial)");
            $("#txt46").text("Leonardo é inteligente, dedicado, demonstra ter propósito de vida e carreira.");

            //section "contact"
            $("#txt47").text("Me contate");
            $("#txt48").text("Sinta-se livre para me contatar");
            $("#name").attr('placeholder', 'Nome');
            $("#subject").attr('placeholder', 'Assunto');
            $("#message").attr('placeholder', 'Mensagem');
            $("#form-button").text("Enviar");
            $("#txt49").text("ENDEREÇO");
            $("#txt50").text("São Bernardo do Campo, SP - Brasil");
            $("#txt51").text("TELEFONE");

            //footer
            $("#txt52").text("Desenvolvedor de Software");
            $("#txt53").text("Minha paixão transfigurada em código.");

        });
    });

    document.querySelectorAll('.es').forEach(item => {
        item.addEventListener('click', function () {

            changeLanguage('es');
            $("#lang-list").toggleClass("hidden disBlock");

            //menu
            $(".nav-list").find(".nav-item").eq(0).find(".nav-link").text("Sobre");
            $(".nav-list").find(".nav-item").eq(1).find(".nav-link").text("Habilidades");
            $(".nav-list").find(".nav-item").eq(2).find(".nav-link").text("Certificados");
            $(".nav-list").find(".nav-item").eq(3).find(".nav-link").text("Antecedentes");
            $(".nav-list").find(".nav-item").eq(4).find(".nav-link").text("Idiomas");
            $(".nav-list").find(".nav-item").eq(5).find(".nav-link").text("Referencias");
            $(".nav-list").find(".nav-item").eq(6).find(".nav-link").text("Contacto");

            //mobile-menu
            $(".mobile-menu").find(".nav-item").eq(0).find(".nav-link").text("Sobre");
            $(".mobile-menu").find(".nav-item").eq(1).find(".nav-link").text("Habilidades");
            $(".mobile-menu").find(".nav-item").eq(2).find(".nav-link").text("Certificados");
            $(".mobile-menu").find(".nav-item").eq(3).find(".nav-link").text("Antecedentes");
            $(".mobile-menu").find(".nav-item").eq(4).find(".nav-link").text("Idiomas");
            $(".mobile-menu").find(".nav-item").eq(5).find(".nav-link").text("Referencias");
            $(".mobile-menu").find(".nav-item").eq(6).find(".nav-link").text("Contacto");

            //menu language icon
            $(".language-selected").addClass("change-es");
            $(".language-selected").removeClass("change-en");
            $(".language-selected").removeClass("change-br");

            //section "about"
            $("#txt1").text("Yo soy");
            $("#txt2").text("Desarrollador de Software");
            $("#txt3").text("EDAD");
            $("#txt4").text("DIRECCIÓN");
            $("#txt5").text("São Bernardo do Campo, SP - Brasil");
            $("#txt6").text("TELÉFONO");

            //section "download-cv"
            $("#txt7").text("Descargar CV");
            document.getElementById('txt7').href = './assets/Resume - Leonardo Gomiero C Capoccia.pdf';

            //id "introducing"
            $("#introducing").text("¡Hola, Mundo! Mi nombre es Leonardo Capoccia, y soy un desarrollador de software web. He estado trabajando en este campo durante dos años, adquiriendo experiencia en varias empresas donde pude mejorar mis habilidades técnicas en JavaScript, HTML, CSS, SQL y más. En mi rol, he aprendido a traducir las necesidades del cliente en soluciones de software, centrándome en la retroalimentación periódica y prestando mucha atención a los detalles.");

            //section "interests"
            $("#txt8").text("Mis Intereses");
            $("#txt9").text("Tengo un gran interés en las artes marciales; he estado practicando Karate desde 2015. También disfruto correr y asistir al gimnasio regularmente. Los videojuegos, películas y la lectura son algunos de mis pasatiempos. Mi juego favorito es God of War: Ragnarok, y mi libro preferido es \"Cómo ganar amigos e influir sobre las personas\" de Dale Carnegie. Además, a menudo participo en proyectos de desarrollo durante mi tiempo libre como un pasatiempo recreativo.");

            //section "skills-bar"
            $("#txt10").text("Habilidades Profesionales");
            $("#txt11").text("Análisis de Datos");

            //section "project"
            $("#txt12").text("Un Proyecto en Java Puro");
            $("#txt13").text("Durante mi formación en Análisis y Desarrollo de Sistemas, completé un proyecto de 5 semanas para reforzar mis habilidades en Programación Orientada a Objetos. Utilizando Java, simulé batallas de Pokémon de las consolas Gameboy, Nintendo DS y Nintendo Switch. El proyecto destaca mi habilidad en POO, resolución de problemas y aplicación práctica de conceptos teóricos. Estoy emocionado de discutir este proyecto más a fondo en una entrevista.");

            //section "certificates"
            $("#txt14").text("Mis Certificados");
            $("#txt15").text("La insignia AWS Cloud Practitioner es una certificación de nivel básico de Amazon Web Services. Valida el conocimiento básico de los servicios en la nube de AWS, modelos de precios y seguridad.");
            $("#txt16").text("Verificar insignia");
            $("#txt17").text("La certificación Fundamentos de IA de Microsoft (AI-900) es un examen de certificación de Microsoft Azure que cubre conceptos fundamentales de inteligencia artificial (IA) y su aplicación en Azure. Está dirigido a personas que buscan conocimientos básicos en tecnologías de IA en la plataforma Azure.");
            $("#txt18").text("Verificar insignia");
            $("#txt19").text("La certificación Fundamentos de Datos de Microsoft Azure (DP-900) señala una base sólida en conceptos clave de datos para Azure. Demuestra competencia en el manejo de diversos tipos de datos, conocimiento de cargas de trabajo de datos y familiaridad con los servicios de Azure.");
            $("#txt20").text("Verificar insignia");
            $("#txt21").text("Estas 11 insignias cubren tareas fundamentales, gestión de recursos en la nube, redes y fundamentos de la informática en la nube. Especialmente, los logros en Fundamentos de GCP destacan una comprensión sólida de infraestructura, seguridad y redes.");
            $("#txt22").text("Verificar insignias");

            //section "background"
            $("#txt23").text("Educación");
            $("#txt24").text("Ingeniería Informática");
            $("#txt25").text("Tecnología en Análisis y Desarrollo de Sistemas");
            $("#txt26").text("Técnico en Mecatrónica");
            $("#txt27").text("Experiencia");
            $("#txt28").text("2023 - Presente");
            $("#txt29").text("Analista de Transformación Digital");
            $("#txt30").text("Analista en Ingeniería de Control");
            $("#txt31").text("Desarrollador de Software");

            //section "languages"
            $("#txtLang").text("Idiomas");
            $("#txt32").text("Inglés");
            if (document.getElementById('txt33')) {
                txt33.innerHTML = 'Me enorgullezco de tener un <b style="color: #FEBD40; font-weight: bold; font-style: italic;">Certificado en Inglés Avanzado (CAE)</b>, acreditado por <i>Cambridge</i>, que demuestra mi competencia en el idioma.';
            }
            $("#txt34").text("Portugués");
            $("#txt35").text("Como ciudadano brasileño, el portugués es mi lengua materna.");
            $("#txt36").text("Español");
            $("#txt37").text("Actualmente, estoy estudiando español y he alcanzado un nivel de competencia cercano a B1. Esto significa que soy capaz de comunicarme eficazmente en situaciones básicas de lenguaje.");
            $("#txt38").text("Italiano");
            $("#txt39").text("He estudiado italiano durante tres años y estoy motivado para continuar debido a los miembros de mi familia italianos.");

            //section "testimonials"
            $("#txt40").text("Referencias");
            $("#txt41").text("Desarrollador de Pegasystems en Accenture | PCSA | PCBA");
            $("#txt42").text("He estado estudiando junto con Leonardo desde el primer año de la escuela secundaria. Ambos fuimos monitores voluntarios y nos encontrábamos entre los mejores estudiantes destacados del 5% de la escuela secundaria, y ahora con orgullo formamos parte de la misma universidad. Leonardo es, sin lugar a dudas, un estudiante extremadamente dedicado, brillante y compasivo. Aprende rápidamente y piensa lógicamente, siempre buscando oportunidades frescas para su carrera y utilizando las lecciones aprendidas de sus errores pasados para superar los problemas actuales.");
            $("#txt43").text("Profesora y coordinadora del curso de Análisis y Desarrollo de Sistemas en SENAI");
            $("#txt44").text("Leo era un estudiante muy amable y dedicado, tanto con sus compañeros como con sus profesores. Era responsable en sus tareas y profundamente comprometido y proactivo. Es una persona muy culta e inteligente, reflexionando sobre los problemas propuestos y buscando mediar todo tipo de debates con argumentos coherentes. Es un verdadero orgullo poder recomendarlo como profesional y, sobre todo, como persona.");
            $("#txt45").text("Instructor en SENAI (Servicio Nacional de Aprendizaje Industrial)");
            $("#txt46").text("Leonardo es inteligente, dedicado, muestra un propósito de vida y carrera.");

            //section "contact"
            $("#txt47").text("Contáctame");
            $("#txt48").text("No dudes en contactarme");
            $("#name").attr('placeholder', 'Nombre');
            $("#subject").attr('placeholder', 'Asunto');
            $("#message").attr('placeholder', 'Mensaje');
            $("#form-button").text("Enviar");
            $("#txt49").text("DIRECCIÓN");
            $("#txt50").text("São Bernardo do Campo, SP - Brasil");
            $("#txt51").text("TELÉFONO");

            //footer
            $("#txt52").text("Desarrollador de Software");
            $("#txt53").text("Mi pasión transformada en código.");

        });
    });

    document.querySelectorAll('.en').forEach(item => {
        item.addEventListener('click', function () {

            changeLanguage('en');
            $("#lang-list").toggleClass("hidden disBlock");

            //resume
            $(".nav-list").find(".nav-item").eq(0).find(".nav-link").text("About");
            $(".nav-list").find(".nav-item").eq(1).find(".nav-link").text("Skills");
            $(".nav-list").find(".nav-item").eq(2).find(".nav-link").text("Certificates");
            $(".nav-list").find(".nav-item").eq(3).find(".nav-link").text("Background");
            $(".nav-list").find(".nav-item").eq(4).find(".nav-link").text("Languages");
            $(".nav-list").find(".nav-item").eq(5).find(".nav-link").text("References");
            $(".nav-list").find(".nav-item").eq(6).find(".nav-link").text("Contact");

            //mobile-menu
            $(".mobile-menu").find(".nav-item").eq(0).find(".nav-link").text("About");
            $(".mobile-menu").find(".nav-item").eq(1).find(".nav-link").text("Skills");
            $(".mobile-menu").find(".nav-item").eq(2).find(".nav-link").text("Certificates");
            $(".mobile-menu").find(".nav-item").eq(3).find(".nav-link").text("Background");
            $(".mobile-menu").find(".nav-item").eq(4).find(".nav-link").text("Languages");
            $(".mobile-menu").find(".nav-item").eq(5).find(".nav-link").text("References");
            $(".mobile-menu").find(".nav-item").eq(6).find(".nav-link").text("Contact");

            //menu language icon
            $(".language-selected").addClass("change-en");
            $(".language-selected").removeClass("change-es");
            $(".language-selected").removeClass("change-br");

            //section "about"
            $("#txt1").text("I'm");
            $("#txt2").text("Software Developer");
            $("#txt3").text("AGE");
            $("#txt4").text("ADDRESS");
            $("#txt5").text("São Bernardo do Campo, SP - Brazil");
            $("#txt6").text("PHONE");

            //section "download-cv"
            $("#txt7").text("Download CV");
            document.getElementById('txt7').href = './assets/Resume - Leonardo Gomiero C Capoccia.pdf';

            //id "introducing"
            $("#introducing").text("Hello, World! My name is Leonardo Capoccia, and I am a web software developer. I have been working in this field for two years, gaining experience in various companies where I could enhance my technical skills in JavaScript, HTML, CSS, SQL, and more. In my role, I've learned to translate client needs into software solutions, focusing on periodic feedback and paying close attention to detail.");

            //section "interests"
            $("#txt8").text("My Interests");
            $("#txt9").text("I have a keen interest in martial arts; I've been practicing Karate since 2015. I also enjoy running and going to the gym regularly. Video games, movies, and reading are some of my hobbies. My favorite video game is God of War: Ragnarok, and my preferred book is \"How to Win Friends and Influence People\" by Dale Carnegie. Additionally, I often engage in development projects during my free time as a recreational pursuit.");

            //section "skills-bar"
            $("#txt10").text("Professional Skills");
            $("#txt11").text("Data Analysis");

            //section "project"
            $("#txt12").text("A Pure Java Project");
            $("#txt13").text("During my Analysis and Systems Development program, I completed a 5-week project to reinforce Object-Oriented Programming skills. Using Java, I simulated Pokémon battles from Gameboy, Nintendo DS, and Nintendo Switch. The project highlights my proficiency in OOP, problem-solving, and practical application of theoretical concepts. I'm excited to discuss this project further in an interview.");

            //section "certificates"
            $("#txt14").text("My Certificates");
            $("#txt15").text("The AWS Cloud Practitioner badge is an entry-level certification from Amazon Web Services. It validates basic knowledge of AWS Cloud services, pricing models, and security.");
            $("#txt16").text("Verify badge");
            $("#txt17").text("The Microsoft AI Fundamentals certificationThe (AI-900) is a Microsoft Azure certification exam covering fundamental concepts of artificial intelligence (AI) and its application on Azure. It's for individuals seeking basic knowledge in AI technologies on the Azure platform.");
            $("#txt18").text("Verify badge");
            $("#txt19").text("The Microsoft Azure Data Fundamentals certification (DP-900) signals a solid foundation in key data concepts for Azure. It demonstrates proficiency in handling diverse data types, knowledge of data workloads, and familiarity with Azure services.");
            $("#txt20").text("Verify badge");
            $("#txt21").text("These 11 badges cover foundational tasks, cloud resource management, networking, and cloud computing fundamentals. Notably, achievements in GCP Foundations highlight a solid understanding of infrastructure, security, and networking.");
            $("#txt22").text("Verify badges");

            //section "background"
            $("#txt23").text("Education");
            $("#txt24").text("Bachelor's Dergree in Computer Engineering");
            $("#txt25").text("Associate Dergree in Systems Analysis and Development");
            $("#txt26").text("Technical Degree in Mechatronics");
            $("#txt27").text("Experience");
            $("#txt28").text("2023 - now");
            $("#txt29").text("Digital Transformation Analyst");
            $("#txt30").text("Controls Engineering Analyst");
            $("#txt31").text("Software Developer");

            //section "languages"
            $("#txtLang").text("Languages");
            $("#txt32").text("English");
            if (document.getElementById('txt33')) {
                txt33.innerHTML = 'I am proud to hold a <b style="color: #FEBD40; font-weight: bold; font-style: italic;">Certificate in Advanced English</b>, accredited by <i>Cambridge</i>, which serves as a testament to my proficiency in the language.';
            }            
            $("#txt34").text("Portuguese");
            $("#txt35").text("As a Brazilian citizen, Portuguese is my native language.");
            $("#txt36").text("Spanish");
            $("#txt37").text("I am presently engaged in the study of Spanish, having reached a proficiency level approaching B1. This signifies that I am capable of communicating effectively in basic language situations.");
            $("#txt38").text("Italian");
            $("#txt39").text("I've studied Italian for three years and am motivated to continue due to Italian family members.");

            //section "testimonials"
            $("#txt40").text("References");
            $("#txt41").text("Pegasystems Developer At Accenture | PCSA | PCBA");
            $("#txt42").text("I've been studying along with Leonardo since freshman's year in HS. We both were former volunteer monitors and among HS top 5% outstanding students and now are proudly part of the same university. Leonardo is, without any doubt, a strongly dedicated, brilliant, compassionate student. He takes full note from his past mistakes and create strategies to overcome his current issues based on that information. A born quick learner and logic thinker, he aims for a fresh opportunity for his career.");
            $("#txt43").text("Professor And Coordinator Of The Systems Analysis And Development Course At SENAI");
            $("#txt44").text("Leo was a very kind and dedicated student, both towards his peers and teachers. He was responsible in his tasks and deeply committed and proactive. He is a very cultured and intelligent person, reflecting on proposed issues and seeking to mediate all kinds of debates with coherent arguments.<br> It is a true pride to be able to recommend him as a professional and, above all, as a person.");
            $("#txt45").text("Instructor at SENAI (National Service for Industrial Learning)");
            $("#txt46").text("Leonardo is intelligent, dedicated, shows purpose in life and career.");

            //section "contact"
            $("#txt47").text("Contact Me");
            $("#txt48").text("Feel free to contact me");
            $("#name").attr('placeholder', 'Name');
            $("#subject").attr('placeholder', 'Subject');
            $("#message").attr('placeholder', 'Message');
            $("#form-button").text("Send");
            $("#txt49").text("ADDRESS");
            $("#txt50").text("São Bernardo do Campo, SP - Brazil");
            $("#txt51").text("PHONE");

            //footer
            $("#txt52").text("Software Developer");
            $("#txt53").text("My passion transfigured into code.");
        });
    });

    document.querySelectorAll('.language-selected').forEach(item => {
        item.addEventListener('click', function () {
            $("#lang-list").toggleClass("hidden disBlock");
        });
    });

});
