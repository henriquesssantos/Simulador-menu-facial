import type { MenuItem } from '../types/menu';

const BASE_URL = import.meta.env.BASE_URL;
const IMG = (name: string) => `${BASE_URL}imagens-ss3540/${encodeURI(name)}`;
const MANUAL_PDF = `${BASE_URL}manuais/manual%201.0.pdf`;
const MANUAL_WEB = `${BASE_URL}manuais/manual%20interface%20web%201.0.pdf`;

export const ss3540MenuTree: MenuItem[] = [
  // ── 1. USUÁRIO ─────────────────────────────────────────────────────────────
  {
    id: 's40-usuarios',
    label: 'Usuário',
    path: '/usuario',
    content: {
      title: 'Usuário',
      description: 'Submenu principal de gerenciamento de usuários.',
      menuPath: 'Usuário',
      image: IMG('usuarios.jpeg'),
      manualPdf: MANUAL_PDF,
      manualWeb: MANUAL_WEB,
    },
    children: [
      {
        id: 's40-usuarios-novo',
        label: 'Novo usuário',
        path: '/usuario/novo',
        content: {
          title: 'Novo usuário',
          description:
            'Permite cadastrar um novo usuário no sistema da controladora. O cadastro é composto por duas páginas e suporta múltiplos métodos de autenticação.',
          menuPath: 'Usuário > Novo usuário',
          image: IMG('novo usuario.jpeg'),
          manualPdf: MANUAL_PDF,
          manualWeb: MANUAL_WEB,
          sections: [
            {
              title: 'Campos — Página 1/2',
              content: 'ID, Nome, Impressões digitais, Face, Cartão, Senha, Permissão, Zona de tempo, Plano feriado, Validade',
              type: 'info',
            },
            {
              title: 'Campos — Página 2/2',
              content: 'Perfil (Geral / Bloqueados / Visitante / Ronda / VIP / Acessibilidade)',
              type: 'info',
            },
            {
              title: 'Observação',
              content: 'Use o seletor de página no rodapé para navegar entre as duas páginas do formulário. Confirme com o ícone ✓ no canto superior direito.',
              type: 'warning',
            },
          ],
        },
      },
      {
        id: 's40-usuarios-lista',
        label: 'Lista de usuários',
        path: '/usuario/lista',
        content: {
          title: 'Lista de usuários',
          description:
            'Exibe todos os usuários cadastrados. Permite buscar por nome/ID e excluir registros.',
          menuPath: 'Usuário > Lista de usuários',
          image: IMG('lista de usuarios.jpeg'),
          manualPdf: MANUAL_PDF,
          manualWeb: MANUAL_WEB,
          sections: [
            {
              title: 'Colunas exibidas',
              content: 'ID, Nome, Verificar (ícones dos métodos cadastrados: Cartão, Face, Impressão digital)',
              type: 'info',
            },
          ],
        },
      },
      {
        id: 's40-usuarios-admins',
        label: 'Lista de administradores',
        path: '/usuario/administradores',
        content: {
          title: 'Lista de administradores',
          description:
            'Gerencia os usuários com perfil de administrador do dispositivo.',
          menuPath: 'Usuário > Lista de administradores',
          image: IMG('lista administradores.jpeg'),
          manualPdf: MANUAL_PDF,
          manualWeb: MANUAL_WEB,
        },
      },
      {
        id: 's40-usuarios-senha',
        label: 'Senha mestra',
        path: '/usuario/senha-mestra',
        content: {
          title: 'Senha mestra',
          description:
            'Configura e habilita a senha mestra do dispositivo. Permite acesso de emergência ao equipamento independentemente dos usuários cadastrados.',
          menuPath: 'Usuário > Senha mestra',
          image: IMG('senha mestre.jpeg'),
          manualPdf: MANUAL_PDF,
          manualWeb: MANUAL_WEB,
          sections: [
            {
              title: 'Campos',
              content: 'Senha mestra (campo de texto), Ativar (Toggle ON/OFF)',
              type: 'info',
            },
          ],
        },
      },
    ],
  },

  // ── 2. ACESSO ──────────────────────────────────────────────────────────────
  {
    id: 's40-acesso',
    label: 'Acesso',
    path: '/acesso',
    content: {
      title: 'Acesso',
      description: 'Submenu de configurações gerais de acesso, alarmes e métodos de autenticação.',
      menuPath: 'Acesso',
      image: IMG('acesso.jpeg'),
      manualPdf: MANUAL_PDF,
      manualWeb: MANUAL_WEB,
    },
    children: [
      {
        id: 's40-acesso-zonas',
        label: 'Zonas de tempo/Feriados',
        path: '/acesso/zonas-tempo',
        content: {
          title: 'Zonas de tempo/Feriados',
          description:
            'Define os períodos em que o acesso é permitido (NA — Normalmente Aberto) ou bloqueado (NF — Normalmente Fechado). Também configura a verificação remota.',
          menuPath: 'Acesso > Zonas de tempo/Feriados',
          image: IMG('zonas de tempo-feriados.jpeg'),
          manualPdf: MANUAL_PDF,
          manualWeb: MANUAL_WEB,
          sections: [
            {
              title: 'Opções',
              content: 'Período NA (Normalmente Aberto), Período NF (Normalmente Fechado), Verificação remota (Toggle ON/OFF)',
              type: 'info',
            },
          ],
        },
      },
      {
        id: 's40-acesso-metodo',
        label: 'Método de autenticação',
        path: '/acesso/metodo',
        content: {
          title: 'Método de autenticação',
          description:
            'Define o modo de autenticação global. Quando "Autenticação por usuário" está ativado, cada usuário pode ter um método individual. Quando desativado, todos usam o método padrão do equipamento.',
          menuPath: 'Acesso > Método de autenticação',
          image: IMG('metodo de autenticação.jpeg'),
          manualPdf: MANUAL_PDF,
          manualWeb: MANUAL_WEB,
          sections: [
            {
              title: 'Configuração por usuário',
              content: 'Ao ativar "Autenticação por usuário" é possível definir para cada usuário quais métodos são aceitos:, Cartão, Impressão digital, Face, Senha, — em modo /Ou (qualquer um) ou +E (combinação obrigatória).',
              type: 'tip',
            },
          ],
        },
      },
      {
        id: 's40-acesso-alarme',
        label: 'Alarme',
        path: '/acesso/alarme',
        content: {
          title: 'Alarme',
          description:
            'Configura os tipos de alarme monitorados pelo dispositivo relacionados ao controle de acesso.',
          menuPath: 'Acesso > Alarme',
          image: IMG('alarme.jpeg'),
          manualPdf: MANUAL_PDF,
          manualWeb: MANUAL_WEB,
          sections: [
            {
              title: 'Alarmes disponíveis',
              content: 'Anti-passback (ON/OFF), Coação (ON/OFF), Intrusão (ON/OFF), Tempo limite do sensor em segundos, Sensor de porta (ON/OFF)',
              type: 'info',
            },
            {
              title: 'Dica de suporte',
              content: 'Se o cliente relatar alarme constante de intrusão sem violação verifique se o Sensor de porta está configurado corretamente e se o sensor magnético está bem posicionado.',
              type: 'tip',
            },
          ],
        },
      },
      {
        id: 's40-acesso-porta',
        label: 'Estado da porta',
        path: '/acesso/estado-porta',
        content: {
          title: 'Estado da porta',
          description:
            'Define o estado padrão da trava elétrica conectada ao dispositivo: se a trava é Normalmente Aberta (NA), Normalmente Fechada (NF) ou em modo Normal.',
          menuPath: 'Acesso > Estado da porta',
          image: IMG('estado da porta.jpeg'),
          manualPdf: MANUAL_PDF,
          manualWeb: MANUAL_WEB,
          sections: [
            {
              title: 'Opções',
              content: 'NA (Normalmente Aberto) — porta destravada em repouso, NF (Normalmente Fechado) — porta travada em repouso, Normal — modo padrão do dispositivo',
              type: 'info',
            },
            {
              title: 'Atenção',
              content: 'Configure conforme o tipo de trava instalada. Selecionar a opção errada pode deixar a porta sempre aberta ou bloqueada permanentemente.',
              type: 'warning',
            },
          ],
        },
      },
    ],
  },

  // ── 3. CONEXÃO ────────────────────────────────────────────────────────────
  {
    id: 's40-conexao',
    label: 'Conexão',
    path: '/conexao',
    content: {
      title: 'Conexão',
      description: 'Submenu de configurações de conexão, como rede local, Wi-Fi e integrações Wiegand/Serial.',
      menuPath: 'Conexão',
      image: IMG('conexão.jpeg'),
      manualPdf: MANUAL_PDF,
      manualWeb: MANUAL_WEB,
    },
    children: [
      {
        id: 's40-conexao-rede',
        label: 'Rede',
        path: '/conexao/rede',
        children: [
          {
            id: 's40-conexao-rede-cabeada',
            label: 'Rede cabeada',
            path: '/conexao/rede/cabeada',
            content: {
              title: 'Rede cabeada',
              description:
                'Configuração da interface Ethernet (cabo). Define o endereçamento IP estático ou dinâmico (DHCP).',
              menuPath: 'Conexão > Rede > Rede cabeada',
              image: IMG('rede cabeada.jpeg'),
              manualPdf: MANUAL_PDF,
              manualWeb: MANUAL_WEB,
              sections: [
                {
                  title: 'Campos disponíveis',
                  content: 'Endereço de IP, Máscara de sub-rede, Gateway padrão, DHCP (Toggle ON/OFF)',
                  type: 'info',
                },
                
              ],
            },
          },
          {
            id: 's40-conexao-rede-registro',
            label: 'Registro ativo',
            path: '/conexao/rede/registro-ativo',
            content: {
              title: 'Registro ativo',
              description:
                'Configura o registro ativo (Active Registration). O dispositivo inicia a conexão com o servidor de gerenciamento, útil para instalações atrás de NAT ou firewall.',
              menuPath: 'Conexão > Rede > Registro ativo',
              image: IMG('registro ativo.jpeg'),
              manualPdf: MANUAL_PDF,
              manualWeb: MANUAL_WEB,
              sections: [
                {
                  title: 'Campos disponíveis',
                  content: 'IP do servidor, Porta (padrão: 7000), ID Dispositivo, Ativar (Toggle ON/OFF)',
                  type: 'info',
                },
              ],
            },
          },
          {
            id: 's40-conexao-rede-wifi',
            label: 'Wi-Fi',
            path: '/conexao/rede/wifi',
            content: {
              title: 'Wi-Fi',
              description:
                'Configuração da interface Wi-Fi. Permite conectar o dispositivo a redes sem fio.',
              menuPath: 'Conexão > Rede > Wi-Fi',
              image: IMG('wifi.jpeg'),
              manualPdf: MANUAL_PDF,
              manualWeb: MANUAL_WEB,
              sections: [
                {
                  title: 'Campos disponíveis',
                  content: 'Ligado/Desligado (Toggle), SSID, Endereço IP, Máscara de sub-rede, Gateway padrão, DHCP (Toggle ON/OFF)',
                  type: 'info',
                },
              ],
            },
          },
        ],
        content: {
          title: 'Rede',
          description: 'Submenu de configurações de rede do dispositivo.',
          menuPath: 'Conexão > Rede',
          image: IMG('rede.jpeg'),
          manualPdf: MANUAL_PDF,
          manualWeb: MANUAL_WEB,
        },
      },
      {
        id: 's40-conexao-serial',
        label: 'Porta serial',
        path: '/conexao/serial',
        content: {
          title: 'Porta serial',
          description:
            'Configuração da interface serial (RS-485) para integração com centrais de alarme ou sistemas de controle de acesso legados.',
          menuPath: 'Conexão > Porta serial',
          image: IMG('porta serial.jpeg'),
          manualPdf: MANUAL_PDF,
          manualWeb: MANUAL_WEB,
        },
      },
      {
        id: 's40-conexao-wiegand',
        label: 'Wiegand',
        path: '/conexao/wiegand',
        content: {
          title: 'Wiegand',
          description:
            'Configuração do protocolo Wiegand para integração com controladoras de acesso de terceiros que utilizam este padrão.',
          menuPath: 'Conexão > Wiegand',
          image: IMG('wiegand.jpeg'),
          manualPdf: MANUAL_PDF,
          manualWeb: MANUAL_WEB,
        },
      },
    ],
  },

  // ── 4. SISTEMA ────────────────────────────────────────────────────────────
  {
    id: 's40-sistema',
    label: 'Sistema',
    path: '/sistema',
    content: {
      title: 'Sistema',
      description: 'Submenu de configurações gerais do sistema, como data e hora, volume, display e parâmetros de face.',
      menuPath: 'Sistema',
      image: IMG('sistema.jpeg'),
      manualPdf: MANUAL_PDF,
      manualWeb: MANUAL_WEB,
    },
    children: [
      {
        id: 's40-sistema-hora',
        label: 'Data e hora',
        path: '/sistema/data-hora',
        children: [
          {
            id: 's40-sistema-hora-verao',
            label: 'Horário de verão',
            path: '/sistema/data-hora/verao',
            content: {
              title: 'Horário de verão',
              description:
                'Configura o ajuste automático de horário de verão (DST). Define a data de início e término.',
              menuPath: 'Sistema > Data e hora > Horário de verão',
              image: IMG('horario de verao.jpeg'),
              manualPdf: MANUAL_PDF,
              manualWeb: MANUAL_WEB,
              sections: [
                {
                  title: 'Campos disponíveis',
                  content: 'Ativar (Toggle ON/OFF), Tipo de Horário (Data/Semana), Data inicial, Data final',
                  type: 'info',
                },
              ],
            },
          },
          {
            id: 's40-sistema-hora-ntp',
            label: 'NTP',
            path: '/sistema/data-hora/ntp',
            content: {
              title: 'Sincronizar com servidor NTP',
              description:
                'Configura a sincronização automática via NTP (Network Time Protocol), mantendo o relógio correto e garantindo integridade dos registros de eventos.',
              menuPath: 'Sistema > Data e hora > NTP',
              image: IMG('servidor NTP.jpeg'),
              manualPdf: MANUAL_PDF,
              manualWeb: MANUAL_WEB,
              sections: [
                {
                  title: 'Campos disponíveis',
                  content: 'Ativar (Toggle ON/OFF), Endereço IP do servidor (padrão: pool.ntp.br), Porta (padrão: 123), Intervalo em minutos (padrão: 10)',
                  type: 'info',
                },
                {
                  title: 'Dica de suporte',
                  content: 'Se o cliente relatar horário incorreto nos eventos verifique se o NTP está ativo e se o dispositivo tem acesso ao servidor.',
                  type: 'tip',
                },
              ],
            },
          },
        ],
        content: {
          title: 'Data e hora',
          description:
            'Configurações de data, hora, fuso horário e sincronização NTP do dispositivo.',
          menuPath: 'Sistema > Data e hora',
          image: IMG('data e hora.jpeg'),
          manualPdf: MANUAL_PDF,
          manualWeb: MANUAL_WEB,
          sections: [
            {
              title: 'Campos disponíveis',
              content: 'Formato 24h (Toggle ON/OFF), Ajustar data, Ajustar horário, Formato (DD-MM-AA), Fuso horário',
              type: 'info',
            },
          ],
        },
      },
      {
        id: 's40-sistema-face',
        label: 'Parâmetros de face',
        path: '/sistema/face',
        content: {
          title: 'Parâmetros de face',
          description:
            'Ajustes finos do motor de reconhecimento facial. Esses parâmetros impactam diretamente a taxa de acerto e a ocorrência de falsos positivos.',
          menuPath: 'Sistema > Parâmetros de face',
          image: IMG('parametros de face.jpeg'),
          manualPdf: MANUAL_PDF,
          manualWeb: MANUAL_WEB,
          sections: [
            {
              title: 'Parâmetros disponíveis',
              content: 'Limiar de detecção facial (padrão: 85), Máx. ângulo de reconhecimento, Distância pupilar, Tempo limite de reconhecimento (segundos), Tempo limite para acesso facial negado (segundos), Limiar anti-fake (Rigoroso/Normal/Desativado), Modo máscara (Detectar/Ignorar), Restrições da fotografia (Simples/Rigoroso)',
              type: 'info',
            },
          ],
        },
      },
      {
        id: 's40-sistema-modo-imagem',
        label: 'Modo de imagem',
        path: '/sistema/modo-imagem',
        content: {
          title: 'Modo de imagem',
          description:
            'Define o ambiente de iluminação onde o dispositivo está instalado, ajustando os parâmetros de captura da câmera.',
          menuPath: 'Sistema > Modo de imagem',
          image: IMG('modo de imagem.jpeg'),
          manualPdf: MANUAL_PDF,
          manualWeb: MANUAL_WEB,
          sections: [
            {
              title: 'Opções',
              content: 'Interno (ambiente fechado com iluminação artificial), Externo (ambiente com luz solar direta), Outro (configuração personalizada)',
              type: 'info',
            },
          ],
        },
      },
      {
        id: 's40-sistema-modo-luz',
        label: 'Config. modo luz de preenchimento',
        path: '/sistema/modo-luz-preenchimento',
        content: {
          title: 'Configuração do modo de luz de preenchimento',
          description:
            'Define o comportamento da luz de preenchimento (luz branca frontal) que auxilia o reconhecimento facial em ambientes com pouca iluminação.',
          menuPath: 'Sistema > Config. modo de luz de preenchimento',
          image: IMG('configuração de modo luz de preenchimento.jpeg'),
          manualPdf: MANUAL_PDF,
          manualWeb: MANUAL_WEB,
          sections: [
            {
              title: 'Modos disponíveis',
              content: 'Auto (aciona automaticamente conforme luminosidade), NA (Normalmente Apagado — sempre desligado), NF (Normalmente Aceso — sempre ligado)',
              type: 'info',
            },
          ],
        },
      },
      {
        id: 's40-sistema-luz-preenchimento',
        label: 'Config. luz de preenchimento',
        path: '/sistema/luz-preenchimento',
        content: {
          title: 'Configuração da luz de preenchimento',
          description:
            'Ajusta a intensidade da luz branca de preenchimento (LED frontal) usada para auxiliar o reconhecimento facial.',
          menuPath: 'Sistema > Config. da luz de preenchimento',
          image: IMG('configuração da luz de preenchimento.jpeg'),
          manualPdf: MANUAL_PDF,
          manualWeb: MANUAL_WEB,
          sections: [
            {
              title: 'Ajuste',
              content: 'Controle deslizante via botões [-] e [+]. Nível indicado por barras de progresso.',
              type: 'info',
            },
          ],
        },
      },
      {
        id: 's40-sistema-volume',
        label: 'Volume',
        path: '/sistema/volume',
        content: {
          title: 'Volume',
          description:
            'Configura o volume do alto-falante e do microfone do dispositivo.',
          menuPath: 'Sistema > Volume',
          image: IMG('volume.jpeg'),
          manualPdf: MANUAL_PDF,
          manualWeb: MANUAL_WEB,
          sections: [
            {
              title: 'Submenus',
              content: 'Volume (alto-falante), Volume mic. (microfone)',
              type: 'info',
            },
          ],
        },
      },
      {
        id: 's40-sistema-idioma',
        label: 'Idioma',
        path: '/sistema/idioma',
        content: {
          title: 'Idioma',
          description: 'Define o idioma da interface do dispositivo.',
          menuPath: 'Sistema > Idioma',
          image: IMG('idioma.jpeg'),
          manualPdf: MANUAL_PDF,
          manualWeb: MANUAL_WEB,
          sections: [
            {
              title: 'Idiomas disponíveis',
              content: 'English, Português, Español (América Latina)',
              type: 'info',
            },
          ],
        },
      },
      {
        id: 's40-sistema-infravermelho',
        label: 'Intensidade da luz infravermelha',
        path: '/sistema/infravermelho',
        content: {
          title: 'Intensidade da luz infravermelha',
          description:
            'Ajusta a potência dos LEDs infravermelhos utilizados para captura facial em ambientes escuros.',
          menuPath: 'Sistema > Intensidade da luz infravermelha',
          image: IMG('intensidade da luz infravermelha.jpeg'),
          manualPdf: MANUAL_PDF,
          manualWeb: MANUAL_WEB,
          sections: [
            {
              title: 'Ajuste',
              content: 'Gráfico de barras com 10 níveis. Ajuste via botões [-] e [+]. Um preview ao vivo da câmera é exibido para auxiliar na calibração.',
              type: 'info',
            },
          ],
        },
      },
      {
        id: 's40-sistema-tela',
        label: 'Configurações de tela',
        path: '/sistema/tela',
        content: {
          title: 'Configurações de tela',
          description:
            'Configura o comportamento do display do dispositivo.',
          menuPath: 'Sistema > Configurações de tela',
          image: IMG('configuraçoes da tela.jpeg'),
          manualPdf: MANUAL_PDF,
          manualWeb: MANUAL_WEB,
          sections: [
            {
              title: 'Campos disponíveis',
              content: 'Tempo limite de tela acesa (segundos, padrão: 30), Sempre ligada (Toggle ON/OFF), Tempo proteção de tela (segundos, padrão: 300)',
              type: 'info',
            },
          ],
        },
      },
      {
        id: 's40-sistema-reset',
        label: 'Restaurar padrões de fábrica',
        path: '/sistema/restaurar',
        content: {
          title: 'Restaurar padrões de fábrica',
          description:
            'Redefine as configurações do dispositivo para o estado original de fábrica.',
          menuPath: 'Sistema > Restaurar padrões de fábrica',
          image: IMG('padrao de fabirca.jpeg'),
          manualPdf: MANUAL_PDF,
          manualWeb: MANUAL_WEB,
          sections: [
            {
              title: 'Opções disponíveis',
              content: 'Restaurar padrões de fábrica (apaga TUDO incluindo usuários), Restaurar padrões de fábrica (manter usuários) — reseta configurações mas preserva cadastros',
              type: 'info',
            },
            {
              title: 'Atenção',
              content: 'Esta operação é irreversível. Faça backup via USB antes de prosseguir.',
              type: 'warning',
            },
          ],
        },
      },
      {
        id: 's40-sistema-reiniciar',
        label: 'Reiniciar',
        path: '/sistema/reiniciar',
        content: {
          title: 'Reiniciar',
          description:
            'Reinicia o dispositivo (reboot). Não apaga configurações ou usuários.',
          menuPath: 'Sistema > Reiniciar',
          manualPdf: MANUAL_PDF,
          manualWeb: MANUAL_WEB,
          sections: [
            {
              title: 'Dica de suporte',
              content: 'Em caso de comportamento anômalo o reinício via menu é a forma mais segura de resolver sem perda de dados.',
              type: 'tip',
            },
          ],
        },
      },
    ],
  },

  // ── 5. USB ────────────────────────────────────────────────────────────────
  {
    id: 's40-usb',
    label: 'USB',
    path: '/usb',
    content: {
      title: 'USB',
      description: 'Opções de exportação e importação de usuários via pendrive, e atualização de firmware.',
      menuPath: 'USB',
      image: IMG('usb.jpeg'),
      manualPdf: MANUAL_PDF,
      manualWeb: MANUAL_WEB,
    },
    children: [
      {
        id: 's40-usb-exportar',
        label: 'Exportar',
        path: '/usb/exportar',
        content: {
          title: 'Exportar',
          description:
            'Exporta dados do dispositivo para um pen drive conectado à porta USB.',
          menuPath: 'USB > Exportar',
          image: IMG('exportar.jpeg'),
          manualPdf: MANUAL_PDF,
          manualWeb: MANUAL_WEB,
          sections: [
            {
              title: 'Tipos de dados exportáveis',
              content: 'Usuário, Face, Cartão, Impressão digital, Eventos, Todos',
              type: 'info',
            },
          ],
        },
      },
      {
        id: 's40-usb-importar',
        label: 'Importar',
        path: '/usb/importar',
        content: {
          title: 'Importar',
          description:
            'Importa dados de um pen drive conectado à porta USB para o dispositivo.',
          menuPath: 'USB > Importar',
          image: IMG('importar.jpeg'),
          manualPdf: MANUAL_PDF,
          manualWeb: MANUAL_WEB,
          sections: [
            {
              title: 'Tipos de dados importáveis',
              content: 'Usuário, Face, Cartão, Impressão digital, Foto',
              type: 'info',
            },
          ],
        },
      },
      {
        id: 's40-usb-atualizar',
        label: 'Atualizar',
        path: '/usb/atualizar',
        content: {
          title: 'Atualizar firmware',
          description:
            'Atualiza o firmware do dispositivo a partir de um arquivo no pen drive USB.',
          menuPath: 'USB > Atualizar',
          image: IMG('atualizar.jpeg'),
          manualPdf: MANUAL_PDF,
          manualWeb: MANUAL_WEB,
          sections: [
            {
              title: 'Procedimento',
              content: 'Coloque o arquivo de firmware na raiz do pen drive. Conecte-o ao dispositivo e selecione esta opção. O equipamento exibirá uma mensagem de confirmação.',
              type: 'info',
            },
            {
              title: 'Atenção',
              content: 'Não desligue o dispositivo durante a atualização. Uma interrupção pode inutilizar o equipamento.',
              type: 'warning',
            },
          ],
        },
      },
    ],
  },

  // ── 6. UTILIDADES ─────────────────────────────────────────────────────────
  {
    id: 's40-utilidades',
    label: 'Utilidades',
    path: '/utilidades',
    content: {
      title: 'Utilidades',
      description: 'Opções úteis como redefinição de senha, feedback customizado e protocolos remotos.',
      menuPath: 'Utilidades',
      image: IMG('utilidades.jpeg'),
      manualPdf: MANUAL_PDF,
      manualWeb: MANUAL_WEB,
    },
    children: [
      {
        id: 's40-utilidades-seguranca',
        label: 'Config. segurança',
        path: '/utilidades/seguranca',
        content: {
          title: 'Config. segurança',
          description:
            'Gerencia os protocolos e serviços de acesso remoto habilitados no dispositivo.',
          menuPath: 'Utilidades > Config. segurança',
          image: IMG('config segurança.jpeg'),
          manualPdf: MANUAL_PDF,
          manualWeb: MANUAL_WEB,
          sections: [
            {
              title: 'Serviços configuráveis',
              content: 'Habilitar redefinição de senha (Toggle ON/OFF), HTTPS (Toggle ON/OFF), CGI (Toggle ON/OFF), SSH (Toggle ON/OFF), Capturar fotos (Toggle ON/OFF), Limpar todas as fotos capturadas',
              type: 'info',
            },
          ],
        },
      },
      {
        id: 's40-utilidades-feedback',
        label: 'Feedback',
        path: '/utilidades/feedback',
        content: {
          title: 'Feedback',
          description:
            'Define como o dispositivo exibe o resultado da autenticação na tela.',
          menuPath: 'Utilidades > Feedback',
          image: IMG('feedback.jpeg'),
          manualPdf: MANUAL_PDF,
          manualWeb: MANUAL_WEB,
          sections: [
            {
              title: 'Opções de exibição',
              content: 'Sucesso ou falha, Somente nome, Foto e nome, Foto, imagem e nome, Personalizado',
              type: 'info',
            },
          ],
        },
      },
      {
        id: 's40-utilidades-inverter',
        label: 'Inverter Nº cartão',
        path: '/utilidades/inverter-cartao',
        content: {
          title: 'Inverter Nº cartão',
          description:
            'Inverte a ordem de leitura do número do cartão RFID. Útil quando a controladora externa espera o número em ordem inversa ao padrão do equipamento.',
          menuPath: 'Utilidades > Inverter Nº cartão',
          manualPdf: MANUAL_PDF,
          manualWeb: MANUAL_WEB,
          sections: [
            {
              title: 'Configuração',
              content: 'Toggle ON/OFF (padrão: Desligado)',
              type: 'info',
            },
          ],
        },
      },
      {
        id: 's40-utilidades-mip',
        label: 'MIP',
        path: '/utilidades/mip',
        content: {
          title: 'MIP',
          description:
            'Habilita o protocolo MIP (Management Interface Protocol) para integração com sistemas de gerenciamento de terceiros.',
          menuPath: 'Utilidades > MIP',
          manualPdf: MANUAL_PDF,
          manualWeb: MANUAL_WEB,
          sections: [
            {
              title: 'Configuração',
              content: 'Toggle ON/OFF (padrão: Desligado)',
              type: 'info',
            },
          ],
        },
      },
    ],
  },

  // ── 7. EVENTOS ────────────────────────────────────────────────────────────
  {
    id: 's40-eventos',
    label: 'Eventos',
    path: '/eventos',
    content: {
      title: 'Eventos',
      description: 'Consulta de log de eventos e registros de acesso do dispositivo.',
      menuPath: 'Eventos',
      image: IMG('eventos.jpeg'),
      manualPdf: MANUAL_PDF,
      manualWeb: MANUAL_WEB,
    },
    children: [
      {
        id: 's40-eventos-buscar',
        label: 'Buscar eventos',
        path: '/eventos/buscar',
        content: {
          title: 'Buscar eventos',
          description:
            'Exibe o log completo de tentativas de acesso registradas pelo dispositivo, com filtro por período e resultado.',
          menuPath: 'Eventos > Buscar eventos',
          image: IMG('eventos.jpeg'),
          manualPdf: MANUAL_PDF,
          manualWeb: MANUAL_WEB,
          sections: [
            {
              title: 'Informações exibidas',
              content: 'ID do evento, Horário, Resultado (Sucesso/Falhou), Método de autenticação utilizado',
              type: 'info',
            },
          ],
        },
      },
    ],
  },

  // ── 8. INFOR. SISTEMA ─────────────────────────────────────────────────────
  {
    id: 's40-info',
    label: 'Infor. Sistema',
    path: '/info-sistema',
    content: {
      title: 'Informações do Sistema',
      description:
        'Exibe as informações de identificação e versão do hardware e software do dispositivo.',
      menuPath: 'Infor. Sistema',
      image: IMG('versão do dispositivo.jpeg'),
      manualPdf: MANUAL_PDF,
      manualWeb: MANUAL_WEB,
      sections: [
        {
          title: 'Informações exibidas',
          content: 'Nº de série, Endereço MAC (cabeado), Endereço IP, Versão do software, Versão MCU, Endereço MAC Wi-Fi, Versão do Firmware',
          type: 'info',
        },
        {
          title: 'Dica de suporte',
          content: 'Esta tela é o primeiro ponto de verificação em um atendimento. O Nº de série e a versão do software são essenciais para abertura de chamados.',
          type: 'tip',
        },
      ],
    },
  },
];
