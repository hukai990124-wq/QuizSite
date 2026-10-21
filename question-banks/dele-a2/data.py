# -*- coding: utf-8 -*-
"""DELE A2 官方试卷 · 结构化数据（阅读 Prueba 1 + 写作 Prueba 3）

来源：Instituto Cervantes 公开资料（官方 Modelo 0 样卷）。
听力（Prueba 2）另见 data_audio.py。

题号约定：阅读占 1–READ_N，听力接续 READ_N+1 起（真题里 Prueba 2 是独立编号
1–25，这里为了共用一张答题卡顺延；页面上有说明）。
"""

SETS = []

# ============================================================
# 1) A2 · Modelo 0（2020 版官方样卷）
#    阅读 25 题（4 Tarea）· 听力 25 题（4 Tarea）· 写作 2 题
# ============================================================
SETS.append({
    "slug": "a2-modelo0-2020",
    "no": 1,
    "read_n": 25,
    "title": "官方样卷 Modelo 0（2020 版）",
    "subtitle": "DELE A2 · 现行题型",
    "badge": "官方",
    "tareas": [
        # ---------------- Prueba 1 · Tarea 1（1–5）----------------
        {
            "no": 1, "kind": "mc", "qfrom": 1, "qto": 5,
            "inst": "Usted va a leer el correo electrónico que Marta ha escrito a su amiga "
                    "Carmen. A continuación, conteste a las preguntas (de la 1 a la 5). "
                    "Seleccione la opción correcta (A, B o C).",
            "source": {"kind": "passage", "label": "Correo electrónico",
                       "text": "Hola, Carmen:\n\n"
                               "¿Cómo estás? Hace semanas que no sé nada de ti, quizás te has ido de vacaciones. "
                               "Si no, podemos vernos para tomar un café a la hora que sales de la zapatería, "
                               "y así me cuentas qué tal te va todo.\n\n"
                               "¿Sabes una cosa? Ayer vi a Paula en el autobús. Antes, cuando vivía en el edificio "
                               "de enfrente, la veía mucho pero desde que se fue del barrio no nos vemos nunca. "
                               "Dice que está muy contenta en su nueva casa y que ahora tiene un trabajo mejor en "
                               "la misma empresa. Tiene un sueldo mayor pero, como ahora vive más cerca del trabajo "
                               "y va andando, va a esperar a comprarse un coche nuevo. Está muy contenta.\n\n"
                               "También he visto a Ahmed, que se vuelve pronto a Rabat. Esta semana está trabajando, "
                               "luego se queda aquí durante sus vacaciones, hasta septiembre, y a principios de ese "
                               "mes ya se va. No tiene mucho tiempo pero, si puede, le gustaría quedar con todos los "
                               "amigos antes de irse, para despedirse. Me ha preguntado por ti porque dice que no te "
                               "ve nunca.\n\n"
                               "Yo me voy de vacaciones dentro de dos semanas. Quiero ir unos días a Huelva. Una de "
                               "mis tías ha alquilado allí una casa bastante grande el mes de agosto y nos ha dicho "
                               "a todos los sobrinos que podemos ir una semana. Vamos a ser más de diez, va a ser "
                               "muy divertido. Además, hace mucho tiempo que no estamos todos juntos, creo que desde "
                               "la boda de mi hermana.\n\n"
                               "Por eso me gustaría verte antes de irme. Llámame o escríbeme pronto.\n\n"
                               "Un abrazo,\nMarta"},
            "items": [
                {"n": 1, "stem": "Marta escribe a Carmen para…",
                 "opts": [["A", "preguntarle por la zapatería."],
                          ["B", "decirle que está de vacaciones."],
                          ["C", "quedar para hablar un rato."]], "ans": "C"},
                {"n": 2, "stem": "En el texto se dice que Marta…",
                 "opts": [["A", "vive en una casa nueva."],
                          ["B", "antes era vecina de Paula."],
                          ["C", "está contenta en su barrio."]], "ans": "B"},
                {"n": 3, "stem": "Según el texto, ahora Paula…",
                 "opts": [["A", "gana más dinero que antes."],
                          ["B", "trabaja en otra empresa."],
                          ["C", "necesita un coche nuevo."]], "ans": "A"},
                {"n": 4, "stem": "En el texto se dice que Ahmed…",
                 "opts": [["A", "va a ir de vacaciones a Rabat."],
                          ["B", "trabaja hasta el mes de septiembre."],
                          ["C", "quiere decir adiós a sus amigos."]], "ans": "C"},
                {"n": 5, "stem": "Marta quiere ir a Huelva porque…",
                 "opts": [["A", "su hermana se va a casar allí."],
                          ["B", "su tía la ha invitado a su casa."],
                          ["C", "sus sobrinos van a ir unos días."]], "ans": "B"},
            ],
        },
        # ---------------- Prueba 1 · Tarea 2（6–13：八个独立告示）----------------
        {
            "no": 2, "kind": "mc", "qfrom": 6, "qto": 13,
            "inst": "Usted va a leer ocho anuncios. A continuación, responda a las preguntas "
                    "(de la 6 a la 13). Seleccione la opción correcta (A, B o C).",
            "example": {
                "n": 0, "stem": "El billete de metro…", "ans": "A",
                "why": "La opción correcta es la letra A porque el billete solo vale para el día que se compra.",
                "source": {"kind": "passage", "label": "Ejemplo · TEXTO 0 — PRECIOS Y BILLETES",
                           "text": "Billete Sencillo Metro Zona A: 1,50 - 2 €\n"
                                   "Válido para un viaje entre dos estaciones solo para el día que se compra. "
                                   "Precio mínimo de 1,50 € hasta 5 estaciones; 0,10 € por cada estación más, "
                                   "hasta un máximo de 2 € para viajes de más de 9 estaciones.\n"
                                   "Los niños menores de 4 años viajan sin billete."},
                "opts": [["A", "solo se puede usar un día."],
                         ["B", "tiene un precio único."],
                         ["C", "es necesario para todos."]],
            },
            "items": [
                {"n": 6, "stem": "En el anuncio se dice que…",
                 "source": {"kind": "passage", "label": "TEXTO 1 — ANUNCIOS DE HABITACIONES Y PISOS",
                            "text": "Se necesita compañero de piso para una habitación grande, exterior, con mucha "
                                    "luz en una casa para tres personas con un baño, cocina y comedor grande. Mejor un "
                                    "estudiante, como nosotros. No queremos parejas. Sin mascotas porque ya hay un "
                                    "perro. Ven a verlo. Llama al 984 65 8334 para hablar del precio."},
                 "opts": [["A", "buscan a dos personas para un piso."],
                          ["B", "prefieren compartir con un estudiante."],
                          ["C", "alquilan un piso para tres personas."]], "ans": "B"},
                {"n": 7, "stem": "Según el texto, este mercado ahora tiene…",
                 "source": {"kind": "passage", "label": "TEXTO 2 — MERCADO DE SAN ESTEBAN",
                            "text": "Después del descanso del verano para hacer cambios, abrimos de nuevo el 15 de "
                                    "septiembre con más luz, nueva decoración y nuestras carnicerías, fruterías, "
                                    "pescaderías y tiendas de siempre. E igual de baratas que antes.\n"
                                    "Abrimos más tiempo: de 8:00 a 19:00. Estamos en el número 15 de la calle "
                                    "Embajadores. Metro La Latina. Autobuses 12, 78, 27 y 91."},
                 "opts": [["A", "tiendas nuevas."],
                          ["B", "un horario diferente."],
                          ["C", "mejores precios."]], "ans": "B"},
                {"n": 8, "stem": "En el anuncio se dice que…",
                 "source": {"kind": "passage", "label": "TEXTO 3 — BUSCAMOS PERSONAL",
                            "text": "Cadena de tiendas de camisetas necesita dependientes para varias tiendas de "
                                    "Madrid. Horario de 9 a 15 h todos los días excepto domingos. Para empezar en "
                                    "junio. Entrevistas durante el mes de mayo en las oficinas de la calle Guatemala, "
                                    "10. Llamar al 91 300 00 00 o escribir a deportes@muguruza.es. Damos un curso "
                                    "antes de empezar, pero buscamos personas que ya han trabajado antes en tiendas."},
                 "opts": [["A", "solo llaman a personas con formación."],
                          ["B", "el trabajo es en la calle Guatemala."],
                          ["C", "buscan a personas para vender ropa."]], "ans": "C"},
                {"n": 9, "stem": "En el texto se dice que…",
                 "source": {"kind": "passage", "label": "TEXTO 4 — COMPRE EN GALERÍAS AMARILLAS",
                            "text": "Venga a Galerías Amarillas. Desde hoy hasta el domingo tenemos toda la ropa de "
                                    "hombre un 50% más barata. Y para los más pequeños, hoy tenemos la nueva ropa de "
                                    "verano a un precio muy bueno. Si algo no le gusta, puede cambiarlo por otro "
                                    "producto del mismo precio. Y esta semana, por una compra de 60€, le invitamos a "
                                    "merendar en nuestra cafetería."},
                 "opts": [["A", "puede pagar menos durante varios días."],
                          ["B", "si no quiere su compra, te devuelven el dinero."],
                          ["C", "hay precios especiales en la cafetería."]], "ans": "A"},
                {"n": 10, "stem": "Si necesita un nuevo pasaporte, tiene que…",
                 "source": {"kind": "passage", "label": "TEXTO 5 — INFORMACIÓN PARA PASAPORTES",
                            "text": "Para nuevos pasaportes, horario de 9 a 14 h. Tiene que traer fotocopia de su "
                                    "pasaporte anterior y dos fotografías a color tamaño carnet de hace menos de dos "
                                    "años (en la oficina no hay máquina de fotos), y completar el formulario con sus "
                                    "datos. Puede pedir cita por internet o en la oficina de pasaportes de 8 a 21 h."},
                 "opts": [["A", "llevar con usted dos fotos personales."],
                          ["B", "poner sus datos en la página de internet."],
                          ["C", "darles el pasaporte que usaba antes."]], "ans": "A"},
                {"n": 11, "stem": "Los padres pueden hablar con los profesores…",
                 "source": {"kind": "passage", "label": "TEXTO 6 — HORARIO PARA HABLAR CON LOS PROFESORES",
                            "text": "A continuación pueden ver los horarios de los profesores para hablar con los "
                                    "padres. Les recordamos que para hablar con los profesores tienen que pedirlo por "
                                    "teléfono o correo a Secretaría en su horario habitual de 8 a 11 h.\n"
                                    "1º A — Profesor ALFONSO BERNARDO: jueves de 16 a 17 h.\n"
                                    "1º B — Profesora ROSANA VALLE: jueves de 17 a 18 h.\n"
                                    "1º C — Profesora CAROLINA GONZÁLEZ: lunes de 16 a 17 h."},
                 "opts": [["A", "por la mañana o la tarde."],
                          ["B", "si antes piden cita."],
                          ["C", "por teléfono o correo."]], "ans": "B"},
                {"n": 12, "stem": "En este centro…",
                 "source": {"kind": "passage", "label": "TEXTO 7 — CENTRO DE ATENCIÓN AL INMIGRANTE",
                            "text": "Centro de atención al inmigrante situado en la calle Casino, número 25. Tenemos "
                                    "cursos de español y actividades deportivas, y nuestros profesores pueden ayudarte "
                                    "con los estudios. También tenemos abogados y ayudamos a buscar trabajo. Y si "
                                    "necesitas piso, puedes consultar los anuncios que hay en el pasillo."},
                 "opts": [["A", "se dan clases de lengua."],
                          ["B", "tienen pisos para inmigrantes."],
                          ["C", "necesitan trabajadores."]], "ans": "A"},
                {"n": 13, "stem": "En el texto se dice que…",
                 "source": {"kind": "passage", "label": "TEXTO 8 — NOTICIAS PARA LOS VECINOS DE PARLORA",
                            "text": "El Ayuntamiento de Parlora va a abrir un centro para mayores en la Plaza Mayor. "
                                    "El centro va a tener una ambulancia para poder llevar a los mayores al hospital más "
                                    "cercano, que está a quince kilómetros del pueblo. Los vecinos han pedido un nuevo "
                                    "hospital más cerca del centro de la ciudad, porque es una necesidad y porque estos "
                                    "centros dan trabajo a médicos, enfermeras y personal de atención al público."},
                 "opts": [["A", "ahora hay un hospital nuevo cerca de Parlora."],
                          ["B", "en Parlora van a tener una ambulancia más."],
                          ["C", "se busca personal para un centro de mayores."]], "ans": "B"},
            ],
        },
        # ---------------- Prueba 1 · Tarea 3（14–19：三选一匹配）----------------
        {
            "no": 3, "kind": "match", "qfrom": 14, "qto": 19,
            "inst": "Usted va a leer tres textos de tres españolas que hablan de su experiencia de "
                    "trabajo fuera de España. Relacione las preguntas (14 - 19) con los textos (A, B o C).",
            "pool": [
                ["A", "ALICIA — Hace tres años, mi hermana me habló de unos amigos suyos españoles que estaban "
                      "en Amsterdam y querían una chica para cuidar a sus dos hijos. No lo pensé y me fui a "
                      "Holanda. Me pagaban muy poco pero comía y dormía gratis. Los primeros meses no tenía "
                      "amigos porque no hablaba el idioma, solo un poco de inglés. Por las mañanas iba a clases "
                      "de holandés e inglés y allí conocí a un chico que era profesor de la escuela. Dos años "
                      "más tarde, nos casamos y tuvimos un hijo. Ahora hablo holandés y trabajo en una tienda "
                      "de ropa en Amsterdam."],
                ["B", "EVA — Yo vine a Suecia hace un año. Soy informática y tenía trabajo en España en una "
                      "oficina de ayuda internacional, pero solo para tres meses. Ya llevaba un tiempo pensando "
                      "en salir fuera del país para trabajar pero no sabía dónde. Mi amigo Lucas me ayudó a "
                      "elegir Suecia porque él vivió aquí y me contó mucho de este país. Busqué trabajo por "
                      "internet, pero solo miraba las ofertas donde no pedían sueco porque yo solo hablo inglés. "
                      "Tuve mucha suerte y encontré un trabajo en otra empresa parecida donde hay personas de "
                      "muchos países y solo se habla inglés. Ahora quiero empezar a estudiar sueco."],
                ["C", "SILVIA — Yo estudié para ser cocinera y sabía que quería irme a conocer otros países. "
                      "Quería estudiar inglés y me fui a EE.UU. a una escuela en verano. Fue una buena experiencia "
                      "porque cambió toda mi vida. El padre de un compañero, cuando se enteró de que yo era "
                      "cocinera, me presentó a un amigo suyo que tenía un restaurante muy famoso en Chicago y me "
                      "preguntó si quería trabajar en su restaurante. Fue difícil tener el permiso de trabajo pero "
                      "cuando me lo dieron, empecé a trabajar y aprendí muchísimo. Hoy tengo dos restaurantes en "
                      "EE.UU."],
            ],
            "pool_photos": {"A": "img/modelo0_v2020_t3a.jpg",
                            "B": "img/modelo0_v2020_t3b.jpg",
                            "C": "img/modelo0_v2020_t3c.jpg"},
            "items": [
                {"n": 14, "stem": "¿Quién no necesita hablar el idioma del país en su trabajo?", "ans": "B"},
                {"n": 15, "stem": "¿Quién no tenía que pagar el alojamiento?", "ans": "A"},
                {"n": 16, "stem": "¿Quién tenía un amigo que le habló de ese país?", "ans": "B"},
                {"n": 17, "stem": "¿A quién le presentaron a una persona que le dio trabajo en ese país?", "ans": "C"},
                {"n": 18, "stem": "¿Quién fue a ese país para aprender el idioma?", "ans": "C"},
                {"n": 19, "stem": "¿Quién conoció a su pareja en ese país?", "ans": "A"},
            ],
        },
        # ---------------- Prueba 1 · Tarea 4（20–25）----------------
        {
            "no": 4, "kind": "mc", "qfrom": 20, "qto": 25,
            "inst": "Usted va a leer un texto del blog Historias de Madrid, de Manuel García. A "
                    "continuación, conteste a las preguntas (de la 20 a la 25). Seleccione la opción "
                    "correcta (A, B o C).",
            "source": {"kind": "passage", "label": "Blog «Historias de Madrid» · Manuel García",
                       "text": "Hola. Me llamo Manuel, nací en Pamplona, tengo 30 años y estudié Comunicación "
                               "Audiovisual. Me encanta viajar: he estado en casi toda Europa y también en Perú, "
                               "China, India y Egipto. Creo que todos los lugares son interesantes y podemos aprender "
                               "muchas cosas viajando. Pero leer sobre la historia de una ciudad o ver vídeos por "
                               "internet también puede ser una forma de viajar sin salir de casa.\n\n"
                               "He tenido muchos trabajos diferentes. El último fue en un periódico en internet y me "
                               "gustó mucho este medio. Por eso, cuando llegué a Madrid y conocí tantas historias de "
                               "la ciudad, pensé en hacer el blog Historias de Madrid.\n\n"
                               "Siempre me gusta preparar todos mis viajes, ver páginas web de la ciudad o hablar con "
                               "gente que ha viajado a ese lugar. Pero, cuando llegué a Madrid en 2008, no conocía "
                               "nada de la ciudad. Aquí me compré mis dos primeros libros sobre la ciudad y paseé una "
                               "y otra vez para conocer todos los barrios.\n\n"
                               "Mis ideas vienen de leer y mirar mucho. Además, muchas personas que me han leído me "
                               "escriben y me dan información nueva, me envían fotos y me hablan de los lugares que "
                               "más les gustan a ellos y que quieren compartir con otros amigos del blog.\n\n"
                               "Mucha gente dice que escribir un blog tiene cosas buenas pero también malas, como por "
                               "ejemplo, no tener horarios. En mi caso solo tiene cosas buenas y, de momento, nada "
                               "malo. Gracias a mi blog, he podido escribir un libro y hacer una aplicación móvil, "
                               "algo que, con otro trabajo, es muy difícil. También he estado en lugares a los que es "
                               "muy difícil entrar y he conocido a gente que escribe otros blogs. Y todo sin gastar "
                               "un euro.\n\n"
                               "He escrito un libro sobre historias de Madrid. Un librero de una librería "
                               "especializada en libros sobre Madrid me escribió para decirme que le gustaba mucho mi "
                               "trabajo y me preguntó si quería escribir un libro con historias del blog y otras "
                               "nuevas. Lo hice en dos meses y fue una experiencia maravillosa.\n\n"
                               "Ahora quiero hacer algo nuevo en el blog: hacerlo más moderno, más actual y "
                               "profesional. Antes también escribía en un blog de fútbol con un amigo, pero los dos "
                               "blogs eran demasiado trabajo y no tenía tiempo para todo.\n\n"
                               "Si conoces algún lugar poco famoso de Madrid y quieres compartirlo con todos los "
                               "amigos de esta ciudad, escríbeme. ¡Os espero a todos en mi blog!\n\n"
                               "(Adaptado de www.influenzia.net/entrevista-secretos-de-madrid. España)"},
            "items": [
                {"n": 20, "stem": "Según el texto, Manuel empezó el blog porque…",
                 "opts": [["A", "trabajaba como historiador en Madrid."],
                          ["B", "antes trabajaba escribiendo en internet."],
                          ["C", "no le gustaba su trabajo anterior."]], "ans": "B"},
                {"n": 21, "stem": "En el texto se dice que el autor…",
                 "opts": [["A", "paseaba mucho cuando llegó a Madrid."],
                          ["B", "viajó alguna vez a Madrid antes de vivir allí."],
                          ["C", "leyó libros sobre Madrid antes de llegar."]], "ans": "A"},
                {"n": 22, "stem": "Según Manuel, en su blog…",
                 "opts": [["A", "hace preguntas a la gente que lo lee."],
                          ["B", "pone lo que lee y ve sobre Madrid."],
                          ["C", "escriben también otras personas."]], "ans": "B"},
                {"n": 23, "stem": "En el texto se dice que, gracias al blog, Manuel…",
                 "opts": [["A", "se ha hecho famoso."],
                          ["B", "gana bastante dinero."],
                          ["C", "conoce sitios especiales."]], "ans": "C"},
                {"n": 24, "stem": "Según el texto, Manuel quiere…",
                 "opts": [["A", "hacer cosas diferentes en su blog."],
                          ["B", "escribir un libro sobre otra ciudad."],
                          ["C", "trabajar un tiempo en una librería."]], "ans": "A"},
                {"n": 25, "stem": "En el texto se dice que Manuel…",
                 "opts": [["A", "tiene otro blog con un amigo."],
                          ["B", "está preparando un nuevo libro."],
                          ["C", "antes escribía sobre fútbol."]], "ans": "C"},
            ],
        },
    ],
    # ---------------- Prueba 3 · 写作（2 题，不判分）----------------
    "writing": [
        {"tarea": 1,
         "inst": "Un amigo le escribe para quedar la próxima semana. Conteste a su amigo. En el "
                 "correo tiene que: saludar; decir qué ha hecho esta semana; explicar qué va a hacer "
                 "la próxima semana; decir un día, un lugar y una hora para quedar; hacerle dos "
                 "preguntas y despedirse.",
         "words": "entre 60 y 70 palabras",
         "fields": "¡Hola!\n\nYa es sábado y no he hablado contigo en toda la semana. ¿Qué has hecho? "
                   "¿Mucho trabajo?\n\nTe escribo para ver si nos podemos ver la semana que viene. "
                   "¿Tienes que hacer muchas cosas? ¿Cuándo puedes quedar?\n\nYa me dices. Un abrazo,\nPepe",
         "sample": "Hola, Pepe:\n\n¡Qué alegría recibir tu correo! Esta semana he estado muy ocupado: "
                   "he trabajado mucho y el martes fui al médico. La próxima semana voy a estar más "
                   "tranquilo, porque termino un proyecto el lunes.\n\nPodemos quedar el jueves a las "
                   "siete en la cafetería del centro, la que está al lado del cine. ¿Te parece bien? "
                   "¿Quieres que invite también a Marta? ¿Prefieres el viernes?\n\nDime algo y lo "
                   "organizamos. Un abrazo,\n(Su nombre)"},
        {"tarea": 2,
         "inst": "Elija solo una de las dos opciones. En cada opción tiene que tratar todos los puntos.",
         "words": "entre 70 y 80 palabras",
         "fields": "OPCIÓN 1 — Escriba un texto sobre una fiesta de cumpleaños en la que ha estado. Hable de:\n"
                   "• de quién era el cumpleaños, cuándo y dónde fue, y quiénes estaban allí;\n"
                   "• qué hicieron en la fiesta (qué comieron, qué música pusieron, etc.);\n"
                   "• qué regalo llevó y qué otros regalos hubo;\n"
                   "• por qué le gustó esa fiesta;\n"
                   "• qué hace usted normalmente en sus cumpleaños, y si recuerda alguno.\n\n"
                   "OPCIÓN 2 — Lucía y Olga son dos amigas que hace mucho tiempo que no se ven. Aquí tiene "
                   "algunas fotos de cuando se conocieron y cómo eran antes y son ahora. Usted tiene que "
                   "escribir un texto sobre Lucía y Olga, y decir:\n"
                   "• cómo se conocieron;\n"
                   "• cómo era su vida antes;\n"
                   "• cómo son sus vidas ahora y por qué cree que no se ven.",
         "sample": "OPCIÓN 1 — El verano pasado fui a la fiesta de cumpleaños de mi amiga Laura. Fue en su "
                   "casa, un sábado por la tarde, y estuvimos unos quince amigos. Comimos paella y tarta de "
                   "chocolate, y bailamos música de los años ochenta. Yo le llevé un libro de recetas y sus "
                   "hermanos le regalaron una bicicleta. Me gustó mucho porque hacía tiempo que no veía a "
                   "todos juntos. Normalmente, en mi cumpleaños ceno con mi familia en un restaurante.\n\n"
                   "OPCIÓN 2 — Lucía y Olga se conocieron en 1980, cuando estudiaban en la misma universidad. "
                   "Antes tenían poco dinero, pero salían mucho juntas y compartían un piso pequeño. Ahora "
                   "Lucía es profesora y Olga vive en otra ciudad con su familia. Ya no se ven mucho porque "
                   "las dos trabajan muchas horas y tienen hijos pequeños, aunque hablan por teléfono."},
    ],
})

# ============================================================
# 2) A2 · Modelo 0（旧版官方样卷）
#    题型与现行卷不同：阅读 5 个 Tarea / 30 题；听力 5 个 Tarea / 30 题（见 data_audio.py）
#    题号：阅读 1–30，听力在页面里接续为 31–60（原卷 Prueba 2 独立编号 1–30）
# ============================================================
SETS.append({
    "slug": "a2-modelo0-v2",
    "no": 2,
    "title": "官方样卷 Modelo 0（旧版）",
    "subtitle": "DELE A2 · Modelo 00, Versión 2",
    "badge": "官方",
    "read_n": 30,
    "tareas": [
        # ---------------- Tarea 1（1–7）：7 个表述 ↔ 11 段短文 A–K ----------------
        {
            "no": 1, "kind": "match", "qfrom": 1, "qto": 7,
            "inst": "Usted va a leer siete enunciados y once textos (A - K). Seleccione el texto que "
                    "corresponde a cada enunciado (del 1 al 7). Hay once textos, incluido el ejemplo. "
                    "Seleccione siete.",
            "example": {"n": 0, "stem": "Se han trasladado de piso.", "ans": "A",
                        "why": "«las consultas del dentista se han trasladado a la tercera planta»."},
            "pool": [
                ["A", "CENTRO DE SALUD SANTIAGO\nINFORMACIÓN GENERAL PARA LOS PACIENTES\n\n"
                      "Se comunica que las consultas del dentista se han trasladado a la tercera planta, "
                      "segunda puerta a la izquierda."],
                ["B", "www.muyimportante/revista.com\n\nCuando se tiene gripe:\n"
                      "• quedarse en casa;\n"
                      "• estar en la cama todo el tiempo posible;\n"
                      "• tomar muchos líquidos, como sopas, zumos de frutas y verduras para no "
                      "deshidratarse (especialmente de limón, naranja y zanahoria porque tienen "
                      "vitaminas y minerales)."],
                ["C", "Chocosueños\n\nPara celebraciones y fiestas.\n\n"
                      "Vale descuento del 10% en bombones y chocolates por compras superiores a 20 euros.\n\n"
                      "Estamos en la calle Rúa Antigua, 2.\n\nOferta válida del 1 al 15 de febrero."],
                ["D", "www.electrodomesticosbaratos.com\nSu tienda online\n\n"
                      "Más de cuarenta años de experiencia en la venta de electrodomésticos (neveras, "
                      "lavadoras, microondas…)\n"
                      "Envío gratis para pedidos dentro de la región.\n"
                      "Otras direcciones: consultar precio en el 96 123 22 44 o en nuestra web."],
                ["E", "Cocina rápida y sencilla.\n\nAtún con naranja\n\n"
                      "✓ Poner las patatas en agua caliente durante 10 minutos y meterlas después en "
                      "nevera para enfriar.\n"
                      "✓ Cortar la lechuga, el tomate, la cebolla y el ajo.\n"
                      "✓ Pelar la naranja y cortarla.\n"
                      "✓ Mezclarlo todo y poner encima el atún."],
                ["F", "Clases de inglés online.\n\n"
                      "Para: estudiantes de secundaria y universitarios.\nPara empresas.\n"
                      "Nuestras clases particulares online se adaptan a los niveles oficiales europeos "
                      "(A1_C2).\nSon totalmente personalizadas.\n"
                      "Ofrecemos una clase gratuita, solo envía un correo con el horario elegido.\n"
                      "SkypeID: clasedeinglesskype."],
                ["G", "¿Quiere tener un móvil de última generación?\n¿Cómo puede tenerlo?\n"
                      "¡Participe en nuestro juego!\n"
                      "Solo debe contestar a unas preguntas sobre salud y alimentación.\n"
                      "Ahora llevar una vida SANA, tiene REGALO.\nwww.revistasalud.com\n"
                      "Fantásticos regalos todos los meses."],
                ["H", "www.recetasusuarios.com\n\nPollo con limón\n\n"
                      "- Echar sal al pollo y cubrirlo con zumo de limón. Esperar media hora.\n"
                      "- Poner una cebolla cortada en una sartén con un poco de aceite durante diez minutos.\n"
                      "- Meter el pollo en la sartén y cocinar durante 15 minutos lentamente."],
                ["I", "Juguetodos\n\n¡Ahora puedes ser el primero en informarte de nuestras ofertas!\n"
                      "Si quieres descubrir todas nuestras novedades, solo tienes que enviar tu correo "
                      "electrónico a esta dirección: www.juguetodos.com\n"
                      "Recibirás la revista de nuestra tienda cada mes."],
                ["J", "Publicidad\n\nFelicidades\n\n"
                      "Felicita a tus familiares y amigos de manera gratuita en el periódico Mallorquín. "
                      "Envíanos la foto de la persona a la que quieres felicitar. Entra en nuestra web "
                      "www.mallorquin.es, completa un breve formulario y envíalo quince días antes de la "
                      "fecha de celebración."],
                ["K", "www.anuncios/clases-online\n\nPublicar anuncio.\n\n"
                      "Se dan clases de Matemáticas de Secundaria por plataforma online.\n"
                      "Se pueden colgar los deberes, escribir comentarios y, además, se graba la clase "
                      "para poder verla de nuevo si lo necesita.\n"
                      "Clases individuales o en grupo.\nSe ofrece una clase de prueba gratuita."],
            ],
            "items": [
                {"n": 1, "stem": "Hay una fecha límite para enviar la información.", "ans": "J"},
                {"n": 2, "stem": "Durante unos días, le hacen un descuento en su compra.", "ans": "C"},
                {"n": 3, "stem": "Le dicen que hacer esto es bueno para la salud.", "ans": "B"},
                {"n": 4, "stem": "Le informan de que puede ver la clase otra vez.", "ans": "K"},
                {"n": 5, "stem": "En la receta de este plato se han usado varias verduras.", "ans": "E"},
                {"n": 6, "stem": "Si participa en el concurso, puede ganar un premio.", "ans": "G"},
                {"n": 7, "stem": "Le envían información de los productos que son más baratos.", "ans": "I"},
            ],
        },
        # ---------------- Tarea 2（8–12）：Pedro 写给 Virginia 的邮件 ----------------
        {
            "no": 2, "kind": "mc", "qfrom": 8, "qto": 12,
            "inst": "Usted va a leer el correo electrónico que Pedro ha escrito a su amiga Virginia. "
                    "A continuación, conteste a las preguntas (de la 8 a la 12). Seleccione la opción "
                    "correcta (A, B o C).",
            "source": {"kind": "passage", "label": "Correo electrónico",
                       "text": "Hola Virginia:\n\n"
                               "¿Qué tal estás? Hace mucho tiempo que no nos vemos. Lo siento, no te he "
                               "escrito antes porque este mes he estado muy ocupado. Tenía que estudiar "
                               "porque he hecho ahora todos mis exámenes finales. ¿Tú qué tal en tu nuevo "
                               "trabajo?\n\n"
                               "Te escribo porque me voy de vacaciones el próximo mes a México y me ha "
                               "dicho Gonzalo que tú has estado allí este año. Me gustaría hablar contigo "
                               "porque no conozco nada de este país, y mi hermana, que viene conmigo, "
                               "tampoco.\n\n"
                               "Me voy a quedar en el hotel Marina Club en Cancún. ¿Lo conoces? He visto "
                               "las fotos en Internet y las habitaciones están muy bien. Me he decidido "
                               "por este porque está justo enfrente de la playa y tiene buena fama. "
                               "¿Puedes aconsejarme algún lugar interesante para visitar? Es que quiero "
                               "hacer algunas excursiones. También quería probar la comida típica de "
                               "allí, ¿conoces algún restaurante bueno?\n\n"
                               "Por cierto, también he comprado el billete de avión, es para el día "
                               "veinte. A mí no me gusta mucho esa fecha porque es mi cumpleaños y, "
                               "además, tengo vacaciones del quince al treinta, pero encontré una buena "
                               "oferta en vuelos para ese día y lo compré.\n\n"
                               "Como puedes ver, lo tengo casi todo organizado. Bueno, la maleta todavía "
                               "no porque quiero comprarme unos pantalones y unas camisetas de verano. "
                               "¿Qué te parece si quedamos el sábado o el domingo y hablamos con calma? "
                               "Se me olvidaba, te voy a mandar por WhatsApp las fotos del hotel para "
                               "ver si lo conoces.\n\nUn abrazo,\nPedro"},
            "items": [
                {"n": 8, "stem": "Pedro ha escrito a Virginia para…",
                 "opts": [["A", "contarle sus vacaciones."], ["B", "pedirle información."],
                          ["C", "invitarla a un viaje."]], "ans": "B"},
                {"n": 9, "stem": "En el texto se dice que Pedro…",
                 "opts": [["A", "quiere ir a México con Gonzalo."],
                          ["B", "tiene sus exámenes el próximo mes."],
                          ["C", "se va de vacaciones con su hermana."]], "ans": "C"},
                {"n": 10, "stem": "Según el texto, el hotel Marina Club…",
                 "opts": [["A", "está al lado del mar."], ["B", "organiza excursiones."],
                          ["C", "es famoso por su cocina."]], "ans": "A"},
                {"n": 11, "stem": "Las vacaciones de Pedro empiezan el día…",
                 "opts": [["A", "15."], ["B", "20."], ["C", "30."]], "ans": "A"},
                {"n": 12, "stem": "Pedro le propone a Virginia…",
                 "opts": [["A", "ir con él de compras."], ["B", "verse el fin de semana."],
                          ["C", "hacer una foto del hotel."]], "ans": "B"},
            ],
        },
        # ---------------- Tarea 3（13–18）：6 则通告，各配 3 选 1 ----------------
        {
            "no": 3, "kind": "mc", "qfrom": 13, "qto": 18,
            "inst": "Usted va a leer seis anuncios. A continuación, responda a las preguntas (de la 13 "
                    "a la 18). Seleccione la opción correcta (A, B o C).",
            "example": {"n": 0, "stem": "El taller de cocina…",
                        "opts": [["A", "cuesta 5 euros para los mayores de 10 años."],
                                 ["B", "está dirigido a estudiantes de hostelería."],
                                 ["C", "admite a 18 personas como máximo."]],
                        "ans": "A",
                        "why": "«Precio: 5 euros por persona. Niños menores de 10 años: entrada gratuita.»",
                        "source": {"kind": "notice", "label": "TEXTO 0",
                                   "text": "TALLER DE COCINA\n\n"
                                           "Este viernes, día 20, se celebra un taller de cocina en la "
                                           "escuela de hostelería. El objetivo de este es aprender a cocinar "
                                           "comida sana. Los estudiantes de la escuela de hostelería serán "
                                           "los encargados de enseñar diferentes recetas. Pueden participar "
                                           "personas de todas las edades.\n"
                                           "Matrícula: antes del día 18. Plazas limitadas.\n"
                                           "Precio: 5 euros por persona. Niños menores de 10 años: entrada "
                                           "gratuita."}},
            "items": [
                {"n": 13, "stem": "En este anuncio se dice que…",
                 "opts": [["A", "el precio incluye la comida."],
                          ["B", "el viaje para grupos es más barato."],
                          ["C", "el barco llega a Sevilla a las 20 h."]], "ans": "A",
                 "source": {"kind": "notice", "label": "TEXTO 1",
                            "text": "Sevilla - Sanlúcar de Barrameda (Cádiz)\n\n"
                                    "Excursión en barco por el río Guadalquivir\n\n"
                                    "De mayo a octubre. Sábados y domingos.\n"
                                    "Salida del barco a las 8.30 h desde la estación marítima de la Torre "
                                    "del Oro y regreso en autobús a las 20 h.\n"
                                    "Precios: 20 euros (niños), 25 euros (mayores de 65 años) y 30 euros "
                                    "(adultos). Incluido menú del día en el restaurante El Sur, el seguro "
                                    "y el IVA.\n"
                                    "Grupos: reserva del barco cualquier día del año. Información en la "
                                    "estación marítima."}},
                {"n": 14, "stem": "Según el texto, en la Feria de Guadalajara…",
                 "opts": [["A", "hubo un aumento en el número de visitantes."],
                          ["B", "se presentó un libro de un escritor francés."],
                          ["C", "participaron varias editoriales de Israel."]], "ans": "A",
                 "source": {"kind": "notice", "label": "TEXTO 2",
                            "text": "Estado de Jalisco\n\nFeria Internacional del Libro (FIL)\n"
                                    "Guadalajara (México)\n\n"
                                    "Ayer se inauguró una nueva edición de la FIL, el evento literario más "
                                    "importante en lengua española de Latinoamérica, con la entrega del "
                                    "premio de Literatura en Lenguas Romances al poeta francés Ives "
                                    "Bonnefoy. Un año más, fue un éxito de público, 15% más que el año "
                                    "pasado, y aumentó el número de editoriales, que venían de 42 países. "
                                    "La feria cerró con un acto cultural organizado por el país invitado, "
                                    "Israel."}},
                {"n": 15, "stem": "En este anuncio se dice que…",
                 "opts": [["A", "el concurso se celebra en el teatro de la universidad."],
                          ["B", "el tiempo de actuación de cada grupo es limitado."],
                          ["C", "el público puede elegir a los seis mejores grupos."]], "ans": "B",
                 "source": {"kind": "notice", "label": "TEXTO 3",
                            "text": "Actualidad universitaria\n\n"
                                    "La universidad ha organizado el segundo concurso de grupos musicales. "
                                    "Para participar hay que enviar un correo electrónico a "
                                    "gruposmusicales@universidad.es con el nombre del grupo y el enlace a "
                                    "dos vídeos publicados en Youtube con las canciones del grupo. Un "
                                    "jurado será el responsable de seleccionar a seis grupos que tocarán "
                                    "durante 45 minutos en el teatro Falla y, finalmente, el público "
                                    "presente en el teatro seleccionará a los dos mejores."}},
                {"n": 16, "stem": "En el texto se dice que el proyecto Microteatro…",
                 "opts": [["A", "es la primera vez que se organiza en la ciudad."],
                          ["B", "se va a representar en la asociación de vecinos."],
                          ["C", "cuenta con la participación de actores famosos."]], "ans": "C",
                 "source": {"kind": "notice", "label": "TEXTO 4",
                            "text": "Asociación vecinal Buenavista presenta:\n\nMicroteatro\n\n"
                                    "Un año más, la asociación de vecinos Buenavista ha presentado en "
                                    "nuestra ciudad Microteatro, un proyecto que ya está teniendo éxito en "
                                    "algunas ciudades del país. Un domingo al mes se pueden ver varias "
                                    "representaciones teatrales en las tiendas de las calles del barrio. "
                                    "En las actuaciones participan actores locales y otros conocidos por "
                                    "su participación en series de televisión muy populares. Precios: 3 y "
                                    "4 euros. Plazas limitadas."}},
                {"n": 17, "stem": "La programación de la biblioteca municipal incluye…",
                 "opts": [["A", "una exposición de un artista argentino."],
                          ["B", "una actividad para jóvenes cada semana."],
                          ["C", "una visita cultural en el mes de marzo."]], "ans": "C",
                 "source": {"kind": "notice", "label": "TEXTO 5",
                            "text": "Área de cultura\nBiblioteca Municipal Clara Campoamor\n\n"
                                    "MARZO · PROGRAMACIÓN\n\n"
                                    "• Espectáculos teatrales (viernes y sábados por la tarde).\n"
                                    "• Exposición fotográfica de Alfredo Cortés «Arte y cine».\n"
                                    "• Concierto del grupo argentino Somos del Sur.\n"
                                    "• Club de idiomas para jóvenes cada quince días.\n"
                                    "• Club de lectura para niños los martes y sábados.\n"
                                    "• Excursión a Toledo para ver la exposición dedicada al gran pintor "
                                    "el Greco.\n\nMás información en www.bibliotecasmunicipales.org."}},
                {"n": 18, "stem": "El torneo de minitenis de Segovia…",
                 "opts": [["A", "se celebra en febrero."], ["B", "tiene treinta jugadores."],
                          ["C", "empieza a las cuatro de la tarde."]], "ans": "B",
                 "source": {"kind": "notice", "label": "TEXTO 6",
                            "text": "Deportes\n\nTORNEO MINITENIS DE SEGOVIA\n\n"
                                    "Son ya treinta jóvenes tenistas los que se han matriculado en el torneo "
                                    "de tenis de Segovia.\n"
                                    "Para poder revisar la inscripción, podéis entrar en el documento "
                                    "actualizado a las nueve de la mañana: www.inscritosegovia.es\n"
                                    "El plazo está abierto hasta el 28 de febrero y se puede realizar en "
                                    "www.mptenis.es.\n"
                                    "El torneo será el sábado, 4 de mayo a las 18 h. y se cita a todos los "
                                    "jugadores a las 16 h."}},
            ],
        },
        # ---------------- Tarea 4（19–24）：6 个表述 ↔ 10 则房屋广告 A–J ----------------
        {
            "no": 4, "kind": "match", "qfrom": 19, "qto": 24,
            "inst": "Usted va a leer seis enunciados y diez textos con información sobre casas para "
                    "alquilar o comprar. A continuación, seleccione el texto (A - J) que corresponde a "
                    "cada enunciado (del 19 al 24). Hay diez textos, incluido el ejemplo. Seleccione seis.",
            "example": {"n": 0, "stem": "Hay un lugar para guardar el coche.", "ans": "A",
                        "why": "«Garaje de dos plazas.»"},
            "pool": [
                ["A", "ANUNCIOS DE VIVIENDAS\n\nSe alquila piso céntrico. Situado en una zona comercial. "
                      "Exterior. 3 dormitorios. Amueblado. Garaje de dos plazas. Buen estado. "
                      "Precio: 700 euros al mes. Correo electrónico: Fernando@gmail.com"],
                ["B", "Se vende piso de dos dormitorios, salón, baño y cocina amueblada con todos los "
                      "electrodomésticos (nevera, cocina, microondas, lavadora y secadora). Está a las "
                      "afueras, en una zona tranquila y al lado del campo de fútbol. Interesados llamar "
                      "al 609 77 12 34."],
                ["C", "Se alquila piso para estudiantes. Tres dormitorios, salón, cocina y dos baños. "
                      "Calefacción central y gastos de comunidad incluidos en el precio del alquiler. "
                      "Próximo al campus universitario. No se admiten animales. "
                      "Contacto: miguelangel@yahoo.es"],
                ["D", "Alquilo casa de dos plantas completamente reformada. Tiene un jardín con una "
                      "casita para el perro, piscina, cuatro habitaciones, dos baños, una cocina grande, "
                      "un salón, un comedor y garaje. En el precio no se incluyen los gastos generales. "
                      "Más información: juanjope@mail.com."],
                ["E", "Se vende ático de 200 m². Muy céntrico, pero en una zona tranquila, con buenas "
                      "vistas al Jardín Botánico Nacional y cerca de varios parques infantiles. Tiene dos "
                      "dormitorios, un estudio, cocina completa, un baño grande y una gran terraza. "
                      "Contacto: marialopez@gmail.com"],
                ["F", "Alquilo apartamento vacío completamente nuevo en la urbanización Atocha, a cinco "
                      "minutos del centro comercial Los Naranjos y a quince del centro en coche. Zona "
                      "tranquila. Tiene un dormitorio, salón con cocina en la misma habitación, baño y "
                      "plaza de garaje. Contacto: vanesah@yahoo.es"],
                ["G", "Vendo piso en la zona norte de la ciudad. Tiene cuatro habitaciones, salón, "
                      "comedor, dos baños y cocina equipada. Buena comunicación con el centro: líneas 4, "
                      "7 y 10 de autobús y líneas 2 y 3 de metro. Información en la Agencia López, calle "
                      "Asturias 20, teléfono: 91 456 89 21."],
                ["H", "Se vende apartamento céntrico a ocho minutos a pie de la Plaza Mayor. Un "
                      "dormitorio con acceso a una gran terraza, salón amueblado, cocina y baño. Precio "
                      "negociable. Para verlo, llamar de cuatro a siete de la tarde al 603 44 22 11 y "
                      "preguntar por Carmen."],
                ["I", "Se alquila piso nuevo en el centro. Es exterior y está vacío. Tiene 6 dormitorios, "
                      "cocina luminosa, comedor, tres baños y un garaje con mucho espacio. Perfecto para "
                      "familias grandes. Teléfono de contacto 678 99 00 12, preguntar por Andrea García."],
                ["J", "Se alquila apartamento de nueva construcción. Situado en la zona centro, tiene un "
                      "dormitorio, cocina, baño y un salón con una gran terraza. Todo exterior. Gastos de "
                      "luz, agua, calefacción y Wifi incluidos en el precio. Llamar al 608 99 76 54 y "
                      "preguntar por Ángel."],
            ],
            "items": [
                {"n": 19, "stem": "La conexión a Internet está incluida en el precio.", "ans": "J"},
                {"n": 20, "stem": "El barrio tiene un buen sistema de transportes públicos.", "ans": "G"},
                {"n": 21, "stem": "Le informan de que puede tener animales en la casa.", "ans": "D"},
                {"n": 22, "stem": "Para ver esta casa, tiene que llamar por la tarde.", "ans": "H"},
                {"n": 23, "stem": "La casa está cerca de unas instalaciones deportivas.", "ans": "B"},
                {"n": 24, "stem": "Se dice que hay grandes zonas verdes al lado de la casa.", "ans": "E"},
            ],
        },
        # ---------------- Tarea 5（25–30）：一篇长文 + 6 题 ----------------
        {
            "no": 5, "kind": "mc", "qfrom": 25, "qto": 30,
            "inst": "Usted va a leer un texto sobre el intercambio de casas. A continuación, conteste a "
                    "las preguntas (de la 25 a la 30). Seleccione la opción correcta (A, B o C).",
            "source": {"kind": "passage", "label": "EL INTERCAMBIO DE CASAS",
                       "text": "El intercambio de casas para el verano lo inventaron los anglosajones. "
                               "Esta opción comenzó en el mundo académico, cuando los profesores tenían "
                               "que cambiar de universidad. Los españoles somos relativamente nuevos en "
                               "esto, pero esta práctica cada día tiene más éxito y es más común. Nuestro "
                               "país es ya el tercero en número de familias que eligen esta modalidad de "
                               "vacaciones. Lo más buscado por un español suele ser un país europeo, pero "
                               "están subiendo otros como México o Canadá.\n"
                               "La mayoría de los que hacen intercambio son familias, un 35%. Un 30% son "
                               "parejas, mientras que un 15% son personas que viajan solas, un 12% son "
                               "grupos de amigos, y un 8% jubilados. El primer punto positivo del "
                               "intercambio de casas es el ahorro de dinero. En segundo lugar, la "
                               "posibilidad de estar en un lugar que tiene más espacio y, finalmente, la "
                               "opción de quedarse más días en el lugar que se quiere visitar y hacer "
                               "nuevos amigos.\n"
                               "Las nuevas tecnologías han popularizado esta opción y cada día aparecen "
                               "más sitios web. Para obtener información hay que estar registrado y pagar "
                               "una cantidad al año. Por ejemplo, estar registrado en "
                               "www.intercambiomicasa.com cuesta unos cien euros el primer año y tiene "
                               "precios especiales si se continúa durante dos o tres años. El pago da "
                               "derecho a contactar con otros socios, a modificar la información y a "
                               "recibir una revista gratuita mensual.\n"
                               "Para intercambiar la casa es necesario seguir unas recomendaciones como "
                               "colgar buenas fotografías, describir la casa y su situación (barrio, "
                               "localización, transportes…). Algunos propietarios hacen un seguro de la "
                               "casa, pero no es necesario, otros prefieren dar las llaves en mano a los "
                               "visitantes y a otros les gusta dejar información de las actividades "
                               "culturales o suelen dar la dirección de familiares y amigos.\n"
                               "Las páginas web de intercambio publican miles de comentarios. Por "
                               "ejemplo, Fernando comenta que a él le atraía mucho esta idea, pero a su "
                               "mujer no porque ella pensaba que no era seguro. Un día, Fernando habló "
                               "con un compañero de trabajo que solía hacerlo y le convenció. Por eso, "
                               "intercambió su casa, se fue con su familia a Italia y la experiencia fue "
                               "tan buena que quiere volver a repetirla.\n"
                               "El intercambio de casas no es el único en Internet, hay otros como "
                               "ofrecer una cama o un sofá o compartir coche. Ahora, lo que está teniendo "
                               "más éxito es intercambiar plazas de garaje solo para aparcar el coche.\n\n"
                               "(Información extraída de www.consumocolaborativo.com y de "
                               "http://elviajero.elpais.com)"},
            "items": [
                {"n": 25, "stem": "Según el texto, el intercambio de casas…",
                 "opts": [["A", "es cada vez más habitual en España."],
                          ["B", "es un invento de un grupo de profesores."],
                          ["C", "es una modalidad de vacaciones popular en Europa."]], "ans": "A"},
                {"n": 26, "stem": "Para algunos, lo más interesante del intercambio es que…",
                 "opts": [["A", "se conoce a otras personas."], ["B", "se gasta menos dinero."],
                          ["C", "se puede estar más días de vacaciones."]], "ans": "B"},
                {"n": 27, "stem": "La página web www.intercambiomicasa.com…",
                 "opts": [["A", "es gratuita para los usuarios."], ["B", "publica una revista cada mes."],
                          ["C", "hace un descuento el primer año."]], "ans": "B"},
                {"n": 28, "stem": "Según el texto, para intercambiar una casa…",
                 "opts": [["A", "se debe hacer un seguro."],
                          ["B", "es recomendable dar las llaves en mano."],
                          ["C", "hay que dar información completa de la vivienda."]], "ans": "C"},
                {"n": 29, "stem": "Fernando comenta en la web que…",
                 "opts": [["A", "a su familia le gustó la experiencia."],
                          ["B", "le parecía peligroso intercambiar su casa."],
                          ["C", "encontró la casa por un compañero de trabajo."]], "ans": "A"},
                {"n": 30, "stem": "Según el texto, está siendo cada vez más popular en Internet…",
                 "opts": [["A", "ofrecer un sofá para dormir."], ["B", "compartir el coche para viajar."],
                          ["C", "dejar el garaje de la casa."]], "ans": "C"},
            ],
        },
    ],
    "writing": [
        {"tarea": 1,
         "inst": "Usted está buscando personas para practicar un deporte. Escriba un mensaje en el foro "
                 "del Servicio de Deportes de su universidad. En él debe:\n"
                 "• decir qué deporte practica usted;\n"
                 "• explicar por qué quiere encontrar a alguien;\n"
                 "• contar dónde y cuándo lo quiere practicar;\n"
                 "• informar de cómo pueden verse.",
         "words": "entre 30 y 40 palabras",
         "sample": "Hola:\n\nMe llamo Ana y me gusta mucho el tenis. Busco a alguien para jugar porque "
                   "mis amigos no tienen tiempo. Podemos jugar los sábados por la mañana en las pistas "
                   "de la universidad. Si te interesa, escríbeme a ana@correo.com."},
        {"tarea": 2,
         "inst": "Usted ha cambiado de trabajo esta semana. Escriba un correo electrónico a un/a "
                 "amigo/a. En él debe:\n"
                 "• decir cuál es su nuevo trabajo y dónde trabaja;\n"
                 "• describir el lugar de trabajo;\n"
                 "• explicar por qué ha cambiado de trabajo;\n"
                 "• contar qué tiene que hacer en su nuevo trabajo.\n\nNo olvide saludar y despedirse.",
         "words": "entre 70 y 80 palabras",
         "sample": "Hola, Marta:\n\n¿Cómo estás? Te escribo para contarte una noticia: esta semana he "
                   "empezado un trabajo nuevo. Soy recepcionista en un hotel del centro.\n\nEl hotel es "
                   "moderno y muy grande, y mis compañeros son simpáticos. He cambiado porque en mi "
                   "trabajo anterior trabajaba muchas horas y ganaba poco.\n\nAhora tengo que atender a "
                   "los clientes, contestar el teléfono y hacer las reservas. Me gusta mucho.\n\n"
                   "Un abrazo,\nLucía"},
        {"tarea": 3,
         "inst": "Usted tiene que escribir una redacción sobre un viaje que hizo en sus últimas "
                 "vacaciones.\n\nUsted tiene que comentar:\n"
                 "• a qué lugar fue, cuándo y con quién;\n"
                 "• por qué fue allí;\n"
                 "• qué fue lo que más/menos le gustó;\n"
                 "• dónde le gustaría ir la próxima vez y por qué.",
         "words": "entre 70 y 80 palabras",
         "sample": "El verano pasado viajé a Asturias con dos amigos. Fuimos en agosto, durante una "
                   "semana.\n\nElegimos ese lugar porque queríamos estar en la montaña y ver el mar, y "
                   "porque un amigo nos habló muy bien del norte.\n\nLo que más me gustó fue la comida "
                   "y los paisajes verdes. Lo que menos, que llovió casi todos los días.\n\nLa próxima "
                   "vez me gustaría ir a Japón porque quiero conocer su cultura y probar su comida."},
    ],
})
