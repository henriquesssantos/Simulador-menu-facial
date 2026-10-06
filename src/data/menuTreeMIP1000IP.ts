import type { MenuItem, Section } from '../types/menu';

const BASE_URL = import.meta.env.BASE_URL;
const IMG = (name: string) => `${BASE_URL}imagens-mip1000ip/${encodeURI(name)}`;
const CRED = (name: string) => IMG(`cadastro-credenciais/${name}`);
const MANUAL_PDF = 'https://backend.intelbras.com/sites/default/files/2023-08/Manual_MIP1000_IP_portugues_02-23_site.pdf';
const configTeclaSections = (tecla: string): Section[] => [
  { title: 'Fluxo', content: `Configure ${tecla}, selecione um dispositivo cadastrado e escolha o acionamento. Use a seta para a direita para selecionar a saída disponível e pressione Enter para confirmar.`, type: 'info' },
  { title: 'Tecla já configurada', content: 'Não é possível editar a configuração existente. Selecione Excluir e configure a tecla novamente; Voltar mantém a configuração atual.', type: 'note' },
];

export const mip1000ipMenuTree: MenuItem[] = [
  // ── 1. CADASTRO ──────────────────────────────────────────────────────────
  {
    id: 'mip-cadastro',
    label: 'Cadastro',
    path: '/cadastro',
    content: {
      title: 'Cadastro',
      description: 'Menu principal de cadastro do MIP 1000 IP. Permite cadastrar, editar, consultar e excluir usuários, dispositivos, chaveiros, controles, digitais e faces. Atenção: as operações de cadastro são bloqueadas enquanto o MIP estiver conectado ao software SGA 1000 IP.',
      menuPath: 'Menu Principal > Cadastro',
      image: IMG('cadastro.jpeg'),
      manualPdf: MANUAL_PDF,
      sections: [
        { title: 'Itens do menu', content: 'Usuário, Dispositivo, Chaveiro(s), Controle(s), Digital(is), Face(s)', type: 'info' },
        { title: 'Atenção — Conectado ao Software', content: 'Quando o MIP estiver conectado ao software SGA 1000 IP o cadastro via menu é bloqueado. Selecione "Desconectar Software" para liberar o acesso ao menu de cadastro.', type: 'warning' },
      ],
    },
    children: [
      // 1.1 Usuário
      {
        id: 'mip-cadastro-usuario',
        label: 'Usuário',
        path: '/cadastro/usuario',
        content: {
          title: 'Usuário',
          description: 'Gerenciamento completo de usuários do condomínio. Permite cadastrar moradores, prestadores de serviço e visitantes, definindo credenciais de acesso, dados pessoais e permissões por dispositivo.',
          menuPath: 'Cadastro > Usuário',
          image: IMG('cadastro-usuario.jpeg'),
          manualPdf: MANUAL_PDF,
          sections: [{ title: 'Operações disponíveis', content: 'Incluir, Editar, Consultar, Excluir', type: 'info' }],
        },
        children: [
          {
            id: 'mip-cadastro-usuario-incluir',
            label: 'Incluir',
            path: '/cadastro/usuario/incluir',
            content: {
              title: 'Incluir Usuário',
              description: 'Cadastra um novo usuário no sistema do MIP 1000 IP. O nome aceita até 34 caracteres. A senha deve ter de 4 a 8 dígitos e ser superior a 1000. Senhas não podem se repetir entre usuários.',
              menuPath: 'Cadastro > Usuário > Incluir',
              gallery: [
                { label: 'Nome', image: IMG('usuario-incluir-nome.jpeg') },
                { label: 'Tipo', image: IMG('usuario-incluir-tipo.jpeg') },
                { label: 'Apto', image: IMG('usuario-incluir-apto.jpeg') },
                { label: 'Bloco', image: IMG('usuario-incluir-bloco.jpeg') },
                { label: 'Senha', image: IMG('usuario-incluir-senha.jpeg') },
                { label: 'Chaveiros', image: IMG('usuario-incluir-chaveiro.jpeg') },
                { label: 'Controle', image: IMG('usuario-incluir-controle.jpeg') },
                { label: 'Digital(is)', image: IMG('usuario-incluir-digitais.jpeg') },
                { label: 'Face(s)', image: IMG('usuario-incluir-face.jpeg') },
                { label: 'Disp. permitidos', image: IMG('usuario-incluir-disp.permitidos.jpeg') },
                { label: 'Dias permitidos', image: IMG('usuario-incluir-diiaspermitidos-visita-prest.servico.jpeg') },
                { label: 'Data inicial', image: IMG('usuario-incluir-datainicial-visita-prest.servico.jpeg') },
                { label: 'Data final', image: IMG('usuario-incluir-datafinal-visitante-prest.servico.jpeg') },
                { label: 'Início período', image: IMG('usuario-incluir-inicioperiodo-visita-prest.servico.jpeg') },
                { label: 'Período final', image: IMG('usuario-incluir-periodofinal-visita-prest.servico.jpeg') },
                { label: 'RG', image: IMG('usuario-incluir-rg.jpeg') },
                { label: 'E-mail', image: IMG('usuario-incluir-email.jpeg') },
                { label: 'Tel. Residencial', image: IMG('usuario-incluir-tel.residencial.jpeg') },
                { label: 'Tel. Celular', image: IMG('usuario-incluir-tel.celular.jpeg') },
                { label: 'CPF', image: IMG('usuario-incluir-cpf.jpeg') },
              ],
              manualPdf: MANUAL_PDF,
              sections: [
                { title: 'Campos — Dados básicos', content: 'Nome (máx. 34 caracteres), Tipo (Morador / Prestador de Serviço / Visitante), Apto (máx. 5 dígitos), Bloco, Senha (4–8 dígitos, > 1000)', type: 'info' },
                { title: 'Campos — Credenciais', content: 'Chaveiros (RFID Mifare 13,56 MHz), Controle (remoto XTR 1000), Digital(is) (biometria), Face(s) (reconhecimento facial)', type: 'info' },
                { title: 'Campos — Permissões', content: 'Dispositivos permitidos:, XRE, XPE, XLT, SS (faciais), CT', type: 'info' },
                { title: 'Campos — Dados complementares (modo avançado)', content: [
                  'RG',
                  'E-mail',
                  'Tel. Residencial',
                  'Tel. Celular',
                  'CPF.',
                  'Estes campos não são exibidos no modo de cadastro "básico".'
                ], type: 'info' },
                { title: 'Tipos Prestador de Serviço / Visitante', content: [
                  'Surgem campos adicionais de validade: Data inicial, Data final, Início período, Final período.',
                  'Após as permissões de dispositivos é exibida a opção de "Dias permitidos".',
                  'Prestadores e visitantes não possuem opções de credenciais por face.'
                ], type: 'warning' },
              ],
            },
          },
          {
            id: 'mip-cadastro-usuario-editar',
            label: 'Editar',
            path: '/cadastro/usuario/editar',
            content: {
              title: 'Editar Usuário',
              description: 'Localiza e edita os dados de um usuário já cadastrado. A busca pode ser feita por nome ou número do apartamento. O campo "Tipo" é o único que não pode ser alterado após o cadastro.',
              menuPath: 'Cadastro > Usuário > Editar',
              manualPdf: MANUAL_PDF,
              gallery: [
                { label: 'Nome', image: IMG('usuario-editar-nome.jpeg') },
                { label: 'Bloco', image: IMG('usuario-editar-bloco.jpeg') },
                { label: 'Tipo (não editável)', image: IMG('usuario-editar-tipo.jpeg') },
                { label: 'Senha', image: IMG('usuario-editar-senha.jpeg') },
                { label: 'E-mail', image: IMG('usuario-editar-email.jpeg') },
                { label: 'Dispositivos Permitidos', image: IMG('usuario-editar-disp.permitidos.jpeg') },
                { label: 'RG', image: IMG('usuario-editar-rg.jpeg') },
                { label: 'CPF', image: IMG('usuario-editar-cpf.jpeg') },
                { label: 'Tel. Residencial', image: IMG('usuario-editar-tel.residencial.jpeg') },
                { label: 'Tel. Celular', image: IMG('usuario-editar-tel.celular.jpeg') },
              ],
              sections: [
                { title: 'Busca', content: 'Localizar por Nome ou Apto', type: 'info' },
                { title: 'Campos editáveis', content: 'Nome, Apto, Bloco, Senha, Dispositivos permitidos, RG, E-mail, Tel. residencial, Tel. celular, CPF', type: 'info' },
                { title: 'Campo não editável', content: 'O campo Tipo (Morador / Prestador de Serviço / Visitante) não pode ser alterado após o cadastro.', type: 'warning' },
                { title: 'Tipos Visitante / Prestador de Serviço', content: 'Caso o tipo do usuário seja visitante ou prestador de serviço é possível editar, Data inicial, Data final, Início período, Final período e Dias permitidos.', type: 'tip' },
              ],
            },
          },
          {
            id: 'mip-cadastro-usuario-consultar',
            label: 'Consultar',
            path: '/cadastro/usuario/consultar',
            content: {
              title: 'Consultar Usuário',
              description: 'Exibe todas as informações de um usuário cadastrado. A busca pode ser feita por nome ou número do apartamento.',
              menuPath: 'Cadastro > Usuário > Consultar',
              manualPdf: MANUAL_PDF,
              gallery: [
                { label: 'Buscar por Nome', image: IMG('usuario-consultar-nome.jpeg') },
                { label: 'Buscar por Apto', image: IMG('usuario-consultar-apto.jpeg') },
                { label: 'Dados do Usuário', image: IMG('usuario-consultar.jpeg') },
                { label: 'Bloco', image: IMG('usuario-consultar-bloco.jpeg') },
                { label: 'Tipo', image: IMG('usuario-consultar-tipo.jpeg') },
                { label: 'Senha', image: IMG('usuario-consultar-senha.jpeg') },
                { label: 'Chaveiros', image: IMG('usuario-consultar-chaveiro.jpeg') },
                { label: 'Controles', image: IMG('usuario-consultar-controles.jpeg') },
                { label: 'Digitais', image: IMG('usuario-consultar-digital.jpeg') },
                { label: 'Faces', image: IMG('usuario-consultar-face.jpeg') },
                { label: 'Dispositivos Permitidos', image: IMG('usuario-consultar-disp.permitidos.jpeg') },
                { label: 'E-mail', image: IMG('usuario-consultar-email.jpeg') },
                { label: 'RG', image: IMG('usuario-consultar-rg.jpeg') },
                { label: 'Tel. Celular', image: IMG('usuario-consultar-tel.celular.jpeg') },
                { label: 'Tel. Residencial', image: IMG('usuario-consultar-tel.residencial.jpeg') },
                { label: 'PDF/Relatório', image: IMG('usuario-consultar-pdf.jpeg') },
              ],
              sections: [
                { title: 'Busca', content: 'Localizar por Nome ou Apto', type: 'info' },
                { title: 'Dados exibidos', content: 'Nome, Tipo, Apto, Bloco, Senha, Chaveiros, Controles, Digital(is), Face(s), Dispositivos permitidos, RG, E-mail, Tel. residencial, Tel. celular, CPF', type: 'info' },
              ],
            },
          },
          {
            id: 'mip-cadastro-usuario-excluir',
            label: 'Excluir',
            path: '/cadastro/usuario/excluir',
            content: {
              title: 'Excluir Usuário',
              description: 'Remove permanentemente um usuário do sistema. A busca pode ser feita por nome ou número do apartamento. O sistema exibe uma tela de confirmação antes de concluir a exclusão.',
              menuPath: 'Cadastro > Usuário > Excluir',
              image: IMG('usuario-excluir.jpeg'),
              manualPdf: MANUAL_PDF,
              sections: [
                { title: 'Busca', content: 'Localizar por Nome ou Apto', type: 'info' },
                { title: 'Confirmação', content: 'O sistema exibe a mensagem "Tem certeza?" antes de excluir. Pressione Enter/OK para confirmar ou ESC/Cancelar para abortar.', type: 'warning' },
              ],
            },
          },
        ],
      },

      // 1.2 Dispositivo
      {
        id: 'mip-cadastro-dispositivo',
        label: 'Dispositivo',
        path: '/cadastro/dispositivo',
        content: {
          title: 'Dispositivo',
          description: 'Gerenciamento dos dispositivos integrados ao barramento RS-485 do MIP 1000 IP: leitores biométricos, faciais, XRE, XLT, CT, entre outros. Permite incluir, ressincronizar, editar nomes, consultar e excluir dispositivos.',
          menuPath: 'Cadastro > Dispositivo',
          image: IMG('cadastro-dispositivo.jpeg'),
          manualPdf: MANUAL_PDF,
          sections: [{ title: 'Operações disponíveis', content: 'Incluir novo S1, Incluir novo S2, Ressincronizar, Editar Nome, Consultar, Excluir', type: 'info' }],
        },
        children: [
          {
            id: 'mip-cadastro-dispositivo-incluir-s1',
            label: 'Incluir novo S1',
            path: '/cadastro/dispositivo/incluir-s1',
            content: {
              title: 'Incluir novo Dispositivo (S1)',
              description: 'Adiciona um novo dispositivo ao barramento RS-485, iniciando pelo endereço S1. O MIP realiza varredura no barramento e reconhece automaticamente os dispositivos conectados.',
              menuPath: 'Cadastro > Dispositivo > Incluir novo S1',
              manualPdf: MANUAL_PDF,
              gallery: [
                { label: 'Selecionar Tipo de Dispositivo 1/3', image: IMG('dispositivo-incluir-s1.jpeg') },
                { label: 'Selecionar Tipo de Dispositivo 2/3', image: IMG('dispositivo-incluir-buscar3.jpeg') },
                { label: 'Selecionar Tipo de Dispositivo 3/3', image: IMG('dispositivo-incluir-s2.jpeg') },
              ],
              sections: [
                { title: 'Dispositivos compatíveis', content: 'XRE, XLT-ID, XPE-ID, BioInox (SS 311 MF), CT 500 1P, SS 3530 - Facial, Remote, SS3430 - BIO, SS 3420 - BIO, SS 3540 - Facial, CT 3000 2PB, XPE BIO, SS 3540 BIO, SS 1530, SS 1540, SS (3/5)53(1/2) MF', type: 'info' },
              ],
            },
          },
          {
            id: 'mip-cadastro-dispositivo-incluir-s2',
            label: 'Incluir novo S2',
            path: '/cadastro/dispositivo/incluir-s2',
            content: {
              title: 'Incluir novo Dispositivo (S2)',
              description: 'Adiciona um novo dispositivo ao barramento RS-485, iniciando pelo endereço S2. Utilizado quando há dois barramentos separados ou expansão do sistema.',
              menuPath: 'Cadastro > Dispositivo > Incluir novo S2',
              manualPdf: MANUAL_PDF,
              gallery: [
                { label: 'Selecionar Tipo de Dispositivo 1/3', image: IMG('dispositivo-incluir-s1.jpeg') },
                { label: 'Selecionar Tipo de Dispositivo 2/3', image: IMG('dispositivo-incluir-buscar3.jpeg') },
                { label: 'Selecionar Tipo de Dispositivo 3/3', image: IMG('dispositivo-incluir-s2.jpeg') },
              ],
              sections: [
                { title: 'Dispositivos compatíveis', content: 'XRE, XLT-ID, XPE-ID, BioInox (SS 311 MF), CT 500 1P, SS 3530 - Facial, Remote, SS3430 - BIO, SS 3420 - BIO, SS 3540 - Facial, CT 3000 2PB, XPE BIO, SS 3540 BIO, SS 1530, SS 1540, SS (3/5)53(1/2) MF', type: 'info' },
              ],
            },
          },
          {
            id: 'mip-cadastro-dispositivo-ressincronizar',
            label: 'Ressincronizar',
            path: '/cadastro/dispositivo/ressincronizar',
            content: {
              title: 'Ressincronizar Dispositivo',
              description: 'Força a re-sincronização de todos os dados de usuários e permissões para um dispositivo específico. Útil após substituição de firmware, troca de dispositivo ou quando há divergência de cadastros.',
              menuPath: 'Cadastro > Dispositivo > Ressincronizar',
              manualPdf: MANUAL_PDF,
              gallery: [
                { label: 'Selecionar Dispositivo para Ressincronizar', image: IMG('dispositivo-ressincronizar.jpeg') },

              ],
          
              sections: [
                { title: 'Dispositivos compatíveis', content: 'XRE, XLT-ID, XPE-ID, BioInox (SS 311 MF), CT 500 1P, SS 3530 - Facial, Remote, SS3430 - BIO, SS 3420 - BIO, SS 3540 - Facial, CT 3000 2PB, XPE BIO, SS 3540 BIO, SS 1530, SS 1540, SS (3/5)53(1/2) MF', type: 'info' },
                { title: 'Dica de suporte', content: 'Ressincronizar pode ser usado como primeira tratativa em casos de Timeout.', type: 'tip' },
              ],
            },
          },
          {
            id: 'mip-cadastro-dispositivo-editar-nome',
            label: 'Editar',
            path: '/cadastro/dispositivo/editar-nome',
            content: {
              title: 'Editar Nome do Dispositivo',
              description: 'Permite renomear um dispositivo cadastrado e configurar seus acionamentos (relés), tempos de acionamento e sensores. Os campos disponíveis variam conforme o tipo do dispositivo selecionado.',
              menuPath: 'Cadastro > Dispositivo > Editar Nome',
              manualPdf: MANUAL_PDF,
              gallery: [],
              deviceGalleryOptions: [
                {
                  value: 'mip',
                  label: 'MIP',
                  gallery: [
                    { label: 'Nome do Dispositivo', image: IMG('mip.config.nome.png') },
                    { label: 'Nome Acion. 01', image: IMG('mip.config.nome.acion1png.png') },
                    { label: 'Nome Acion. 02', image: IMG('mip_config_nome_acion2.png') },
                    { label: 'Tempo Acion. 01', image: IMG('mip.config.tempo.acion1.png') },
                    { label: 'Tempo Acion. 02', image: IMG('mip_config_tempo_acion2.png') },
                    { label: 'Tempo Sens. 01', image: IMG('mip_config_tempo_sens1.png') },
                    { label: 'Tempo Sens. 02', image: IMG('mip.config.tempo.sens2.png') },
                    { label: 'Intertravamento', image: IMG('mip.config.intertravamento.png') },
                  ],
                },
                {
                  value: 'xlt',
                  label: 'XLT',
                  gallery: [
                    { label: 'Nome do Dispositivo', image: IMG('xlt.editar.nome.png') },
                    { label: 'Tipo Acion. 01', image: IMG('xlt.editar.tipo.acion.1.png') },
                    { label: 'Tipo Acion. 02', image: IMG('xlt.editar.tipo.acion2.png') },
                    { label: 'Nome Acion. 01', image: IMG('xlt.editar.nome.acion1.png') },
                    { label: 'Nome Acion. 02', image: IMG('xlt.editar.nome.acion2.png') },
                    { label: 'Tempo Acion. 01', image: IMG('xlt.editar.tempo.acio1..png') },
                    { label: 'Tempo Acion. 02', image: IMG('xlt.editar.tempo.acion2.png') },
                    { label: 'Tempo Sens. 01', image: IMG('xlt.editar.tempo.sens1.png') },
                    { label: 'Tempo Sens. 02', image: IMG('xlt.editar.tempo.sens2.png') },
                    { label: 'Intertravamento', image: IMG('xlt.editar.intertravamento.png') },
                    { label: 'Botoeira', image: IMG('xlt.editar.botoeira.png') },
                    { label: 'Eventos de Botão', image: IMG('xlt.editar.eventos.de.bot.png') },
                    { label: 'Arrombamento', image: IMG('xlt.editar.arrombamento.png') },
                    { label: 'Função (Acesso/Coletor)', image: IMG('xlt.editar.funcao.png') },
                  ],
                },
                {
                  value: 'xre',
                  label: 'XRE',
                  gallery: [
                    { label: 'Nome do Dispositivo', image: IMG('xre.editar.nome.png') },
                    { label: 'Tipo Acion. 01', image: IMG('xre.editar.tipo.acion1.png') },
                    { label: 'Tipo Acion. 02', image: IMG('xre.editar.tipo.acion2.png') },
                    { label: 'Nome Acion. 01', image: IMG('xre.editar.nome.acion1.png') },
                    { label: 'Nome Acion. 02', image: IMG('xre.editar.nome.acion2.png') },
                    { label: 'Tempo Acion. 01', image: IMG('xre.editar.tempo.acio1..png') },
                    { label: 'Tempo Acion. 02', image: IMG('xre.editar.tempo.acion2.png') },
                    { label: 'Tempo Sens. 01', image: IMG('xre.editar.tempo.sens1.png') },
                    { label: 'Tempo Sens. 02', image: IMG('xre.editar.tempo.sens2.png') },
                    { label: 'Intertravamento', image: IMG('xre.editar.intertravamento.png') },
                    { label: 'Botoeira', image: IMG('xre.editar.botoeira.png') },
                    { label: 'Eventos de Botão', image: IMG('xre.editar.eventos.de.bot.png') },
                    { label: 'Arrombamento', image: IMG('xre.editar.arrombamento.png') },
                    { label: 'Carona', image: IMG('xre.editar.carona.png') },
                  ],
                },
                {
                  value: 'xpe',
                  label: 'XPE',
                  gallery: [
                    { label: 'Nome do Dispositivo', image: IMG('xpe/nome-dispositivo.png') },
                    { label: 'Tipo Acion. 01', image: IMG('xpe/tipo-acion-01.png') },
                    { label: 'Tipo Acion. 02', image: IMG('xpe/tipo-acion-02.png') },
                    { label: 'Nome Acion. 01', image: IMG('xpe/nome-acion-01.png') },
                    { label: 'Nome Acion. 02', image: IMG('xpe/nome-acion-02.png') },
                    { label: 'Tempo Acion. 01', image: IMG('xpe/tempo-acion-01.png') },
                    { label: 'Tempo Acion. 02', image: IMG('xpe/tempo-acion-02.png') },
                    { label: 'Tempo Sens. 01', image: IMG('xpe/tempo-sens-01.png') },
                    { label: 'Tempo Sens. 02', image: IMG('xpe/tempo-sens-02.png') },
                    { label: 'Intertravamento', image: IMG('xpe/intertravamento.png') },
                    { label: 'Eventos de Botão', image: IMG('xpe/eventos-botao.png') },
                    { label: 'Arrombamento', image: IMG('xpe/arrombamento.png') },
                  ],
                },
                {
                  value: 'ss311-3420-3430',
                  label: 'SS 311/3420/3430',
                  gallery: [
                    { label: 'Nome do Dispositivo', image: IMG('ss311-3420-3530/nome-dispositivo.png') },
                    { label: 'Nome Acion. 01', image: IMG('ss311-3420-3530/nome-acion-01.png') },
                    { label: 'Tempo Acion. 01', image: IMG('ss311-3420-3530/tempo-acion-01.png') },
                    { label: 'Tempo Sens. 01', image: IMG('ss311-3420-3530/tempo-sens-01.png') },
                    { label: 'Arrombamento', image: IMG('ss311-3420-3530/arrombamento.png') },
                    { label: 'Eventos de Botão', image: IMG('ss311-3420-3530/eventos-botao.png') },
                  ],
                },
                {
                  value: 'ct',
                  label: 'CT',
                  gallery: [
                    { label: 'Nome do Dispositivo', image: IMG('ct/nome-dispositivo.png') },
                    { label: 'Tipo Acion. 01', image: IMG('ct/tipo-acion-01.png') },
                    { label: 'Tipo Acion. 02', image: IMG('ct/tipo-acion-02.png') },
                    { label: 'Nome Acion. 01', image: IMG('ct/nome-acion-01.png') },
                    { label: 'Nome Acion. 02', image: IMG('ct/nome-acion-02.png') },
                    { label: 'Tempo Acion. 01', image: IMG('ct/tempo-acion-01.png') },
                    { label: 'Tempo Acion. 02', image: IMG('ct/tempo-acion-02.png') },
                    { label: 'Tempo Sens. 01', image: IMG('ct/tempo-sens-01.png') },
                    { label: 'Tempo Sens. 02', image: IMG('ct/tempo-sens-02.png') },
                    { label: 'Intertravamento', image: IMG('ct/intertravamento.png') },
                    { label: 'Eventos de Botão', image: IMG('ct/eventos-botao.png') },
                    { label: 'Arrombamento', image: IMG('ct/arrombamento.png') },
                  ],
                },
                {
                  value: 'ss-faciais',
                  label: 'SS (faciais)',
                  gallery: [
                    { label: 'Nome do Dispositivo', image: IMG('ss-faciais/nome-dispositivo.png') },
                    { label: 'Tipo Acion. 01', image: IMG('ss-faciais/tipo-acion-01.png') },
                    { label: 'Nome Acion. 01', image: IMG('ss-faciais/nome-acion-01.png') },
                    { label: 'Tempo Acion. 01', image: IMG('ss-faciais/tempo-acion-01.png') },
                    { label: 'Tempo Sens. 01', image: IMG('ss-faciais/tempo-sens-01.png') },
                    { label: 'Eventos de Botão', image: IMG('ss-faciais/eventos-botao.png') },
                    { label: 'Arrombamento', image: IMG('ss-faciais/arrombamento.png') },
                  ],
                },
              ],
              sections: [
                { title: 'MIP 1000 IP', content: 'Nome, Nome Acion. 01 / Tempo Acion. 01 / Tempo Sens. 01, Nome Acion. 02 / Tempo Acion. 02 / Tempo Sens. 02, Intertravamento (Desabilitado / Habilitado)', type: 'info' },
                { title: 'XLT', content: 'Nome, Acion. 01 e 02 com Tipo (Chav./Senha / Somente Senha / Somente Chav.), Intertravamento', type: 'info' },
                { title: 'SS (faciais)', content: 'Nome, Tipo Acion. 01 (Face/Chav. / Somente Face / Somente Chav.), Nome Acion. 01, Tempo Acion. 01, Tempo Sens. 01, Eventos de Botão, Arrombamento', type: 'info' },
                { title: 'CT', content: 'Nome, Tipo Acion. 01 / 02 (Chav./Digital / Somente Chav. / Somente Digital), Nome Acion. 01 / 02, Tempo Acion. 01 / 02, Tempo Sens. 01 / 02, Intertravamento, Eventos de Botão, Arrombamento', type: 'info' },
                { title: 'XRE', content: 'Nome, Acion. 01 e 02 (Tipo: Botão Power / A / B / C / Nenhum tipo), Intertravamento, Botoeira, Eventos de Botão, Arrombamento, Carona', type: 'info' },
                { title: 'Obs. — Acionamento', content: 'Dispositivos com um relé (SS 3420, SS 3540...) Terão apenas uma opçãp para os seguintes menus:, Nome acion, Tempo acion, Tempo Sens, Tipo acion. ', type: 'note' },
              ],
            },
          },
          {
            id: 'mip-cadastro-dispositivo-consultar',
            label: 'Consultar',
            path: '/cadastro/dispositivo/consultar',
            content: {
              title: 'Consultar Dispositivo',
              description: 'Exibe as configurações detalhadas de um dispositivo cadastrado: nome, tipo, versão, endereço e configurações de acionamento.',
              menuPath: 'Cadastro > Dispositivo > Consultar',
              manualPdf: MANUAL_PDF,
              gallery: [
                { label: 'Selecionar Dispositivo para Consultar', image: IMG('dispositivo-consultar.jpeg') },
              ],
              deviceGalleryOptions: [
                {
                  value: 'mip',
                  label: 'MIP',
                  gallery: [
                    { label: 'Nome', image: IMG('mip-consultar-nome.png') },
                    { label: 'Tipo/Versão/Endereço', image: IMG('mip-consultar-versao.png') },
                    { label: 'Nome Acion. 01', image: IMG('mip-consultar-nome-acion01.png') },
                    { label: 'Tempo Acion. 01', image: IMG('mip-consultar-tempo-acion01.png') },
                    { label: 'Tempo Sens. 01', image: IMG('mip-consultar-tempo-sens01.png') },
                    { label: 'Nome Acion. 02', image: IMG('mip-consultar-nome-acion02.png') },
                    { label: 'Tempo Acion. 02', image: IMG('mip-consultar-tempo-acion02.png') },
                    { label: 'Tempo Sens. 02', image: IMG('mip-consultar-tempo-sens02.png') },
                  ],
                },
                {
                  value: 'xlt',
                  label: 'XLT',
                  gallery: [
                    { label: 'Nome', image: IMG('xlt-consultar-nome.png') },
                    { label: 'Tipo/Versão/Endereço', image: IMG('xlt-consultar-versao.png') },
                    { label: 'Nome Acion. 01', image: IMG('xlt-consultar-nome-acion01.png') },
                    { label: 'Tipo Acion. 01', image: IMG('xlt-consultar-tipo-acion01.png') },
                    { label: 'Tempo Acion. 01', image: IMG('xlt-consultar-tempo-acion01.png') },
                    { label: 'Tempo Sens. 01', image: IMG('xlt-consultar-tempo-sens01.png') },
                    { label: 'Nome Acion. 02', image: IMG('xlt-consultar-nome-acion02.png') },
                    { label: 'Tipo Acion. 02', image: IMG('xlt-consultar-tipo-acion02.png') },
                    { label: 'Tempo Acion. 02', image: IMG('xlt-consultar-tempo-acion02.png') },
                    { label: 'Tempo Sens. 02', image: IMG('xlt-consultar-tempo-sens02.png') },
                    { label: 'Intertravamento', image: IMG('xlt-consultar-intertravametno.png') },
                    { label: 'Botoeira', image: IMG('xlt-consultar-botoeira.png') },
                    { label: 'Eventos de Botão', image: IMG('xlt-consultar-eventos-bot.png') },
                    { label: 'Arrombamento', image: IMG('xlt-consultar-arrombamento.png') },
                    { label: 'Função', image: IMG('xlt-consultar-funcao.png') },
                  ],
                },
                {
                  value: 'xre',
                  label: 'XRE',
                  gallery: [
                    { label: 'Nome', image: IMG('xre-consultar-nome.png') },
                    { label: 'Tipo/Versão/Endereço', image: IMG('xre-consultar-versao.png') },
                    { label: 'Nome Acion. 01', image: IMG('xre-consultar-nome-acion01.png') },
                    { label: 'Tipo Acion. 01', image: IMG('xre-consultar-tipo-acion-01.png') },
                    { label: 'Tempo Acion. 01', image: IMG('xre-consultar-tempo-acion01.png') },
                    { label: 'Tempo Sens. 01', image: IMG('xre-consultar-tempo-sens01.png') },
                    { label: 'Nome Acion. 02', image: IMG('xre-consultar-nome-acion02.png') },
                    { label: 'Tipo Acion. 02', image: IMG('xre-consultar-tipo-acion02.png') },
                    { label: 'Tempo Acion. 02', image: IMG('xre-consultar-tempo-acion02.png') },
                    { label: 'Tempo Sens. 02', image: IMG('xre-consultar-tempo-sens02.png') },
                    { label: 'Intertravamento', image: IMG('xre-consultar-intertravametno.png') },
                    { label: 'Botoeira', image: IMG('xre-consultar-botoeira.png') },
                    { label: 'Eventos de Botão', image: IMG('xre-consultar-eventos-bot.png') },
                    { label: 'Arrombamento', image: IMG('xre-consultar-arrombamento.png') },
                    { label: 'Carona', image: IMG('xre-consultar-carona.png') },
                  ],
                },
                {
                  value: 'xpe',
                  label: 'XPE',
                  gallery: [
                    { label: 'Selecionar Dispositivo para Consultar', image: IMG('dispositivo-consultar.jpeg') },
                    { label: 'Dados do Dispositivo (Tipo/Versão/Endereço)', image: IMG('dispositivo-editar-xlt-nome.jpeg') },
                  ],
                },
                {
                  value: 'ss311-3420-3430',
                  label: 'SS 311/3420/3430',
                  gallery: [
                    { label: 'Nome', image: IMG('biometria-consultar-nome.png') },
                    { label: 'Tipo/Versão/Endereço', image: IMG('biometria-consultar-versao.png') },
                    { label: 'Tipo Acion. 01', image: IMG('biometria-consultar-tipo-acion01.png') },
                    { label: 'Nome Acion. 01', image: IMG('biometria-consultar-nome-acion01.png') },
                    { label: 'Tempo Acion. 01', image: IMG('biometria-consultar-tempo-acion01.png') },
                    { label: 'Eventos de Botão', image: IMG('biometria-consultar-eventos-de-bot.png') },
                    { label: 'Arrombamento', image: IMG('biometria-consultar-arrombamento.png') },
                  ],
                },
                {
                  value: 'ct',
                  label: 'CT',
                  gallery: [
                    { label: 'Nome', image: IMG('ct-consultar-nome.png') },
                    { label: 'Tipo/Versão/Endereço', image: IMG('ct-consultar-versao.png') },
                    { label: 'Nome Acion. 01', image: IMG('ct-consultar-nome-acion01.png') },
                    { label: 'Tipo Acion. 01', image: IMG('ct-consultar-tipo-acion01.png') },
                    { label: 'Tempo Acion. 01', image: IMG('ct-consultar-tempo-acion01.png') },
                    { label: 'Tempo Sens. 01', image: IMG('ct-consultar-tempo-sens01.png') },
                    { label: 'Nome Acion. 02', image: IMG('ct-consultar-nome-acion02.png') },
                    { label: 'Tipo Acion. 02', image: IMG('ct-consultar-tipo-acion02.png') },
                    { label: 'Tempo Acion. 02', image: IMG('ct-consultar-tempo-acion02.png') },
                    { label: 'Tempo Sens. 02', image: IMG('ct-consultar-tempo-sens02.png') },
                    { label: 'Intertravamento', image: IMG('ct-consultar-intertravametno.png') },
                    { label: 'Eventos de Botão', image: IMG('ct-consultar-eventos-bot.png') },
                    { label: 'Arrombamento', image: IMG('ct-consultar-arrombamento.png') },
                  ],
                },
                {
                  value: 'ss-faciais',
                  label: 'SS (faciais)',
                  gallery: [
                    { label: 'Nome', image: IMG('facial-consultar-nome.png') },
                    { label: 'Tipo/Versão/Endereço', image: IMG('facial-consultar-versao.png') },
                    { label: 'Tipo Acion. 01', image: IMG('facial-consultar-tipo-acion1.png') },
                    { label: 'Nome Acion. 01', image: IMG('facial-consultar-nome-acion01.png') },
                    { label: 'Tempo Acion. 01', image: IMG('facial-consultar-tempo-acion01.png') },
                    { label: 'Eventos de Botão', image: IMG('facial-consultar-eventos-de-bot.png') },
                    { label: 'Arrombamento', image: IMG('facial-consultar-arrombamento.png') },
                  ],
                },
              ],
              sections: [
                { title: 'MIP 1000 IP — Dados exibidos', content: 'Nome, Tipo/Versão/Endereço, Nome Acion.01, Tempo Acion.01, Tempo Sens.01, Nome Acion.02, Tempo Acion.02, Tempo Sens.02', type: 'info' },
                { title: 'XLT / XRE — Dados exibidos', content: 'Nome, Tipo/Versão/Endereço, Nome e Tipo Acion. 01 e 02, Tempos, Intertravamento, Botoeira, Eventos de Botão, Arrombamento, Função', type: 'info' },
              ],
            },
          },
          {
            id: 'mip-cadastro-dispositivo-excluir',
            label: 'Excluir',
            path: '/cadastro/dispositivo/excluir',
            content: {
              title: 'Excluir Dispositivo',
              description: 'Remove um dispositivo cadastrado do sistema. Após a exclusão, o dispositivo não será mais acessado pelo MIP e todos os usuários terão acesso bloqueado neste dispositivo.',
              menuPath: 'Cadastro > Dispositivo > Excluir',
              image: IMG('dispositivo-excluir.jpeg'),
              manualPdf: MANUAL_PDF,
              sections: [
                { title: 'Atenção', content: 'Ao excluir um dispositivo todos os usuários perderão acesso a ele imediatamente. Se o dispositivo permanecer no barramento com firmware atualizado poderá ser incluído novamente.', type: 'warning' },
              ],
            },
          },
        ],
      },

      // 1.3 Chaveiro(s)
      {
        id: 'mip-cadastro-chaveiro',
        label: 'Chaveiro(s)',
        path: '/cadastro/chaveiro',
        content: {
          title: 'Chaveiro(s)',
          description: 'Gerenciamento de chaveiros RFID Mifare (13,56 MHz). Permite incluir novos chaveiros por aproximação ao leitor ou digitando o código hexadecimal manualmente. O nome desta opção pode ser personalizado via Rótulos.',
          menuPath: 'Cadastro > Chaveiro(s)',
          image: IMG('cadastro-chaveiro.jpeg'),
          manualPdf: MANUAL_PDF,
          sections: [{ title: 'Operações disponíveis', content: 'Incluir Novo, Editar, Consultar, Excluir', type: 'info' }],
        },
        children: [
          {
            id: 'mip-cadastro-chaveiro-incluir',
            label: 'Incluir Novo',
            path: '/cadastro/chaveiro/incluir',
            content: {
              title: 'Incluir Chaveiro',
              description: 'Vincula um novo chaveiro RFID a um usuário já cadastrado. O chaveiro pode ser lido por aproximação no MIP ou em dispositivos compatíveis. O código também pode ser digitado manualmente em formato hexadecimal.',
              menuPath: 'Cadastro > Chaveiro(s) > Incluir Novo',
              manualPdf: MANUAL_PDF,
              gallery: [
                { label: 'Buscar usuário', image: IMG('chaveiro-incluir-nome-buscar.png') },
                { label: 'Escolher leitor', image: IMG('chaveiro-incluir-escolha-leitor.png') },
                { label: 'Carro (Modelo)', image: IMG('chaveiro-incluir-carro-modelo.png') },
                { label: 'Carro (Cor)', image: IMG('chaveiro-incluir-carro-cor.png') },
                { label: 'Carro (Placa)', image: IMG('chaveiro-incluir-carro-placa.png') },
              ],
              sections: [
                { title: 'Leitores compatíveis para captura', content: 'MIP 1000 IP, XPE PLUS ID, XLT 1000 ID, CT 500 1P, CT 3000 2PB (Para cadastro de tag UHF basta selecionar a porta da CT que possui a antena conectada e realizar a aproximação da tag)', type: 'info' },
                { title: 'Dados opcionais do veículo', content: 'Carro (Modelo), Carro (Marca), Carro (Cor), Carro (Placa)', type: 'info' },
              ],
            },
          },
          {
            id: 'mip-cadastro-chaveiro-editar',
            label: 'Editar',
            path: '/cadastro/chaveiro/editar',
            content: {
              title: 'Editar Chaveiro',
              description: 'Permite alterar o código hexadecimal e os dados do veículo de um chaveiro já cadastrado.',
              menuPath: 'Cadastro > Chaveiro(s) > Editar',
              manualPdf: MANUAL_PDF,
              gallery: [
                { label: 'Buscar usuário', image: IMG('chaveiro-editar-nome-buscar.png') },
                { label: 'Selecionar chaveiro', image: IMG('chaveiro-editar-selecionar-chaveiro.png') },
                { label: 'Código', image: IMG('chaveiro-editar-codigo.png') },
                { label: 'Carro (Modelo)', image: IMG('chaveiro-editar-carro-modelo.png') },
                { label: 'Carro (Marca)', image: IMG('chaveiro-editar-carro-marca.png') },
                { label: 'Carro (Cor)', image: IMG('chaveiro-editar-carro-cor.png') },
                { label: 'Carro (Placa)', image: IMG('chaveiro-editar-carro-placa.png') },
              ],
              sections: [
                { title: 'Campos editáveis', content: 'Código Hex do Chaveiro, Carro (Modelo), Carro (Marca), Carro (Cor), Carro (Placa)', type: 'info' },
              ],
            },
          },
          {
            id: 'mip-cadastro-chaveiro-consultar',
            label: 'Consultar',
            path: '/cadastro/chaveiro/consultar',
            content: {
              title: 'Consultar Chaveiro',
              description: 'Exibe todas as informações de um chaveiro cadastrado para determinado usuário, incluindo código hexadecimal e dados do veículo.',
              menuPath: 'Cadastro > Chaveiro(s) > Consultar',
              manualPdf: MANUAL_PDF,
              gallery: [
                { label: 'Buscar usuário', image: IMG('chaveiro-consultar-nome-buscar.png') },
                { label: 'Chaveiros encontrados', image: IMG('chaveiro-editar-selecionar-chaveiro.png') },
                { label: 'Código', image: IMG('chaveiro-consultar-codigo.png') },
                { label: 'Carro (Modelo)', image: IMG('chaveiro-consultar-carro-modelo.png') },
                { label: 'Carro (Marca)', image: IMG('chaveiro-consultar-carro-marca.png') },
                { label: 'Carro (Cor)', image: IMG('chaveiro-consultar-carro-cor.png') },
                { label: 'Carro (Placa)', image: IMG('chaveiro-consultar-carro-placa.png') },
              ],
            },
          },
          {
            id: 'mip-cadastro-chaveiro-excluir',
            label: 'Excluir',
            path: '/cadastro/chaveiro/excluir',
            content: {
              title: 'Excluir Chaveiro',
              description: 'Remove um chaveiro de um usuário. Exibe a lista de chaveiros cadastrados e solicita confirmação antes de excluir.',
              menuPath: 'Cadastro > Chaveiro(s) > Excluir',
              manualPdf: MANUAL_PDF,
              gallery: [
                { label: 'Buscar usuário', image: IMG('chaveiro-excluir-nome-buscar.png') },
                { label: 'Selecionar chaveiro', image: IMG('chaveiro-editar-selecionar-chaveiro.png') },
                { label: 'Confirmar exclusão', image: IMG('chaveiro-excluir-confirmacao.png') },
              ],
              sections: [{ title: 'Confirmação', content: 'O sistema exibe "Tem certeza?" com o código do chaveiro. Pressione Enter para confirmar ou ESC para cancelar.', type: 'warning' }],
            },
          },
        ],
      },

      // 1.4 Controle(s)
      {
        id: 'mip-cadastro-controle',
        label: 'Controle(s)',
        path: '/cadastro/controle',
        content: {
          title: 'Controle(s)',
          description: 'Gerenciamento de controles remotos XTR 1000. A associação é feita mantendo o botão B do controle pressionado por ~4 segundos até o MIP confirmar. O nome desta opção pode ser personalizado via Rótulos.',
          menuPath: 'Cadastro > Controle(s)',
          gallery: [
            { label: 'Menu de operações de controle', image: CRED('cadastro:controle.png') },
          ],
          manualPdf: MANUAL_PDF,
          sections: [{ title: 'Operações disponíveis', content: 'Incluir Novo, Editar, Consultar, Excluir', type: 'info' }],
        },
        children: [
          {
            id: 'mip-cadastro-controle-incluir',
            label: 'Incluir Novo',
            path: '/cadastro/controle/incluir',
            content: {
              title: 'Incluir Controle',
              description: 'Vincula um novo controle remoto XTR 1000 a um usuário cadastrado. Mantenha o botão B pressionado por ~4 segundos até o MIP confirmar a associação.',
              menuPath: 'Cadastro > Controle(s) > Incluir Novo',
              gallery: [
                { label: 'Buscar usuário', image: CRED('cadastro:usuario:usuario-buscar.png') },
                { label: 'Associar controle pressionando B', image: CRED('cadastro:controle:incluir:codigo.png') },
                { label: 'Carro (Modelo)', image: CRED('cadastro:controle:incluir:carro(modelo).png') },
                { label: 'Carro (Marca)', image: CRED('cadastro:controle:incluir:carro(marca).png') },
                { label: 'Carro (Cor)', image: CRED('cadastro:controle:incluir:carro(cor).png') },
                { label: 'Carro (Placa)', image: CRED('cadastro:controle:incluir:carro(placa).png') },
              ],
              manualPdf: MANUAL_PDF,
              sections: [
                { title: 'Passo a passo', content: [
                  'Buscar o usuário por nome ou apartamento.',
                  'Manter o botão B do controle pressionado por aproximadamente 4 segundos, até o MIP confirmar a associação.',
                  'Preencher os dados opcionais do veículo.',
                ], type: 'info' },
                { title: 'Dados opcionais do veículo', content: 'Carro (Modelo), Carro (Marca), Carro (Cor), Carro (Placa)', type: 'info' },
              ],
            },
          },
          {
            id: 'mip-cadastro-controle-editar',
            label: 'Editar',
            path: '/cadastro/controle/editar',
            content: {
              title: 'Editar Controle',
              description: 'Localiza um usuário e permite editar o código associado e os dados do veículo de um controle já cadastrado.',
              menuPath: 'Cadastro > Controle(s) > Editar',
              gallery: [
                { label: 'Buscar usuário', image: CRED('cadastro:usuario:usuario-buscar.png') },
                { label: 'Selecionar controle cadastrado', image: CRED('cadastro:control:buscar-por-controle-cadastrado.png') },
                { label: 'Código', image: CRED('cadastro:controle:editar:codigo.png') },
                { label: 'Carro (Modelo)', image: CRED('cadastro:controle:editar:carro(modelo).png') },
                { label: 'Carro (Marca)', image: CRED('cadastro:controle:editar:carro(marca).png') },
                { label: 'Carro (Cor)', image: CRED('cadastro:controle:editar:carro(cor).png') },
                { label: 'Carro (Placa)', image: CRED('cadastrado:controle:carro(placa).png') },
              ],
              manualPdf: MANUAL_PDF,
              sections: [
                { title: 'Campos editáveis', content: 'Código Hex do Controle, Carro (Modelo), Carro (Marca), Carro (Cor), Carro (Placa)', type: 'info' },
              ],
            },
          },
          {
            id: 'mip-cadastro-controle-consultar',
            label: 'Consultar',
            path: '/cadastro/controle/consultar',
            content: {
              title: 'Consultar Controle',
              description: 'Busca o usuário, seleciona um controle cadastrado e exibe seu código e os dados do veículo associado.',
              menuPath: 'Cadastro > Controle(s) > Consultar',
              gallery: [
                { label: 'Buscar usuário', image: CRED('cadastro:usuario:usuario-buscar.png') },
                { label: 'Selecionar controle cadastrado', image: CRED('cadastro:control:buscar-por-controle-cadastrado.png') },
                { label: 'Código', image: CRED('cadastro:controle:consultar:codigo.png') },
                { label: 'Carro (Modelo)', image: CRED('cadastro:controle:consultar:carro(modelo).png') },
                { label: 'Carro (Marca)', image: CRED('cadastro:controle:consultar:carro(marca).png') },
                { label: 'Carro (Cor)', image: CRED('cadastro:controle:consultar:carro(cor).png') },
                { label: 'Carro (Placa)', image: CRED('cadastro:controle:consultar:carro(placa).png') },
              ],
              manualPdf: MANUAL_PDF,
            },
          },
          {
            id: 'mip-cadastro-controle-excluir',
            label: 'Excluir',
            path: '/cadastro/controle/excluir',
            content: {
              title: 'Excluir Controle',
              description: 'Busca o usuário, seleciona o controle que será removido e solicita confirmação antes de concluir a exclusão.',
              menuPath: 'Cadastro > Controle(s) > Excluir',
              gallery: [
                { label: 'Buscar usuário', image: CRED('cadastro:usuario:usuario-buscar.png') },
                { label: 'Selecionar controle cadastrado', image: CRED('cadastro:control:buscar-por-controle-cadastrado.png') },
                { label: 'Confirmar exclusão', image: CRED('cadastro:controle:excluir.png') },
              ],
              manualPdf: MANUAL_PDF,
              sections: [{ title: 'Confirmação', content: 'O sistema exibe "Tem certeza?" com o código do controle. Pressione Enter para confirmar ou ESC para cancelar.', type: 'warning' }],
            },
          },
        ],
      },

      // 1.5 Digital(is)
      {
        id: 'mip-cadastro-digital',
        label: 'Digital(is)',
        path: '/cadastro/digital',
        content: {
          title: 'Digital(is)',
          description: 'Gerenciamento de impressões digitais dos usuários. O cadastro é feito capturando a digital 3 vezes no leitor biométrico. Cada digital pode ser Normal ou de Pânico. O MIP suporta até 4.000 digitais. O nome desta opção pode ser personalizado via Rótulos.',
          menuPath: 'Cadastro > Digital(is)',
          image: IMG('cadastro-digital.jpeg'),
          manualPdf: MANUAL_PDF,
          sections: [
            { title: 'Operações disponíveis', content: 'Incluir Novo, Editar, Consultar, Excluir', type: 'info' },
            { title: 'Capacidade', content: 'O MIP 1000 IP suporta até 4.000 digitais. Os dispositivos biométricos integrados têm capacidades individuais menores (ex.: Bio Inox SS 311 MF: até 1.499 digitais).', type: 'warning' },
          ],
        },
        children: [
          {
            id: 'mip-cadastro-digital-incluir',
            label: 'Incluir Novo',
            path: '/cadastro/digital/incluir',
            content: {
              title: 'Incluir Digital',
              description: 'Cadastra uma nova impressão digital. O sistema aguarda até 30 segundos para a captura em 3 etapas no leitor biométrico selecionado. Após a captura, define o tipo (Normal ou Pânico).',
              menuPath: 'Cadastro > Digital(is) > Incluir Novo',
              gallery: [
                { label: 'Buscar usuário', image: CRED('cadastro:usuario:usuario-buscar.png') },
                { label: 'Escolher leitor biométrico', image: CRED('cadastro:digital:inclur.png') },
                { label: 'Selecionar tipo da digital', image: CRED('cadastro:digital:inclur:tipo.png') },
                { label: 'Carro (Modelo)', image: CRED('cadastro:digital:incluir:carro(modelo).png') },
                { label: 'Carro (Marca)', image: CRED('cadastro:digital:incluir:carro(marca).png') },
                { label: 'Carro (Cor)', image: CRED('cadastro:digital:incluir:carro(cor).png') },
                { label: 'Carro (Placa)', image: CRED('cadastro:digital:incluir:carro(placa).png') },
              ],
              manualPdf: MANUAL_PDF,
              sections: [
                { title: 'Tipo de digital', content: [
                  'Normal: usada para liberar o acesso.',
                  'Pânico: aciona um alerta silencioso para o porteiro; disponível somente para moradores.',
                ], type: 'info' },
                { title: 'Dados opcionais do veículo', content: 'Carro (Modelo), Carro (Marca), Carro (Cor), Carro (Placa)', type: 'info' },
              ],
            },
          },
          {
            id: 'mip-cadastro-digital-editar',
            label: 'Editar',
            path: '/cadastro/digital/editar',
            content: {
              title: 'Editar Digital',
              description: 'Seleciona uma digital cadastrada e permite alterar seu tipo (Normal/Pânico) e os dados do veículo associado.',
              menuPath: 'Cadastro > Digital(is) > Editar',
              gallery: [
                { label: 'Selecionar digital cadastrada', image: CRED('cadastro:digital:escolher-digital-cadastrado.png') },
                { label: 'Tipo da digital', image: CRED('cadastro:digital:editar:tipo.png') },
                { label: 'Carro (Modelo)', image: CRED('cadastro:digital:editar:carro(modelo).png') },
                { label: 'Carro (Marca)', image: CRED('cadastro:digital:editar:carro(marca).png') },
                { label: 'Carro (Cor)', image: CRED('cadastro:digital:editar:carro(cor).png') },
                { label: 'Carro (Placa)', image: CRED('cadastro:digital:editar:carro(placa).png') },
              ],
              manualPdf: MANUAL_PDF,
              sections: [{ title: 'Campos editáveis', content: 'Tipo (Normal / Pânico), Carro (Modelo), Carro (Marca), Carro (Cor), Carro (Placa)', type: 'info' }],
            },
          },
          {
            id: 'mip-cadastro-digital-consultar',
            label: 'Consultar',
            path: '/cadastro/digital/consultar',
            content: {
              title: 'Consultar Digital',
              description: 'Busca o usuário, seleciona uma digital e consulta seu tipo e os dados do veículo associado.',
              menuPath: 'Cadastro > Digital(is) > Consultar',
              gallery: [
                { label: 'Selecionar digital cadastrada', image: CRED('cadastro:digital:escolher-digital-cadastrado.png') },
                { label: 'Tipo da digital', image: CRED('cadastro:digital:consultar:tipo.png') },
                { label: 'Carro (Modelo)', image: CRED('cadastro:digital:consultar:carro(modelo).png') },
                { label: 'Carro (Marca)', image: CRED('cadastro:digital:consultar:carro(marca).png') },
                { label: 'Carro (Cor)', image: CRED('cadastro:digital:consultar:carro(cor).png') },
                { label: 'Carro (Placa)', image: CRED('cadastro:digital:consultar:carro(placa).png') },
              ],
              manualPdf: MANUAL_PDF,
            },
          },
          {
            id: 'mip-cadastro-digital-excluir',
            label: 'Excluir',
            path: '/cadastro/digital/excluir',
            content: {
              title: 'Excluir Digital',
              description: 'Busca o usuário, seleciona a digital que será removida e pede confirmação da exclusão.',
              menuPath: 'Cadastro > Digital(is) > Excluir',
              gallery: [
                { label: 'Buscar usuário', image: CRED('cadastro:usuario:usuario-buscar.png') },
                { label: 'Selecionar digital cadastrada', image: CRED('cadastro:digital:escolher-digital-cadastrado.png') },
                { label: 'Confirmar exclusão', image: CRED('cadastro:digital:excluir.png') },
              ],
              manualPdf: MANUAL_PDF,
              sections: [{ title: 'Confirmação', content: 'O sistema exibe "Tem certeza?" com o ID da digital. Pressione Enter para confirmar ou ESC para cancelar.', type: 'warning' }],
            },
          },
        ],
      },

      // 1.6 Face(s)
      {
        id: 'mip-cadastro-face',
        label: 'Face(s)',
        path: '/cadastro/face',
        content: {
          title: 'Face(s)',
          description: 'Gerenciamento de faces (reconhecimento facial). O cadastro é realizado via dispositivo facial SS 3530/3540 MF. O MIP aguarda 45 segundos para a pessoa se posicionar diante do equipamento. Suporta até 4.000 faces. O nome desta opção pode ser personalizado via Rótulos.',
          menuPath: 'Cadastro > Face(s)',
          image: IMG('cadastro-face.jpeg'),
          manualPdf: MANUAL_PDF,
          sections: [{ title: 'Operações disponíveis', content: 'Incluir Novo, Editar, Consultar, Excluir', type: 'info' }],
        },
        children: [
          {
            id: 'mip-cadastro-face-incluir',
            label: 'Incluir Novo',
            path: '/cadastro/face/incluir',
            content: {
              title: 'Incluir Face',
              description: 'Cadastra o reconhecimento facial de um usuário. O MIP aguarda 45 segundos enquanto a pessoa se posiciona diante do dispositivo facial para captura da imagem.',
              menuPath: 'Cadastro > Face(s) > Incluir Novo',
              gallery: [
                { label: 'Buscar usuário', image: CRED('cadastro:usuario:usuario-buscar.png') },
                { label: 'Escolher leitor facial', image: CRED('cadastro:face:incluir.png') },
                { label: 'Carro (Modelo)', image: CRED('cadastro:face:incluir:carro(modelo).png') },
                { label: 'Carro (Marca)', image: CRED('cadastro:face:incluir:carro(marca).png') },
                { label: 'Carro (Cor)', image: CRED('cadastro:face:incluir:carro(cor).png') },
                { label: 'Carro (Placa)', image: CRED('cadastro:face:incluir:carro(placa).png') },
              ],
              manualPdf: MANUAL_PDF,
              sections: [
                { title: 'Passo a passo', content: [
                  'Buscar usuário por nome ou apartamento.',
                  'Escolher o leitor facial.',
                  'Aguardar até 45 segundos, posicionar-se diante do facial e pressionar "Gravar".',
                  'Preencher os dados opcionais do veículo.',
                ], type: 'info' },
                { title: 'Orientações para o cadastro facial', content: [
                  'Óculos, chapéus e barbas podem afetar o reconhecimento; mantenha as sobrancelhas descobertas.',
                  'Atualize o cadastro se houver mudanças visuais importantes, como retirar a barba.',
                  'Mantenha o rosto inteiro visível, de frente, com os olhos abertos e expressão neutra.',
                  'Fique imóvel durante a captura para evitar falhas no cadastro.',
                  'Use um fundo neutro, evite sombras e deixe apenas um rosto na imagem.',
                  'Posicione o dispositivo a pelo menos 2 m de fontes de luz e 3 m de janelas ou portas para evitar a incidência direta do sol.',
                  'Quando a foto aparecer, pressione Gravar. Se a imagem não estiver boa, pressione Limpar e repita a captura.',
                ], type: 'tip' },
                { title: 'Dados opcionais do veículo', content: 'Carro (Modelo), Carro (Marca), Carro (Cor), Carro (Placa)', type: 'info' },
              ],
            },
          },
          {
            id: 'mip-cadastro-face-editar',
            label: 'Editar',
            path: '/cadastro/face/editar',
            content: {
              title: 'Editar Face',
              description: 'Seleciona uma face cadastrada e permite alterar os dados do veículo associado.',
              menuPath: 'Cadastro > Face(s) > Editar',
              gallery: [
                { label: 'Selecionar face cadastrada', image: CRED('cadastro:face:encontrar-face-cadastrada.png') },
                { label: 'Carro (Modelo)', image: CRED('cadastro:face:editar-e-consultar:carro(modelo).png') },
                { label: 'Carro (Marca)', image: CRED('cadastro:face:editar-e-consultar:carro(marca).png') },
                { label: 'Carro (Cor)', image: CRED('cadastro:face:editar-e-consultar:carro(cor).png') },
                { label: 'Carro (Placa)', image: CRED('cadastro:face:editar-e-consultar:carro(placa).png') },
              ],
              manualPdf: MANUAL_PDF,
              sections: [{ title: 'Campos editáveis', content: 'Carro (Modelo), Carro (Marca), Carro (Cor), Carro (Placa)', type: 'info' }],
            },
          },
          {
            id: 'mip-cadastro-face-consultar',
            label: 'Consultar',
            path: '/cadastro/face/consultar',
            content: {
              title: 'Consultar Face',
              description: 'Busca o usuário, seleciona uma face cadastrada e consulta os dados do veículo associado.',
              menuPath: 'Cadastro > Face(s) > Consultar',
              gallery: [
                { label: 'Selecionar face cadastrada', image: CRED('cadastro:face:encontrar-face-cadastrada.png') },
                { label: 'Carro (Modelo)', image: CRED('cadastro:face:editar-e-consultar:carro(modelo).png') },
                { label: 'Carro (Marca)', image: CRED('cadastro:face:editar-e-consultar:carro(marca).png') },
                { label: 'Carro (Cor)', image: CRED('cadastro:face:editar-e-consultar:carro(cor).png') },
                { label: 'Carro (Placa)', image: CRED('cadastro:face:editar-e-consultar:carro(placa).png') },
              ],
              manualPdf: MANUAL_PDF,
            },
          },
          {
            id: 'mip-cadastro-face-excluir',
            label: 'Excluir',
            path: '/cadastro/face/excluir',
            content: {
              title: 'Excluir Face',
              description: 'Busca o usuário e seleciona a face que será removida. Confirme a exclusão no MIP para concluir.',
              menuPath: 'Cadastro > Face(s) > Excluir',
              gallery: [
                { label: 'Buscar usuário', image: CRED('cadastro:usuario:usuario-buscar.png') },
                { label: 'Selecionar face cadastrada', image: CRED('cadastro:face:encontrar-face-cadastrada.png') },
              ],
              manualPdf: MANUAL_PDF,
              sections: [{ title: 'Confirmação', content: 'O sistema exibe "Tem certeza?" antes de excluir a face. Pressione Enter para confirmar ou ESC para cancelar.', type: 'warning' }],
            },
          },
        ],
      },
    ],
  },

  // ── 2. EVENTOS ────────────────────────────────────────────────────────────
  {
    id: 'mip-eventos',
    label: 'Eventos',
    path: '/eventos',
    content: {
      title: 'Eventos',
      description: 'Registros de todas as ocorrências do sistema: acessos liberados ou negados por senha, chaveiro, digital, face ou controle; pânicos, arrombamentos, tamperings, alertas de porteiro, carona e acionamentos remotos.',
      menuPath: 'Menu Principal > Eventos',
      image: IMG('eventos/menu.png'),
      manualPdf: MANUAL_PDF,
      sections: [
        { title: 'Tipos de eventos registrados', content: 'Acessos por senha, apartamento, chaveiro, controle, digital e face; acionamentos por teclas AC e remotamente pelo SGA; pânico, tamper, arrombamento, carona e Porteiro Alerta.', type: 'info' },
        { title: 'Limites', content: 'O MIP armazena até 30.000 eventos. As consultas Por usuário e Por dispositivo exibem os 26 registros mais recentes do filtro. Para Últimos eventos.', type: 'note' },
      ],
    },
    children: [
      {
        id: 'mip-eventos-ultimos',
        label: 'Últimos eventos',
        path: '/eventos/ultimos',
        content: {
          title: 'Últimos Eventos',
          description: 'Exibe os eventos mais recentes de todo o sistema, independente do usuário ou dispositivo. Mostra data, hora, tipo do evento, usuário e dispositivo envolvido.',
          menuPath: 'Eventos > Últimos eventos',
          image: IMG('eventos/ultimos.png'),
          manualPdf: MANUAL_PDF,
          sections: [
            { title: 'Informações exibidas', content: 'Data e hora, nome e tipo do usuário, apartamento, dispositivo e saída acionada, além do tipo de acesso ou evento. O manual ilustra “Acesso Liberado”.', type: 'info' },
            { title: 'Limite', content: 'Consulta global dos registros mais recentes. O MIP armazena até 30.000 eventos; o manual não define uma quantidade exibida por vez nesta opção.', type: 'note' },
          ],
        },
      },
      {
        id: 'mip-eventos-por-usuario',
        label: 'Por usuário',
        path: '/eventos/por-usuario',
        content: {
          title: 'Eventos por Usuário',
          description: 'Filtra e exibe os 26 últimos eventos de um usuário específico. A busca pode ser feita por nome ou número do apartamento.',
          menuPath: 'Eventos > Por usuário',
          gallery: [
            { label: 'Buscar usuário por nome ou apartamento', image: IMG('eventos/usuario-busca.png') },
            { label: 'Eventos encontrados para o usuário', image: IMG('eventos/usuario-resultado.png') },
          ],
          manualPdf: MANUAL_PDF,
          sections: [
            { title: 'Busca', content: 'Localizar por nome ou apartamento e pressionar Enter para consultar os eventos da pessoa.', type: 'info' },
            { title: 'Eventos e limite', content: 'O resultado mostra data e hora, usuário, apartamento, dispositivo e tipo do evento (o manual exemplifica “Acesso liberado”). Use a tecla para baixo para percorrer os 26 últimos acessos desse usuário.', type: 'note' },
          ],
        },
      },
      {
        id: 'mip-eventos-por-dispositivo',
        label: 'Por dispositivo',
        path: '/eventos/por-dispositivo',
        content: {
          title: 'Eventos por Dispositivo',
          description: 'Filtra e exibe os 26 últimos eventos de um dispositivo específico cadastrado no sistema.',
          menuPath: 'Eventos > Por dispositivo',
          image: IMG('eventos/dispositivo.png'),
          manualPdf: MANUAL_PDF,
          sections: [
            { title: 'Busca', content: 'Selecionar o dispositivo na lista de dispositivos cadastrados.', type: 'info' },
            { title: 'Eventos e limite', content: 'O resultado mostra data e hora, usuário, apartamento, dispositivo e tipo do evento (o manual exemplifica “Acesso liberado”). São exibidos os 26 últimos eventos desse dispositivo.', type: 'note' },
          ],
        },
      },
    ],
  },

  // ── 3. NOTIFICAÇÕES ───────────────────────────────────────────────────────
  {
    id: 'mip-notificacoes',
    label: 'Notificações',
    path: '/notificacoes',
    content: {
      title: 'Notificações',
      description: 'Exibe alertas ativos do sistema: bateria baixa em controles remotos e dispositivos com timeout de comunicação no barramento RS-485. Quando o ícone de notificação aparece na tela inicial, pressione a tecla 2 para visualizá-las.',
      menuPath: 'Menu Principal > Notificações',
      image: IMG('notificacoes/menu.png'),
      manualPdf: MANUAL_PDF,
      sections: [
        { title: 'Opções do menu', content: '1. Bateria Baixa: identifica o morador com controle de bateria fraca. 2. Dispositivo: lista dispositivos com problema.', type: 'info' },
        { title: 'Limite', content: 'O manual não especifica uma quantidade máxima de notificações para nenhuma das opções. O contador 01/01 nas telas é apenas o exemplo ilustrado.', type: 'note' },
        { title: 'Acesso rápido', content: 'Na tela inicial do MIP, pressione a tecla 2 quando o ícone de notificação estiver visível para acessar os alertas do sistema.', type: 'tip' },
      ],
    },
    children: [
      {
        id: 'mip-notificacoes-bateria-baixa',
        label: 'Bateria baixa',
        path: '/notificacoes/bateria-baixa',
        content: {
          title: 'Bateria Baixa',
          description: 'Informa quais moradores possuem controles remotos XTR 1000 com nível de bateria baixo. Permite identificar rapidamente quais usuários precisam trocar a bateria.',
          menuPath: 'Notificações > Bateria baixa',
          image: IMG('notificacoes/bateria-baixa.png'),
          manualPdf: MANUAL_PDF,
          sections: [
            { title: 'Informações exibidas', content: 'Mostra o morador que possui controle com bateria baixa. Se não houver ocorrências.', type: 'info' },
            { title: 'Limite', content: 'O manual não define um máximo de moradores ou controles nessa lista; 01/01 é somente o contador da tela de exemplo.', type: 'note' },
          ],
        },
      },
      {
        id: 'mip-notificacoes-dispositivo',
        label: 'Dispositivo',
        path: '/notificacoes/dispositivo',
        content: {
          title: 'Notificações de Dispositivo',
          description: 'Mostra os dispositivos do barramento RS-485 que estão em estado de timeout — sem resposta ao MIP. Permite identificar equipamentos com falha de comunicação ou desligados.',
          menuPath: 'Notificações > Dispositivo',
          image: IMG('notificacoes/dispositivo.png'),
          manualPdf: MANUAL_PDF,
          sections: [
            { title: 'Informações exibidas', content: 'Lista os dispositivos com problema de comunicação; o manual exemplifica “TOut. XPE Portaria”.', type: 'info' },
            { title: 'Dica de suporte', content: 'Use o teste de barramento RS-485 (tecla 7 na tela inicial) para analisar a qualidade da comunicação com cada dispositivo e identificar a causa do timeout.', type: 'tip' },
          ],
        },
      },
    ],
  },

  // ── 4. CONFIG. TECLAS ─────────────────────────────────────────────────────
  {
    id: 'mip-config-teclas',
    label: 'Config. Teclas',
    path: '/config-teclas',
    content: {
      title: 'Config. Teclas',
      description: 'Configura as teclas de acionamento rápido AC1 a AC5 do MIP 1000 IP. Cada tecla pode ser associada a um dispositivo cadastrado para acionamento direto pelo porteiro/vigilante, sem necessidade de autenticação.',
      menuPath: 'Menu Principal > Config. Teclas',
      gallery: [
        { label: 'Selecionar Tecla AC1 a AC5', image: IMG('config-teclas/menu.png') },
        { label: 'Selecionar dispositivo', image: IMG('config-teclas/dispositivo.png') },
        { label: 'Selecionar acionamento e saída', image: IMG('config-teclas/acionamento.png') },
        { label: 'Tecla configurada: Voltar ou Excluir', image: IMG('config-teclas/configurada.png') },
      ],
      manualPdf: MANUAL_PDF,
      sections: [
        { title: 'Edição', content: 'Uma tecla configurada não pode ser editada: use Excluir e refaça a configuração. Use Voltar para sair sem alterar.', type: 'note' },
        { title: 'Registro de eventos', content: 'O acionamento via teclas AC gera evento registrado como "Tecla AC X — Dispositivo — Saída".', type: 'note' },
      ],
    },
    children: [
      { id: 'mip-config-teclas-ac1', label: 'Tecla AC1', path: '/config-teclas/ac1', content: { title: 'Tecla AC1', description: 'Configura a tecla de acionamento rápido AC1, vinculando-a a um dispositivo e a uma saída disponíveis.', menuPath: 'Config. Teclas > Tecla AC1', image: IMG('config-teclas/acionamento.png'), manualPdf: MANUAL_PDF, sections: configTeclaSections('AC1') } },
      { id: 'mip-config-teclas-ac2', label: 'Tecla AC2', path: '/config-teclas/ac2', content: { title: 'Tecla AC2', description: 'Configura a tecla de acionamento rápido AC2, vinculando-a a um dispositivo e a uma saída disponíveis.', menuPath: 'Config. Teclas > Tecla AC2', image: IMG('config-teclas/acionamento.png'), manualPdf: MANUAL_PDF, sections: configTeclaSections('AC2') } },
      { id: 'mip-config-teclas-ac3', label: 'Tecla AC3', path: '/config-teclas/ac3', content: { title: 'Tecla AC3', description: 'Configura a tecla de acionamento rápido AC3, vinculando-a a um dispositivo e a uma saída disponíveis.', menuPath: 'Config. Teclas > Tecla AC3', image: IMG('config-teclas/acionamento.png'), manualPdf: MANUAL_PDF, sections: configTeclaSections('AC3') } },
      { id: 'mip-config-teclas-ac4', label: 'Tecla AC4', path: '/config-teclas/ac4', content: { title: 'Tecla AC4', description: 'Configura a tecla de acionamento rápido AC4, vinculando-a a um dispositivo e a uma saída disponíveis.', menuPath: 'Config. Teclas > Tecla AC4', image: IMG('config-teclas/acionamento.png'), manualPdf: MANUAL_PDF, sections: configTeclaSections('AC4') } },
      { id: 'mip-config-teclas-ac5', label: 'Tecla AC5', path: '/config-teclas/ac5', content: { title: 'Tecla AC5', description: 'Configura a tecla de acionamento rápido AC5, vinculando-a a um dispositivo e a uma saída disponíveis.', menuPath: 'Config. Teclas > Tecla AC5', image: IMG('config-teclas/acionamento.png'), manualPdf: MANUAL_PDF, sections: configTeclaSections('AC5') } },
    ],
  },

  // ── 5. CONFIG. SISTEMA ────────────────────────────────────────────────────
  {
    id: 'mip-config-sistema',
    label: 'Config. Sistema',
    path: '/config-sistema',
    content: {
      title: 'Config. Sistema',
      description: 'Menu de configurações gerais do MIP 1000 IP: data/hora, dados do condomínio, login e permissões, porteiro alerta, pânico, mensagem de descanso, alertas sonoros, rótulos, modo de cadastro, temporizações, rede IP, feriados, backup e reset geral.',
      menuPath: 'Menu Principal > Config. Sistema',
      gallery: [
        { label: 'Opções 1 de 3', image: IMG('config-sistema/menu-config-sistema-1:3.png') },
        { label: 'Opções 2 de 3', image: IMG('config-sistema/menu-config:sistema-2:3.png') },
        { label: 'Opções 3 de 3', image: IMG('config-sistema/menu-config-sistema-3:3.png') },
      ],
      manualPdf: MANUAL_PDF,
    },
    children: [
      // 5.1 Data e Hora
      {
        id: 'mip-config-sistema-data-hora',
        label: 'Data e Hora',
        path: '/config-sistema/data-hora',
        content: {
          title: 'Data e Hora',
          description: 'Define a data e hora do MIP 1000 IP. A hora correta é essencial para a integridade dos registros de eventos.',
          menuPath: 'Config. Sistema > Data e Hora',
          gallery: [
            { label: 'Data', image: IMG('config-sistema/config:data-data.png') },
            { label: 'Hora', image: IMG('config-sistema/config:data-hora.png') },
          ],
          manualPdf: MANUAL_PDF,
          sections: [{ title: 'Campos', content: 'Data (DD/MM/AA), Hora (HH:MM)', type: 'info' }],
        },
      },
      // 5.2 Condomínio
      {
        id: 'mip-config-sistema-condominio',
        label: 'Condomínio',
        path: '/config-sistema/condominio',
        content: {
          title: 'Condomínio',
          description: 'Armazena os dados cadastrais do condomínio. O nome é exibido na tela inicial do MIP — aceita 34 caracteres, mas apenas os 21 primeiros são visíveis no display.',
          menuPath: 'Config. Sistema > Condomínio',
          gallery: [
            { label: 'Nome', image: IMG('config-sistema/cadastro:condomio-nome.png') },
            { label: 'Responsável', image: IMG('config-sistema/cadastro:condominio-responsavel.png') },
            { label: 'E-mail', image: IMG('config-sistema/cadastro:condominio-email.png') },
            { label: 'Telefone', image: IMG('config-sistema/cadastro:condominio-telefone.png') },
            { label: 'Rua', image: IMG('config-sistema/cadastro:condominio-Rua.png') },
            { label: 'Bairro', image: IMG('config-sistema/cadastro:condominio-bairro.png') },
            { label: 'Número', image: IMG('config-sistema/cadastro:condominio-numero.png') },
            { label: 'CNPJ', image: IMG('config-sistema/cadastro:condominio-CNPJ.png') },
          ],
          manualPdf: MANUAL_PDF,
          sections: [
            { title: 'Campos', content: 'Nome (exibido no display), Responsável, E-mail, Telefone, Rua, Bairro, Número, CNPJ', type: 'info' },
            { title: 'Exibição no display', content: 'O nome aceita 34 caracteres, porém apenas os 21 primeiros são mostrados no display do MIP.', type: 'note' },
          ],
        },
      },
      // 5.3 Config. Login
      {
        id: 'mip-config-sistema-login',
        label: 'Config. de Login',
        path: '/config-sistema/login',
        content: {
          title: 'Config. de Login',
          description: 'Gerencia as credenciais de acesso ao menu do MIP. Permite trocar a senha do administrador e configurar usuários com permissões de acesso, definindo até 4 níveis.',
          menuPath: 'Config. Sistema > Config. de Login',
          gallery: [
            { label: 'Menu de login do administrador', image: IMG('config-sistema/config:login:admin.png') },
          ],
          manualPdf: MANUAL_PDF,
          sections: [
            { title: 'Operações', content: 'Trocar Senha (admin), Buscar Usuário (para configurar login)', type: 'info' },
            { title: 'Níveis de permissão', content: 'Nível 1: acesso completo, Nível 2: usuários e eventos/notificações, Nível 3: eventos e notificações, Nível 4: apenas eventos.', type: 'info' },
            { title: 'Senha padrão de fábrica', content: 'Login: admin | Senha: 123456, Aceita de 1 a 6 caracteres, Usuários Nível 1 podem acessar o menu com chaveiro RFID.', type: 'tip' },
          ],
        },
        children: [
          {
            id: 'mip-config-login-trocar-senha',
            label: 'Trocar senha',
            path: '/config-sistema/login/trocar-senha',
            content: {
              title: 'Trocar Senha do Administrador',
              description: 'Altera a senha de acesso ao menu do MIP (login admin). A senha padrão de fábrica é 123456. A nova senha deve ter de 1 a 6 caracteres.',
              menuPath: 'Config. Sistema > Config. de Login > Trocar Senha',
              gallery: [
                { label: 'Selecionar Trocar Senha', image: IMG('config-sistema/config:login:admin-trocar-senha.png') },
                { label: 'Informar a nova senha', image: IMG('config-sistema/config:login:admin:senha.png') },
              ],
              manualPdf: MANUAL_PDF,
              sections: [{ title: 'Campos', content: 'Login (admin), Senha (1–6 caracteres)', type: 'info' }],
            },
          },
          {
            id: 'mip-config-login-buscar-usuario',
            label: 'Buscar usuário',
            path: '/config-sistema/login/buscar-usuario',
            content: {
              title: 'Configurar Login de Usuário',
              description: 'Permite que moradores já cadastrados acessem o menu do MIP com login e senha próprios, com nível de permissão definido pelo administrador (Nível 1 a 4).',
              menuPath: 'Config. Sistema > Config. de Login > Buscar Usuário',
              gallery: [
                { label: 'Buscar morador', image: IMG('config-sistema/config:login:admin-usuario-buscar.png') },
                { label: 'Definir login', image: IMG('config-sistema/config:login:admin:login.png') },
                { label: 'Definir senha', image: IMG('config-sistema/config:login:admin:senha.png') },
                { label: 'Definir nível de acesso', image: IMG('config-sistema/config:login:admin:nivel-usuario.png') },
              ],
              manualPdf: MANUAL_PDF,
              sections: [
                { title: 'Campos', content: 'Nome (busca), Login, Senha, Nível de Usuário (Nível 1 ao 4)', type: 'info' },
                { title: 'Nível 1 — Acesso por Chaveiro', content: 'Usuários configurados como Nível 1 podem acessar o menu utilizando seu chaveiro RFID (Mifare) sem necessidade de digitar login.', type: 'tip' },
              ],
            },
          },
        ],
      },
      // 5.4 Porteiro Alerta
      {
        id: 'mip-config-sistema-porteiro-alerta',
        label: 'Porteiro Alerta',
        path: '/config-sistema/porteiro-alerta',
        content: {
          title: 'Porteiro Alerta',
          description: 'Configura alertas sonoros periódicos para manter o porteiro/vigilante atento durante o turno de serviço. Emite alertas em intervalos regulares dentro de uma faixa de horário. A ativação e desativação geram eventos registrados.',
          menuPath: 'Config. Sistema > Porteiro Alerta',
          gallery: [
            { label: 'Hora inicial', image: IMG('config-sistema/config:porteiro-alerta-hora-inicial.png') },
            { label: 'Hora final', image: IMG('config-sistema/config:porteiro-alerta-hora-final.png') },
            { label: 'Intervalo', image: IMG('config-sistema/config:porteiro-alerta-intervalo.png') },
            { label: 'Saída acionada', image: IMG('config-sistema/config:porteiro-alerta-saida-acionada.png') },
            { label: 'Forma de desativação', image: IMG('config-sistema/config:porteiro-alerta-desativacao.png') },
          ],
          manualPdf: MANUAL_PDF,
          sections: [
            { title: 'Campos', content: 'Hora Inicial, Hora Final, Intervalo (0 = desativado; 15 a 120 minutos), Saída Acionada (Saída01 / Saída02 / Nenhum), Desativação (Cancelar e Chav. / Somente Cancelar / Somente Chav.)', type: 'info' },
            { title: 'Como desativar', content: 'Definir o Intervalo igual a Zero desativa completamente o Porteiro Alerta.', type: 'tip' },
          ],
        },
      },
      // 5.5 Pânico
      {
        id: 'mip-config-sistema-panico',
        label: 'Pânico',
        path: '/config-sistema/panico',
        content: {
          title: 'Pânico',
          description: 'Configura a função de acionamento de pânico. Quando ativado, gera alerta visual no display do MIP (e sonoro, se habilitado), registra um evento e pode acionar uma saída. Disponível apenas para usuários do tipo Morador.',
          menuPath: 'Config. Sistema > Pânico',
          gallery: [
            { label: 'Dígito de pânico', image: IMG('config-sistema/config:panico:digito.png') },
            { label: 'Tecla do controle', image: IMG('config-sistema/config:panico:tecla-controle.png') },
            { label: 'Tempo do controle', image: IMG('config-sistema/config:panico-tempo-controle.png') },
            { label: 'Saída acionada', image: IMG('config-sistema/config:panico:saida-acionada.png') },
            { label: 'Aviso sonoro', image: IMG('config-sistema/config:panico:aviso-sonoro.png') },
            { label: 'Desativação', image: IMG('config-sistema/config:panico:desativacao.png') },
            { label: 'Tempo do chaveiro', image: IMG('config-sistema/config:panico:tempo-chaveiro.png') },
          ],
          manualPdf: MANUAL_PDF,
          sections: [
            { title: 'Campos de configuração', content: 'Dígito (1–9, inserido entre o 3º e 4º dígito da senha), Tecla Controle (Power / A / B / C / Nenhum tipo), Tempo Controle (0 = desabilitado), Saída Acionada, Aviso Sonoro (Habilitado / Desabilitado), Desativação, Tempo Chaveiro', type: 'info' },
            { title: 'Formas de acionamento', content: [
              'Dígito de pânico na senha (XPE/XLT).',
              'Tecla do controle pressionada pelo tempo configurado (XRE).',
              'Chaveiro mantido sobre o leitor pelo tempo configurado (XPE/XLT).',
              'Digital de pânico nos dispositivos biométricos.',
            ], type: 'info' },
            { title: 'Atenção', content: 'A função pânico está disponível apenas para usuários do tipo Morador. Prestadores de serviço e visitantes não conseguem acionar o pânico.', type: 'warning' },
          ],
        },
      },
      // 5.6 Mens. de Descanso
      {
        id: 'mip-config-sistema-msg-descanso',
        label: 'Mens. de Descanso',
        path: '/config-sistema/mensagem-descanso',
        content: {
          title: 'Mensagem de Descanso',
          description: 'Define uma mensagem personalizada exibida no display do MIP, acima do nome do condomínio, quando o equipamento estiver na tela inicial/repouso.',
          menuPath: 'Config. Sistema > Mens. de Descanso',
          gallery: [
            { label: 'Mensagem de descanso', image: IMG('config-sistema/config:msg:descanso-mensagem.png') },
          ],
          manualPdf: MANUAL_PDF,
          sections: [{ title: 'Campo', content: 'Mensagem (máximo de 20 caracteres)', type: 'info' }],
        },
      },
      // 5.7 Alerta Sonoro
      {
        id: 'mip-config-sistema-alerta-sonoro',
        label: 'Alerta Sonoro',
        path: '/config-sistema/alerta-sonoro',
        content: {
          title: 'Alerta Sonoro',
          description: 'Habilita ou desabilita os alertas sonoros do MIP e dos dispositivos integrados (sons de confirmação e negação de acesso).',
          menuPath: 'Config. Sistema > Alerta Sonoro',
          gallery: [
            { label: 'Alerta sonoro do MIP', image: IMG('config-sistema/config:sonoro:alerta-mip.png') },
            { label: 'Alerta sonoro dos dispositivos', image: IMG('config-sistema/config:sonoro:alerta-dispositivo.png') },
          ],
          manualPdf: MANUAL_PDF,
          sections: [{ title: 'Campos', content: 'Alerta MIP (Habilitado / Desabilitado), Alerta dispositivos (Habilitado / Desabilitado)', type: 'info' }],
        },
      },
      // 5.8 Rótulos
      {
        id: 'mip-config-sistema-rotulos',
        label: 'Rótulos',
        path: '/config-sistema/rotulos',
        content: {
          title: 'Rótulos',
          description: 'Permite personalizar os nomes de campos exibidos nos menus de cadastro. Por exemplo: "Apto" pode ser renomeado para "Casa" em condomínios de casas; os níveis de permissão podem receber nomes como "Porteiro", "Síndico" ou "Instalador".',
          menuPath: 'Config. Sistema > Rótulos',
          gallery: [
            { label: 'Rótulo do apartamento', image: IMG('config-sistema/config:rotulo-apto.png') },
            { label: 'Rótulo do nível 1', image: IMG('config-sistema/config:rotulo-nivel1.png') },
            { label: 'Rótulo do nível 2', image: IMG('config-sistema/config:rotulo-nivel2.png') },
            { label: 'Rótulo do nível 3', image: IMG('config-sistema/config:rotulo-nivel3.png') },
            { label: 'Rótulo do nível 4', image: IMG('config-sistema/config:rotulo-nivel4.png') },
          ],
          manualPdf: MANUAL_PDF,
          sections: [
            { title: 'Rótulos configuráveis', content: 'Apto (máx. 4 caracteres), Nível 1 (máx. 10 caracteres), Nível 2, Nível 3, Nível 4', type: 'info' },
            { title: 'Exemplos de uso', content: '"Apto" → "Casa" (condomínio de casas), "Nível 1" → "Porteiro", "Nível 2" → "Síndico".', type: 'tip' },
          ],
        },
      },
      // 5.9 Modo de Cadastro
      {
        id: 'mip-config-sistema-modo-cadastro',
        label: 'Modo de Cadastro',
        path: '/config-sistema/modo-cadastro',
        content: {
          title: 'Modo de Cadastro',
          description: 'Escolhe entre o cadastro básico, com menos campos, e o avançado, que permite preencher mais dados de usuários e do condomínio.',
          menuPath: 'Config. Sistema > Modo de Cadastro',
          gallery: [
            { label: 'Selecionar modo básico ou avançado', image: IMG('config-sistema/config:modo-cadastro:modo.png') },
          ],
          manualPdf: MANUAL_PDF,
          sections: [{ title: 'Opções', content: [
            'Básico: reduz a quantidade de informações nos cadastros de usuários e do condomínio.',
            'Avançado (padrão): no cadastro de usuários, permite informar RG, e-mail, telefone residencial, telefone celular e CPF. Para visitantes e prestadores de serviço, também habilita Dias Permitidos.',
            'No cadastro do condomínio, o manual não especifica quais campos são exclusivos do modo avançado.',
          ], type: 'info' }],
        },
      },
      // 5.10 Temporizações
      {
        id: 'mip-config-sistema-temporizacoes',
        label: 'Temporizações',
        path: '/config-sistema/temporizacoes',
        content: {
          title: 'Temporizações',
          description: 'Define por quantos segundos cada evento permanece visível no display do MIP 1000 IP.',
          menuPath: 'Config. Sistema > Temporizações',
          gallery: [
            { label: 'Tempo de exibição do evento', image: IMG('config-sistema/config:tempos:intervalo-exib-evento.png') },
          ],
          manualPdf: MANUAL_PDF,
          sections: [{ title: 'Configuração', content: 'Ajuste o tempo de exibição dos eventos em segundos e pressione Enter para confirmar.', type: 'info' }],
        },
      },
      // 5.11 Sobrepor Eventos
      {
        id: 'mip-config-sistema-sobrepor-eventos',
        label: 'Sobrepor Eventos',
        path: '/config-sistema/sobrepor-eventos',
        content: {
          title: 'Sobrepor Eventos',
          description: 'Controla se um novo evento substitui imediatamente o que está no display, sem aguardar o fim do tempo de exibição atual.',
          menuPath: 'Config. Sistema > Sobrepor Eventos',
          gallery: [
            { label: 'Habilitar ou desabilitar sobreposição', image: IMG('config-sistema/config:sobrepor-eventos:habilitar.png') },
          ],
          manualPdf: MANUAL_PDF,
          sections: [{ title: 'Opções', content: 'Sim: o evento novo aparece imediatamente sobre o atual. Não: o MIP respeita o tempo de exibição configurado.', type: 'info' }],
        },
      },
      // 5.12 Status do Sistema
      {
        id: 'mip-config-sistema-status',
        label: 'Status do Sistema',
        path: '/config-sistema/status',
        content: {
          title: 'Status do Sistema',
          description: 'Consulta a quantidade de usuários, dispositivos, chaveiros, controles, digitais, faces e eventos registrados no MIP.',
          menuPath: 'Config. Sistema > Status do Sistema',
          gallery: [
            { label: 'Quantidades cadastradas no sistema', image: IMG('config-sistema/config:sistema-quantidades.png') },
          ],
          manualPdf: MANUAL_PDF,
          sections: [{ title: 'Sair da consulta', content: 'Pressione ESC no teclado USB ou Cancelar no teclado do MIP.', type: 'info' }],
        },
      },
      // 5.13 Rede IP
      {
        id: 'mip-config-sistema-rede-ip',
        label: 'Rede IP',
        path: '/config-sistema/rede-ip',
        content: {
          title: 'Rede IP',
          description: 'Configura e consulta o endereçamento IPv4 do MIP e os serviços de comunicação com o software de gerenciamento.',
          menuPath: 'Config. Sistema > Rede IP',
          gallery: [
            { label: 'Selecionar Rede IP no menu Config. Sistema', image: IMG('config-sistema/config:sistema:menu-rede-ip.png') },
            { label: 'Menu de Rede IP', image: IMG('config-sistema/config:rede:ip.png') },
            { label: 'Selecionar Rede IPv4', image: IMG('config-sistema/config:rede-ip:ipv4.png') },
            { label: 'Modo de endereçamento', image: IMG('config-sistema/config:rede-ip:ipv4:enderecamento.png') },
            { label: 'Endereço IP', image: IMG('config-sistema/config:rede-ip:ipv4:endereco-ip.png') },
            { label: 'Máscara IP', image: IMG('config-sistema/config:rede-ip:ipv4:mascara-ip.png') },
            { label: 'Gateway IP', image: IMG('config-sistema/config:rede-ip:ipv4:gateway-ip.png') },
            { label: 'Servidor DNS', image: IMG('config-sistema/config:rede-ip:ipv4:servidor-dns.png') },
            { label: 'Menu de Serviços', image: IMG('config-sistema/config:rede-ip:servicos.png') },
            { label: 'Configurar SCA Server', image: IMG('config-sistema/config:rede-ip:SCA-servidor.png') },
            { label: 'Porta do SCA Server', image: IMG('config-sistema/config:rede-ip:SCA-servidor:porta.png') },
            { label: 'Configurar SCA Cliente', image: IMG('config-sistema/config:rede-ip:SCA-cliente.png') },
            { label: 'Host do SCA Cliente', image: IMG('config-sistema/config:rede-ip:SCA-cliente:host.png') },
            { label: 'Porta do SCA Cliente', image: IMG('config-sistema/config:rede-ip:SCA-cliente:porta.png') },
          ],
          manualPdf: MANUAL_PDF,
          sections: [
            { title: 'Rede IPv4', content: 'Permite visualizar o MAC e o endereço atual. O IPv4 pode usar endereçamento dinâmico, estático ou ficar desabilitado; no modo estático, configure IP, máscara, gateway e DNS.', type: 'info' },
            { title: 'Serviços', content: 'SCA Server permite que o software inicie a conexão com o MIP. SCA Cliente permite que o MIP inicie a conexão com o software. As duas opções podem ficar ativas.', type: 'info' },
            { title: 'Reinicialização', content: 'Após alterar a porta de comunicação reinicie o MIP 1000 IP para aplicar a mudança.', type: 'note' },
          ],
        },
      },
      // 5.14 Feriados
      {
        id: 'mip-feriados',
        label: 'Feriados',
        path: '/config-sistema/feriados',
        content: {
          title: 'Feriados',
          description: 'Consulta e edita o calendário de feriados do MIP, permitindo alterar datas existentes ou adicionar datas personalizadas.',
          menuPath: 'Config. Sistema > Feriados',
          gallery: [
            { label: 'Lista de feriados', image: IMG('config-sistema/config:feriados-1:2.png') },
            { label: 'Continuação da lista e adicionar feriado', image: IMG('config-sistema/config:feriados-2:2.png') },
          ],
          manualPdf: MANUAL_PDF,
          sections: [
            { title: 'Feriados pré-configurados', content: 'Inclui feriados nacionais e datas móveis como Carnaval Sexta-feira Santa e Corpus Christi.', type: 'info' },
            { title: 'Adicionar ou editar', content: 'Selecione Adicionar ou um feriado existente e informe data nome e se ele ficará habilitado.', type: 'info' },
          ],
        },
      },
      // 5.15 Backup/Restauração
      {
        id: 'mip-config-sistema-backup',
        label: 'Backup/Restauração',
        path: '/config-sistema/backup-restauracao',
        content: {
          title: 'Backup/Restauração',
          description: 'Copia configurações e dados entre o MIP e um pendrive, exporta eventos ou apaga o histórico de eventos.',
          menuPath: 'Config. Sistema > Backup/Restauração',
          gallery: [
            { label: 'Opções de backup e restauração', image: IMG('config-sistema/config:backup.png') },
            { label: 'Confirmação para apagar eventos', image: IMG('config-sistema/config:backup:apagar-eventos.png') },
          ],
          manualPdf: MANUAL_PDF,
          sections: [
            { title: 'Operações', content: 'MIP para Pendrive: exporta configurações e até 30 mil eventos. Pendrive para MIP: restaura os arquivos da pasta MIPIP. Eventos para Pendrive: exporta o histórico. Apagar Eventos: remove o histórico de eventos.', type: 'info' },
            { title: 'Atenção', content: 'Apagar Eventos exige confirmação e senha de administrador e reinicia o MIP., Faça backups recorrentes para reduzir o risco de perda de dados.', type: 'warning' },
          ],
        },
      },
      // 5.16 Reset Geral
      {
        id: 'mip-config-sistema-reset-geral',
        label: 'Reset Geral',
        path: '/config-sistema/reset-geral',
        content: {
          title: 'Reset Geral',
          description: 'Apaga os dados cadastrados e restaura as configurações do MIP para o padrão de fábrica.',
          menuPath: 'Config. Sistema > Reset Geral',
          gallery: [
            { label: 'Confirmação para iniciar o reset', image: IMG('config-sistema/config:reset-geral:reset.png') },
          ],
          manualPdf: MANUAL_PDF,
          sections: [{ title: 'Atenção', content: 'O reset remove todas as informações cadastradas. Após as confirmações, será solicitada a senha de administrador e o MIP retornará ao padrão de fábrica.', type: 'warning' }],
        },
      },
    ],
  },
];
