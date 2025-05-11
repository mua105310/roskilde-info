import Image from "next/image";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roskilde – en levende kulturby året rundt | Roskilde Info',
  description: 'Oplev Roskilde som en levende kulturby med historiske seværdigheder, Roskilde Festival, Musicon og mange andre attraktioner. Læs om byens rige kulturarv og moderne kulturliv.',
  keywords: 'Roskilde, kulturby, Roskilde Festival, Roskilde Domkirke, Vikingeskibsmuseet, Musicon, RAGNAROCK, begivenheder, festival, historie, kultur',
  openGraph: {
    title: 'Roskilde – en levende kulturby året rundt | Roskilde Info',
    description: 'Oplev Roskilde som en levende kulturby med historiske seværdigheder, Roskilde Festival, Musicon og mange andre attraktioner.',
    type: 'article',
    locale: 'da_DK',
    siteName: 'Roskilde Info',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roskilde – en levende kulturby året rundt | Roskilde Info',
    description: 'Oplev Roskilde som en levende kulturby med historiske seværdigheder, Roskilde Festival, Musicon og mange andre attraktioner.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://roskilde-info.dk',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gray-900">Roskilde Info</span>
            </div>
            <div className="hidden sm:flex sm:items-center sm:space-x-8">
              <a href="/" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">Hjem</a>
              <a href="https://www.roskilde.dk" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">Roskilde Kommune</a>
              <a href="https://www.roskilde-festival.dk" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">Roskilde Festival</a>
              <a href="https://www.roskildedomkirke.dk" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">Roskilde Domkirke</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow bg-gray-50">
        <article className="max-w-4xl mx-auto px-4 py-12">
          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Roskilde – en levende kulturby året rundt
          </h1>

          {/* Introduction */}
          <section className="prose prose-lg max-w-none mb-12 bg-white p-8 rounded-lg shadow-sm">
            <p className="text-gray-700 leading-relaxed">
              Jeg kan ikke lade være med at smile, når jeg går gennem Roskildes brostensbelagte gader. 
              Byen emmer af historie og kreativitet på en måde, man normalt kun oplever i storbyer. 
              Her i Roskilde forenes fortid og nutid: Fra den majestætiske middelalderdomkirke til 
              moderne street art i Musicon-kvarteret. Uanset om du er lokal eller besøgende, er 
              Roskilde en levende kulturby med masser af aktiviteter og oplevelser året rundt.
            </p>
          </section>

          {/* Historical Section */}
          <section className="mb-12 bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Historiske og kulturelle perler i hjertet af byen
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Roskilde Domkirke er byens vartegn og stolthed. Med sine karakteristiske røde teglsten 
                og slanke tvillingespir rager domkirken op over byens tage og minder os om Roskildes 
                rige historie. Domkirken er på UNESCO's Verdensarvsliste (optaget i 1995) og anses som 
                et af Danmarks vigtigste bygningsmonumenter.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Indenfor venter en rejse gennem 800 års arkitekturhistorie, og i de mange kapeller 
                hviler omkring 40 danske konger og dronninger. Det er en særlig oplevelse at træde 
                ind i dette historiske rum – man fornemmer historiens vingesus, når man står ved 
                siden af de kongelige sarkofager og betragter sollyset danse gennem farvede glasvinduer.
              </p>
              <p className="text-gray-700 leading-relaxed">
                En kort gåtur fra domkirken fører ned mod havnen, hvor Vikingeskibsmuseet ligger som 
                et levende vidnesbyrd om byens vikingearv. Her kan du opleve de fem originale vikingeskibe, 
                der blev udgravet fra Roskilde Fjord i 1962. De næsten 1000 år gamle skibe står udstillet 
                i Vikingeskibshallen som mørke silhuetter med fjordens vandspejl som bagtæppe. Museet er 
                ikke kun en statisk udstilling – du kan også se bådebyggere rekonstruere vikingeskibe med 
                traditionelle værktøjer og endda selv prøve at ro ud på fjorden i en ægte vikingebåd, hvis 
                du besøger om sommeren. Det er en hands-on historietime, der begejstrer både børn og voksne.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Disse ikoniske attraktioner viser tydeligt, hvorfor Roskilde gennem århundreder har været 
                et kulturcentrum i Danmark. Byen formår at værne om sin historie samtidig med at den lever 
                i nuet – en balance man mærker overalt, fra museerne til gadelivet.
              </p>
            </div>
          </section>

          {/* Festival Section */}
          <section className="mb-12 bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Roskilde Festival – musik, fællesskab og Orange Feeling
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Selvom Roskilde er rig på historie hele året, kulminerer byens puls hver sommer under 
                Roskilde Festival. I slutningen af juni forvandles de åbne marker syd for byen til en 
                midlertidig festivalmetropol med over 130.000 indbyggere. Faktisk bliver "festivalbyen" 
                i de otte dage Danmarks fjerdestørste by – tænk engang! Så stor er skalaen af dette 
                ikoniske arrangement, der siden 1971 har trukket musikelskere til fra hele verden.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Stemningen på Roskilde Festival er noget helt særligt. Det handler selvfølgelig om 
                musikken – med hundredevis af koncerter fra både internationale superstjerner og nye 
                upcoming navne – men det handler lige så meget om fællesskab og den berømte "Orange Feeling". 
                Festivalen drives af over 30.000 frivillige og har en unik ånd af samhørighed, kreativitet og frihed.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Overalt ses det ikoniske Orange Scene-telt lyse op som et samlingspunkt for store 
                musikoplevelser. Campingområderne summer af liv døgnet rundt, hvor mange deltagere 
                medbringer egne musikanlæg – nogle lejer endda en Soundboks via{' '}
                <a 
                  href="https://moveboks.dk/lej-soundboks-til-roskilde-festival" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Moveboks.dk
                </a> – for at holde festen kørende mellem koncerterne. Her opstår en midlertidig 
                lille by, hvor naboer hurtigt bliver venner over morgenkaffen og en fællessang i lejren.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                At vandre gennem festivalpladsen en lun juliaften omgivet af glade mennesker, musik 
                fra alle retninger, duften af madboder og kunstinstallationer i hvert hjørne, det er 
                intet mindre end magisk. Roskilde Festival er ikke bare en begivenhed – det er en 
                oplevelse og en tradition, der er dybt forankret i byens identitet.
              </p>
              <p className="text-gray-700 leading-relaxed italic">
                Orange Scene på Roskilde Festival samler tusindvis af mennesker til årets største 
                musikfest. Den unikke "Orange Feeling" af fællesskab og frihed mærkes i den tætte 
                stemning foran scenen.
              </p>
            </div>
          </section>

          {/* Events Section */}
          <section className="mb-12 bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Mere end festival: Oplevelser og events året rundt
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Roskilde er ikke kun levende under festivalen – her sker noget året rundt. Byens 
                kalender er spækket med begivenheder, store som små, der gør at man aldrig keder sig. 
                Foråret og sommeren byder på utallige udendørs koncerter og kulturdage, hvor gader og 
                parker fyldes med liv. Det kan være alt fra opera under åben himmel til intime 
                jazzkoncerter i gårdhaver eller gadeteater på torvene.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Når sensommeren rammer, afholdes der ofte kulturdage eller kulturnat, hvor byens 
                museer, gallerier og biblioteker holder åbent til ud på aftenen – nogle år har der 
                fx været en stemningsfuld Lysfest i januar, hvor lysinstallationer oplyste bymidten 
                og trak tusinder af besøgende til.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Hver uge året rundt summer byens centrale torv af aktivitet. Der er traditionelle 
                torvedage på Stændertorvet hver onsdag og lørdag, hvor lokale handlende stiller op 
                med farvestrålende boder fra morgenstunden. Med domkirkens spir som historisk kulisse 
                kan man købe alt fra friske blomster og grøntsager til oste, fisk og kunsthåndværk – 
                eller gøre et loppefund, mens man sludrer med de lokale.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Når efteråret glider mod vinter, daler temperaturen men ikke aktivitetsniveauet. 
                I december forvandles Roskilde til et sandt juleeventyr. Byens julemarked breder 
                sig på centrale pladser – nogle år både på Stændertorvet og i det kreative 
                Musicon-område – med pyntede boder, lyskæder i træerne og duften af brændte 
                mandler i luften.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Selv i januar og de kolde måneder slår Roskilde ikke bak. Indendørs kulturarrangementer 
                som kunstudstillinger, teaterforestillinger og foredrag fylder kalenderen. Byens mange 
                aktører – fra Roskilde Museum og bibliotekerne til spillesteder som Gimle – sørger for, 
                at der altid er et spændende event at se frem til, uanset årstiden.
              </p>
            </div>
          </section>

          {/* Musicon Section */}
          <section className="mb-12 bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Musicon – kreativitet og ungdommeligt drive
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                En særlig dynamo for Roskildes kulturliv er Musicon, byens kreative bydel. Området, 
                der ligger på en gammel cementfabriksgrund, er i dag et urbant kulturmekka med 
                farverige vægmalerier, skatehaller og det prisvindende RAGNAROCK-museum for pop, 
                rock og ungdomskultur.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Her er der året rundt koncerter, street art-festivaler, foodtruck-markeder og 
                workshops. Musicon tiltrækker især unge kunstnere, iværksættere og musikere, og 
                kvarteret har sin helt egen rå charme. At tage til en koncert i Musicons rå haller 
                eller deltage i en danseworkshop på pladsen føles autentisk – man bliver en del af 
                bydelens pulserende hjerte.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Selv midt i vinteren kan en tur i Musicon byde på en avantgarde kunstudstilling 
                eller en improviseret jam-session på en af de lokale barer. Roskilde viser med 
                Musicon, at kultur ikke kun findes på traditionelle scener eller museer, men også 
                spirer nedefra i et levende bymiljø. Det er denne kombination af det klassiske og 
                det eksperimenterende, der gør Roskilde til noget særligt.
              </p>
            </div>
          </section>

          {/* Conclusion */}
          <section className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              En by der altid byder på noget nyt
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Som både turist og lokal vil du opdage, at Roskilde altid har noget at byde på. 
                Det er en by, hvor en almindelig tirsdag lige så vel kan indebære en spændende 
                udstilling eller koncert, som en lørdag kan indebære et stort event på byens pladser.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Fra Roskilde Domkirkes klokkeslag, der har lydt i århundreder, til de nyeste beats 
                fra en DJ-pult i Musicon – Roskilde favner det hele. Byen er et kulturcentrum i 
                konstant bevægelse, hvor historie, musik og fællesskab smelter sammen.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Uanset om du kommer for at opleve verdensarv, danse foran Orange Scene eller bare 
                nyde en kop kaffe på torvet mens du betragter det lokale liv passere forbi, så vil 
                Roskilde tage imod dig med åbne arme. Jeg føler mig utrolig heldig at være en del af 
                denne by, og jeg glæder mig allerede til den næste oplevelse rundt om hjørnet. 
                Vi ses i Roskilde!
              </p>
              <div className="text-sm text-gray-500 border-t pt-4">
                <p className="mb-2">Kilder:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Roskilde Domkirke (UNESCO)</li>
                  <li>Vikingeskibsmuseet</li>
                  <li>Roskilde Festival (deltagerantal og frivillige)</li>
                  <li>Roskilde Kommune (torvedage)</li>
                </ul>
              </div>
            </div>
          </section>
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Om Roskilde Info</h3>
              <p className="text-gray-400">
                Din guide til alt hvad der sker i Roskilde. Fra historiske seværdigheder til 
                moderne kultur og begivenheder.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Nyttige links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="https://www.roskilde.dk" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    Roskilde Kommune
                  </a>
                </li>
                <li>
                  <a href="https://www.roskilde-festival.dk" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    Roskilde Festival
                  </a>
                </li>
                <li>
                  <a href="https://www.roskildedomkirke.dk" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    Roskilde Domkirke
                  </a>
                </li>
                <li>
                  <a href="https://www.vikingeskibsmuseet.dk" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    Vikingeskibsmuseet
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Roskilde Info. Alle rettigheder forbeholdes.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
