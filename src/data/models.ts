import type { Model } from '../types/menu';
import { ss3542MenuTree } from './menuTree';
import { ss3540MenuTree } from './menuTreeSS3540';

const BASE_URL = import.meta.env.BASE_URL;

export const models: Model[] = [
  {
    id: 'ss3542mfw',
    label: 'SS 3532/ 42  MF W 2.0',
    description:
      'Controladora de acesso facial com leitor de impressão digital, cartão RFID e conectividade Wi-Fi. Suporta até 10.000 usuários com reconhecimento facial.',
    menuTree: ss3542MenuTree,
  },
  {
    id: 'ss3540',
    label: 'SS 3540 / Modelos Antigos',
    description:
      'Controladoras faciais modelo SS 3540 e interface web versão 1.0.',
    image: `${BASE_URL}imagens-ss3540/menu%20principal.jpeg`,
    menuTree: ss3540MenuTree,
  },
];
