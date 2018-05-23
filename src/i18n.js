import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {

    'ESP':{
      translations: {
        "inicio":"INICIA HOY TU NEGOCIO DE BELLEZA",
        "inicio2": "DA EL PRIMER PASO AL ÉXITO",
        "inicio3":"INICIA HOY",
        "inicio4":"GANA MÁS con la venta por catálogo y logra todo lo que te propones.",
        "inicio5":"ÚNETE HOY Y LOGRA MÁS",
        "inicio6":"TU NEGOCIO DE BELLEZA",
        "inicio7":"Con L'bel eres",
        "inicio8":"dueño de tu tiempo",
        "inicio9":"tú decides cuándo y cuánto tiempo invertir en tu negocio.",
        "inicio10":"Consigue hasta 50%* de descuento",
        "inicio11":"y además comisiona liderando equipos de belleza.",
        "inicio12":"Gana reconocimientos, accesorios de lujo y",
        "inicio13":"viajes alrededor del mundo",
        "inicio14":"Aprende de quienes alcanzaron el éxito,",
        "inicio15":"con tutorías personales y capacitaciones del mundo.",
        "inicio16":"Además L'bel te dará el",
        "inicio17":"soporte técnico para que tu negocio funcione con fluidez.",
        "inicio18":"Alcanza tus",
        "inicio19":"sueños",
        "inicio20":"Gana lo que te propongas",
        "inicio21":"y logra tus metas",
        "inicio22":"con esta oportunidad tus ganancias",
        "inicio23":"son iguales a tu esfuerzo.",
        "inicio24": "Tu inicio",
        "inicio25":"perfecto",
        "inicio26":"Únete a más de 800,000",
        "inicio27":"asesores de belleza",
        "inicio28":"en todo Latinoamérica que ya",
        "inicio29":"eligieron disfrutar de sus ganancias.",
        "inicio30":"Sección Vacía momentáneamente",
        "inicio31":"L'bel sin",
        "inicio32":"fronteras",
        "inicio33":"Está presente en",
        "inicio34":"14 países de América Latina",
        "inicio35":"y es una marca premium del grupo",
        "inicio36":"Belcorp con 50 años de experiencia.",
        "inicio37":"ESPAÑOL",
        "inicio38":"INGLÉS",
        "inicio39":"PORTUGUÉS",
        "inicio40":"Inscríbete ahora",
        "inicio41":"BRASIL",
        "inicio42":"ESTADOS UNIDOS"
      }
    },
    'ENG': {
      translations: {
        "inicio":"BIRTH NOW YOUR BEAUTY BUSINESS",
        "inicio2": "GIVE THE FIRST STEP TO SUCCESS",
        "inicio3":"START TODAY",
        "inicio4":"WIN MORE with the sale by catalog and achieve everything you set out to do.",
        "inicio5":"JOIN TODAY AND GET MORE",
        "inicio6":"YOUR BEAUTY BUSINESS",
        "inicio7":"With L'bel you are",
        "inicio8":"owner of your time",
        "inicio9":"you decide when and how much time to invest in your business.",
        "inicio10":"Get up to 50% * discount",
        "inicio11":"and also commissioned to lead beauty teams.",
        "inicio12":"Earn recognition, luxury accessories and",
        "inicio13":"trips around the world",
        "inicio14":"Learn from those who achieved success,",
        "inicio15":"with personal tutorials and trainings of the world.",
        "inicio16":"In addition L'bel will give you the",
        "inicio17":"technical support so your business runs smoothly.",
        "inicio18":"Reach your",
        "inicio19":"dreams",
        "inicio20":"Win what you propose",
        "inicio21":"and achieve your goals",
        "inicio22":"with this opportunity your earnings",
        "inicio23":"They are equal to your effort.",
        "inicio24": "Your start",
        "inicio25":"perfect",
        "inicio26":"Join more than 800,000",
        "inicio27":"beauty consultants",
        "inicio28":"throughout Latin America that already",
        "inicio29":"They chose to enjoy their earnings.",
        "inicio30":"Section Empty momentarily",
        "inicio31":"L'bel without",
        "inicio32":"borders",
        "inicio33":"It is present in",
        "inicio34":"14 countries of Latin America",
        "inicio35":"and it's a premium brand of the group",
        "inicio36":"Belcorp with 50 years of experience.",
        "inicio37":"SPANISH",
        "inicio38":"ENGLISH",
        "inicio39":"PORTUGUESE",
        "inicio40":"Sign up now",
        "inicio41":"BRAZIL",
        "inicio42":"UNITED STATES"
      }
    },
    'POR': {
      translations: {
        "inicio": "COMECE O SEU NEGÓCIO DE BELEZA HOJE",
        "inicio2": "DÊ O PRIMEIRO PASSO AO SUCESSO",
        "inicio3":"BIRTH NOW",
        "inicio4":"GREAD MORE com a venda por catálogo e conseguir tudo o que você propõe",
        "inicio5":"JUNTE-SE HOJE E RECEBA MAIS",
        "inicio6":"SEU NEGÓCIO DE BELEZA",
        "inicio7":"Com L'bel você é",
        "inicio8":"dono do seu tempo",
        "inicio9":"você decide quando e quanto tempo deve investir no seu negócio.",
        "inicio10":"Receba até 50% de desconto *",
        "inicio11":"e também comissionado para liderar equipes de beleza.",
        "inicio12":"Ganhe reconhecimento, acessórios de luxo e",
        "inicio13":"viagens ao redor do mundo",
        "inicio14":"Aprenda com aqueles que alcançaram sucesso,",
        "inicio15":"com tutoriais e treinamentos pessoais do mundo.",
        "inicio16":"Além disso L'bel lhe dará o",
        "inicio17":"suporte técnico para que sua empresa funcione sem problemas.",
        "inicio18":"Alcance seu",
        "inicio19":"sonhos",
        "inicio20":"Ganhe o que você propõe",
        "inicio21":"e alcançar seus objetivos",
        "inicio22":"com esta oportunidade seus ganhos",
        "inicio23":"Eles são iguais ao seu esforço.",
        "inicio24": "Seu começo",
        "inicio25":"perfeito",
        "inicio26":"Junte-se a mais de 800.000",
        "inicio27":"consultores de beleza",
        "inicio28":"em toda a América Latina que já",
        "inicio29":"Eles escolheram aproveitar seus ganhos.",
        "inicio30":"Seção vazia momentaneamente",
        "inicio31":"L'bel sem",
        "inicio32":"fronteiras",
        "inicio33":"Está presente em",
        "inicio34":"14 países da América Latina",
        "inicio35":"e é uma marca premium do grupo",
        "inicio36":"Belcorp com 50 anos de experiência.",
        "inicio37":"ESPANHOL",
        "inicio38":"Inglês",
        "inicio39":"PORTUGUÊS",
        "inicio40":"Inscreva-se agora",
        "inicio41":"BRASIL",
        "inicio42":"ESTADO UNIDO"
      }
    },
    
  },
  fallbackLng: 'ESP',
  debug: true,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ","
  },

  react: {
    wait: true
  }
});

export default i18n;