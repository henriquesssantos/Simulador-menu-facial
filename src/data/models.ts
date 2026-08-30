import type { Model } from '../types/menu';
import { ss3542MenuTree } from './menuTree';
import { ss3540MenuTree } from './menuTreeSS3540';
import { mip1000ipMenuTree } from './menuTreeMIP1000IP';

const BASE_URL = import.meta.env.BASE_URL;

export const models: Model[] = [
  {
    id: 'ss3542mfw',
    label: 'SS 3532/ 42  MF W 2.0',
    description:
      'As informaçõs desse menu são validas para todos os medelos com a versão web 2.0.',
    menuTree: ss3542MenuTree,
  },
  {
    id: 'ss3540',
    label: 'SS 3540 / Modelos Antigos',
    description:
      'As informaçõs desse menu são validas para todos os medelos com a versão web 1.0.',
    image: `${BASE_URL}imagens-ss3540/menu%20principal.jpeg`,
    menuTree: ss3540MenuTree,
  },
  {
    id: 'mip1000ip',
    label: 'MIP 1000 IP',
    description:
      'Módulo Inteligente de Portaria com conectividade Ethernet (IPv4). Controladora central para condomínios com s e 24 dispositivos no barramento RS-485.',
    image: `${BASE_URL}imagens-mip1000ip/menu-principal.jpeg`,
    menuTree: mip1000ipMenuTree,
  },
];
