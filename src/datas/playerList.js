import ronaldo from '../assets/images/players/Ronaldo.jpg'
import messi from '../assets/images/players/Messi.jpg'
import mbappe from '../assets/images/players/Mbappe.jpg'
import haaland from '../assets/images/players/Haaland.jpg'
import benzema from '../assets/images/players/Benzema.jpg'
import courtois from '../assets/images/players/Courtois.jpg'
import debruyne from '../assets/images/players/DeBruyne.jpg'
import felix from '../assets/images/players/Felix.jpg'
import griezmann from '../assets/images/players/Griezmann.jpg'
import hazard from '../assets/images/players/Hazard.jpg'
import jude from '../assets/images/players/Jude.jpeg'
import lewandowski from '../assets/images/players/Lewandowski.jpeg'
import marcelo from '../assets/images/players/Marcelo.jpg'
import martinez from '../assets/images/players/Martinez.jpg'
import moting from '../assets/images/players/Moting.jpg'
import muani from '../assets/images/players/Muani.jpg'
import musiala from '../assets/images/players/Musiala.jpg'
import nani from '../assets/images/players/Nani.jpg'
import neuer from '../assets/images/players/Neuer.jpg'
import nouhou from '../assets/images/players/Nouhou.jpg'
import onana from '../assets/images/players/Onana.jpg'
import ozil from '../assets/images/players/Ozil.jpg'
import pogba from '../assets/images/players/Pogba.jpeg'
import ramos from '../assets/images/players/Ramos.jpg'
import tchouameni from '../assets/images/players/Tchouameni.png'
import varane from '../assets/images/players/Varane.jpg'
import vinicius from '../assets/images/players/Vinicius.jpg'
import ziyech from '../assets/images/players/Ziyech.jpg'


import Portugal from '../assets/images/countries/Portugal.png'
import Argentina from '../assets/images/countries/Argentina.png'
import Belgium from '../assets/images/countries/Belgium.png'
import Brazil from '../assets/images/countries/Brazil.png'
import England from '../assets/images/countries/England.png'
import France from '../assets/images/countries/France.png'
import Germany from '../assets/images/countries/Germany.png'
import Morocco from '../assets/images/countries/Morocco.png'
import Norway from '../assets/images/countries/Norway.png'
import Poland from '../assets/images/countries/Poland.png'
import Spain from '../assets/images/countries/Spain.png'
import Cameroon from '../assets/images/countries/Cameroon.png'

const playerList = [
  {
    id : '1cr',
    name : 'Cristiano RONALDO',
    nationality : Portugal,
    age : 38,
    currentClub : 'Al-nassr',
    position : ['CF', 'RWF', 'SS'],
    grade : 89,
    transfertAmount : 230,
    cover : ronaldo,
    contractYear : 2,

    description : "THE G.O.A.T, he's most balanced player. He's able to score, pass, dribble and of course win matches",
    height : 187,
    weight : 85,
    strongFoot : 'R',
    precision : 91,
    dribble : 87,
    pass : 86,
    speed : 92,
    agility : 90
  },
  {
    id : '2lm',
    name : 'Lionel MESSI',
    nationality : Argentina,
    age : 35,
    currentClub : 'PSG',
    position : ['SS', 'LWG','AMF' ],
    grade : 94,
    transfertAmount : 165,
    cover : messi,
    contractYear : 2,

    description : "THE G.O.A.T, also called 'Le Messi' the most amazing player of all time",
    height : 169,
    weight : 67,
    strongFoot : 'L',
    precision : 95,
    dribble : 96,
    pass : 97,
    speed : 93,
    agility : 90
  },
  {
    id : '3km',
    name : 'Kylian MBAPPE',
    nationality : France,
    age : 24,
    currentClub : 'PSG',
    position : ['CF', 'RWG'],
    grade : 97,
    transfertAmount : 210,
    cover : mbappe,
    contractYear : 3,

    description : "No defence can stop him! He's with no doubts the best player of his generation",
    height : 178,
    weight : 73,
    strongFoot : 'R',
    precision : 98,
    dribble : 96,
    pass : 97,
    speed : 98,
    agility : 94
  },
  {
    id : '4eh',
    name : 'Erling HAALAND',
    nationality : Norway,
    age : 22,
    currentClub : 'Manchester-City',
    position : ['CF', 'SS'],
    grade : 96,
    transfertAmount : 90,
    cover : haaland,
    contractYear : 2,

    description : "CYBORG: also called the goal machine, he's able to score in every situations in front on the pitch",
    height : 194,
    weight : 88,
    strongFoot : 'L',
    precision : 95,
    dribble : 90,
    pass : 97,
    speed : 95,
    agility : 98
  },
  {
    id : '5jf',
    name : 'Joao FELIX',
    nationality : Portugal,
    age : 23,
    currentClub : 'Chelsea',
    position : ['CMF', 'LMG','AMF' ],
    grade : 84,
    transfertAmount : 10,
    cover : felix,
    contractYear : 4,

    description : "THE LITTLE PRINCE, he's a talentful player with great abilities",
    height : 181,
    weight : 70,
    strongFoot : 'L',
    precision : 88,
    dribble : 92,
    pass : 90,
    speed : 92,
    agility : 89
  },
  {
    id : '6rl',
    name : 'Robert LEWANDOSKI',
    nationality : Poland,
    age : 34,
    currentClub : 'Barcelone FC',
    position : ['CF'],
    grade : 91,
    transfertAmount : 45,
    cover : lewandowski,
    contractYear : 3,

    description : "THE hangman of Allianz Arena, a legend said that he score even while sleeping !",
    height : 185,
    weight : 81,
    strongFoot : 'R',
    precision : 95,
    dribble : 86,
    pass : 90,
    speed : 84,
    agility : 91
  },
  {
    id : '8ec',
    name : 'Eric CHOUPO-MOTING',
    nationality : Cameroon,
    age : 33,
    currentClub : 'Bayern Munich',
    position : ['SS', 'CF'],
    grade : 84,
    transfertAmount : 70,
    cover :moting,
    contractYear : 1,

    description : "A really talented player with a good growth-potential",
    height : 191,
    weight : 84,
    strongFoot : 'R',
    precision : 90,
    dribble : 89,
    pass : 92,
    speed : 83,
    agility : 86
  },
  {
    id : '9pp',
    name : 'Paul POGBA',
    nationality : France,
    age : 29,
    currentClub : 'Juventus',
    position : ['AMF', 'CMF','LMF' ],
    grade : 83,
    transfertAmount : 105,
    cover : pogba,
    contractYear : 1,

    description : "Nabil, A great team play and an excellent vision. He's the typical milfielder",
    height : 191,
    weight : 84,
    strongFoot : 'L',
    precision : 81,
    dribble : 89,
    pass : 92,
    speed : 89,
    agility : 80
  },
  {
    id : '10ag',
    name : 'Antoine GRIEZMANN',
    nationality :France,
    age : 31,
    currentClub : 'Athlético de Madrid',
    position : ['SS', 'RWG','AMF' ],
    grade : 81,
    transfertAmount : 40,
    cover : griezmann,
    contractYear : 2,

    description : "Grizou, he's really loved in France !",
    height : 176,
    weight : 73,
    strongFoot : 'L',
    precision : 83,
    dribble : 80,
    pass : 82,
    speed : 83,
    agility : 79
  },
  {
    id : '11jm',
    name : 'Jamal MUSIELA',
    nationality : Germany,
    age : 19,
    currentClub : 'Bayern Munich',
    position : ['AMF', 'CMF','LMF', 'DMF' ],
    grade : 89,
    transfertAmount : 11,
    cover : musiala,
    contractYear : 3,

    description : "THE Prince of ALLIANZ ARENA, Musiala he's the most talented younger in Germany",
    height : 183,
    weight : 70,
    strongFoot : 'L',
    precision : 90,
    dribble : 94,
    pass : 88,
    speed : 91,
    agility : 90
  },
  {
    id : '12km',
    name : 'kolo MUANI',
    nationality : France,
    age : 24,
    currentClub : 'Eintracht Francfort',
    position : ['CF', 'RWG'],
    grade : 82,
    transfertAmount : 6,
    cover : muani,
    contractYear : 3,

    description : "A clinical youngster in Germany",
    height : 187,
    weight : 76,
    strongFoot : 'L',
    precision : 86,
    dribble : 76,
    pass : 80,
    speed : 84,
    agility : 81
  },
  {
    id : '13jb',
    name : 'Jude BELLINGHAM',
    nationality : England,
    age : 19,
    currentClub : 'Dortmund',
    position : ['CMF', 'MDF','AMF' ],
    grade : 86,
    transfertAmount : 140,
    cover : jude,
    contractYear : 2,

    description : "A really balanced player both able to defend and score",
    height : 186,
    weight : 75,
    strongFoot : 'R',
    precision : 92,
    dribble : 89,
    pass : 91,
    speed : 87,
    agility : 82
  },
  {
    id : '14nt',
    name : 'Nouhou TOLO',
    nationality : Cameroon,
    age : 25,
    currentClub : 'Sounders de Seattle',
    position : ['RB', 'CB'],
    grade : 79,
    transfertAmount : 1,
    cover : nouhou,
    contractYear : 4,

    description : "THE Art of Defending",
    height : 178,
    weight : 79,
    strongFoot : 'R',
    precision : 75,
    dribble : 70,
    pass : 81,
    speed : 84,
    agility : 80
  },
  {
    id : '15ao',
    name : 'André ONANA',
    nationality : Cameroon,
    age : 26,
    currentClub : 'Inter-Milan',
    position : ['GK'],
    grade : 82,
    transfertAmount : 30,
    cover : onana,
    contractYear : 4,

    description : "THE WALL, able to stop every stricker shots",
    height : 190,
    weight : 93,
    strongFoot : 'L',
    precision : 84,
    dribble : 72,
    pass : 87,
    speed : 83,
    agility : 92
  },
  {
    id : '16lm',
    name : 'Lautaro MARTINEZ',
    nationality : Argentina,
    age : 25,
    currentClub : 'Inter-Milan',
    position : ['CF', 'RWF','SS' ],
    grade : 83,
    transfertAmount : 63,
    cover : martinez,
    contractYear : 2,

    description : "A really talented striker with an excellent team spirit",
    height : 174,
    weight : 72,
    strongFoot : 'R',
    precision : 90,
    dribble : 86,
    pass : 81,
    speed : 91,
    agility : 87
  },
  {
    id : '17mo',
    name : 'Mezhut OZIL',
    nationality : Germany,
    age : 34,
    currentClub : 'Istanbul Başakşehir FK',
    position : ['LMF', 'RMF','AMF' ],
    grade : 93,
    transfertAmount : 50,
    cover : ozil,
    contractYear : 1,

    description : "He's surely one of the best midfielder ever in football",
    height : 180,
    weight : 76,
    strongFoot : 'L',
    precision : 92,
    dribble : 91,
    pass : 97,
    speed : 93,
    agility : 90
  },
  {
    id : '18kd',
    name : 'Kevin DEBRUYNE',
    nationality : Belgium,
    age : 31,
    currentClub : 'Manchester City',
    position : ['RWG','AMF', 'CMF'],
    grade : 91,
    transfertAmount : 75,
    cover : debruyne,
    contractYear : 3,

    description : "THE Art of passing and a real team leader",
    height : 181,
    weight : 70,
    strongFoot : 'L',
    precision : 90,
    dribble : 90,
    pass : 95,
    speed : 93,
    agility : 90
  },
  {
    id : '19hz',
    name : 'Hakim ZIYECH',
    nationality : Morocco,
    age : 29,
    currentClub : 'Chelsea',
    position : ['SS', 'RWG'],
    grade : 83,
    transfertAmount : 32,
    cover : ziyech,
    contractYear : 4,

    description : "An excellent growth-potential",
    height : 180,
    weight : 65,
    strongFoot : 'R',
    precision : 87,
    dribble : 80,
    pass : 89,
    speed : 86,
    agility : 83
  },
  {
    id : '20rv',
    name : 'Rafael VARANE',
    nationality : France,
    age : 29,
    currentClub : 'Manchester United',
    position : ['CB', 'RB','DMF' ],
    grade : 84,
    transfertAmount : 53,
    cover : varane,
    contractYear : 2,

    description : "THE Art of defending",
    height : 191,
    weight : 81,
    strongFoot : 'R',
    precision : 81,
    dribble : 69,
    pass : 85,
    speed : 83,
    agility : 79
  },
  {
    id : '21vj',
    name : 'Vinicius JUNIOR',
    nationality : Brazil,
    age : 22,
    currentClub : 'Real de Madrid',
    position : ['SS', 'CF'],
    grade : 94,
    transfertAmount : 45,
    cover : vinicius,
    contractYear : 4,

    description : "THE NINHO, One of the best youngster of this century",
    height : 176,
    weight : 73,
    strongFoot : 'R',
    precision : 95,
    dribble : 96,
    pass : 92,
    speed : 96,
    agility : 92
  },
  {
    id : '22at',
    name : 'Aurélien TCHOUAMENI',
    nationality : France,
    age : 23,
    currentClub : 'Real de Madrid',
    position : ['DMF', 'CMF'],
    grade : 81,
    transfertAmount : 80,
    cover : tchouameni,
    contractYear : 3,

    description : "A really talented Defensive Midfielder",
    height : 187,
    weight : 81,
    strongFoot : 'L',
    precision : 75,
    dribble : 80,
    pass : 84,
    speed : 90,
    agility : 76
  },
  {
    id : '23nn',
    name : 'NANI',
    nationality : Portugal,
    age : 36,
    currentClub : 'Melbourne Victory',
    position : ['LMF', 'LWF','AMF' ],
    grade : 89,
    transfertAmount : 163,
    cover : nani,
    contractYear : 1,

    description : "Once upon a time ...",
    height : 177,
    weight : 72,
    strongFoot : 'L',
    precision : 91,
    dribble : 80,
    pass : 92,
    speed : 93,
    agility : 85
  },
  {
    id : '24kb',
    name : 'Karim BENZEMA',
    nationality : France,
    age : 35,
    currentClub : 'Real de Madrid',
    position : ['CF', 'SS'],
    grade : 94,
    transfertAmount : 41,
    cover : benzema,
    contractYear : 2,

    description : "KB9, the King of santiago Bernabéu, a team model and a incredible striker",
    height : 185,
    weight : 81,
    strongFoot : 'R',
    precision : 97,
    dribble : 89,
    pass : 91,
    speed : 93,
    agility : 90
  },
  {
    id : '25tc',
    name : 'Thibaut COURTOIS',
    nationality : Belgium,
    age : 30,
    currentClub : 'Real de Madrid',
    position : ['GK'],
    grade : 91,
    transfertAmount : 38,
    cover : courtois,
    contractYear : 2,

    description : "THE Best goalKeeper of this year",
    height : 200,
    weight : 96,
    strongFoot : 'L',
    precision : 91,
    dribble : 76,
    pass : 89,
    speed : 91,
    agility : 96
  },
  {
    id : '26mn',
    name : 'Manuel NEUER',
    nationality : Germany,
    age : 36,
    currentClub : 'Bayern de Munich',
    position : ['GK'],
    grade : 92,
    transfertAmount : 25,
    cover : neuer,
    contractYear : 2,

    description : "THE best goal keeper of ever !",
    height : 193,
    weight : 93,
    strongFoot : 'R',
    precision : 90,
    dribble : 92,
    pass : 94,
    speed : 93,
    agility : 97
  },
  {
    id : '27mv',
    name : 'MARCELO VIERA',
    nationality : Brazil,
    age : 34,
    currentClub : 'RB Salzbourg',
    position : ['LB', 'CB'],
    grade : 82,
    transfertAmount : 22,
    cover : marcelo,
    contractYear : 4,

    description : "An Excellent offensive and defensive play",
    height : 174,
    weight : 75,
    strongFoot : 'L',
    precision : 91,
    dribble : 90,
    pass : 93,
    speed : 93,
    agility : 81
  },
  {
    id : '28eh',
    name : 'Eden Hazard',
    nationality : Belgium,
    age : 32,
    currentClub : 'Real de Madrid',
    position : ['SS', 'RWG','AMF' ],
    grade : 78,
    transfertAmount : 115,
    cover : hazard,
    contractYear : 2,

    description : "Once upon a time",
    height : 175,
    weight : 74,
    strongFoot : 'R',
    precision : 79,
    dribble : 80,
    pass : 84,
    speed : 87,
    agility : 82
  },
  {
    id : '29sr',
    name : 'Sergio RAMOS',
    nationality : Spain,
    age : 36,
    currentClub : 'PSG',
    position : ['SS', 'RWG','AMF' ],
    grade : 85,
    transfertAmount : 16,
    cover : ramos,
    contractYear : 2,

    description : "HE master the Art of Defending and is the man of every situation",
    height : 184,
    weight : 82,
    strongFoot : 'R',
    precision : 90,
    dribble : 88,
    pass : 91,
    speed : 92,
    agility : 90
  }
]

export default playerList;