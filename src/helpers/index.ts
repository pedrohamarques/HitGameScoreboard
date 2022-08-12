import PalmeirasSvg from '../assets/palmeiras.png';
import CorinthiansSvg from '../assets/corinthians.png';
import AmericaMgSvg from '../assets/americamg.png';
import AthleticoPaSvg from '../assets/athleticopa.png';
import AtleticoGoSvg from '../assets/atleticogo.png';
import AtleticoMgSvg from '../assets/atleticomg.png';
import AvaiSvg from '../assets/avai.png';
import BotafogoSvg from '../assets/botafogo.png';
import BragantinoSvg from '../assets/bragantino.png';
import CearaSvg from '../assets/ceara.png';
import CuiabaSvg from '../assets/cuiaba.png';
import CoritibaSvg from '../assets/coritiba.png';
import FlamengoSvg from '../assets/flamengo.png';
import FluminenseSvg from '../assets/fluminense.png';
import FortalezaSvg from '../assets/fortaleza.png';
import GoiasSvg from '../assets/goias.png';
import InternacionalSvg from '../assets/internacional.png';
import JuventudeSvg from '../assets/juventude.png';
import SantosSvg from '../assets/santos.png';
import SaoPauloSvg from '../assets/saopaulo.png';

import backEndData from '../server/backend-classification.json';

// export const backEndFiltered = backEndData.map(item => {
//     if ( item.time.time_id === 56) {
//         return {
//             ...item, time: { ...item.time, escudo: PalmeirasSvg }
//         }
//     }
//     if ( item.time.time_id === 39) {
//         return {
//             ...item, time: { ...item.time, escudo: PalmeirasSvg }
//         }
//     }
// })

export function displayImages(idTeam: number) {
 if ( idTeam === 56) {
    return PalmeirasSvg;
 }
 if ( idTeam === 65) {
    return  CorinthiansSvg;
 }
 if ( idTeam === 26) {
    return FluminenseSvg;
 }
 if ( idTeam === 185) {
    return  AthleticoPaSvg;
 }
 if ( idTeam === 18) {
    return FlamengoSvg;
 }
 if ( idTeam === 44) {
    return  InternacionalSvg;
 }
 if ( idTeam === 30) {
    return AtleticoMgSvg;
 }
 if ( idTeam === 64) {
    return  BragantinoSvg;
 }
 if ( idTeam === 63) {
    return SantosSvg;
 }
 if ( idTeam === 33) {
    return  AmericaMgSvg;
 }
 if ( idTeam === 57) {
    return SaoPauloSvg;
 }
 if ( idTeam === 22) {
    return  BotafogoSvg;
 }
 if ( idTeam === 115) {
    return GoiasSvg;
 }
 if ( idTeam === 105) {
    return  CearaSvg;
 }
 if ( idTeam === 84) {
    return CoritibaSvg;
 }
 if ( idTeam === 6) {
    return  AvaiSvg;
 }
 if ( idTeam === 131) {
    return FortalezaSvg;
 }
 if ( idTeam === 204) {
    return  CuiabaSvg;
 }
 if ( idTeam === 98) {
    return AtleticoGoSvg;
 }
 if ( idTeam === 43) {
    return  JuventudeSvg;
 }
 return null
}