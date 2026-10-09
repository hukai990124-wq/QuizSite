# -*- coding: utf-8 -*-
"""DELE A2 · 听力（Prueba 2）结构化数据。

数据来源与音频：
  · 2020 版样卷 —— 题目/答案/原文取自官方 Modelo 0；音频为官方 audios-A2.zip
                   真人录音（已 320kbps → 48kbps 单声道转码）
  · 旧版样卷   —— 官方 PDF 自带原文与答案；官方未发录音，音频按原文用神经语音合成

题号在每个 Prueba 内独立编号 1–25（页面渲染时接续到阅读之后）。
"""


def _ex(slug, letters):
    """示例题的图片选项路径。"""
    return {L: "img/audio/%s_ex0_%s.jpg" % (slug, L) for L in letters}


def _q(slug, n, letters):
    """按题号取图片选项路径。"""
    return {L: "img/audio/%s_q%d_%s.jpg" % (slug, n, L) for L in letters}


def _pool(slug, letters):
    """图片卡片池（听力 Tarea 5）。"""
    return {L: "img/audio/%s_pool_%s.jpg" % (slug, L) for L in letters}


def _aud(slug, tarea, tag):
    return "audio/%s_t%d_%s.mp3" % (slug, tarea, tag)


def _tags(slug, tarea, tags):
    """按「分段标签」列出一组音频路径（顺序 = 题目顺序）。"""
    return [_aud(slug, tarea, t) for t in tags]


LISTENING = {}

# ---------------------------------------------------------------- 2020 版样卷
LISTENING["a2-modelo0-2020"] = {
    "dur": "40 分钟",
    "audio_note": "官方真人录音（Instituto Cervantes 公开音频包）",
    "tareas": [
        # ---------------- Tarea 1（1–6）：六段对话，看图选答案 ----------------
        {
            "no": 1, "kind": "mc", "qfrom": 1, "qto": 6,
            "imgbase": "m0-2020", "letters": "ABC",
            "audio": "audio/m0-2020_t1.mp3",
            "inst": "Usted va a escuchar seis conversaciones. Escuchará cada conversación dos veces. "
                    "Después, tiene que contestar a las preguntas (1 - 6). Seleccione la opción correcta "
                    "(A, B o C).",
            "example": {"n": 0, "stem": "¿Qué hay en las habitaciones del hotel?", "ans": "C",
                        "why": "En las habitaciones del hotel hay champú.",
                        "imgs": _ex("m0-2020", "ABC")},
            "items": [
                {"n": 1, "stem": "¿Qué tiene ya el hombre?", "ans": "A"},
                {"n": 2, "stem": "¿Qué le duele al hombre?", "ans": "C"},
                {"n": 3, "stem": "¿Qué compra la mujer?", "ans": "B"},
                {"n": 4, "stem": "¿Qué ha hecho ya la mujer en la ciudad?", "ans": "B"},
                {"n": 5, "stem": "¿Qué necesita la mujer?", "ans": "C"},
                {"n": 6, "stem": "¿Dónde trabaja ahora el hombre?", "ans": "C"},
            ],
        },
        # ---------------- Tarea 2（7–12）：六则广播/告示 ----------------
        {
            "no": 2, "kind": "mc", "qfrom": 7, "qto": 12,
            "audio": "audio/m0-2020_t2.mp3",
            "inst": "Usted va a escuchar seis anuncios o fragmentos de un programa de radio y tiene que "
                    "responder a seis preguntas. Cada audición se repite dos veces. Lea las preguntas "
                    "(de la 7 a la 12) y seleccione la opción correcta (A, B o C).",
            "example": {"n": 0, "stem": "Según la audición, Pablo Molina…", "ans": "A",
                        "why": "La opción correcta es la A porque los cursos son en horario de tarde y noche."},
            "items": [
                {"n": 7, "stem": "La Oficina de Turismo…",
                 "opts": [["A", "está abierta desde hace un año."],
                          ["B", "ya tiene diez oficinas en España."],
                          ["C", "busca trabajadores para este año."]], "ans": "A"},
                {"n": 8, "stem": "El programa La semana de Radio Clave…",
                 "opts": [["A", "se puede escuchar todos los días."],
                          ["B", "se hace hoy por primera vez."],
                          ["C", "ha cambiado el horario que tenía."]], "ans": "C"},
                {"n": 9, "stem": "Los cursos de español son…",
                 "opts": [["A", "de 10 a 12 de la mañana."],
                          ["B", "en la Casa de Cultura."],
                          ["C", "para niños y jóvenes."]], "ans": "C"},
                {"n": 10, "stem": "La presentadora dice que hoy…",
                 "opts": [["A", "el público puede hacer preguntas."],
                          ["B", "hablan de los horarios del colegio."],
                          ["C", "van a llamar por teléfono al invitado."]], "ans": "A"},
                {"n": 11, "stem": "En el anuncio se dice que el hipermercado La Pradera…",
                 "opts": [["A", "tiene precios especiales esta semana."],
                          ["B", "es más barato si compras por internet."],
                          ["C", "te puede llevar la compra a casa gratis."]], "ans": "A"},
                {"n": 12, "stem": "En el programa Vida cotidiana van a hablar de…",
                 "opts": [["A", "los precios de los pisos en Madrid."],
                          ["B", "los mejores barrios para vivir en Madrid."],
                          ["C", "dónde encontrar pisos para compartir."]], "ans": "B"},
            ],
        },
        # ---------------- Tarea 3（13–18）：Manuel / Olga / ninguno ----------------
        {
            "no": 3, "kind": "match", "qfrom": 13, "qto": 18,
            "audio": "audio/m0-2020_t3.mp3",
            "inst": "Usted va a escuchar una conversación entre dos amigos, Manuel y Olga. Indique si los "
                    "enunciados (13 - 18) se refieren a Manuel (A), a Olga (B) o a ninguno de los dos (C). "
                    "Escuchará la conversación dos veces.",
            "pool": [["A", "MANUEL"], ["B", "OLGA"], ["C", "NINGUNO DE LOS DOS"]],
            "example": {"n": 0, "stem": "Está yendo al supermercado.", "ans": "A",
                        "why": "Manuel dice: «primero voy a la compra… ¿vienes conmigo al supermercado?»"},
            "items": [
                {"n": 13, "stem": "Tiene un examen pronto.", "ans": "C"},
                {"n": 14, "stem": "Va a ir a la frutería.", "ans": "B"},
                {"n": 15, "stem": "Le encanta la paella.", "ans": "B"},
                {"n": 16, "stem": "Hace comida muy rica.", "ans": "A"},
                {"n": 17, "stem": "Va a pagar la cuenta del restaurante.", "ans": "C"},
                {"n": 18, "stem": "Ha ido al banco.", "ans": "A"},
            ],
        },
        # ---------------- Tarea 4（19–25）：八则留言，匹配 A–K ----------------
        {
            "no": 4, "kind": "match", "qfrom": 19, "qto": 25,
            "audio": "audio/m0-2020_t4.mp3",
            "inst": "Usted va a escuchar ocho mensajes, incluido el ejemplo. Cada mensaje se repite dos "
                    "veces. Seleccione el enunciado (de la A a la K) que corresponde a cada mensaje "
                    "(del 19 al 25). Hay once opciones, incluido el ejemplo. Seleccione siete.",
            "pool": [
                ["A", "El tren va a estar parado 30 minutos."],
                ["B", "Pueden usar otro transporte sin pagar."],
                ["C", "Se puede comer o beber algo."],
                ["D", "La cita es a las dos."],
                ["E", "Están buscando a una familia."],
                ["F", "Tiene una cita con el médico."],
                ["G", "Los coches tienen que ir por otro camino."],
                ["H", "No se puede usar el teléfono."],
                ["I", "Va a ir a su casa después del cine."],
                ["J", "Va a llegar tarde al trabajo."],
                ["K", "Hoy el precio es más barato."],
            ],
            "example": {"n": 0, "stem": "Mensaje 0", "ans": "F",
                        "why": "La opción correcta es la letra F porque llaman de la consulta del Doctor Centeno."},
            "items": [
                {"n": 19, "stem": "Mensaje 1", "ans": "B"},
                {"n": 20, "stem": "Mensaje 2", "ans": "H"},
                {"n": 21, "stem": "Mensaje 3", "ans": "G"},
                {"n": 22, "stem": "Mensaje 4", "ans": "C"},
                {"n": 23, "stem": "Mensaje 5", "ans": "I"},
                {"n": 24, "stem": "Mensaje 6", "ans": "E"},
                {"n": 25, "stem": "Mensaje 7", "ans": "J"},
            ],
        },
    ],
}

# ---------------------------------------------------------------- 旧版样卷（Modelo 0, Versión 2）
# 官方从未发布这套的录音，也没有公开音频包；音频按官方听力原文（PDF 里自带
# Transcripción）用神经语音合成，每段读 2 遍并保留 6 秒作答停顿。
_LISTEN_OLD = "m0-v2"
LISTENING["a2-modelo0-v2"] = {
    "dur": "35 分钟",
    "audio_note": "官方未公开音频，按官方听力原文用神经语音合成",
    "tareas": [
        # ---------------- Tarea 1（1–7）：七条广播广告，每条一个音频 ----------------
        {
            "no": 1, "kind": "mc", "qfrom": 1, "qto": 7,
            "audio_intro": _aud(_LISTEN_OLD, 1, "ex0"),
            "item_audio": _tags(_LISTEN_OLD, 1, ["q1", "q2", "q3", "q4", "q5", "q6", "q7"]),
            "inst": "Usted va a escuchar siete anuncios de radio. Los anuncios se repiten dos veces. "
                    "Lea las preguntas (de la 1 a la 7) para cada anuncio y seleccione la opción correcta "
                    "(A, B o C).",
            "example": {"n": 0, "stem": "Puedes comprar el nuevo Niko B53…", "ans": "A",
                        "opts": [["A", "llamando por teléfono."],
                                 ["B", "en cualquier tienda."],
                                 ["C", "a través de Internet."]],
                        "why": "«No se vende en tiendas. Si llamas al teléfono 902 33 44 43…»"},
            "items": [
                {"n": 1, "stem": "Según la audición, La hora del cuento es…",
                 "opts": [["A", "una historia para niños pequeños."],
                          ["B", "el nombre de una obra de teatro."],
                          ["C", "una actividad organizada por la biblioteca."]], "ans": "C"},
                {"n": 2, "stem": "Las entradas para el concierto de flamenco…",
                 "opts": [["A", "cuestan diez euros con cincuenta."],
                          ["B", "se pueden comprar por Internet."],
                          ["C", "se ponen a la venta el miércoles."]], "ans": "B"},
                {"n": 3, "stem": "En este anuncio, le informan de que hay un 50% de descuento en…",
                 "opts": [["A", "la ropa de señora."],
                          ["B", "artículos de informática."],
                          ["C", "armarios para el dormitorio."]], "ans": "B"},
                {"n": 4, "stem": "Los participantes del concurso de paellas…",
                 "opts": [["A", "deben enviar la inscripción el día 6."],
                          ["B", "pueden ganar un viaje a Valencia."],
                          ["C", "tienen que llevar algunos ingredientes."]], "ans": "C"},
                {"n": 5, "stem": "Según la audición, la feria del cómic de Zaragoza…",
                 "opts": [["A", "va a celebrarse en el mismo lugar que el año pasado."],
                          ["B", "va a dar unos premios el próximo fin de semana."],
                          ["C", "va a presentar los trabajos de sesenta dibujantes."]], "ans": "A"},
                {"n": 6, "stem": "En la peluquería Estilos, el corte de pelo cuesta…",
                 "opts": [["A", "diez euros."], ["B", "quince euros."], ["C", "veinte euros."]],
                 "ans": "A"},
                {"n": 7, "stem": "En este anuncio se informa de…",
                 "opts": [["A", "dónde es el curso de informática."],
                          ["B", "cuál es el plazo de matrícula de los cursos."],
                          ["C", "cuánto dura el curso para personas mayores."]], "ans": "B"},
            ],
        },
        # ---------------- Tarea 2（8–13）：一段电台节目，整段一个音频 ----------------
        {
            "no": 2, "kind": "mc", "qfrom": 8, "qto": 13,
            "audio": _aud(_LISTEN_OLD, 2, "q1"),
            "inst": "Usted va a escuchar una parte de un programa de radio y debe responder a seis "
                    "preguntas. La audición se repite dos veces. Lea las preguntas (de la 8 a la 13) y "
                    "seleccione la opción correcta (A, B o C).",
            "example": {"n": 0, "stem": "En esta noticia se informa de…", "ans": "B",
                        "opts": [["A", "una competición deportiva."],
                                 ["B", "una fiesta del mundo del deporte."],
                                 ["C", "una presentación de un periódico deportivo."]],
                        "why": "Es la gala de los Premios Número Uno, una ceremonia deportiva."},
            "items": [
                {"n": 8, "stem": "En esta noticia se informa de…",
                 "opts": [["A", "una competición deportiva."],
                          ["B", "una fiesta del mundo del deporte."],
                          ["C", "una presentación de un periódico deportivo."]], "ans": "B"},
                {"n": 9, "stem": "El periodista Manolo Hernández fue un famoso…",
                 "opts": [["A", "tenista."], ["B", "gimnasta."], ["C", "nadador."]], "ans": "A"},
                {"n": 10, "stem": "Según la audición, el ciclista Alberto Corredor…",
                 "opts": [["A", "recogió su primer premio."],
                          ["B", "dio un premio a Miguel Azcárate."],
                          ["C", "se emocionó durante el acto."]], "ans": "C"},
                {"n": 11, "stem": "El equipo femenino de baloncesto…",
                 "opts": [["A", "ha ganado el campeonato mundial."],
                          ["B", "ha cambiado de entrenador este año."],
                          ["C", "ha participado en una competición europea."]], "ans": "C"},
                {"n": 12, "stem": "Esther Pérez ganó un premio por…",
                 "opts": [["A", "sacar buenas fotografías."],
                          ["B", "dirigir un programa deportivo."],
                          ["C", "tener una carrera de éxitos profesionales."]], "ans": "A"},
                {"n": 13, "stem": "En la audición se dice que Pelayo Iglesias…",
                 "opts": [["A", "jugó diez años en el equipo del Oviedo."],
                          ["B", "compuso una canción para un equipo de fútbol."],
                          ["C", "fue futbolista profesional antes que cantante."]], "ans": "B"},
            ],
        },
        # ---------------- Tarea 3（14–19）：七则留言，匹配 A–J ----------------
        {
            "no": 3, "kind": "match", "qfrom": 14, "qto": 19,
            "audio_intro": _aud(_LISTEN_OLD, 3, "ex0"),
            "item_audio": _tags(_LISTEN_OLD, 3, ["q1", "q2", "q3", "q4", "q5", "q6"]),
            "inst": "Usted va a escuchar siete mensajes, incluido el ejemplo. Cada mensaje se repite "
                    "dos veces. Seleccione el enunciado (de la A a la J) que corresponde a cada mensaje "
                    "(del 14 al 19). Hay diez enunciados, incluido el ejemplo. Seleccione seis.",
            "pool": [
                ["A", "Le dicen que ahora no pueden hablar con usted."],
                ["B", "Informan de que el viaje ha terminado."],
                ["C", "Le propone otro día para quedar y verse."],
                ["D", "Ha comprado algunas cosas para el dormitorio."],
                ["E", "Le han llamado para pedirle los datos personales."],
                ["F", "Va a llegar más tarde."],
                ["G", "En ese lugar tienen precios especiales."],
                ["H", "Comunican que va a salir el tren."],
                ["I", "Le están informando de cuál es el horario."],
                ["J", "Explica por qué no puede quedar con alguien."],
            ],
            "example": {"n": 0, "stem": "Mensaje 0", "ans": "F",
                        "why": "«No voy a poder llegar a tiempo a tu casa para ir juntos al teatro»."},
            "items": [
                {"n": 14, "stem": "Mensaje 1", "ans": "D"},
                {"n": 15, "stem": "Mensaje 2", "ans": "G"},
                {"n": 16, "stem": "Mensaje 3", "ans": "I"},
                {"n": 17, "stem": "Mensaje 4", "ans": "J"},
                {"n": 18, "stem": "Mensaje 5", "ans": "B"},
                {"n": 19, "stem": "Mensaje 6", "ans": "A"},
            ],
        },
        # ---------------- Tarea 4（20–25）：旅行社电话对话，整段一个音频 ----------------
        {
            "no": 4, "kind": "mc", "qfrom": 20, "qto": 25,
            "audio": _aud(_LISTEN_OLD, 4, "q1"),
            "inst": "Usted va a escuchar una conversación telefónica entre una empleada de la agencia "
                    "de viajes Soltur y un cliente. La conversación se repite dos veces. Lea las "
                    "preguntas (de la 20 a la 25) y seleccione la opción correcta (A, B o C).",
            "example": {"n": 0, "stem": "La oferta de agosto es para viajar a…", "ans": "A",
                        "opts": [["A", "Ibiza."], ["B", "Toledo."], ["C", "los Picos de Europa."]],
                        "why": "«Para agosto tenemos una oferta muy buena en Ibiza.»"},
            "items": [
                {"n": 20, "stem": "La empleada informa de que la oferta es para ir a…",
                 "opts": [["A", "Ibiza."], ["B", "Toledo."], ["C", "los Picos de Europa."]], "ans": "A"},
                {"n": 21, "stem": "Según la audición, el hombre quiere viajar…",
                 "opts": [["A", "el 1 de agosto."], ["B", "el 10 de agosto."], ["C", "el 30 de agosto."]],
                 "ans": "B"},
                {"n": 22, "stem": "En la audición se dice que el precio incluye…",
                 "opts": [["A", "el IVA."], ["B", "el seguro."], ["C", "la limpieza."]], "ans": "A"},
                {"n": 23, "stem": "La empleada informa de que en el campin hay…",
                 "opts": [["A", "una farmacia."], ["B", "un supermercado."], ["C", "tres pistas de tenis."]],
                 "ans": "B"},
                {"n": 24, "stem": "En la audición se dice que la casa…",
                 "opts": [["A", "tiene un garaje pequeño."], ["B", "está en el pueblo."],
                          ["C", "es bastante espaciosa."]], "ans": "C"},
                {"n": 25, "stem": "Los sábados, la agencia cierra a las…",
                 "opts": [["A", "13.45 h."], ["B", "14 h."], ["C", "14.30 h."]], "ans": "C"},
            ],
        },
        # ---------------- Tarea 5（26–30）：看图匹配 A–H ----------------
        {
            "no": 5, "kind": "match", "qfrom": 26, "qto": 30,
            "audio": _aud(_LISTEN_OLD, 5, "q1"),
            "pool_imgs": _pool(_LISTEN_OLD, "ABCDEFGH"),
            "pool_letters": "ABCDEFGH",
            "inst": "Usted va a escuchar una conversación entre dos personas, Laura y Javier. La "
                    "conversación se repite dos veces. Seleccione la imagen (de la A a la H) que "
                    "corresponde a cada enunciado (del 26 al 30). Hay ocho imágenes. Seleccione cinco.",
            "example": {"n": 0, "stem": "Es el lugar donde Javier estuvo de vacaciones.", "ans": "H",
                        "why": "«los niños querían ir a la playa» → la imagen H es la playa."},
            "items": [
                {"n": 26, "stem": "Esto es lo que Javier necesita comprar.", "ans": "C"},
                {"n": 27, "stem": "Los hijos de Javier preferían ir a ese lugar.", "ans": "H"},
                {"n": 28, "stem": "Es lo que Laura quería hacer en vacaciones.", "ans": "F"},
                {"n": 29, "stem": "Es la profesión del marido de Laura.", "ans": "A"},
                {"n": 30, "stem": "Javier le propone esto a Laura.", "ans": "E"},
            ],
        },
    ],
}
