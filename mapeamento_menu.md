# Mapeamento do Menu do Sistema

Abaixo está a árvore do menu baseada no mindmap fornecido, com todas as opções e notas incluídas, para ser utilizada futuramente na estruturação da página.

## Menu Admin / Configurações

*   **1. Cadastro**
    *   **1.1. Usuário**
        *   **Incluir**
            *   Nome
            *   Tipo (`morador`, `prest. servico`, `visitante`)
                *   *Se `prest. servico` ou `visitante`: Data inicial, Data final, Início período, Final período*
                *   > **Nota:** Prestadores de Serviço e visitantes não têm essas opções de credenciais.
                *   > **Nota:** Em cadastros de prestador de serviço ou visitantes, após a permissão de dispositivos, é apresentada a opção de "dias permitidos".
            *   Apto
            *   Bloco
            *   Senha
            *   Chaveiros
            *   Controle
            *   Digital(is)
            *   Face(s)
            *   Dispositivos permitidos (`XRE`, `XPE`, `XLT`, `SS`, `CT`)
            *   RG (números)
                *   > **Nota:** Com o modo de cadastro no "básico", as opções "RG, e-mail, tel residencial, tel celular e CPF" não são exibidas.
            *   E-mail
            *   Tel. Residencial
            *   Tel. Celular
            *   CPF
        *   **Editar**
            *   Buscar usuário (`nome`, `apto`)
                *   Nome
                *   Tipo
                    *   > **Nota:** O "tipo" é o único dado que não pode ser editado.
                *   Apto
                *   Bloco
                *   Senha
                *   Dispositivos permitidos
                *   RG (números)
                *   E-mail
                *   Tel. residencial
                *   Tel. celular
                *   CPF
        *   **Consultar**
            *   Buscar usuário (`nome`, `apto`)
                *   Exibe: Nome, Tipo, Apto, Bloco, Senha, Chaveiros, Controles, Digital(is), Face(s), Dispositivos permitidos, RG, E-mail, Tel. residencial, Tel. celular, CPF
        *   **Excluir**
            *   Buscar usuário (`nome`, `apto`)
                *   Confirmação: "Tem certeza?"

    *   **1.2. Dispositivo**
        *   **Incluir novo S1**
        *   **Incluir novo S2**
        *   **Ressincronizar**
            *   Opções: `XRE`, `XLT-ID`, `XPE-ID`, `BioInox (SS 311 MF)`, `CT 500 1P`, `SS 3530 - Facial`, `Remote`, `SS3430 - BIO`, `SS 3420 - BIO`, `SS 3540 - Facial`, `CT 3000 2PB`, `XPE BIO`, `SS 3540 BIO`, `SS 1530`, `SS 1540`, `SS (3/5)53(1/2) MF`
        *   **Editar Nome** *(Mostra os dispositivos cadastrados)*
            *   Selecione o dispositivo cadastrado:
                *   **MIP 1000 IP**
                    *   Nome
                    *   Nome Acion. 01, Tempo Acion. 01, Tempo Sens. 01
                    *   Nome Acion. 02, Tempo Acion. 02, Tempo Sens. 02
                    *   Intertravamento (`Desabilitado` / `Habilitado`)
                *   **XLT**
                    *   Nome
                    *   Nome Acion. 01, Tipo Acion. 01 (`chav. / senha`, `somente senha`, `somente chav.`), Tempo Acion. 01, Tempo Sens. 01
                    *   Nome Acion. 02, Tipo Acion. 02 (`chav. / senha`, `somente senha`, `somente chav.`), Tempo Acion. 02, Tempo Sens. 02
                    *   Intertravamento (`Habilitado` / `Desabilitado`)
                *   **SS 35xx** *(Válido para todos os faciais compatíveis ao MIP)*
                    *   Nome
                    *   Nome Acion. 01, Tipo Acion. 1 (`botoeira`, `sen.1&fech.1`, `sen.2&fech.2`, `desabilitado`), Tempo Acion. 01, Tempo Sens. 01
                    *   Nome Acion. 02, Tipo Acion. 2 (`botoeira`, `sen.1&fech.1`, `sen.2&fech.2`, `desabilitado`), Tempo Acion. 02, Tempo Sens. 02
                    *   Intertravamento (`Habilitado` / `Desabilitado`)
                    *   Eventos de Botão (`Habilitado` / `Desabilitado`)
                    *   Arrombamento (`sen.1&fech.1`, `sen.2&fech.2`, `desabilitado`)
                    *   Carona (`sen.1&fech.1`, `sen.2&fech.2`)
                *   **XRE**
                    *   Nome
                    *   Nome Acion. 01, Tipo Acion. 1 (`botao power`, `botao A`, `botao B`, `botao C`, `nenhum tipo`), Tempo Acion. 01, Tempo Sens. 01
                    *   Nome Acion. 02, Tipo Acion. 2 (`botao power`, `botao A`, `botao B`, `botao C`, `nenhum tipo`), Tempo Acion. 02, Tempo Sens. 02
                    *   Intertravamento (`Habilitado` / `Desabilitado`)
                    *   Botoeira (`sen.1&fech.1`, `sen.2&fech.2`, `desabilitado`)
                    *   Eventos de Botão (`Habilitado` / `Desabilitado`)
                    *   Arrombamento (`sen.1&fech.1`, `sen.2&fech.2`, `desabilitado`)
                    *   Função (`acesso`, `coletor`)
                        *   > **Nota:** O XRE não possui a opção "função" e sim "carona".
            *   > **Nota:** Dispositivos com múltiplos relés, como (XRE, XLT, CTs e XPE) terão na tela em seguida a opção de selecionar qual relé será acionado.
        *   **Consultar** *(Mostra os dispositivos cadastrados)*
            *   Selecione o Nome do dispositivo:
                *   **MIP 1000 IP:** Nome, Tipo/Versão/End, Nome Acion.01, Tempo Acion.01, Tempo Sens.01, Nome Acion.02, Tempo Acion.02, Tempo Sens.02
                *   **XLT / XRE:** Nome, Tipo/Versão/End, Nome Acion.01, Tipo Acion.1, Tempo Acion.01, Tempo Sens.01, Nome Acion.02, Tipo Acion.02, Tempo Acion.02, Tempo Sens.02, Intertravamento, Botoeira, Eventos de Bot, Arrombamento, Função
        *   **Excluir**
            *   Nome (dispositivos cadastrados) -> Confirmação: "Tem certeza?"

    *   **1.3. Chaveiro(s)**
        *   > **Nota:** Opção que permite personalizar o nome da opção.
        *   **Incluir novo**
            *   Buscar usuário (`nome`, `apto`)
            *   Escolha o leitor (dispositivos cadastrados) **OU** Digitar -> Código Hex do Chaveiro
            *   Carro (Modelo), Carro (Marca), Carro (Cor), Carro (Placa)
        *   **Editar**
            *   Buscar usuário (`nome`, `apto`)
            *   Código Hex do Chaveiro
            *   Carro (Modelo), Carro (Marca), Carro (Cor), Carro (Placa)
        *   **Consultar**
            *   Buscar usuário (`nome`, `apto`)
            *   Código Hex do Chaveiro
        *   **Excluir**
            *   Buscar usuário (`nome`, `apto`)
            *   Código Hex do Chaveiro -> Confirmação: "Tem certeza?"

    *   **1.4. Controle(s)**
        *   > **Nota:** Opção que permite personalizar o nome da opção.
        *   **Incluir novo**
            *   Buscar usuário (`nome`, `apto`)
            *   Escolha o leitor (dispositivos cadastrados) **OU** Digitar -> Código Hex do Controle
            *   Carro (Modelo), Carro (Marca), Carro (Cor), Carro (Placa)
        *   **Editar**
            *   Buscar usuário (`nome`, `apto`)
            *   Código Hex do Controle
            *   Carro (Modelo), Carro (Marca), Carro (Cor), Carro (Placa)
        *   **Consultar**
            *   Buscar usuário (`nome`, `apto`)
            *   Código Hex do Controle
        *   **Excluir**
            *   Buscar usuário (`nome`, `apto`)
            *   Código Hex do Controle -> Confirmação: "Tem certeza?"

    *   **1.5. Digital(is)**
        *   > **Nota:** Opção que permite personalizar o nome da opção.
        *   **Incluir novo**
            *   Buscar usuário (`nome`, `apto`)
            *   Escolha o leitor -> "Aproxime o dedo 3x"
            *   Carro (Modelo), Carro (Marca), Carro (Cor), Carro (Placa)
        *   **Editar**
            *   Buscar usuário (`nome`, `apto`)
            *   Selecionar Digital(is) cadastradas
            *   Tipo (`normal`, `pânico`)
            *   Carro (Modelo), Carro (Marca), Carro (Cor), Carro (Placa)
        *   **Consultar**
            *   Buscar usuário (`nome`, `apto`)
            *   Digital(is) cadastradas
            *   Tipo
            *   Carro (Modelo), Carro (Marca), Carro (Cor), Carro (Placa)
        *   **Excluir**
            *   Buscar usuário (`nome`, `apto`)
            *   Digital(is) cadastradas -> Confirmação: "Tem certeza?"

    *   **1.6. Face(s)**
        *   > **Nota:** Opção que permite personalizar o nome da opção.
        *   **Incluir novo**
            *   Buscar usuário (`nome`, `apto`)
            *   Escolha o leitor
            *   "Aguarde 45s"
                *   > **Nota:** Tempo para se dispor em frente ao facial para o cadastro.
            *   Carro (Modelo), Carro (Marca), Carro (Cor), Carro (Placa)
        *   **Editar**
            *   Buscar usuário (`nome`, `apto`)
            *   Selecionar Face(s) cadastradas
            *   Carro (Modelo), Carro (Marca), Carro (Cor), Carro (Placa)
        *   **Consultar**
            *   Buscar usuário (`nome`, `apto`)
            *   Face(s) cadastradas
            *   Carro (Modelo), Carro (Marca), Carro (Cor), Carro (Placa)
        *   **Excluir**
            *   Buscar usuário (`nome`, `apto`)
            *   Face(s) cadastradas -> Confirmação: "Tem certeza?"

*   **2. Eventos**
    *   **Últimos eventos**
    *   **Por usuário**
        *   Buscar usuário (`nome`, `apto`)
    *   **Por dispositivo**
        *   Nome (dispositivos cadastrados)
    *   > **Nota:** Em todas as opções serão exibidos os últimos 26 eventos de seu respectivo filtro.

*   **3. Notificações**
    *   **Bateria baixa**
        *   Dispositivo
        *   > **Nota:** "Mostra qual morador possui controle com pouca bateria".
    *   **Dispositivo**
        *   > **Nota:** "Mostra os dispositivos com timeout".

*   **4. Config. Teclas**
    *   **Tecla AC1**
    *   **Tecla AC2**
    *   **Tecla AC3**
    *   **Tecla AC4**
    *   **Tecla AC5**
        *   Nome (dispositivos cadastrados)

*   **5. Config. Sistema**
    *   **5.1. Data e Hora**
        *   Data
        *   Hora
    *   **5.2. Condomínio**
        *   Nome
        *   Responsável
        *   E-mail
        *   Telefone
        *   Rua
        *   Bairro
        *   Número
        *   CNPJ
    *   **5.3. Config. Login**
        *   **Trocar senha**
            *   Login
            *   Senha
        *   **Buscar usuário**
            *   Nome
            *   Apto
            *   Nível de usuário (`nível 1`, `nível 2`, `nível 3`, `nível 4`)
    *   **5.4. Porteiro Alerta**
        *   Hora inicial
        *   Hora final
        *   Intervalo
        *   Saída acionada (`saida01`, `saida02`, `nenhum`)
        *   Desativação (`cancelar e chav.`, `somente cancelar`, `somente chav.`)
    *   **5.5. Pânico**
        *   Dígito (`1-9`)
        *   Tecla controle (`botao power`, `botao a`, `botao c`, `nenhum tipo`)
        *   Tempo controle 0-8 (de 2 em 2)
        *   Saída acionada (`saida01`, `saida02`, `nenhum`)
        *   Aviso sonoro (`Habilitado` / `Desabilitado`)
        *   Desativação (`cancelar e chav.`, `mensagem`)
    *   **5.6. Mens. de Descanso**
    *   **5.7. Alerta Sonoro**
        *   Alerta MIP
        *   Alerta dispos (`Habilitado` / `Desabilitado`)
    *   **5.8. Rótulos**
        *   > **Nota:** Opção que permite personalizar o nome da opção (nos cadastros).
        *   Apto
        *   Nível 1
        *   Nível 2
        *   Nível 3
        *   Nível 4
        *   Chaveiro(s)
        *   Controle(s)
        *   Digital(is)
        *   Face(s)

*   **6. Feriados**
    *   Confraternização
    *   Tiradentes
    *   Dia do Trabalho
    *   Independência
    *   N Sra Aparecida
    *   Finados
    *   Proclamação da República
    *   Natal
    *   **Adicionar**
        *   Data
        *   Nome
        *   Habilitar? (`Habilitado` / `Desabilitado`)
