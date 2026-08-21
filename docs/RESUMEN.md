# Cómo quedó tu portafolio

Un recorrido en lenguaje llano por lo que cambió. Si quieres el detalle técnico
(tokens, breakpoints, decisiones de arquitectura), está en
[`CONTEXTO-TECNICO.md`](./CONTEXTO-TECNICO.md).

---

## La idea en una frase

Tu portafolio pasó de **cuatro páginas separadas** a **una sola página con scroll**,
con estética oscura y efecto de vidrio esmerilado, pensada para que un reclutador
entienda quién eres en menos de treinta segundos sin hacer un solo clic.

---

## Qué ve alguien que entra hoy

**Arriba del todo** hay una barra que te acompaña mientras bajas. Tiene tu inicial,
los enlaces a cada sección, un botón para cambiar entre tema oscuro y claro, y el
acceso a tu CV. En el celular los enlaces se guardan en un menú hamburguesa.

**Lo primero que lee** es tu nombre, un saludo directo y una etiqueta verde que
parpadea suavemente: *Disponible para trabajar*. Debajo, dos botones — *Ver
proyectos* y *Contacto* — y tus enlaces a GitHub, LinkedIn y WhatsApp. A la
derecha, una tarjeta de vidrio con tu foto y tres datos rápidos: idiomas, base
técnica y tu forma de trabajar.

**Sobre mí** cuenta tu historia en tres párrafos: de dónde vienes (soporte, redes,
atención bilingüe), qué haces ahora, y qué buscas. Al lado, tu experiencia en Iqor,
WebHelp, Avon y Teleperformance, y tu formación de UNIMINUTO y E4CC.

**Habilidades** tiene tres pestañas — Frontend, Backend, Herramientas — que filtran
de verdad al hacer clic. Cada tecnología aparece con su logo y una línea de para
qué la usas. **No hay barras de porcentaje**: decir "React 80%" no significa nada
para quien lee; "Hooks, componentes, router" sí.

**Proyectos** muestra tus tres trabajos en tarjetas que se elevan al pasar el
cursor, con la captura haciendo un zoom sutil. Cada una explica **qué problema
resuelve** el proyecto, no solo con qué está hecho. BLUCO Travel lleva un
distintivo de *Cliente real*, porque eso vale más que cualquier tecnología en la
lista.

**Contacto** ofrece dos caminos: los enlaces directos — con un botón para copiar tu
correo de un toque — y un formulario limpio que envía el mensaje a tu bandeja.

---

## Los cambios que más se notan

**Ya no hay que navegar.** Antes, tu información estaba repartida en cuatro páginas
y la portada era un cohete con un "haz clic para saber más de mí". Un reclutador con
cuarenta perfiles que revisar no hace ese clic. Ahora todo está en una sola página.

**Las descripciones de proyectos cambiaron de enfoque.** Antes decían *"Alta, baja y
modificación de un registro de clientes. Realizado en HTML, CSS, PHP…"*. Ahora dicen
qué problema resuelven — *"reemplaza la hoja de cálculo compartida"* — y las
tecnologías van aparte, en etiquetas. Quien contrata quiere saber si sabes resolver
problemas, no si sabes listar herramientas.

**El sitio carga casi la mitad de rápido.** Pesaba 6,3 MB y ahora pesa 3,6 MB. La
causa principal: había una imagen de fondo de 2,2 MB que se descargaba en todas las
páginas y ya no está.

**El formulario ya no usa ventanas emergentes.** Antes salía un `alert()` del
navegador. Ahora la confirmación aparece en la propia página, y el botón se bloquea
mientras envía para que no se mande dos veces por accidente.

---

## Tres errores que estaban rompiendo tu despliegue

Estos no tenían que ver con el diseño, pero aparecieron por el camino:

1. **Una letra mayúscula.** El código pedía `bluco.png` pero el archivo se llama
   `BLUCO.png`. En tu Mac daba igual; en los servidores de GitHub, que sí
   distinguen mayúsculas, **el build fallaba**.

2. **El archivo de despliegue automático estaba en el lugar equivocado.** Estaba en
   `.github/` y GitHub lo busca en `.github/workflows/`. Nunca llegó a ejecutarse.

3. **Y apuntaba a la rama equivocada.** Estaba configurado para activarse en `main`,
   pero tu rama se llama `master`. Ni siquiera existe una rama `main`.

Los tres están corregidos.

---

## Cosas que quedaron pendientes

### Tienes que tocar EmailJS (5 minutos)

El formulario ahora pregunta por el **asunto** del mensaje en vez del teléfono
— a quien te escribe por una vacante le sirve más decirte de qué se trata que
dejarte su número.

Pero tu plantilla de correo todavía espera el campo "teléfono". **Hasta que la
cambies, ese dato te va a llegar en blanco.**

Cómo arreglarlo: entra a `dashboard.emailjs.com`, abre *Email Templates*, busca
la plantilla `template_9sihg0c`, cambia donde dice `{{telefono}}` por `{{asunto}}`
y guarda. Eso es todo — no hay nada que tocar en el código.

Esto no lo pude hacer yo porque tu cuenta de EmailJS es tuya: la plantilla no vive
en el proyecto, vive en su página web, y entrar requeriría tu contraseña.

Si prefieres no tocar nada allá, se puede devolver el campo a "teléfono" y todo
funcionaría con la plantilla tal como está hoy. Es cuestión de decirlo.

### Hay una librería que ya no se usa

`react-router-dom` sigue instalada en el proyecto, pero **ya no la usa nadie**. Era
lo que hacía funcionar las cuatro páginas separadas; al pasar a una sola página dejó
de tener sentido.

No la desinstalé por cuenta propia porque eso modifica el archivo de dependencias, y
preferí preguntarte antes. No hace daño estando ahí — ya no se incluye en lo que
descargan los visitantes — pero es peso muerto en la lista.

Para quitarla: `npm uninstall react-router-dom`.

### Otras dos, menores

**Tus imágenes pesan mucho.** Tu foto de perfil son 1,7 MB y la captura de BLUCO 1 MB.
Entre las dos son tres cuartas partes del peso del sitio. Convertirlas a formato
WebP las dejaría en una fracción de eso.

**Las capturas de proyectos se ven pixeladas** al tamaño que tienen ahora las
tarjetas. Vale la pena tomar capturas nuevas más grandes.

---

## Una cosa que no pude comprobar

**No vi el sitio funcionando con mis propios ojos.** No logré conectar un navegador
durante el trabajo, así que verifiqué por otras vías: que compila sin errores, que
el revisor de código no encuentra problemas, y que cada archivo se procesa
correctamente.

Todo eso dice que el código está bien escrito. **No dice que se vea bien.** Ábrelo
tú y dime qué falla — es muy posible que haya algún detalle de espaciado o de color
que solo se nota mirando.

---

## Cómo verlo

```bash
npm run dev
```

Y abre `http://localhost:5174/Portfolio/`

El diseño original, con las tres vistas (escritorio, móvil y la hoja de estilos),
sigue disponible aquí:
https://claude.ai/code/artifact/e5467165-c970-4d38-89f5-ad02b2960930

---

## Nada está confirmado todavía

**No he hecho commit de ningún cambio.** Todo está en tu carpeta esperando que lo
revises. Si algo no te convence, se deshace sin dejar rastro.
