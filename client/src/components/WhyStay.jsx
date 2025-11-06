import Section from './Section';

export default function WhyStay() {
  return (
    <Section id="historia" title="Nuestra Historia" subtitle="Casi 100 años de tradición y magia">
      <div className="space-y-4">
        <p className="text-gray-700">Para compartir y crear memorias del corazón</p>
        <p className="text-gray-700">La Hacienda La Estancia tiene una historia de casi 100 años. Siempre fue un lugar donde distintas familias pudieron gozar por generaciones de un lugar acogedor e imponente, rodeado por la naturaleza, los animales, sus sonidos y anocheceres llenos de estrellas.</p>
        <p className="text-gray-700">Con el deseo de compartir este lugar especial con más personas, en diciembre de 2019 decidimos abrir las puertas de su casa principal "The Peacock House"; un espacio construido a partir de sueños, memorias familiares y alegrías del corazón.</p>
        <p className="text-gray-700">A lo largo de los años, los pavos, animales y la naturaleza le han dado la magia a la hacienda. Quienes nos visitan destacan la sensación de paz y descanso que se respira.</p>
        <p className="text-gray-700">Queremos que acá se vivan momentos llenos de paz, comunidad, descanso y bienestar entre amigos, familias o colegas. Que este espacio sea un refugio de conexión, descanso y que sirva de espacio para crear memorias del corazón.</p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border p-6">
          <h3 className="text-lg font-bold">Un Legado de Belleza</h3>
          <p className="mt-2 text-sm text-gray-600">Habitación colonial histórica</p>
          <p className="text-gray-700">Tradición Colonial — Arquitectura que conserva el encanto de épocas pasadas</p>
        </div>
        <div className="rounded-2xl border p-6">
          <h3 className="text-lg font-bold">Vida Silvestre</h3>
          <p className="mt-2 text-sm text-gray-600">Pavos reales en los jardines</p>
          <p className="text-gray-700">Los pavos reales que dan nombre a nuestra casa</p>
        </div>
        <div className="rounded-2xl border p-6">
          <h3 className="text-lg font-bold">Conexión Natural</h3>
          <p className="mt-2 text-sm text-gray-600">Naturaleza y estrellas</p>
          <p className="text-gray-700">Noches estrelladas y días llenos de aventura</p>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border p-6">
        <p className="text-gray-700">🍃 ¡Te esperamos!</p>
        <p className="mt-2 text-gray-700">Con cariño,<br/>C & M<br/>Fundadores de The Peacock House</p>
      </div>
    </Section>
  );
}


