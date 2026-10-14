# -*- coding: utf-8 -*-
"""CSS 代码审查训练 · 题库数据（20 题）

训练目标
--------
现实里代码大多是 AI 写的，资深工程师的核心产出是**审查**：
一眼看出这段 CSS 会不会跑偏、为什么会跑偏、该怎么改。

两种题型
  impl   （实现选择）给出要实现的效果 → 四段实现选正确的一段
  review （缺陷审查）给出一段有问题的 CSS → 找出问题所在 / 正确改法

出题原则
  · 全部来自真实 review 现场的高频坑，不考偏门语法
  · 每题只有一个正确答案，其余三个都是**真实会犯的错**（不是凑数选项）
  · 解析不只说「选 A」，要说清浏览器实际会怎么渲染、为什么会那样
"""

ITEMS = []


def q(n, kind, stem, opts, ans, expl, ref="", code=None, codecap=""):
    """codecap：题干里代码块上方的说明（如「现有代码」）"""
    return {"n": n, "kind": kind, "stem": stem, "code": code, "codecap": codecap,
            "opts": opts, "ans": ans, "expl": expl, "ref": ref}


# ============================================================
# 第一部分 · 实现选择（给效果，选实现）
# ============================================================

ITEMS.append(q(
    1, "impl",
    "需求：让 .card 在其父容器 .wrap 内**既水平居中、又垂直居中**。下列实现正确的是：",
    [["A", ".wrap {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}"],
     ["B", ".card {\n  margin: auto;\n}"],
     ["C", ".wrap {\n  text-align: center;\n  vertical-align: middle;\n}"],
     ["D", ".card {\n  justify-content: center;\n  align-items: center;\n}"]],
    "A",
    "**A 是唯一能同时做到两轴的写法**：`justify-content` 管主轴（默认横向），"
    "`align-items` 管交叉轴（默认纵向），两个都得给。\n\n"
    "其余三个的真实表现：\n"
    "· **B**：`margin:auto` 只在 flex / grid 子项上才会垂直居中。父容器是普通块级时，"
    "它只吃掉左右剩余空间，**垂直方向完全不动**。\n"
    "· **C**：`text-align:center` 只影响行内内容；`vertical-align` 只对"
    "行内元素和表格单元格生效，**对块级子元素无效**——这是最常见的误用。\n"
    "· **D**：`justify-content` / `align-items` 是**容器**属性，写在子项上不产生任何效果。",
    "MDN · CSS Flexible Box Layout / vertical-align"))

ITEMS.append(q(
    2, "impl",
    "需求：三个 .col 在容器内**等宽平分**，且不受各自内容长度影响。下列实现正确的是：",
    [["A", ".col {\n  flex: 1;\n}"],
     ["B", ".col {\n  flex-grow: 1;\n}"],
     ["C", ".col {\n  width: 33.33%;\n}"],
     ["D", ".row {\n  justify-content: space-between;\n}"]],
    "A",
    "`flex: 1` 是 `flex-grow:1; flex-shrink:1; flex-basis:0%` 的简写——"
    "**关键在 `flex-basis:0%`**：先把所有子项的基础尺寸归零，再按 grow 比例分配剩余空间，"
    "所以内容长短不影响结果，三列严格等宽。\n\n"
    "**B 是最值得警惕的错法**：单写 `flex-grow:1` 时 `flex-basis` 仍是 `auto`，"
    "浏览器会先按**内容宽度**分配，再分剩余空间。三列文字长度不一致时宽度就不等了——"
    "这段代码看起来「能跑」，但布局会随文案长度漂移，属于典型的隐性缺陷。\n\n"
    "**C**：`33.33%` 没算上容器 padding 和列间距，且 flex 容器里宽度还会被 shrink 二次修正。\n"
    "**D**：`space-between` 只管**间距分配**，不管宽度，三列仍由内容决定宽窄。",
    "MDN · flex 简写 / flex-basis"))

ITEMS.append(q(
    3, "impl",
    "需求：单行文字超出容器宽度时**显示省略号**（…）。下列实现正确的是：",
    [["A", ".title {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}"],
     ["B", ".title {\n  text-overflow: ellipsis;\n}"],
     ["C", ".title {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}"],
     ["D", ".title {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}"]],
    "A",
    "这三个属性是**绑定套装**，缺一不可，各自职责不同：\n"
    "· `white-space:nowrap` —— 强制不换行，制造「一行放不下」的前提\n"
    "· `overflow:hidden` —— 真正把超出部分裁掉\n"
    "· `text-overflow:ellipsis` —— 只在**已经发生裁剪**时才画省略号\n\n"
    "**B / D 没写 `overflow:hidden`**：文字会直接溢出容器，省略号不会出现。\n"
    "**C 没写 `nowrap`**：文字会正常折行显示，压根不产生溢出，省略号同样不会出现。\n\n"
    "审查要点：看到 `text-overflow` 就往上翻两行确认另外两个在不在。",
    "MDN · text-overflow"))

ITEMS.append(q(
    4, "impl",
    "需求：让图片在容器内**等比缩放、不变形**，且不超过容器宽度。下列实现正确的是：",
    [["A", "img {\n  max-width: 100%;\n  height: auto;\n}"],
     ["B", "img {\n  width: 100%;\n}"],
     ["C", "img {\n  object-fit: contain;\n}"],
     ["D", "img {\n  max-width: 100%;\n  height: 100%;\n}"]],
    "A",
    "`max-width:100%` 只压上限、不放大，`height:auto` 让高度跟着按比例走——"
    "小图不会拉伸，大图不会溢出。**A 是唯一同时满足「不变形 + 不溢出 + 不放大」的写法。**\n\n"
    "· **B**：`width:100%` 是**无条件拉伸**，一张 200px 的小图会被拉满容器变模糊。\n"
    "· **C**：`object-fit` 管的是图片在**自身盒子内**怎么填充，"
    "它不会约束盒子尺寸——如果 img 本身已经超宽，照样溢出。\n"
    "· **D**：`height:100%` 脱离了父容器高度时会被解析成 auto，"
    "就算生效也是强制拉伸，长宽比直接崩。",
    "MDN · max-width / object-fit"))

ITEMS.append(q(
    5, "impl",
    "需求：让一个元素**不可见、不响应鼠标点击，但仍保留它占据的布局空间**。应该用：",
    [["A", ".item {\n  visibility: hidden;\n}"],
     ["B", ".item {\n  opacity: 0;\n}"],
     ["C", ".item {\n  display: none;\n}"],
     ["D", ".item {\n  position: absolute;\n  left: -9999px;\n}"]],
    "A",
    "三种「看不见」的语义差别，是 review 时经常被搞混的一组：\n\n"
    "· `visibility: hidden` —— 保留占位、不响应点击、屏幕阅读器跳过\n"
    "· `opacity: 0` —— 保留占位、**仍然响应点击**、屏幕阅读器照样读\n"
    "· `display: none` —— 不保留占位、不响应点击、完全移出渲染树\n\n"
    "**B 的坑最隐蔽**：`opacity:0` 元素照样接收点击。如果它盖在按钮上方，"
    "用户会遇到「点不动」的诡异 bug。\n"
    "**C** 会让布局塌陷，周围元素会跳位。\n"
    "**D** 是老式的「移出屏幕」hack，会凭空撑出滚动区域，现在不该再出现。",
    "MDN · visibility / opacity"))

ITEMS.append(q(
    6, "impl",
    "需求：给元素加一个 0.2 秒的过渡动画。**从性能角度看**，下列写法最合理的是：",
    [["A", ".box {\n  transition: opacity .2s, transform .2s;\n}"],
     ["B", ".box {\n  transition: all .2s;\n}"],
     ["C", ".box {\n  transition: width .2s, height .2s,\n              top .2s, left .2s;\n}"],
     ["D", ".box {\n  transition: 0.2s;\n}"]],
    "A",
    "`transition: all` 是 review 里**见到就该拦下来**的写法：\n"
    "· 它会监听**每一个**可动画属性，元素上任何样式变化都会触发过渡，"
    "包括你没预料到的（比如 JS 顺手改了个 `padding`）\n"
    "· 浏览器的插值计算量成倍上升，在低端机上直接掉帧\n\n"
    "**A** 只声明 `opacity` 和 `transform`——这两个是**合成属性**，"
    "过渡过程可以完全交给 GPU，不触发重排（reflow）和重绘（repaint），是最廉价的一类动画。\n\n"
    "**C** 过渡的四个属性全部会触发重排，每帧都要重新计算布局，是最贵的写法。\n"
    "**D** 语法错误：`transition` 至少需要「属性 + 时长」，只给时长不生效。",
    "MDN · transition / 渲染性能：合成层"))

ITEMS.append(q(
    7, "impl",
    "需求：字号要能**跟随用户在浏览器里设置的根字号统一缩放**（无障碍要求）。应该用哪个单位？",
    [["A", ".text {\n  font-size: 1rem;\n}"],
     ["B", ".text {\n  font-size: 1em;\n}"],
     ["C", ".text {\n  font-size: 120%;\n}"],
     ["D", ".text {\n  font-size: 2vw;\n}"]],
    "A",
    "`rem` 始终相对**根元素**（html）字号，全站一个基准，改一处全站跟着变，"
    "并且尊重用户在浏览器里调整的默认字号——无障碍场景的标配。\n\n"
    "**B 是这条需求里最该避免的**：`em` 相对**父元素**字号，会层层累积。"
    "嵌套列表里 `font-size:0.9em` 写三层，文字就缩到 `0.9³ ≈ 0.73` 倍，越往里越小。\n\n"
    "**C**：百分比和 `em` 一样相对父级，同样存在嵌套累积问题。\n"
    "**D**：`vw` 跟随视口宽度，跟用户设置的根字号无关；"
    "而且纯 `vw` 字号在超宽屏上会大到失控（通常要配 `clamp()` 夹住上下限）。",
    "MDN · CSS 值与单位 / rem vs em"))

ITEMS.append(q(
    8, "impl",
    "下列 CSS 属性中，**不会**被子元素继承的是：",
    [["A", "width"],
     ["B", "font-size"],
     ["C", "color"],
     ["D", "line-height"]],
    "A",
    "**盒模型类属性（width / height / margin / padding / border）都不继承**，"
    "这是 CSS 的基本设计——否则给父元素设个宽度，所有后代都被同一个宽度锁死了。\n\n"
    "会继承的主要是**文字相关属性**：`font-size`、`color`、`line-height`、"
    "`font-family`、`letter-spacing`、`text-align` 等。\n\n"
    "审查要点：看到有人写 `* { font-size: 14px }` 想「统一字号」其实是多余的"
    "（本来就继承），真正需要显式写的是那些**不继承**的属性。",
    "MDN · 继承 / CSS 属性分类"))

ITEMS.append(q(
    9, "impl",
    "需求：定义一个品牌色变量，并**在变量未定义时回退到一个安全值**。正确写法是：",
    [["A", ".btn {\n  color: var(--brand, #333);\n}"],
     ["B", ".btn {\n  color: var(--brand) #333;\n}"],
     ["C", ".btn {\n  color: var(--brand || #333);\n}"],
     ["D", ".btn {\n  color: var(--brand, --safe);\n}"]],
    "A",
    "`var()` 的**第二个参数是回退值**，用逗号分隔：变量未定义（或值无效）时取它。\n\n"
    "这个语法在组件库里非常实用——组件自带一套兜底色，"
    "接入方可以选择性覆盖 `--brand`，不覆盖也能正常渲染。\n\n"
    "· **B**：`var()` 后面直接跟另一个值是无效声明，整条 `color` 会被浏览器丢弃。\n"
    "· **C**：CSS 里没有 `||` 运算符，这是把 JS 写法搬过来了。\n"
    "· **D**：回退值必须是**具体值**，不能是另一个变量名（那样会变成字符串 `--safe`，"
    "对 `color` 来说无效）。真要链式兜底得写 `var(--brand, var(--safe, #333))`。",
    "MDN · 使用 CSS 自定义属性（变量）"))

ITEMS.append(q(
    10, "impl",
    "需求：用 Grid 做一个**两列等宽**布局。下列写法正确的是：",
    [["A", ".grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n}"],
     ["B", ".grid {\n  display: grid;\n  grid-template-columns: repeat(2 1fr);\n}"],
     ["C", ".grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n}"],
     ["D", ".grid {\n  display: grid;\n  grid: 2 / 1fr;\n}"]],
    "A",
    "`1fr` 表示「一份剩余空间」，`repeat(2, 1fr)` 即两列各占一半。\n\n"
    "**B 是最容易漏看的一处语法错误**：`repeat()` 的**两个参数之间必须是逗号**，"
    "写成空格会导致整条 `grid-template-columns` 声明无效——"
    "而且它**不会报错**，页面只是悄悄退化成单列堆叠，很容易在 review 中被放行。\n\n"
    "**C** 定义的是三列，不符合需求。\n"
    "**D**：`grid` 简写里的斜杠分隔的是 `grid-template-rows / grid-template-columns`，"
    "`grid: 2 / 1fr` 的含义是「两行、一列」，跟需求正好相反。",
    "MDN · grid-template-columns / repeat()"))

# ============================================================
# 第二部分 · 缺陷审查（给有问题的代码，找问题 / 选改法）
# ============================================================

ITEMS.append(q(
    11, "review",
    "审查下面这段 CSS：设计稿要求卡片总宽正好 200px，但实测占了 242px。"
    "**问题出在哪，该怎么改？**",
    [["A", "默认盒模型下 padding 和 border 会额外加算，应补上 `box-sizing: border-box;`"],
     ["B", "`width` 应该用 `max-width`，改成 `max-width: 200px;`"],
     ["C", "border 太粗，改成 `border: 0;`"],
     ["D", "padding 应该用百分比，改成 `padding: 10%;`"]],
    "A",
    code=".card {\n  width: 200px;\n  padding: 20px;\n  border: 1px solid #ccc;\n}",
    codecap="现有代码",
    expl="默认 `box-sizing: content-box` 时，`width` 只约束**内容区**，"
    "padding 和 border 往外叠加：200 + 20×2 + 1×2 = **242px**，正好对上实测值。\n\n"
    "**改法**：\n```css\n.card {\n  box-sizing: border-box;\n  width: 200px;\n  padding: 20px;\n  border: 1px solid #ccc;\n}\n```\n"
    "加了 `border-box` 后，`width` 变成**边框盒总宽**，padding 和 border 向内挤压内容区，"
    "总宽锁定 200px。\n\n"
    "顺带一句：现在主流做法是全局设一次\n"
    "`*, *::before, *::after { box-sizing: border-box; }`\n"
    "——审查时如果项目里**没有**这条全局重置，那么每一处手写的 width 都值得怀疑。\n\n"
    "**B** 只是把上限压住，内容区实际只剩 158px，布局仍然错位；"
    "**C / D** 都是在绕开问题而不是解决它。",
    ref="MDN · box-sizing"))

ITEMS.append(q(
    12, "review",
    "审查下面这段 CSS：`.badge` 想定位在**卡片**右上角，实际却跑到了**整个页面**的右上角。"
    "原因是什么？",
    [["A", "绝对定位的包含块是最近的**已定位祖先**，卡片缺 `position: relative;`"],
     ["B", "`top` 和 `right` 应该写成负值"],
     ["C", "应该用 `position: fixed;` 而不是 `absolute;`"],
     ["D", "缺少 `z-index`，被其他元素顶开了"]],
    "A",
    code=".card {\n  /* 只有静态样式 */\n  background: #fff;\n}\n\n.badge {\n  position: absolute;\n  top: 0;\n  right: 0;\n}",
    codecap="现有代码",
    expl="`position:absolute` 的元素，其 `top/right/bottom/left` 是相对**最近的已定位祖先**"
    "（`position` 不为 `static`）计算的。找不到，就一路往上退到**初始包含块**（视口）。\n\n"
    "所以卡片没设 `position` 时，badge 就直接贴到了页面/视口右上角——"
    "这是 CSS 定位里出现频率最高的一类 bug。\n\n"
    "**改法**：给卡片补上定位上下文\n```css\n.card {\n  position: relative;\n  background: #fff;\n}\n```\n"
    "注意 `relative` 本身**不会移动卡片**（没有偏移量），只是为子元素的绝对定位提供参照系。\n\n"
    "**C 是反向的**：`fixed` 相对视口定位，只会让问题更严重。\n"
    "**D**：`z-index` 管的是层叠顺序（谁盖谁），跟「相对谁定位」完全是两件事。",
    ref="MDN · position / 包含块"))

ITEMS.append(q(
    13, "review",
    "审查下面这段 CSS：`.modal` 设了很大的 `z-index`，却仍然被别的元素盖住。"
    "**最可能的原因是什么？**",
    [["A", "`z-index` 只对**已定位元素**生效，这里缺 `position`"],
     ["B", "9999 还不够大，应该改成 999999"],
     ["C", "需要加 `!important` 才能生效"],
     ["D", "`z-index` 不能用在 div 上，要换成 `span`"]],
    "A",
    code=".modal {\n  z-index: 9999;\n}",
    codecap="现有代码",
    expl="`z-index` 的作用前提是元素**参与层叠上下文的排序**，"
    "而 `position: static`（默认值）的元素不参与——属性会被直接忽略。"
    "加上 `position: relative / absolute / fixed` 之后才生效。\n\n"
    "**改法**：\n```css\n.modal {\n  position: fixed;\n  z-index: 9999;\n}\n```\n\n"
    "**B 是典型的无效尝试**：把 9999 加到 999999 通常还是被盖住，"
    "因为真正的原因不是数值不够。而且一旦 A 元素在某个**层叠上下文**内部，"
    "它的 `z-index` 再大也无法盖过那个上下文之外的元素——"
    "这时候要看的是父级有没有创建层叠上下文（`transform` / `opacity<1` / `filter` / "
    "`will-change` / `isolation:isolate` 都会创建）。\n\n"
    "**C**：`!important` 提升的是**声明优先级**，跟层叠顺序无关。",
    ref="MDN · z-index / 层叠上下文"))

ITEMS.append(q(
    14, "review",
    "审查下面这段 CSS：本意是给标题加 20px 上边距，"
    "结果**整个 .section 被一起顶了下去**（标题相对父容器的间距没出现）。"
    "这是什么问题，怎么修？",
    [["A", "父子外边距合并（margin collapsing），给 .section 加 `overflow: hidden;` 触发 BFC 即可"],
     ["B", "`margin-top` 应该改成 `padding-top: 20px;` 写在 .title 上"],
     ["C", "给 .section 加 `margin: 0;`"],
     ["D", "给 .section 加 `display: inline;`"]],
    "A",
    code=".section {\n  background: #f5f5f5;\n}\n\n.title {\n  margin-top: 20px;\n}",
    codecap="现有代码",
    expl="**外边距合并**：当父元素没有 `border` / `padding` / BFC 隔断时，"
    "第一个子元素的 `margin-top` 会与父元素的 `margin-top` 合并成一个，"
    "表现为——间距「跑到了父元素外面」，父容器整体被顶下去，而标题相对父容器顶部并没有间距。\n\n"
    "**修法（任选其一，效果相同）**：\n"
    "· 给父元素触发 BFC：`overflow: hidden;`（最常用，副作用最小）\n"
    "· 给父元素加 `padding-top: 1px;` 或 `border-top: 1px solid transparent;`\n"
    "· 父元素改用 flex / grid 布局（**Flex 和 Grid 容器内不发生外边距合并**）\n\n"
    "**B** 能「看起来修好」，但改的是内边距——如果设计稿要求的是外边距语义"
    "（比如相邻 section 之间要合并间距），换成 padding 会改变盒子尺寸，是另一种错误。\n"
    "**D**：`display:inline` 会让块级布局彻底失效。",
    ref="MDN · 外边距合并 / BFC"))

ITEMS.append(q(
    15, "review",
    "审查下面这段 CSS：flex 布局里有一段很长的英文文本，"
    "把容器**撑破了**（出现了横向滚动条）。问题的根源和修法是？",
    [["A", "flex 子项的 `min-width` 默认是 `auto`，不会收缩到内容宽度以下；应显式设 `min-width: 0;`"],
     ["B", "给容器加 `flex-wrap: wrap;` 让它换行"],
     ["C", "给容器加 `overflow: visible;`"],
     ["D", "给子项加 `width: 100%;`"]],
    "A",
    code=".row {\n  display: flex;\n}\n\n.name {\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}",
    codecap="现有代码",
    expl="这段「三个属性都写对了却不生效」，是 flex 布局最经典的陷阱。\n\n"
    "原因：flex 子项的 `min-width` 初始值是 **`auto`**，"
    "而 `auto` 对 flex 子项的含义是「不小于内容的最小尺寸」。"
    "所以哪怕写了 `flex:1`，子项也不会收缩到内容宽度以下——"
    "长文本直接把容器顶开，`overflow:hidden` 根本没机会生效。\n\n"
    "**修法**：\n```css\n.name {\n  flex: 1;\n  min-width: 0;      /* 关键 */\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n```\n"
    "审查口诀：**flex 子项上出现 `text-overflow: ellipsis`，就往下找 `min-width: 0`。**\n\n"
    "**B**：`flex-wrap:wrap` 会让整个子项换行，不是截断文本，改变了设计意图。",
    ref="MDN · flex 子项的自动最小尺寸 / min-width"))

ITEMS.append(q(
    16, "review",
    "审查下面这段 CSS：伪元素 `::before` 写好了样式但**页面上什么都不显示**。"
    "原因是？",
    [["A", "伪元素必须有 `content` 属性，缺了它整个伪元素不会生成"],
     ["B", "必须加 `display: block;` 才会显示"],
     ["C", "伪元素应该用单冒号 `:before`"],
     ["D", "必须加 `position: absolute;`"]],
    "A",
    code=".tag::before {\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  background: #f00;\n}",
    codecap="现有代码",
    expl="`content` 是伪元素的**生成条件**，不是可选装饰。缺了它，"
    "浏览器压根不会创建这个伪元素盒子，后面所有样式都不生效。\n\n"
    "**修法**（哪怕不需要显示文字，也要给个空串）：\n```css\n.tag::before {\n  content: \"\";        /* 关键：不能省 */\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  background: #f00;\n}\n```\n\n"
    "**C** 是个需要澄清的历史问题：单冒号 `:before` 是 CSS2 的老写法，"
    "**浏览器仍然支持**，不是错误。现代规范推荐双冒号 `::before` 以区分伪类，"
    "但看到老代码里的单冒号**不必当成缺陷报**——除非项目规范要求统一。\n\n"
    "**B / D**：`display` 和 `position` 都不是生成条件。",
    ref="MDN · ::before / content"))

ITEMS.append(q(
    17, "review",
    "同事在 review 里提出：下面这段选择器**逗号周围的空格不规范，会导致 h3 选不中**。"
    "这个意见对吗？",
    [["A", "不对。逗号前后空格（或没有空格）都不影响选择器语法，三个标题都会被选中"],
     ["B", "对。逗号后面必须有空格，否则 h3 选不中"],
     ["C", "对。逗号前面不能有空格，否则解析失败"],
     ["D", "对。`h3` 和 `{` 之间必须有空格"]],
    "A",
    code="h1, h2 ,h3 {\n  color: #333;\n}",
    codecap="被质疑的代码",
    expl="**这条 review 意见是误报，应该驳回。**\n\n"
    "CSS 选择器列表里，逗号是分隔符，其周围的空白字符**全部被忽略**。\n"
    "`h1, h2 ,h3` 与 `h1,h2,h3` 与 `h1 , h2 , h3` 完全等价，三个元素都会被选中。\n\n"
    "设计这道题意在说明另一件事：**审查也要避免吹毛求疵。**\n"
    "把格式偏好（空格位置、换行风格）包装成「bug」报出去，"
    "会消耗团队对真正缺陷的注意力，也会让 review 变成形式主义。\n\n"
    "正确的做法是：格式问题交给 Prettier / Stylelint 自动处理，"
    "人工 review 只关注**行为是否正确**。这条代码唯一值得说的也就是"
    "格式不统一，但它**不影响任何渲染结果**。",
    ref="CSS 选择器规范 · 选择器列表 / 空白处理"))

ITEMS.append(q(
    18, "review",
    "审查下面这段 CSS：这是一个**桌面优先**（先写宽屏、再用 max-width 收窄）的样式表，"
    "但中等屏幕下 `.card` 的宽度不对。问题在于：",
    [["A", "媒体查询顺序错了。max-width 系列必须**从大到小**排列，否则大断点会覆盖小断点"],
     ["B", "媒体查询不能嵌套，必须拆成独立文件"],
     ["C", "应把 `max-width` 全部改成 `min-width`"],
     ["D", "`.card` 应该在媒体查询外面写一次"]],
    "A",
    code=".card { width: 25%; }\n\n@media (max-width: 1200px) {\n  .card { width: 33.33%; }\n}\n\n@media (max-width: 768px) {\n  .card { width: 50%; }\n}\n\n@media (max-width: 1200px) {\n  .card { width: 100%; }   /* 后写，反而生效 */\n}",
    codecap="现有代码",
    expl="CSS 没有「媒体查询特殊优先级」——媒体查询里的规则和普通规则一样，"
    "**同权重时后写的赢**。\n\n"
    "这段代码最后又来了一个 `max-width:1200px` 的块。在 1000px 宽的屏幕上，"
    "第 2 块和第 4 块**同时命中**，后写的第 4 块覆盖前者，`.card` 变成 100%。\n"
    "结果就是：1000px 下本该 3 列，实际变成 1 列——而且第 2 块那段代码**完全死掉了**，"
    "看起来在，永远不生效。\n\n"
    "**修法**：桌面优先的 `max-width` 序列必须从大到小单向排列\n"
    "（1200 → 768 → 480），每个断点只出现一次：\n```css\n.card { width: 25%; }\n@media (max-width: 1200px) { .card { width: 33.33%; } }\n@media (max-width: 768px)  { .card { width: 50%; } }\n@media (max-width: 480px)  { .card { width: 100%; } }\n```\n\n"
    "反过来，移动优先用 `min-width` 时则必须**从小到大**排列。"
    "混用两套是维护噩梦，项目里应该统一选一种。",
    ref="MDN · 媒体查询 / 层叠顺序"))

ITEMS.append(q(
    19, "review",
    "审查下面这段 CSS：`.tip` 想用 `position: fixed` 固定在视口右下角，"
    "实际却跟着某个父容器一起滚动、定位也不对。**最可能的原因是？**",
    [["A", "某个祖先元素用了 `transform` / `filter` / `will-change`，为 fixed 创建了新的包含块"],
     ["B", "`bottom` 和 `right` 应该用负值"],
     ["C", "缺 `z-index`"],
     ["D", "父元素有 `overflow: hidden`"]],
    "A",
    code=".panel {\n  transform: translateX(0);   /* 某处动画留下的 */\n}\n\n.tip {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n}",
    codecap="现有代码",
    expl="这是 `position:fixed` 最反直觉的一处规范：**祖先元素上的 `transform`、"
    "`filter`、`backdrop-filter`、`perspective`、`contain:paint`、"
    "`will-change: transform` 都会成为 fixed 元素的包含块**，"
    "让它表现得像 `absolute` 一样相对该祖先定位。\n\n"
    "排查时最坑的地方在于：`transform: translateX(0)` 这种"
    "**看起来什么都没做**的声明（常是动画库的残留、或为了触发硬件加速加的）同样会触发。"
    "代码里没有任何「定位」相关的字眼，但 fixed 就是失效了。\n\n"
    "**修法**：\n"
    "· 把 `.tip` 移出带 `transform` 的祖先（常配合 React Portal 挂到 body 下）\n"
    "· 或去掉祖先上那个不必要的 `transform`\n\n"
    "**D** 是常见误判：`overflow:hidden` 会**裁剪** fixed 元素的内容，"
    "但不会改变它的定位参照系——症状不同，别搞混。",
    ref="MDN · position: fixed / 包含块（transform 的影响）"))

ITEMS.append(q(
    20, "review",
    "审查下面这段 CSS：`.btn:hover` 想让按钮在悬停时变色，但**悬停时完全没反应**。"
    "问题是什么？",
    [["A", "选择器权重不够：`#submit`（ID）压过了 `.btn:hover`，把 hover 提到同等或更高权重即可"],
     ["B", "`:hover` 只能用在 `a` 标签上"],
     ["C", "必须给 `.btn` 加 `cursor: pointer;` 才会触发"],
     ["D", "`background` 不能被 hover 改变，要改用 `background-color`"]],
    "A",
    code="#submit {\n  background: #1677ff;\n}\n\n.btn:hover {\n  background: #0958d9;\n}",
    codecap="现有代码",
    expl="**权重比较**（a,b,c,d 四位数，逐位比）：\n"
    "· `#submit` = (0, **1**, 0, 0) —— 1 个 ID\n"
    "· `.btn:hover` = (0, 0, **2**, 0) —— 1 个类 + 1 个伪类\n\n"
    "ID 位（1）大于类位（0），所以 **`#submit` 无条件胜出**，"
    "hover 时颜色不变。\n\n"
    "**修法（按推荐程度排序）**：\n"
    "1. 把基础样式也改成类选择器 `.btn { ... }` —— **首选**，把 ID 从样式表里彻底拿掉\n"
    "2. 同等权重并后置：`.btn:hover` → `#submit:hover`（能生效但继续积累 ID 债务）\n"
    "3. 用 `!important` —— **不建议**，它会让后续所有覆盖都失效，是技术债的起点\n\n"
    "审查要点：样式表里出现 **ID 选择器**本身就是该被标记的信号——"
    "它的权重太高，会让后面所有基于类的覆盖都失效，"
    "这也是为什么 BEM / CSS Modules / Tailwind 这类方案都刻意避开 ID。\n\n"
    "**B / C / D 都不对**：`:hover` 对所有元素生效；`cursor` 只改鼠标指针形状；"
    "`background` 简写完全可以参与层叠。",
    ref="MDN · CSS 优先级（Specificity）"))
