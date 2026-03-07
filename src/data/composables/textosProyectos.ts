import { computed } from "vue"

const miniDescripciones: Record<string, string> = {
  "diseño/koaka": 
  `Kaoka es una identidad visual creada a partir de un encargo de una empresa de chocolate que busca llegar a un público más joven, manteniendo precios asequibles. Entre sus productos se pueden encontrar cuatro barras de chocolate con su empaque, en el cual hay distintos diseños que representan el sabor de cada uno: té chai y jengibre, leche y canela, naranja y almendra, y cacao puro 90%.
  
Por otra parte, en cuanto al proceso de creación, se realizó en un grupo de 4 personas siguiendo el briefing del cliente. Se empezó ideando el estilo y el tono que se quería dar a Kaoka. De esta forma, se continuó diseñando las cajas con un personaje que representara cada sabor del chocolate, al igual que su paleta de colores complementarios. Al tener definido esto, se procedió a realizar las bolsas y la caja del welcomepack.

  Mi participación se enfocó en el proceso de ideación y creación de personajes y empaques de chocolate, dibujando y vectorizando.
  
  Créditos: Jiayi Li, Lucía Miralles, María José Pineda, Jiaqi Ye`,



  "diseño/oniro": 
  `Oniro es un juego de mesa enfocado en el bienestar emocional y la salud mental, especialmente en jóvenes. Inspirado en el mundo de los sueños, los jugadores deberán afrontar pesadillas mediante el diálogo para convertirlas en dulces sueños. El jugador con mayor cantidad de dulces sueños al sonar la alarma será el ganador.
  
  El juego se compone de un tablero interactivo que puede cambiar en cada partida. Además, las cartas de sueños se dividen entre pesadillas y dulces sueños. La dinámica principal es que, cuando los jugadores caen en una casilla de sueños, tendrán que tomar una carta de la baraja de sueños. Si es una pesadilla, cada jugador dibujará cómo afrontaría esa pesadilla y se votará la mejor solución, convirtiéndola en un dulce sueño. Las pesadillas representan escenarios o emociones que las personas pueden estar pasando, como la soledad, la incertidumbre, la pérdida de un ser querido, etc.
  
  En cuanto al proceso de creación, se realizó en un grupo de 4 personas siguiendo el briefing del cliente. Se empezó ideando el estilo, el tono y los problemas de salud mental que se querían abordar y cómo podían ser incorporados en un juego de mesa. De esta manera, se continuó diseñando cada carta, que es única y diferente a las demás, con sus personajes y con una paleta de morados que invoca al mundo onírico. Por otra parte, se diseñó el tablero con sus fichas y se modelaron, en 3D, las figuras de los jugadores para ser impresas.
  
  Mi participación se enfocó en la ideación, además del diseño de cartas, tablero y maquetación de las instrucciones, así como en la participación en la sesión de fotografía y edición.
  
  Créditos: Jiayi Li, Lucía Miralles, María José Pineda, Jiaqi Ye`,



  "diseño/childhood": 
  `La colección tiene como objetivo trasladar a la persona a un momento de su infancia a través de objetos que hacen alusión a la niñez, siendo decorativos, pero a su vez, funcionales. Inspirados en una empresa de decoración llamada DOIY, presentamos un salero y un pimentero en forma de crayones y tres sujetavelas en forma de cubos de letras que pueden ser puestos en conjunto o por separado.
  
  Durante el proceso de creación, se trabajó en un grupo de 4 personas. Se comenzó con la ideación de objetos que fuesen decorativos y funcionales, con una temática que destacara y se incorporara a DOIY. Luego de la elección de objetos infantiles, se empezó el modelado de los crayones, los cuales fueron modelados primero con papel aluminio y cables de metal, y posteriormente fueron cubiertos con la arcilla polimérica para darles la forma correcta. Para finalizar, se hornearon, pintaron y barnizaron.
  
  Por otro lado, para los cubos se hizo la mezcla de escayola para tres moldes; luego se secaron y tallaron. Cada lado debía estar lo más liso y recto posible para que cada uno fuese igual. Se continuó con la talla de las letras, el pulido y la aplicación del protector. Por último, se pintaron con una paleta de colores primarios y un tono beige para simular la madera, y se barnizaron
  
  Mi participación se enfocó en el proceso de ideación, modelado de los crayones y sus respectivos diseños con pintura. Mientras que, para los cubos, participé en la realización de la mezcla de la escayola, el tallado de las letras y en la parte de pintura y barnizado.

  Créditos: Fanny Lau, Lucía Miralles, María José Pineda, Sofía Vacas`,



  "diseño/revistas": 
  `La maquetación de la primera revista se hizo de forma individual para el artículo escrito por Elena Martínez Soriano: Salud Mental en Diseñadores. Este diseño es exclusivamente tipográfico, donde se omiten imágenes. Se intenta incorporar los textos de forma sistemática y dinámica para facilitar la lectura.
  
  Por otro lado, la maquetación del texto Valencia, capital mundial de la innovación tecnológica fue un diseño colaborativo con otra persona, en el cual se dividió el trabajo entre maquetación y búsqueda de imágenes y tipografías. Por mi parte, estuve maquetando textos para que encajaran con la distribución de imágenes.
  
  Créditos: María José Pineda, Sofía Vacas`,



  "diseño/letras": 
  `Este es un diseño individual para la participación en el reto para diseñadores 36 Days of Type, que se celebra cada año en plataformas de internet. Las personas deben crear una familia tipográfica creativa y distinta a las normas establecidas. De esta manera, me inspiré en las formas amorfas y las lámparas de lava, las cuales siempre están en movimiento, son cambiantes e inesperadas.
  
  Para el proceso creativo, hubo un periodo de investigación de formas, texturas y colores, lo cual me llevó a escoger la temática mencionada anteriormente. Comencé por el bocetado de las letras hasta escoger tres (X, A, S), ya que sus formas me parecían muy interesantes. Luego, fueron vectorizadas y, por último, se les aplicaron colores hasta llegar a la paleta complementaria de naranja y azul, con una textura de granulado y un efecto difuminado.
  
  Créditos: María José Pineda`,



  "diseño/campana": 
  `La campaña titulada A mí también me pasa sintetiza, con el lema Generaciones distintas, emociones compartidas, la idea principal del proyecto: reconocer las experiencias y emociones compartidas entre generaciones como punto de partida para generar empatía e interacción.
  
  En cuanto al proceso de creación, se realizó con un grupo de 6 personas siguiendo el briefing de la campaña. Se tuvo muy presente el marco teórico de la igualdad para el proceso de ideación; cada elemento se tuvo en cuenta al momento de decidir la estética y el mensaje, desde el anuncio hasta los elementos impresos. La campaña cuenta con un anuncio publicitario de 1 minuto, al igual que un video corto para redes sociales. Por otro lado, tenemos el cartel, la marquesina y el tríptico informativo. Cada elemento cuenta con una paleta de azules y morados,con dos personajes presentes: una chica y una anciana, que se pueden ver en el anuncio publicitario.
  
  Mi participación se enfocó en la ideación del marco teórico, en la parte de preproducción en cuanto al guion literario y storyboard, y en la parte de producción para el anuncio publicitario. Además, apoyé con la maquetación de textos para los elementos impresos.
  
  Créditos: Claudia Bernabé, Fanny Lau, Jiayi Li, Lucía Miralles, María José Pineda, Jiaqi Ye`,



  "diseño/carteles": 
  `El primer cartel fue realizado para participar en una competencia para la imagen del I Congreso Iberoamericano de Creación y Fabricación Digital de la UPV. Se hizo en grupo y se buscaba representar el elemento principal del congreso, el cuál era la creación de objetos 3D en múltiples áreas, de esta forma se decidió emplear una malla como figura distintiva ya que se presenta mucho en la impresión 3D. El cartel tiene una composición en zigzag, una tipografía sans serif y una paleta de azul oscuro para mostrar profesionalidad e innovación.
  
  Por otro lado, el segundo cartel se realizó para una obra de teatro de Los siete pecados capitales dirigida para un público joven. El pecado que nos tocó a mí pareja y a mí fue la pereza. De esta manera empezamos a buscar cosas que representen la pereza y se nos ocurrió la ropa caída en una silla como si fuese el cuerpo de una persona que ha sido consumida por la pereza. A partir de eso, tuvimos una sesión de fotografía para el cartel y posteriormente escogimos una composición dinámica y con una tipografía itálica para el título que hace alusión a la pereza y finalmente se escogió una paleta de tonos morados suaves.
  
  En estos 2 carteles participé en todo el proceso desde la ideación hasta la maquetación de textos, sin embargo, fui alternando con mis compañeras de forma que el trabajo fue equitativamente distribuido.
  
  Créditos: Fanny Lau, Lucía Miralles, María José Pineda`,




  "diseño/extranjeros conectados": 
  `Extranjeros Conectados es una identidad visual creada a partir de un encargo de un cliente real para una gestoría de extranjería. Se enfoca en conectar con sus clientes, principalmente extranjeros, y brindar un servicio de calidad y cercanía.
  
  Tomando en cuenta lo anteriormente mencionado, empecé el proceso de ideación en busca de elementos que captaran los valores del cliente. Luego de varios bocetos, escogí un logotipo que toma la letra e de extranjeros y la modifica para que tenga cierta forma de un brazo que abraza, añadiendo una elipse en la parte superior de la e para representar a una persona. Por otro lado, la paleta utiliza unos tonos turquesa para brindar frescura a la marca, pero a su vez mostrar elegancia; asimismo, su tipografía es suave pero profesional.
  
  Por otro lado, se ha hecho seguimiento de otros elementos como los volantes o las tarjetas de visita, siguiendo las pautas de diseño establecidas.
  
  Créditos: María José Pineda`,



  "ilustracion/ilustracion": 
  `Para la novela literaria Orgullo y prejuicio, escrita por Jane Austen, ilustré la portada, contraportada, guardas y 2 páginas dentro de la novela mediante la técnica tradicional de pintura acrílica.
  
  El proceso creativo inició mediante la ideación del estilo gráfico y diseño de personajes, buscando referentes históricos de vestimenta y lugares. A partir de eso, hice bocetos en digital con distintas paletas para escoger una. Luego, imprimí los bocetos y los calcé en papel especial para ser pintados. Se usó una paleta complementaria entre el azul turquesa y unos tonos de naranja rojizo. Para finalizar, fueron escaneados y maquetados entre los textos correspondientes a las ilustraciones y se escogió una tipografía serif para complementar la elegancia y la época del libro.
  
  Créditos: María José Pineda`,

  "ilustracion/comic": 
  `En este cómic personal llamado ¿Cuándo jugará conmigo? se cuenta una historia de mi infancia, en la cual añoraba tener a una hermana con quien jugar; sin embargo, al nacer ella, me di cuenta de que solo lloraba y dormía, y que no jugaría conmigo hasta muchos años después.
  
  Comencé con el guion y storyboard de la historia, haciendo uso de recursos como la escaleta para organizar bien las ideas. Luego, continué con la ficha de personaje y creación de la hoja conceptual con algunas expresiones. Además, hice bocetos (todos dibujados en papel) de la composición de las dos páginas.
  
  Después, realicé un boceto final de forma analógica que posteriormente fue calcado en un papel más grueso y que, por último, fue entintado. Finalmente, fue escaneado y pintado, añadiendo sombras y texturas con pinceles de crayón en Photoshop.
  
  Créditos: María José Pineda`,



  "ilustracion/noticia": 
  `Para el artículo Inmigrantes no, excepto si son prostitutas de Ana Bernal-Triviño, se intenta representar el contenido del texto a través de la ilustración, la cual muestra a una persona con un cartel en contra de los inmigrantes, mientras que detrás de él le sale un monstruo que se come a una mujer.
  
   El proceso creativo inició mediante la búsqueda de palabras o frases que representaran el texto. A partir de eso, hice pequeños bocetos de cada palabra para ver cómo se podían unir y crear un concepto concreto. Luego de encontrar el concepto de la doble cara y la hipocresía, empecé a bocetear la ilustración y probar técnicas. La ilustración final fue hecha con tinta china, con un efecto de degradado. Para finalizar, se escaneó y maquetó en el artículo, probando distintas composiciones hasta llegar a la escogida.
  
   Créditos: María José Pineda`,

  "ilustracion/dibujos": 
  `En este apartado, presento dibujos e ilustraciones personales realizadas para mi clase de Fundamentos del Dibujo sobre anatomía y perspectiva, y algunos otros personales de mi sketchbook, utilizando distintas técnicas, desde lápices de grafito, pasteles, tinta china y acuarela hasta arte digital.
  
  Créditos: María José Pineda`,

  "audiovisuales/bodegonesyretratos":
  `En este apartado, presento fotografías de bodegones y retratos tomadas en grupo. Escogimos una temática elegante de joyas y flores, en las cuales nos basamos para las composiciones e iluminación de cada foto. Finalmente, fueron retocadas mediante Photoshop.
  
  Créditos: Fanny Lau, Jiayi Li, Lucía Miralles, María José Pineda, Jiaqi Ye`,

  "audiovisuales/campanavideo":
  `La campaña titulada A mí también me pasa sintetiza, con el lema Generaciones distintas, emociones compartidas, la idea principal del proyecto: reconocer las experiencias y emociones compartidas entre generaciones como punto de partida para generar empatía e interacción.
  
  Se tuvo en mente el marco de igualdad al momento de crear el guion, ya que necesitaba transmitir bien el mensaje. Se comenzó trabajando en el guion literario y posteriormente en el guion técnico y el storyboard. Luego, durante la producción, se fue a las localizaciones para grabar con las actrices. Finalmente, en la postproducción se editaron los clips y se añadieron las voces en off.
  
  Estuve participando en el guion literario, técnico y storyboard. Además, estuve presente durante la grabación como ayudante de sonido, claquetista y como polivalente.
  
  Créditos: Claudia Bernabé, Fanny Lau, Jiayi Li, Lucía Miralles, María José Pineda, Jiaqi Ye`,

  "audiovisuales/jeffwall":
  `Para este apartado, presento 8 fotografías inspiradas en el reconocido fotógrafo Jeff Wall, quien se inspira en pinturas históricas, reinterpretándolas en contextos contemporáneos, como Delacroix o Velázquez. Además, es reconocido por el fotoconceptualismo: fotografías cuidadosamente planificadas y estudiadas, y por tocar temas sociales y políticos a través de escenas de la vida cotidiana.
  
  Para nuestras fotografías, iniciamos haciendo una lista de temas sociales que podíamos abordar y, a partir de eso, buscamos localizaciones que podrían servir. Luego de tomar cada fotografía, en el postprocesado, eliminamos manchas, cambiamos tonos y ajustamos elementos. Cada fotografía toca un tema social, como la distancia que provocan los celulares, el estrés causado por los estudios, el trabajo infantil y la dificultad de compra de vivienda para las nuevas generaciones.
  
  Créditos: Fanny Lau, Jiayi Li, Lucía Miralles, María José Pineda, Jiaqi Ye`,

  "audiovisuales/diario":
  `Diario de una planta es un cortometraje en base al ODS de Producción y Consumo Responsable, en el cual se ve cómo una planta va siendo descuidada por su dueña, ya que esta se vuelve obsesionada con las compras. Hace alusión a cómo el consumismo descuida y daña el planeta. Tiene un tono humorístico que luego se va tornando en algo más serio hacia el final del corto.
  
  Para la producción de este corto, se tuvieron tres fases. La preproducción, en la cual se decidió el ODS y la historia que queríamos contar, además de realizar todo lo relacionado con guiones e itinerarios de producción. En la fase de producción se fue a las localizaciones establecidas para grabar con todos los objetos y herramientas, desde cámara hasta pértiga para el sonido. Por último, en la postproducción se editó el cortometraje, añadiendo las voces en off, tipografías y los clips correctos con sus efectos correspondientes.
  
  En cuanto a mi participación, estuve en el puesto de productora, haciéndome cargo del plan de rodaje y de toda la organización de elementos, localizaciones e itinerarios para un buen flujo de producción. Además, estuve presente durante la grabación como polivalente y claquetista, y como ayudante de cámara para algunas escenas del exterior.
  
  Créditos: Cristina Caro, Isabella Checa, Adriana Herrera, Fanny Lau, Antía Mouriño, Jiayi Li, Lucía Miralles, María José Pineda, Michelle Soto, Jiaqi Ye`,

  

}

export function textosProyectos(categoria: () => string, id: () => string) {
  const miniDescripcion = computed(() => {
    const key = `${categoria()}/${id()}`.toLowerCase()
    return miniDescripciones[key] ?? "Mini descripcion aun no apareceeee, apurateeeee"
  })

  return { miniDescripcion }
}