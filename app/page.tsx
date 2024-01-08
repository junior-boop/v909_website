import { Container, Display_1, Display_2, Display_3, Field, Vide, LaUne, Suggestion, Items, Bref, Header, Images_desc, PlanItems } from '@/components'
import { Short_Item } from '@/components/short'

import { Grid, Navbar, ShortList,  } from '@/layouts'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Header />
      <Images_desc />
      <PlanItems />
    </div>
  )
}


const Entries = () => {
  return(
    <Container>
      <Vide />
      <Grid>
        <Field />
        <div className='col-span-1 md:col-span-2 '>
          <LaUne 
          image='/images/SamuelEtoo.png' 
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dolor nulla, placerat quis vehicula sed, lobortis tincidunt justo. Ut non tellus facilisis justo lobortis...'
          sujet='Fecafoot'
          titre='Un championnat aux normes “inter” nationales'
          />
        </div>
        <Suggestion titre={'Pour les abonnés'} />
      </Grid>
    </Container>
  )
}

const Nouveautes = () => {
  return(
    <Container>
      <div className='text-xl font-bold text-principal mb-4'>Nouveautés</div>
      <Grid>
        <Items image="/images/alainFoka.png" titre='Toujours à RFI Afrique ou Bien maintenant à R.Af.I ?' rubrique='Question' auteur='Par Sebastien Mbebe' />
        <Items image="/images/tunisie.png" titre='Peut-il être traité de raciste ? Apres ces propos qui ont choqué toutes l’Afrique subsaharienne' rubrique='Question' auteur='Par Sebastien Mbebe' />
        <Items image="/images/macron.png" titre='La FranceAfrique meurt-elle deja?' rubrique='Decryptage' auteur='Par Sebastien Mbebe' />
        <Items image="/images/rdc.png" titre='Denis Mukwege, l’homme qui veut réparer la RDC' rubrique='Analyse' auteur='Par Sebastien Mbebe' />
        <Items image="/images/ci.png" titre='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' rubrique='Analyse' auteur='Par Sebastien Mbebe' />
        <Items image="/images/rca.png" titre='Vivamus viverra quis lacus ac tempor. Suspendisse ut cursus risus. Sed finibus tellus et f...' rubrique='Question' auteur='Par Sebastien Mbebe' />
        <Items image="/images/alainFoka.png" titre='Toujours à RFI Afrique ou Bien maintenant à R.Af.I ?' rubrique='Question' auteur='Par Sebastien Mbebe' />
      </Grid>
    </Container>
  )
}

const Redaction= () => {
  return(
    <div className='mt-9'>
      <Container>
      <Vide />
      <div className='text-xl font-bold text-principal mb-4'>Le dossier de la redaction</div>
      <Grid>
        <div className='col-span-1 md:col-span-2 '>
          <LaUne 
            sujet='Le dossier'
            titre="Le Reveil de l'Afrique peut-il venir de lui ?"
            image='/images/burkina.png'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dolor nulla, placerat quis vehicula sed, lobortis tincidunt justo. Ut non tellus facilisis justo lobortis...'
          />
        </div>
        <Bref />
        <Suggestion titre={'Les derniers sujets'} />
      </Grid>
    </Container>
    </div>
  )
}

const Short = () => {
  return(
    <div className='mt-9'>
      <Container>
      <Vide />
      <div className='text-xl font-bold text-principal mb-4'>Les Shorts</div>
      <ShortList>
        <div className='flex gap-7' style={{width : 'max-content'}}>
          <Short_Item images="/images/argent.png" text="C'est quoi l'inflation?" />
          <Short_Item images='/images/boison.png' text='Qui profite de l’augmentation du coût de bierre?' />
          <Short_Item images='/images/onana.png' text = "La relation Onana - United, une relation d'amour"/>
          {/* <Short_Item />
          <Short_Item /> */}
        </div>
      </ShortList>
    </Container>
    <Vide />
    </div>
  )
}