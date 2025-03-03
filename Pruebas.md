**# Tabla de Casos de Prueba - Proyecto Veterinaria de Gatos**

## 📌 Introducción
Esta tabla contiene los casos de prueba para verificar el correcto funcionamiento del sistema, asegurando que cada funcionalidad cumpla con los requisitos esperados.

---

## 📊 **Casos de Prueba**

| ID  | Funcionalidad                     | Caso de Prueba                                  | Datos de Entrada                  | Resultado Esperado                        |  | Estado |
|-----|----------------------------------|-----------------------------------------------|----------------------------------|--------------------------------------|-------------------|--------|
| 1   | Validación del formulario       | Intentar enviar formulario vacío             | Sin datos                       | Mensaje de error en campos obligatorios |                   |    ✅    |
| 2   | Validación del formulario       | Ingresar nombre sin caracteres               | ""                              | Error: Nombre requerido              |                   |    ✅    |
| 3   | Validación del formulario       | Ingresar edad negativa                       | "-2"                            | Error: Edad debe ser positiva        |                   |    ✅    |
| 4   | Validación del formulario       | Ingresar edad no numérica                    | "abc"                           | Error: Solo se permiten números      |                   |     ✅   |
| 5   | Validación del formulario       | Seleccionar raza sin elegir opción           | No seleccionar                  | Error: Raza requerida                |                   |     ✅   |
| 6   | Validación del formulario       | Enviar formulario con todos los datos        | Datos válidos                    | Registro exitoso                     |                   |    ✅    |
| 7   | Interacción con gráficos        | Comprobar carga de gráficos en formulario    | Acceder a formulario             | Gráficos muestran datos correctos    |                   |    ✅    |
| 8   | Accesibilidad                   | Ejecutar Axe Dev Tools en la página          | Ejecutar test                    | Sin errores graves                    |                   |    ✅    |
| 9   | Integración con API externa     | Obtener imágenes aleatorias de gatos        | Acceder a formulario             | Imágenes cargadas correctamente      |                   |    ✅    |
| 10  | Cambio de tema oscuro           | Activar/desactivar el modo oscuro           | Presionar botón de modo oscuro  | Cambio de colores en la interfaz    |                   |    ✅    |
| 11  | Accesibilidad                   | Verificar contraste de colores              | Inspeccionar interfaz            | Texto legible en fondo adecuado      |                   |     ✅   |
| 12  | Seguridad                       | Intentar inyectar código en formulario      | `<script>alert('XSS')</script>`  | Bloqueo del intento de inyección     |                   |     ✅   |
| 13  | Integración LocalStorage        | Registrar datos y recargar página           | Llenar formulario y recargar     | Datos siguen almacenados correctamente |                   |     ✅   |
| 14  | Navegación                      | Comprobar enlaces del navbar                | Clic en cada enlace              | Redirección correcta a cada página  |                   |     ✅   |
| 15  | Responsividad                    | Revisar vista móvil                         | Redimensionar ventana            | Elementos adaptados correctamente   |                   |     ✅   |

---

## ✅ **Instrucciones de Ejecución**
1. **Ejecuta cada prueba** con los datos de entrada indicados.
2. **Registra el resultado obtenido** en la columna correspondiente.
3. **Marca el estado** como ✅ (Aprobado) o ❌ (Fallido).
4. **Corrige errores si es necesario** y vuelve a ejecutar la prueba.

📢 **Nota:** Si hay fallos, documenta los errores en la sección de observaciones para su corrección.

---

## 📝 **Observaciones**
*(Espacio para registrar errores o mejoras necesarias en el sistema).*

