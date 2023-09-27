// Importamos un bloque especial llamado ContextMovieCard desde otro lugar cercano.
import { ContextMovieCard } from "../components/ContextMovieCard"

// Vamos a construir nuestra casa de bloques principal llamada LandingPage.
export function LandingPage() {
  // Aquí, tomamos una caja grande y la etiquetamos como div. Esta caja va a ser nuestra casa de bloques.
return (
    <div>
      {/* Ahora es el momento emocionante: ¡vamos a agregar un bloque especial dentro de nuestra casa! */}
      {/* Tomamos el bloque ContextMovieCard que trajimos antes y lo ponemos dentro de nuestra casa de bloques. */}
    <ContextMovieCard />
    {/* Finalmente, cerramos nuestra caja grande y completamos nuestra casa de bloques. */}
    </div>
)
}