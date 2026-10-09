# -*- coding: utf-8 -*-
"""DELE A1 · 听力（Prueba 2）结构化数据。

数据来源与音频：
  · 2020 样卷  —— 题目/答案/原文均取自官方 Modelo 0；音频为官方 audios-A1.zip
                  真人录音（已 320kbps→48kbps 单声道转码）
  · 2008 样卷  —— 官方 PDF 自带原文（p18-28）与答案（p39）；音频按原文用
                  Azure 神经语音合成
  · 2009 真题  —— 官方只公开了题目与答案，**从未发布音频，也没有原文**，
                  因此该套听力仅作题型浏览，不能播放
  · 2011 真题  —— 官方公开了题目 + 原文 + 答案；音频按原文合成

题号在每个 Prueba 内独立编号 1-25。
"""

# 图片路径规则（crop_audio.py 的产出；JPEG，长边 ≤420px）
def _q(slug, n, letters):
    return {L: "img/audio/%s_q%d_%s.jpg" % (slug, n, L) for L in letters}


def _pool(slug, letters):
    return {L: "img/audio/%s_pool_%s.jpg" % (slug, L) for L in letters}


def _aud(slug, tarea, tag):
    return "audio/%s_t%d_%s.mp3" % (slug, tarea, tag)


def _tags(slug, tarea, tags):
    """按「分段标签」列出一组音频路径（顺序 = 题目顺序）。"""
    return [_aud(slug, tarea, t) for t in tags]


# 音频字段约定（build.py 按此渲染播放器）：
#   audio        → 整段合一的单个音频（Tarea 4；2020 样卷四段各一个文件）
#   audio_intro  → 「示例」那段音频，放在 Ejemplo 区块里
#   item_audio   → 逐题音频列表，顺序与 items 一一对应
# 若三者都没有 → 该 Tarea 无音频（2009 真题官方从未发布）

_Q5 = ["q1", "q2", "q3", "q4", "q5"]
_Q8 = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8"]

# ---------------------------------------------------------------- 2020 样卷
# Tarea 3 的左列（人物/日期）与 Tarea 2 的图片池字母
T3_AB = "ABCDEFGHI"      # Tarea 1 每题 3 张图
T2_POOL = "ABCDEFGHI"    # Tarea 2 图片池 9 张

LISTENING = {}

LISTENING["a1-modelo0-2020"] = {
    "dur": "25 分钟",
    "audio_note": "官方真人录音（Instituto Cervantes 公开音频包）",
    "tareas": [
        {
            "no": 1, "kind": "mc", "qfrom": 1, "qto": 5,
            "imgbase": "m0-2020", "letters": "ABC",
            "audio": "audio/m0-2020_t1.mp3",
            "audio_intro": "audio/m0-2020_t1_intro.mp3",
            "inst": "Usted va a escuchar cinco conversaciones. Hablan dos personas. "
                    "Las conversaciones se repiten dos veces. Hay una pregunta y tres imágenes "
                    "(A, B y C) para cada conversación. Tiene que seleccionar la imagen que "
                    "responde a la pregunta.",
            "example": {"n": 0, "stem": "¿A qué hora comen?", "ans": "A",
                        "imgs": _q("m0-2020", 0, "ABC")},
            "items": [
                {"n": 1, "stem": "¿A qué lugar va el hombre hoy?", "ans": "A"},
                {"n": 2, "stem": "¿Qué hace la chica esta tarde?", "ans": "A"},
                {"n": 3, "stem": "¿Dónde va el hombre de vacaciones?", "ans": "C"},
                {"n": 4, "stem": "¿Qué busca el hombre?", "ans": "B"},
                {"n": 5, "stem": "¿Qué come la mujer hoy?", "ans": "B"},
            ],
        },
        {
            "no": 2, "kind": "match", "qfrom": 6, "qto": 10,
            "pool_imgs": _pool("m0-2020", T2_POOL), "pool_letters": T2_POOL,
            "audio": "audio/m0-2020_t2.mp3",
            "inst": "Usted va a escuchar cinco mensajes. Cada mensaje se repite dos veces. "
                    "Tiene que relacionar las imágenes (de la A a la I) con los mensajes "
                    "(del 6 al 10). Hay nueve imágenes, incluido el ejemplo. Seleccione cinco.",
            "example": {"n": 0, "stem": "Mensaje 0: Silencio, por favor. El examen tiene 10 preguntas.", "ans": "F"},
            "items": [
                {"n": 6, "stem": "Mensaje 1", "ans": "C"},
                {"n": 7, "stem": "Mensaje 2", "ans": "H"},
                {"n": 8, "stem": "Mensaje 3", "ans": "G"},
                {"n": 9, "stem": "Mensaje 4", "ans": "I"},
                {"n": 10, "stem": "Mensaje 5", "ans": "D"},
            ],
        },
        {
            "no": 3, "kind": "match", "qfrom": 11, "qto": 18,
            "audio": "audio/m0-2020_t3.mp3",
            "inst": "Usted va a escuchar a una chica, Lucía, que habla sobre sus compañeros de "
                    "la clase de español. La información se repite dos veces. A la izquierda están "
                    "los nombres de los compañeros de Lucía. A la derecha, la información sobre "
                    "ellos. Usted tiene que relacionar los números (del 11 al 18) con las letras "
                    "(de la A a la L). Hay doce letras, incluido el ejemplo. Seleccione ocho.",
            "example": {"n": 0, "stem": "John", "ans": "D",
                        "why": "«Él es de Estados Unidos» → es estadounidense."},
            "pool": [
                ["A", "es sociable."], ["B", "estudia mucho."], ["C", "habla mucho."],
                ["D", "es estadounidense."], ["E", "es el más joven de la clase."],
                ["F", "quiere estudiar piano."], ["G", "quiere ser escritor."],
                ["H", "es de Francia."], ["I", "organiza fiestas en su casa."],
                ["J", "hace deporte por la tarde."], ["K", "ve muchas películas."],
                ["L", "desayuna en la escuela."],
            ],
            "items": [
                {"n": 11, "stem": "Emiko", "ans": "H"},
                {"n": 12, "stem": "Paola", "ans": "A"},
                {"n": 13, "stem": "Sussane", "ans": "J"},
                {"n": 14, "stem": "Andreas", "ans": "K"},
                {"n": 15, "stem": "Scott", "ans": "E"},
                {"n": 16, "stem": "Ozge", "ans": "L"},
                {"n": 17, "stem": "Amin", "ans": "G"},
                {"n": 18, "stem": "Ana", "ans": "B"},
            ],
        },
        {
            "no": 4, "kind": "match", "qfrom": 19, "qto": 25,
            "audio": "audio/m0-2020_t4.mp3",
            "inst": "Usted va a escuchar a un hombre, Paco, que habla de cómo es su ciudad con "
                    "una compañera de la universidad. Va a escuchar la conversación dos veces. "
                    "Usted tiene siete frases (de la 19 a la 25) que no están completas. Tiene que "
                    "seleccionar una opción del cuadro (de la A a la I) para completar las frases.",
            "example": {"n": 0, "stem": "La ciudad de Paco es ___.", "ans": "A"},
            "pool": [
                ["A", "grande"], ["B", "el museo"], ["C", "monumentos"], ["D", "turistas"],
                ["E", "coche"], ["F", "autobús"], ["G", "caro"], ["H", "el palacio"], ["I", "barato"],
            ],
            "items": [
                {"n": 19, "stem": "La ciudad tiene muchos ___.", "ans": "D"},
                {"n": 20, "stem": "Muchas personas van a la ciudad de Paco para ver ___.", "ans": "C"},
                {"n": 21, "stem": "A Paco le gusta ___ de su ciudad.", "ans": "B"},
                {"n": 22, "stem": "Lejos del centro está ___.", "ans": "H"},
                {"n": 23, "stem": "Comer en la ciudad de Paco es ___.", "ans": "G"},
                {"n": 24, "stem": "Se puede ir al centro en ___.", "ans": "F"},
                {"n": 25, "stem": "Normalmente Paco va a su ciudad en ___.", "ans": "E"},
            ],
        },
    ],
}

# ---------------------------------------------------------------- 2008 旧版样卷
LISTENING["a1-modelo0-2008"] = {
    "dur": "20 分钟",
    "audio_note": "官方未公开音频，按官方听力原文用神经语音合成",
    "tareas": [
        {
            "no": 1, "kind": "mc", "qfrom": 1, "qto": 5,
            "imgbase": "m0-2008", "letters": "ABCD",
            "audio_intro": _aud("m0-2008", 1, "ex0"),
            "item_audio": _tags("m0-2008", 1, _Q5),
            "inst": "A continuación escuchará cinco diálogos breves entre dos personas. Oirá "
                    "cada diálogo dos veces. Después de la segunda audición marque la opción "
                    "correcta (A, B, C o D).",
            "example": {"n": 0, "stem": "¿A qué hora comen?", "ans": "A",
                        "imgs": _q("m0-2008", 0, "ABCD")},
            "items": [
                {"n": 1, "stem": "¿Dónde va?", "ans": "D"},
                {"n": 2, "stem": "¿Qué tiene que hacer?", "ans": "C"},
                {"n": 3, "stem": "¿Dónde va este verano?", "ans": "A"},
                {"n": 4, "stem": "¿Qué tiene en las manos?", "ans": "D"},
                {"n": 5, "stem": "¿Cómo va a trabajar?", "ans": "D"},
            ],
        },
        {
            "no": 2, "kind": "match", "qfrom": 6, "qto": 10,
            "pool_imgs": _pool("m0-2008", "ABCDEFGHI"), "pool_letters": "ABCDEFGHI",
            "item_audio": _tags("m0-2008", 2, _Q5),
            "inst": "A continuación escuchará cinco mensajes muy breves. Oirá cada intervención "
                    "dos veces. Relacione los textos con las imágenes (A-I). Hay tres imágenes "
                    "que no debe seleccionar.",
            "example": {"n": 0, "stem": "Mensaje 0: ¡Silencio, por favor!", "ans": "F"},
            "items": [
                {"n": 6, "stem": "Mensaje 1", "ans": "C"},
                {"n": 7, "stem": "Mensaje 2", "ans": "B"},
                {"n": 8, "stem": "Mensaje 3", "ans": "G"},
                {"n": 9, "stem": "Mensaje 4", "ans": "D"},
                {"n": 10, "stem": "Mensaje 5", "ans": "H"},
            ],
        },
        {
            "no": 3, "kind": "match", "qfrom": 11, "qto": 18,
            "audio_intro": _aud("m0-2008", 3, "ex0"),
            "item_audio": _tags("m0-2008", 3, _Q8),
            "inst": "Va a escuchar a Lucía hablando sobre los compañeros de la clase de español. "
                    "Cada audición se repite dos veces. Relacione cada persona con una letra "
                    "(columna de la derecha). Hay tres letras que no se pueden seleccionar.",
            "example": {"n": 0, "stem": "John", "ans": "D",
                        "why": "«Es de Estados Unidos» → es estadounidense."},
            "pool": [
                ["A", "Es sociable."], ["B", "Es moreno."], ["C", "Es delgado."],
                ["D", "Es estadounidense."], ["E", "Es antipático."], ["F", "Es inteligente."],
                ["G", "Tiene muchos libros."], ["H", "Es de Japón."], ["I", "Estudia en la biblioteca."],
                ["J", "No tiene diccionario."], ["K", "Es rubia."], ["L", "Toma té por la mañana."],
            ],
            "items": [
                {"n": 11, "stem": "Emiko", "ans": "H"},
                {"n": 12, "stem": "Paola", "ans": "A"},
                {"n": 13, "stem": "Susan", "ans": "K"},
                {"n": 14, "stem": "Andreas", "ans": "C"},
                {"n": 15, "stem": "Scott", "ans": "E"},
                {"n": 16, "stem": "Ozge", "ans": "L"},
                {"n": 17, "stem": "Amín", "ans": "G"},
                {"n": 18, "stem": "Su profesora", "ans": "F"},
            ],
        },
        {
            "no": 4, "kind": "fill", "qfrom": 19, "qto": 25,
            "audio": _aud("m0-2008", 4, "q1"),
            "inst": "Paco estudia ahora en una ciudad diferente y cuenta a su amiga cómo es la "
                    "ciudad donde vive. Complete el texto con la información que falta. "
                    "Escuchará la audición tres veces.",
            "source": {"kind": "passage", "label": "Mi nueva ciudad", "text":
                       "0. La ciudad es pequeña.\n"
                       "19. En el centro hay mucho ______.\n"
                       "20. La calle es ______.\n"
                       "21. En la calle hay muchos ______.\n"
                       "22. Los fines de semana va a ______ con sus amigos.\n"
                       "23. La ______ está al lado de su casa.\n"
                       "24. La estación de tren es muy ______.\n"
                       "25. Hay ______ parques."},
            "items": [
                {"n": 19, "stem": "En el centro hay mucho ______.", "ans": "RUIDO"},
                {"n": 20, "stem": "La calle es ______.", "ans": "GRANDE"},
                {"n": 21, "stem": "En la calle hay muchos ______.", "ans": "RESTAURANTES"},
                {"n": 22, "stem": "Los fines de semana va a ______ con sus amigos.", "ans": "CENAR"},
                {"n": 23, "stem": "La ______ está al lado de su casa.",
                 "ans": "PARADA|PARADA DEL AUTOBÚS"},
                {"n": 24, "stem": "La estación de tren es muy ______.", "ans": "MODERNA"},
                {"n": 25, "stem": "Hay ______ parques.", "ans": "POCOS"},
            ],
        },
    ],
}

# ---------------------------------------------------------------- 2009 真题
# 官方只公开题目与答案，从未发布音频、也没有听力原文 → 只能看题型
LISTENING["a1-2009-0516"] = {
    "dur": "20 分钟",
    "audio_note": "官方未公开音频，也没有听力原文（无法合成）——本套听力仅供题型浏览",
    "no_audio": True,
    "tareas": [
        {
            "no": 1, "kind": "mc", "qfrom": 1, "qto": 5,
            "imgbase": "a1-2009", "letters": "ABCD",
            "inst": "A continuación escuchará cinco diálogos breves entre dos personas. Oirá "
                    "cada diálogo dos veces. Después de la segunda audición marque la opción "
                    "correcta (A, B, C o D).",
            "example": {"n": 0, "stem": "¿A qué hora comen?", "ans": "A",
                        "imgs": _q("a1-2009", 0, "ABCD")},
            "items": [
                {"n": 1, "stem": "¿A dónde va?", "ans": "C"},
                {"n": 2, "stem": "¿Cómo vas a clase?", "ans": "A"},
                {"n": 3, "stem": "¿Qué hace los sábados y los domingos?", "ans": "B"},
                {"n": 4, "stem": "¿Qué va a beber?", "ans": "B"},
                {"n": 5, "stem": "¿Dónde está Juan?", "ans": "A"},
            ],
        },
        {
            "no": 2, "kind": "match", "qfrom": 6, "qto": 10,
            "pool_imgs": _pool("a1-2009", "ABCDEFGHI"), "pool_letters": "ABCDEFGHI",
            "inst": "A continuación escuchará cinco avisos o instrucciones. Oirá cada "
                    "intervención dos veces. Relacione los textos con las imágenes. "
                    "Hay tres letras que no debe seleccionar.",
            "example": {"n": 0, "stem": "Aviso 0", "ans": "F"},
            "items": [
                {"n": 6, "stem": "Aviso 1", "ans": "A"},
                {"n": 7, "stem": "Aviso 2", "ans": "G"},
                {"n": 8, "stem": "Aviso 3", "ans": "E"},
                {"n": 9, "stem": "Aviso 4", "ans": "C"},
                {"n": 10, "stem": "Aviso 5", "ans": "I"},
            ],
        },
        {
            "no": 3, "kind": "match", "qfrom": 11, "qto": 18,
            "inst": "Va a escuchar a Laura hablando sobre sus viajes. Cada audición se repite "
                    "dos veces. Relacione cada ciudad con una letra de la columna de la derecha. "
                    "Hay tres letras que no se pueden seleccionar.",
            "example": {"n": 0, "stem": "Barcelona", "ans": "D",
                        "why": "«Es una ciudad maravillosa, tiene muchas tiendas» → D."},
            "pool": [
                ["A", "Tiene cerca una estación para esquiar."],
                ["B", "Tiene una Universidad muy famosa."],
                ["C", "Tiene mercados maravillosos."],
                ["D", "Tiene muchas tiendas."],
                ["E", "Tiene unas playas fantásticas."],
                ["F", "Está al Este de España."],
                ["G", "Su gente es muy alegre."],
                ["H", "Su aeropuerto está en obras."],
                ["I", "Es una ciudad donde juegan mucho al fútbol."],
                ["J", "No es bonita."],
                ["K", "Es una ciudad muy cultural."],
                ["L", "Tiene oficina de información y turismo."],
            ],
            "items": [
                {"n": 11, "stem": "La Habana", "ans": "G"},
                {"n": 12, "stem": "Madrid", "ans": "K"},
                {"n": 13, "stem": "Cancún", "ans": "E"},
                {"n": 14, "stem": "Salamanca", "ans": "B"},
                {"n": 15, "stem": "Buenos Aires", "ans": "I"},
                {"n": 16, "stem": "Granada", "ans": "A"},
                {"n": 17, "stem": "Lima", "ans": "C"},
                {"n": 18, "stem": "Valencia", "ans": "F"},
            ],
        },
        {
            "no": 4, "kind": "fill", "qfrom": 19, "qto": 25,
            "inst": "Teresa es una mujer que busca pareja y llama a la radio para hacer una "
                    "descripción personal. Complete el texto con la información que falta. "
                    "Escuchará la audición tres veces.",
            "source": {"kind": "passage", "label": "Buscando pareja", "text":
                       "0. Teresa es una mujer joven y… trabajadora.\n"
                       "19. Teresa está soltera y vive con su ______.\n"
                       "20. A ella le gusta ______ viajar y leer.\n"
                       "21. Es ______ de literatura.\n"
                       "22. A Teresa no le gusta la ______.\n"
                       "23. Su casa es muy ______.\n"
                       "24. Los ______ tiene clase de baile.\n"
                       "25. Quiere conocer a un chico ______."},
            "items": [
                {"n": 19, "stem": "Teresa está soltera y vive con su ______.", "ans": "HERMANA"},
                {"n": 20, "stem": "A ella le gusta ______ viajar y leer.", "ans": "CORRER"},
                {"n": 21, "stem": "Es ______ de literatura.", "ans": "PROFESORA"},
                {"n": 22, "stem": "A Teresa no le gusta la ______.", "ans": "CIUDAD"},
                {"n": 23, "stem": "Su casa es muy ______.", "ans": "PEQUEÑA"},
                {"n": 24, "stem": "Los ______ tiene clase de baile.", "ans": "VIERNES"},
                {"n": 25, "stem": "Quiere conocer a un chico ______.", "ans": "SIMPÁTICO|SIMPATICO"},
            ],
        },
    ],
}

# ---------------------------------------------------------------- 2011 真题
LISTENING["a1-2011"] = {
    "dur": "20 分钟",
    "audio_note": "官方未公开音频，按官方听力原文用神经语音合成",
    "tareas": [
        {
            "no": 1, "kind": "mc", "qfrom": 1, "qto": 5,
            "imgbase": "a1-2011", "letters": "ABCD",
            "audio_intro": _aud("a1-2011", 1, "ex0"),
            "item_audio": _tags("a1-2011", 1, _Q5),
            "inst": "Va a escuchar cinco conversaciones. Hablan dos personas. Las conversaciones "
                    "se repiten dos veces. Hay cuatro imágenes (A, B, C, D) para cada conversación. "
                    "Usted debe seleccionar la imagen que está relacionada con la conversación.",
            "example": {"n": 0, "stem": "¿A qué hora comen?", "ans": "A",
                        "imgs": _q("a1-2011", 0, "ABCD")},
            "items": [
                {"n": 1, "stem": "¿Qué van a cenar esta noche?", "ans": "D"},
                {"n": 2, "stem": "¿A dónde prefiere ir el hombre de vacaciones?", "ans": "C"},
                {"n": 3, "stem": "¿Cómo quiere pagar el cliente?", "ans": "A"},
                {"n": 4, "stem": "¿De qué color es el coche de la hermana de María?", "ans": "D"},
                {"n": 5, "stem": "¿Qué está haciendo el novio de Ana?", "ans": "C"},
            ],
        },
        {
            "no": 2, "kind": "match", "qfrom": 6, "qto": 10,
            "pool_imgs": _pool("a1-2011", "ABCDEFGHI"), "pool_letters": "ABCDEFGHI",
            "item_audio": _tags("a1-2011", 2, _Q5),
            "inst": "Usted va a escuchar cinco mensajes. Cada mensaje se repite dos veces. Debe "
                    "relacionar los mensajes con las imágenes (relacione los números con las "
                    "letras). Hay nueve imágenes, incluido el ejemplo. Seleccione cinco.",
            "example": {"n": 0, "stem": "Mensaje 0: Silencio, por favor. El examen tiene 10 preguntas.", "ans": "F"},
            "items": [
                {"n": 6, "stem": "Mensaje 1", "ans": "E"},
                {"n": 7, "stem": "Mensaje 2", "ans": "B"},
                {"n": 8, "stem": "Mensaje 3", "ans": "G"},
                {"n": 9, "stem": "Mensaje 4", "ans": "D"},
                {"n": 10, "stem": "Mensaje 5", "ans": "A"},
            ],
        },
        {
            "no": 3, "kind": "match", "qfrom": 11, "qto": 18,
            "audio_intro": _aud("a1-2011", 3, "ex0"),
            # 官方原文把「示例」和「每天 9–12 点上课」印在同一段里，
            # 合成时按句拆开 → 示例 ex0、第 11 题 ex0_1，其后 q1…q7
            "item_audio": _tags("a1-2011", 3, ["ex0_1"] + ["q%d" % i for i in range(1, 8)]),
            "inst": "Usted va a escuchar a una chica, María, que está hablando de lo que va a "
                    "hacer la próxima semana. Las frases se repiten dos veces. A la izquierda, "
                    "están los días de la semana. A la derecha, información de lo que va a hacer "
                    "María. Usted debe relacionar los números con las letras. Hay doce letras, "
                    "incluido el ejemplo. Seleccione ocho.",
            "example": {"n": 0, "stem": "El lunes", "ans": "D",
                        "why": "«desayuno con mi hermana en la cafetería de la Universidad» → D."},
            "pool": [
                ["A", "Va a ver a sus amigos de Barcelona."],
                ["B", "Sale con su hija."],
                ["C", "Va a ir de fiesta."],
                ["D", "Toma algo en la cafetería."],
                ["E", "Va al médico."],
                ["F", "No come en casa."],
                ["G", "Escucha música."],
                ["H", "Trabaja por la noche."],
                ["I", "Va al supermercado."],
                ["J", "Va a dormir mucho."],
                ["K", "Practica deporte."],
                ["L", "Va a clase por la mañana."],
            ],
            "items": [
                {"n": 11, "stem": "Todos los días", "ans": "L"},
                {"n": 12, "stem": "El martes", "ans": "F"},
                {"n": 13, "stem": "El miércoles", "ans": "K"},
                {"n": 14, "stem": "El jueves", "ans": "G"},
                {"n": 15, "stem": "El viernes", "ans": "I"},
                {"n": 16, "stem": "El sábado por la mañana", "ans": "A"},
                {"n": 17, "stem": "El sábado por la noche", "ans": "C"},
                {"n": 18, "stem": "El domingo", "ans": "J"},
            ],
        },
        {
            "no": 4, "kind": "fill", "qfrom": 19, "qto": 25,
            "audio": _aud("a1-2011", 4, "q1"),
            "inst": "Usted va a escuchar a Juan hablando con su amiga Elena sobre Madrid. "
                    "Atención: va a escuchar la conversación tres veces. Usted tiene siete frases "
                    "que no están completas. Debe escribir en los espacios las palabras que faltan.",
            "source": {"kind": "passage", "label": "Un fin de semana especial", "text":
                       "0. Madrid es una ciudad preciosa, interesante y con muchas posibilidades.\n"
                       "19. En Madrid hay museos, restaurantes y ______ para pasear también.\n"
                       "20. En el Museo Reina Sofía las obras son más ______.\n"
                       "21. Los museos están abiertos de diez a ______ de la tarde.\n"
                       "22. Los domingos los museos son ______.\n"
                       "23. Los restaurantes de comida típica española son un poco ______.\n"
                       "24. Hay tiendas de libros, ______, ropa y todo tipo de regalos.\n"
                       "25. En invierno, en Madrid hace mucho ______."},
            "items": [
                {"n": 19, "stem": "En Madrid hay museos, restaurantes y ______ para pasear también.",
                 "ans": "JARDINES"},
                {"n": 20, "stem": "En el Museo Reina Sofía las obras son más ______.", "ans": "MODERNAS"},
                {"n": 21, "stem": "Los museos están abiertos de diez a ______ de la tarde.",
                 "ans": "SEIS|6"},
                {"n": 22, "stem": "Los domingos los museos son ______.", "ans": "GRATIS"},
                {"n": 23, "stem": "Los restaurantes de comida típica española son un poco ______.",
                 "ans": "CAROS"},
                {"n": 24, "stem": "Hay tiendas de libros, ______, ropa y todo tipo de regalos.",
                 "ans": "MÚSICA|MUSICA"},
                {"n": 25, "stem": "En invierno, en Madrid hace mucho ______.", "ans": "FRÍO|FRIO"},
            ],
        },
    ],
}
