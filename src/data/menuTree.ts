import type { MenuItem } from '../types/menu';

export const ss3542MenuTree: MenuItem[] = [
  {
    id: 'usuarios',
    label: 'Usuários',
    path: '/usuarios',
    content: {
      title: 'Usuários',
      description:
        'Menu de gerenciamento de usuários do dispositivo. Permite cadastrar novos usuários, consultar listas e configurar a senha mestre.',
      menuPath: 'Menu principal > Usuários',
    },
    children: [
      {
        id: 'usuarios-novo',
        label: 'Novo usuário',
        path: '/usuarios/novo',
        content: {
          title: 'Novo usuário',
          description: 'Permite cadastrar um novo usuário no sistema da controladora facial. Cada usuário pode ter múltiplos métodos de autenticação configurados.',
          menuPath: 'Usuários > Novo usuário',
          sections: [
            {
              title: 'Campos disponíveis',
              content: 'ID, Nome, Métodos de Autenticação, Método de abertura, Impressão digital, Face, Cartão, Senha, Zona de tempo, Plano de feriado, Validade e Perfil.',
              type: 'info',
            },
            {
              title: 'Perfis de usuário',
              content: 'Geral, Bloqueado, Visitante, Ronda, VIP, Acessibilidade, Usuário 1, Usuário 2.',
              type: 'tip',
            },
            {
              title: 'Observação importante',
              content: 'O cadastro é composto por 2 páginas. Após preencher a página 1, utilize o botão de avanço no rodapé para acessar a página 2 com campos de Validade e Perfil.',
              type: 'warning',
            },
          ],
        },
      },
      {
        id: 'usuarios-lista',
        label: 'Lista Usuários',
        path: '/usuarios/lista',
        content: {
          title: 'Lista Usuários',
          description: 'Exibe todos os usuários cadastrados na controladora. Permite pesquisar, visualizar e excluir registros.',
          menuPath: 'Usuários > Lista Usuários',
          sections: [
            {
              title: 'Colunas exibidas',
              content: 'ID, Nome e Método de autenticação configurado.',
              type: 'info',
            },
          ],
        },
      },
      {
        id: 'usuarios-admins',
        label: 'Lista de administradores',
        path: '/usuarios/administradores',
        content: {
          title: 'Lista de administradores',
          description: 'Gerencia os usuários com perfil de administrador do dispositivo.',
          menuPath: 'Usuários > Lista de administradores',
        },
      },
      {
        id: 'usuarios-senha-mestre',
        label: 'Senha mestre',
        path: '/usuarios/senha-mestre',
        content: {
          title: 'Senha mestre',
          description: 'Configura e habilita a senha mestre do dispositivo. Quando ativada, permite acesso de emergência independente dos usuários cadastrados.',
          menuPath: 'Usuários > Senha mestre',
          sections: [
            {
              title: 'Campos',
              content: 'Senha mestre (campo de texto) e Ativar (Toggle ON/OFF).',
              type: 'info',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'acesso',
    label: 'Acesso',
    path: '/acesso',
    children: [
      {
        id: 'acesso-metodo',
        label: 'Método de abertura',
        path: '/acesso/metodo',
        content: {
          title: 'Método de abertura',
          description: 'Define o método global de autenticação para abertura da porta. Pode ser por Cartão, Impressão digital, Face, Senha, Controle Remoto ou uma combinação (E / OU).',
          menuPath: 'Acesso > Método de abertura',
        },
      },
      {
        id: 'acesso-alarme',
        label: 'Alarme',
        path: '/acesso/alarme',
        children: [
          {
            id: 'acesso-alarme-antipassback',
            label: 'Anti-passback',
            path: '/acesso/alarme/anti-passback',
            content: {
              title: 'Anti-passback',
              description: 'Impede que um cartão ou credencial seja usada para entrar em uma área sem antes ter saído. Evita compartilhamento indevido de credenciais.',
              menuPath: 'Acesso > Alarme > Anti-passback',
              sections: [
                {
                  title: 'Como funciona',
                  content: 'O sistema registra a última direção de passagem de cada usuário. Se um usuário tentar passar na mesma direção consecutivamente, o acesso é negado.',
                  type: 'info',
                },
              ],
            },
          },
          {
            id: 'acesso-alarme-coacho',
            label: 'Coação',
            path: '/acesso/alarme/coacão',
            content: {
              title: 'Coação',
              description: 'Permite que o usuário sinalize silenciosamente uma situação de coação (sequestro) ao autenticar. O sistema abre a porta normalmente mas dispara um alarme oculto.',
              menuPath: 'Acesso > Alarme > Coação',
              sections: [
                {
                  title: 'Atenção',
                  content: 'Certifique-se que o Habilitar saída está configurado para que o alarme seja reportado a uma central ou dispositivo externo.',
                  type: 'warning',
                },
              ],
            },
          },
          {
            id: 'acesso-alarme-sensor',
            label: 'Sensor de porta',
            path: '/acesso/alarme/sensor-porta',
            content: {
              title: 'Sensor de porta',
              description: 'Monitora o estado físico da porta (aberta/fechada) via sensor magnético. Pode acionar alarme se a porta permanecer aberta além do tempo configurado.',
              menuPath: 'Acesso > Alarme > Sensor de porta',
            },
          },
        ],
      },
      {
        id: 'acesso-config-porta',
        label: 'Config. Porta',
        path: '/acesso/config-porta',
        content: {
          title: 'Config. Porta',
          description: 'Configurações físicas da porta controlada pelo dispositivo.',
          menuPath: 'Acesso > Config. Porta',
          sections: [
            {
              title: 'Campos',
              content: 'Estado da porta (Normal/Sempre aberta/Sempre fechada) e Tempo de abertura (duração em segundos que a trava permanece acionada após autenticação).',
              type: 'info',
            },
          ],
        },
      },
      {
        id: 'acesso-intervalo',
        label: 'Intervalo verificação(s)',
        path: '/acesso/intervalo-verificacao',
        content: {
          title: 'Intervalo verificação(s)',
          description: 'Define o intervalo mínimo em segundos entre tentativas de verificação consecutivas pelo mesmo usuário.',
          menuPath: 'Acesso > Intervalo verificação(s)',
        },
      },
      {
        id: 'acesso-tempo-abertura',
        label: 'Tempo de abertura - Acesso',
        path: '/acesso/tempo-abertura',
        content: {
          title: 'Tempo de abertura — Acessibilidade',
          description: 'Tempo estendido de abertura da porta para usuários com perfil de Acessibilidade. Permite mais tempo para passagem de pessoas com mobilidade reduzida.',
          menuPath: 'Acesso > Tempo de abertura - Acesso',
        },
      },
      {
        id: 'acesso-intertravamento',
        label: 'Intertravamento',
        path: '/acesso/intertravamento',
        children: [
          {
            id: 'acesso-intertravamento-local',
            label: 'Local',
            path: '/acesso/intertravamento/local',
            content: {
              title: 'Intertravamento local',
              description: 'Configura o intertravamento (eclusa/airlock) entre duas portas controladas localmente pelo mesmo dispositivo. Garante que apenas uma porta esteja aberta por vez.',
              menuPath: 'Acesso > Intertravamento > Local',
              sections: [
                {
                  title: 'Campos disponíveis',
                  content: 'Ativar (ON/OFF), Verificação de Segurança (ON/OFF), Tempo de Verificação (segundos).',
                  type: 'info',
                },
              ],
            },
          },
          {
            id: 'acesso-intertravamento-inteligente',
            label: 'Inteligente',
            path: '/acesso/intertravamento/inteligente',
            content: {
              title: 'Intertravamento inteligente',
              description: 'Intertravamento entre dispositivos via rede IP. Permite criar eclusas entre controladoras diferentes, comunicando via protocolo de rede.',
              menuPath: 'Acesso > Intertravamento > Inteligente',
              sections: [
                {
                  title: 'Campos disponíveis',
                  content: 'Ativar, Posição da Porta, Endereço IP, Porta (5000 padrão), Usuário, Senha, Verificação de Segurança, Tempo de Verificação.',
                  type: 'info',
                },
              ],
            },
          },
        ],
      },
    ],
  },
  {
    id: 'rede',
    label: 'Rede',
    path: '/rede',
    children: [
      {
        id: 'rede-ip',
        label: 'Rede (IP)',
        path: '/rede/ip',
        children: [
          {
            id: 'rede-ip-cabeada',
            label: 'Rede cabeada',
            path: '/rede/ip/cabeada',
            content: {
              title: 'Rede cabeada',
              description: 'Configuração da interface de rede Ethernet (cabo). Define o endereçamento IP estático ou DHCP para comunicação na rede local.',
              menuPath: 'Rede > Rede (IP) > Rede cabeada',
              sections: [
                {
                  title: 'Campos disponíveis',
                  content: 'Endereço IP, Máscara sub-rede, Gateway Padrão, DNS Principal, DNS Alternativo, DHCP (ON/OFF).',
                  type: 'info',
                },
                {
                  title: 'Dica de suporte',
                  content: 'Para verificar o IP atual sem acessar este menu, acesse Info Sistema > Versão do dispositivo onde o Endereço IP é exibido.',
                  type: 'tip',
                },
              ],
            },
          },
          {
            id: 'rede-ip-registro-ativo',
            label: 'Registro Ativo',
            path: '/rede/ip/registro-ativo',
            content: {
              title: 'Registro Ativo',
              description: 'Configura o registro ativo (Active Registration) para comunicação com servidor de gerenciamento. O dispositivo inicia a conexão com o servidor, útil para instalações atrás de NAT.',
              menuPath: 'Rede > Rede (IP) > Registro Ativo',
              sections: [
                {
                  title: 'Campos disponíveis',
                  content: 'IP do servidor, Porta (padrão 7000), ID do registro, Ativar (ON/OFF).',
                  type: 'info',
                },
              ],
            },
          },
          {
            id: 'rede-ip-wifi',
            label: 'Wi-Fi',
            path: '/rede/ip/wifi',
            content: {
              title: 'Wi-Fi',
              description: 'Configuração da interface Wi-Fi do dispositivo para conexão com redes sem fio.',
              menuPath: 'Rede > Rede (IP) > Wi-Fi',
              sections: [
                {
                  title: 'Campos disponíveis',
                  content: 'Ligado/Desligado (Toggle), SSID, Endereço IP, Máscara sub-rede, Gateway Padrão, DHCP (ON/OFF).',
                  type: 'info',
                },
              ],
            },
          },
          {
            id: 'rede-ip-ap-wifi',
            label: 'AP WIFI',
            path: '/rede/ip/ap-wifi',
            content: {
              title: 'AP WIFI',
              description: 'Configura o dispositivo como ponto de acesso Wi-Fi (Access Point), permitindo que outros dispositivos se conectem diretamente a ele.',
              menuPath: 'Rede > Rede (IP) > AP WIFI',
              sections: [
                {
                  title: 'Campos disponíveis',
                  content: 'Ligado/Desligado, SSID (padrão: número de série do dispositivo), Senha (padrão: 12345678), Endereço IP.',
                  type: 'info',
                },
              ],
            },
          },
        ],
      },
      {
        id: 'rede-rs485',
        label: 'RS-485',
        path: '/rede/rs485',
        content: {
          title: 'RS-485',
          description: 'Configuração da interface serial RS-485 para integração com centrais de alarme, sistemas de controle de acesso legados ou conversores de protocolo.',
          menuPath: 'Rede > RS-485',
        },
      },
      {
        id: 'rede-wiegand',
        label: 'Wiegand',
        path: '/rede/wiegand',
        content: {
          title: 'Wiegand',
          description: 'Configuração do protocolo Wiegand para integração com controladoras de acesso de terceiros que utilizam este padrão de comunicação.',
          menuPath: 'Rede > Wiegand',
        },
      },
    ],
  },
  {
    id: 'config-sistema',
    label: 'Config. do Sistema',
    path: '/config-sistema',
    children: [
      {
        id: 'config-sistema-horario',
        label: 'Horário',
        path: '/config-sistema/horario',
        children: [
          {
            id: 'config-sistema-horario-verao',
            label: 'Horário de verão',
            path: '/config-sistema/horario/verao',
            content: {
              title: 'Horário de verão',
              description: 'Configura o ajuste automático de horário de verão (DST). Define data de início e término da vigência.',
              menuPath: 'Config. do Sistema > Horário > Horário de verão',
              sections: [
                {
                  title: 'Campos disponíveis',
                  content: 'Ativar (ON/OFF), Tipo de Horário (Data/Semana), Data inicial, Fim.',
                  type: 'info',
                },
              ],
            },
          },
          {
            id: 'config-sistema-horario-ntp',
            label: 'NTP',
            path: '/config-sistema/horario/ntp',
            content: {
              title: 'Sincronizar com servidor NTP',
              description: 'Configura a sincronização automática de horário via protocolo NTP (Network Time Protocol). Essencial para manter a hora correta e garantir a integridade dos registros de eventos.',
              menuPath: 'Config. do Sistema > Horário > NTP',
              sections: [
                {
                  title: 'Campos disponíveis',
                  content: 'Ativar (ON/OFF), IP/Hostname do servidor NTP (padrão: pool.ntp.br), Porta (padrão: 123), Intervalo de sincronização (minutos).',
                  type: 'info',
                },
                {
                  title: 'Dica de suporte',
                  content: 'Se o cliente reportar horário incorreto nos eventos, verifique se o NTP está ativo e se o dispositivo tem acesso ao servidor configurado na porta 123/UDP.',
                  type: 'tip',
                },
              ],
            },
          },
        ],
        content: {
          title: 'Horário',
          description: 'Configurações de data, hora, fuso horário e sincronização de tempo do dispositivo.',
          menuPath: 'Config. do Sistema > Horário',
          sections: [
            {
              title: 'Campos disponíveis',
              content: 'Formato 24h (ON/OFF), Data e hora, Horário, Formato da Data, Fuso Horário. Sub-menus: Horário de verão e NTP.',
              type: 'info',
            },
          ],
        },
      },
      {
        id: 'config-sistema-face',
        label: 'Parâmetros de Face',
        path: '/config-sistema/face',
        content: {
          title: 'Parâmetros de Face',
          description: 'Ajustes finos do motor de reconhecimento facial do dispositivo. Esses parâmetros impactam diretamente a taxa de acerto e falsos positivos.',
          menuPath: 'Config. do Sistema > Parâmetros de Face',
          sections: [
            {
              title: 'Parâmetros disponíveis',
              content: 'Limiar de reconhecimento facial (padrão: 85), Ângulo máx. de reconhecimento (padrão: 30°), Tempo face cadastrada (segundos), Tempo face não cadastrada (segundos), Distância de reconhecimento (padrão: 1,5m), Nível anti-fake, Embelezamento (ON/OFF), Parâmetros da máscara, Reconhecimento de múltiplas faces (ON/OFF), Restrições da fotografia.',
              type: 'info',
            },
            {
              title: 'Dica de suporte',
              content: 'Se o cliente reclamar de falha frequente no reconhecimento, tente reduzir o Limiar de reconhecimento facial para 80. Se reclamar de falsos positivos (abre para pessoas erradas), aumente para 90+.',
              type: 'tip',
            },
          ],
        },
      },
      {
        id: 'config-sistema-volume',
        label: 'Volume',
        path: '/config-sistema/volume',
        content: {
          title: 'Volume',
          description: 'Controla o volume do alto-falante, microfone e som de toque na tela.',
          menuPath: 'Config. do Sistema > Volume',
          sections: [
            {
              title: 'Opções',
              content: 'Alto-falante (sub-menu de ajuste), Microfone (sub-menu de ajuste), Som toque na tela (ON/OFF).',
              type: 'info',
            },
          ],
        },
      },
      {
        id: 'config-sistema-digital',
        label: 'Imp. digital',
        path: '/config-sistema/impressao-digital',
        content: {
          title: 'Impressão digital',
          description: 'Configura o nível de sensibilidade do leitor de impressão digital.',
          menuPath: 'Config. do Sistema > Imp. digital',
          sections: [
            {
              title: 'Ajuste',
              content: 'Nível limite ajustável via botões [-] e [+]. Padrão: nível 3. Quanto maior o nível, mais rígida a comparação biométrica.',
              type: 'info',
            },
          ],
        },
      },
      {
        id: 'config-sistema-idioma',
        label: 'Idioma',
        path: '/config-sistema/idioma',
        content: {
          title: 'Idioma',
          description: 'Define o idioma da interface do dispositivo.',
          menuPath: 'Config. do Sistema > Idioma',
          sections: [
            {
              title: 'Opções disponíveis',
              content: 'English, Español (Latinoamérica), Português.',
              type: 'info',
            },
          ],
        },
      },
      {
        id: 'config-sistema-tela',
        label: 'Tela',
        path: '/config-sistema/tela',
        content: {
          title: 'Tela',
          description: 'Configurações de exibição do display do dispositivo.',
          menuPath: 'Config. do Sistema > Tela',
          sections: [
            {
              title: 'Opções',
              content: 'Tempo para logout (segundos), Tempo de tela acesa (padrão: 30s), Brilho da tela (ajuste 1-10, padrão: 8).',
              type: 'info',
            },
          ],
        },
      },
      {
        id: 'config-sistema-reset',
        label: 'Restaurar padrões de fábrica',
        path: '/config-sistema/restaurar',
        content: {
          title: 'Restaurar padrões de fábrica',
          description: 'Reseta as configurações do dispositivo para os valores de fábrica.',
          menuPath: 'Config. do Sistema > Restaurar padrões de fábrica',
          sections: [
            {
              title: 'Opções',
              content: '1. Restaurar padrões de fábrica — apaga TODAS as configurações e usuários.\n2. Restaurar para padrões de fábrica (manter usuários) — reseta configurações mas mantém cadastros.',
              type: 'info',
            },
            {
              title: 'Atenção',
              content: 'Esta operação é irreversível. Certifique-se de que há backup das configurações e usuários antes de prosseguir.',
              type: 'warning',
            },
          ],
        },
      },
      {
        id: 'config-sistema-reiniciar',
        label: 'Reiniciar dispositivo',
        path: '/config-sistema/reiniciar',
        content: {
          title: 'Reiniciar dispositivo',
          description: 'Reinicia o dispositivo (reboot). Equivale a um desligamento e religamento. Não apaga configurações ou usuários.',
          menuPath: 'Config. do Sistema > Reiniciar dispositivo',
          sections: [
            {
              title: 'Dica de suporte',
              content: 'Em caso de comportamento anômalo ou travamento do equipamento, o reinício via menu é a forma mais segura de resolver sem perda de dados.',
              type: 'tip',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'usb',
    label: 'Gerenciamento USB',
    path: '/usb',
    children: [
      {
        id: 'usb-exportar',
        label: 'Exportar',
        path: '/usb/exportar',
        content: {
          title: 'Exportar',
          description: 'Exporta dados do dispositivo para um pen drive conectado à porta USB.',
          menuPath: 'Gerenciamento USB > Exportar',
          sections: [
            {
              title: 'Tipos de dados exportáveis',
              content: 'Usuário, Face, Dados do cartão, Impressão digital, Eventos de Acesso, Todos.',
              type: 'info',
            },
          ],
        },
      },
      {
        id: 'usb-importar',
        label: 'Importar',
        path: '/usb/importar',
        content: {
          title: 'Importar',
          description: 'Importa dados de um pen drive conectado à porta USB para o dispositivo.',
          menuPath: 'Gerenciamento USB > Importar',
          sections: [
            {
              title: 'Tipos de dados importáveis',
              content: 'Usuário, Face, Dados do cartão, Impressão digital, Importar face.',
              type: 'info',
            },
          ],
        },
      },
      {
        id: 'usb-atualizar',
        label: 'Atualizar',
        path: '/usb/atualizar',
        content: {
          title: 'Atualizar firmware',
          description: 'Atualiza o firmware do dispositivo a partir de um arquivo de atualização no pen drive USB.',
          menuPath: 'Gerenciamento USB > Atualizar',
          sections: [
            {
              title: 'Procedimento',
              content: 'Coloque o arquivo de firmware na raiz do pen drive, conecte-o ao dispositivo e selecione esta opção.',
              type: 'info',
            },
            {
              title: 'Atenção',
              content: 'Não desligue o dispositivo durante o processo de atualização. Uma interrupção pode inutilizar o equipamento.',
              type: 'warning',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'utilidades',
    label: 'Utilidades',
    path: '/utilidades',
    children: [
      {
        id: 'utilidades-seguranca',
        label: 'Configuração de segurança',
        path: '/utilidades/seguranca',
        content: {
          title: 'Configuração de segurança',
          description: 'Gerencia os protocolos e serviços habilitados no dispositivo relacionados à segurança de acesso remoto.',
          menuPath: 'Utilidades > Configuração de segurança',
          sections: [
            {
              title: 'Serviços configuráveis',
              content: 'Redefinir senha (ON/OFF), HTTPS (ON/OFF), CGI (ON/OFF), SSH (ON/OFF), Imagem da impressão digital (ON/OFF), Capturar (ON/OFF), Limpar todos os instâncias.',
              type: 'info',
            },
          ],
        },
      },
      {
        id: 'utilidades-feedback',
        label: 'Feedback',
        path: '/utilidades/feedback',
        content: {
          title: 'Feedback',
          description: 'Define como o dispositivo exibe o resultado da autenticação ao usuário na tela.',
          menuPath: 'Utilidades > Feedback',
          sections: [
            {
              title: 'Opções de exibição',
              content: 'Sucesso ou falha, Somente nome, Padrão, Foto, imagem e nome, Personalizado, Nenhum.',
              type: 'info',
            },
          ],
        },
      },
      {
        id: 'utilidades-icones',
        label: 'Ícones Tela',
        path: '/utilidades/icones',
        content: {
          title: 'Ícones Tela',
          description: 'Configura quais ícones e atalhos são exibidos na tela de espera (standby) do dispositivo.',
          menuPath: 'Utilidades > Ícones Tela',
          sections: [
            {
              title: 'Opções',
              content: 'Senha (ON/OFF), Menu principal (ON/OFF).',
              type: 'info',
            },
          ],
        },
      },
      {
        id: 'utilidades-alarmes',
        label: 'Configurações Alarmes',
        path: '/utilidades/alarmes',
        children: [
          {
            id: 'utilidades-alarmes-porta',
            label: 'Tempo limite porta aberta',
            path: '/utilidades/alarmes/porta-aberta',
            content: {
              title: 'Tempo limite porta aberta',
              description: 'Dispara alarme caso a porta permaneça aberta por mais tempo do que o configurado.',
              menuPath: 'Utilidades > Configurações Alarmes > Tempo limite porta aberta',
              sections: [
                {
                  title: 'Campos',
                  content: 'Ativar (ON), Habilitar saída (ON), Duração saída em segundos (padrão: 30), Soar Alarme (ON), Duração do alarme em minutos (padrão: 5), Tempo de Pré-alerta em segundos (padrão: 5).',
                  type: 'info',
                },
              ],
            },
          },
          {
            id: 'utilidades-alarmes-intrusao',
            label: 'Alarme de intrusão',
            path: '/utilidades/alarmes/intrusao',
            content: {
              title: 'Alarme de intrusão',
              description: 'Dispara alarme quando a porta é aberta à força, sem autenticação válida (detecção via sensor de porta).',
              menuPath: 'Utilidades > Configurações Alarmes > Alarme de intrusão',
              sections: [
                {
                  title: 'Campos',
                  content: 'Habilitado (ON/OFF), Habilitar saída (ON/OFF), Duração saída (seg.), Soar Alarme (ON/OFF), Duração alarme (min.).',
                  type: 'info',
                },
              ],
            },
          },
          {
            id: 'utilidades-alarmes-rede',
            label: 'Alarme falha de rede',
            path: '/utilidades/alarmes/rede',
            content: {
              title: 'Alarme falha de rede',
              description: 'Dispara alarme quando o dispositivo perde conectividade de rede.',
              menuPath: 'Utilidades > Configurações Alarmes > Alarme falha de rede',
            },
          },
          {
            id: 'utilidades-alarmes-leitor',
            label: 'Leitor Facial',
            path: '/utilidades/alarmes/leitor-facial',
            content: {
              title: 'Leitor Facial — Alarme',
              description: 'Configura alarme relacionado a falhas ou adulterações no leitor facial.',
              menuPath: 'Utilidades > Configurações Alarmes > Leitor Facial',
            },
          },
          {
            id: 'utilidades-alarmes-antipassback',
            label: 'Alarme Anti-passback',
            path: '/utilidades/alarmes/anti-passback',
            content: {
              title: 'Alarme Anti-passback',
              description: 'Configura o alarme específico para violações da regra de anti-passback.',
              menuPath: 'Utilidades > Configurações Alarmes > Alarme Anti-passback',
            },
          },
          {
            id: 'utilidades-alarmes-coacao',
            label: 'Coação',
            path: '/utilidades/alarmes/coacao',
            content: {
              title: 'Coação — Alarme',
              description: 'Configuração da saída de alarme para eventos de coação.',
              menuPath: 'Utilidades > Configurações Alarmes > Coação',
              sections: [
                {
                  title: 'Campos',
                  content: 'Ativar (ON/OFF), Temporização em segundos (padrão: 5), Habilitar saída (ON), Duração saída em segundos (padrão: 5).',
                  type: 'info',
                },
              ],
            },
          },
          {
            id: 'utilidades-alarmes-invalidos',
            label: 'Limite de acessos inválidos',
            path: '/utilidades/alarmes/acessos-invalidos',
            content: {
              title: 'Limite de acessos inválidos',
              description: 'Bloqueia o dispositivo temporariamente após um número configurável de tentativas de acesso inválidas (proteção contra ataques de força bruta).',
              menuPath: 'Utilidades > Configurações Alarmes > Limite de acessos inválidos',
              sections: [
                {
                  title: 'Campos',
                  content: 'Ativar (ON/OFF), Máx. Tentativas (padrão: 10), Bloquear por minutos (padrão: 1), Habilitar saída (ON/OFF), Duração saída (seg.), Soar Alarme (ON/OFF), Duração alarme (min.).',
                  type: 'info',
                },
              ],
            },
          },
          {
            id: 'utilidades-alarmes-tamper',
            label: 'Alarme de tamper',
            path: '/utilidades/alarmes/tamper',
            content: {
              title: 'Alarme de tamper',
              description: 'Dispara alarme quando o dispositivo é removido da superfície de fixação (adulteração física). O sensor de tamper fica ativo por padrão.',
              menuPath: 'Utilidades > Configurações Alarmes > Alarme de tamper',
              sections: [
                {
                  title: 'Campos',
                  content: 'Ativar (ON por padrão), Habilitar saída (OFF), Duração saída (padrão: 30s), Soar Alarme (ON por padrão), Duração alarme (padrão: 1 min).',
                  type: 'info',
                },
                {
                  title: 'Dica de suporte',
                  content: 'Se o cliente relatar alarme constante de tamper após instalação, verifique se o dispositivo está corretamente fixado e se o sensor traseiro está em contato com a superfície de montagem.',
                  type: 'tip',
                },
              ],
            },
          },
        ],
      },
      {
        id: 'utilidades-modo-ponto',
        label: 'Modo Ponto',
        path: '/utilidades/modo-ponto',
        content: {
          title: 'Modo Ponto',
          description: 'Habilita o modo de registro de ponto (time attendance), transformando o dispositivo em um relógio de ponto biométrico.',
          menuPath: 'Utilidades > Modo Ponto',
          sections: [
            {
              title: 'Campos',
              content: 'Modo Ponto (ON/OFF), Botão Registrar (ON/OFF), Cor Data/Hora (ex.: Branca).',
              type: 'info',
            },
          ],
        },
      },
      {
        id: 'utilidades-nao-perturbe',
        label: 'Modo Não perturbe',
        path: '/utilidades/nao-perturbe',
        content: {
          title: 'Modo Não perturbe',
          description: 'Define períodos em que o dispositivo opera silenciosamente, sem emitir sons de autenticação ou alarmes locais.',
          menuPath: 'Utilidades > Modo Não perturbe',
          sections: [
            {
              title: 'Campos',
              content: 'Ligado/desligado (ON/OFF), Período 1, Período 2, Período 3, Período 4 (cada um com horário de início e fim).',
              type: 'info',
            },
          ],
        },
      },
      {
        id: 'utilidades-mip',
        label: 'MIP',
        path: '/utilidades/mip',
        content: {
          title: 'MIP',
          description: 'Habilita o protocolo MIP (Management Interface Protocol) para integração com sistemas de gerenciamento de terceiros.',
          menuPath: 'Utilidades > MIP',
        },
      },
      {
        id: 'utilidades-leitor-facial',
        label: 'Modo de Leitor Facial',
        path: '/utilidades/modo-leitor-facial',
        content: {
          title: 'Modo de Leitor Facial',
          description: 'Quando ativado, o dispositivo opera apenas como leitor facial periférico, enviando as credenciais para uma controladora de acesso principal via Wiegand ou RS-485.',
          menuPath: 'Utilidades > Modo de Leitor Facial',
          sections: [
            {
              title: 'Atenção',
              content: 'Ao ativar este modo, o controle de porta local é desabilitado. O dispositivo passa a funcionar apenas como terminal de leitura.',
              type: 'warning',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'eventos',
    label: 'Eventos',
    path: '/eventos',
    children: [
      {
        id: 'eventos-acesso',
        label: 'Eventos de acesso',
        path: '/eventos/acesso',
        content: {
          title: 'Eventos de acesso',
          description: 'Exibe o log completo de tentativas de acesso registradas pelo dispositivo, incluindo acessos bem-sucedidos e falhas.',
          menuPath: 'Eventos > Eventos de acesso',
          sections: [
            {
              title: 'Colunas da tabela',
              content: 'ID, Horário, Resultado (Sucesso/Falhou), Método (Face, Cartão, Senha, etc.).',
              type: 'info',
            },
            {
              title: 'Capacidade',
              content: 'O dispositivo armazena até 300.000 eventos de acesso. Utilize o Gerenciamento USB para exportar os logs antes de atingir o limite.',
              type: 'tip',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'testes',
    label: 'Testes',
    path: '/testes',
    children: [
      {
        id: 'testes-sequencial',
        label: 'Teste sequencial',
        path: '/testes/sequencial',
        content: {
          title: 'Teste sequencial',
          description: 'Módulo de diagnóstico de hardware do dispositivo. Permite testar individualmente cada componente de forma guiada.',
          menuPath: 'Testes > Teste sequencial',
          sections: [
            {
              title: 'Testes disponíveis',
              content: 'Teste tela, Teste áudio, Teste do botão, Teste da impressão digital, Teste de imagem (câmera), Teste de relógio, Testes gerais, Auto teste.',
              type: 'info',
            },
            {
              title: 'Dica de suporte',
              content: 'Utilize o Auto teste para uma verificação rápida de todos os componentes em sequência. Ideal para diagnóstico inicial em casos de mau funcionamento.',
              type: 'tip',
            },
          ],
        },
      },
    ],
  },
  {
    id: 'info-sistema',
    label: 'Info Sistema',
    path: '/info-sistema',
    children: [
      {
        id: 'info-sistema-capacidade',
        label: 'Capacidade do dispositivo',
        path: '/info-sistema/capacidade',
        content: {
          title: 'Capacidade do dispositivo',
          description: 'Exibe o uso atual versus a capacidade máxima de cada tipo de dado armazenado no dispositivo.',
          menuPath: 'Info Sistema > Capacidade do dispositivo',
          sections: [
            {
              title: 'Dados exibidos',
              content: 'Usuário (máx. 10.000), Cartão (máx. 20.000), Impressão digital (máx. 10.000), Face (máx. 10.000), Registros de alarme (máx. 5.000), Eventos de Acesso (máx. 300.000), Eventos Admin. (máx. 2.000), Administradores (máx. 50).',
              type: 'info',
            },
          ],
        },
      },
      {
        id: 'info-sistema-versao',
        label: 'Versão do dispositivo',
        path: '/info-sistema/versao',
        content: {
          title: 'Versão do dispositivo',
          description: 'Exibe as informações de identificação e versão do hardware e software do dispositivo.',
          menuPath: 'Info Sistema > Versão do dispositivo',
          sections: [
            {
              title: 'Informações exibidas',
              content: 'Número de série (NS), Endereço MAC (cabeado), Endereço IP, Versão do software, Endereço MAC Wi-Fi, Versão do hardware, Modelo.',
              type: 'info',
            },
            {
              title: 'Dica de suporte',
              content: 'Esta tela é o primeiro lugar para checar durante um atendimento. O número de série (NS) e a versão do software são essenciais para abertura de chamados na Intelbras.',
              type: 'tip',
            },
          ],
        },
      },
    ],
  },
];
