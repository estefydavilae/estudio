# Centro de estudio

Tus 10 juegos de este semestre en una sola "app", con menú por asignatura.

## Subirlo a internet (gratis, una sola vez, ~10 min)

1. Crea una cuenta en **github.com** (si no la tienes).
2. Arriba a la derecha: **+ → New repository**. Nombre: `estudio`. Márcalo como **Public** y pulsa **Create repository**.
3. En la página del repositorio vacío pulsa **uploading an existing file**.
4. Descomprime el zip, abre la carpeta y arrastra **todos los archivos** (son 17, sin subcarpetas). Pulsa **Commit changes**.
5. Ve a **Settings → Pages**. En *Branch* elige `main` y carpeta `/ (root)`. **Save**.
6. Al cabo de 1–2 minutos tendrás tu dirección: `https://TU-USUARIO.github.io/estudio/`

## Ponerla en la pantalla de inicio

- **iPhone (Safari):** abre la dirección → botón Compartir → **Añadir a pantalla de inicio**.
- **Android (Chrome):** abre la dirección → menú ⋮ → **Instalar app** / **Añadir a pantalla de inicio**.

Se abre a pantalla completa, con su icono, y funciona sin conexión después de abrirla una vez.
En cada juego hay un botón redondo ⌂ abajo a la izquierda para volver al menú.

## Cosas a saber

- El progreso (rachas, XP, tarjetas) se guarda **en cada dispositivo**: lo que hagas en el móvil no aparece en el ordenador.
- El progreso que tenías dentro de Claude no se traspasa; aquí empiezas de cero.
- En el Simulacro de Genética, el botón "Corregir con Claude" no aparece fuera de Claude; la respuesta modelo y la rúbrica sí.

## Añadir un juego nuevo

1. Guarda el HTML del juego junto a `index.html`.
2. En `index.html`, dentro de `SUBJECTS`, añade una línea como las demás con el nombre del archivo.
3. En `sw.js`, añade la ruta del archivo a la lista y sube la versión (`cde-v2`).
4. Sube los archivos cambiados a GitHub (Add file → Upload files).

O pídeselo a Claude: "añade este juego a mi centro de estudio".
