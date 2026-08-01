/**
 * Mapeamento de imagens da pasta /public/imagens para os menus do simulador.
 * Adicione novas entradas conforme incluir mais capturas de tela.
 */
const IMAGES_BASE = '/imagens';

function imagePath(filename: string): string {
  return `${IMAGES_BASE}/${filename}`; // URL doesn't need encodeURIComponent if it's correct but let's keep it safe or avoid it for spaces if Vite handles it. Vite development server handles spaces just fine in public paths.
}

/** Imagens por ID do item de menu */
export const menuImages: Record<string, string> = {
  'usuarios': imagePath('Usuarios 1.jpeg'),
  'usuarios-novo': imagePath('novo usuario.jpeg'),
  'usuarios-lista': imagePath('lista de usuarios.jpeg'),
  'usuarios-senha-mestre': imagePath('senha mestre.jpeg'),
  'acesso': imagePath('acesso.jpeg'),
  'acesso-metodo': imagePath('metodo de abertura.jpeg'),
  'acesso-alarme': imagePath('alarme.jpeg'),
  'acesso-alarme-antipassback': imagePath('Alarme anti-passback.jpeg'),
  'acesso-alarme-coacho': imagePath('Coação.jpeg'),
  'acesso-config-porta': imagePath('config porta.jpeg'),
  'acesso-intervalo': imagePath('intervalo de verificações.jpeg'),
  'acesso-tempo-abertura': imagePath('tempo de abertura.jpeg'),
  'acesso-intertravamento': imagePath('intertravamento.jpeg'),
  'acesso-intertravamento-local': imagePath('intertravamento local.jpeg'),
  'acesso-intertravamento-inteligente': imagePath('intertravamento inteligente.jpeg'),
  'rede': imagePath('rede.jpeg'),
  'rede-ip': imagePath('rede 2.jpeg'),
  'rede-ip-cabeada': imagePath('rede cabeada.jpeg'),
  'rede-ip-registro-ativo': imagePath('registro ativo.jpeg'),
  'rede-ip-wifi': imagePath('wifi.jpeg'),
  'rede-ip-ap-wifi': imagePath('AP wifi.jpeg'),
  'config-sistema': imagePath('config sistema.jpeg'),
  'config-sistema-horario': imagePath('Horário.jpeg'),
  'config-sistema-horario-verao': imagePath('Horário de verão.jpeg'),
  'config-sistema-horario-ntp': imagePath('sincronizar com servidor NTP.jpeg'),
  'config-sistema-face': imagePath('parametros de face.jpeg'),
  'config-sistema-volume': imagePath('volume.jpeg'),
  'config-sistema-digital': imagePath('impressão digital.jpeg'),
  'config-sistema-idioma': imagePath('Idioma.jpeg'),
  'config-sistema-tela': imagePath('tela.jpeg'),
  'config-sistema-reset': imagePath('restaurar padrao de fabrica.jpeg'),
  'usb': imagePath('gerenciamento USB.jpeg'),
  'usb-exportar': imagePath('exportar.jpeg'),
  'usb-importar': imagePath('importar.jpeg'),
  'utilidades': imagePath('utilidades.jpeg'),
  'utilidades-seguranca': imagePath('configuração de segurança.jpeg'),
  'utilidades-feedback': imagePath('utilidades feedback.jpeg'),
  'utilidades-icones': imagePath('icones na tela.jpeg'),
  'utilidades-alarmes': imagePath('Configurações alarme.jpeg'),
  'utilidades-alarmes-porta': imagePath('tempo limite de porta aberta.jpeg'),
  'utilidades-alarmes-intrusao': imagePath('alarme de intrusão.jpeg'),
  'utilidades-alarmes-rede': imagePath('alarme falha de rede.jpeg'),
  'utilidades-alarmes-leitor': imagePath('Leitor facial.jpeg'),
  'acesso-alarme-sensor': imagePath('alarme sensor de porta.png'),
  'rede-rs485': imagePath('Rs 485.jpeg'),
  'rede-wiegand': imagePath('wiegand.jpeg'),
  'utilidades-leitor-facial': imagePath('Leitor facial.jpeg'),
  'utilidades-alarmes-coacao': imagePath('Coação.jpeg'),
  'utilidades-alarmes-antipassback': imagePath('Alarme anti-passback.jpeg'),
  'testes-sequencial': imagePath('teste sequencial.jpeg'),
  'utilidades-alarmes-invalidos': imagePath('Limite acessos invalidos.jpeg'),
  'utilidades-alarmes-tamper': imagePath('Alarme de tamper.jpeg'),
  'utilidades-modo-ponto': imagePath('modo ponto.jpeg'),
  'utilidades-nao-perturbe': imagePath('modo não perturbe.jpeg'),
  'eventos': imagePath('eventos.jpeg'),
  'eventos-acesso': imagePath('Eventos de acesso.jpeg'),
  'info-sistema': imagePath('info sistema.jpeg'),
  'info-sistema-capacidade': imagePath('capacidade do dispositivo.jpeg'),
  'info-sistema-versao': imagePath('versão do dispositivo.jpeg'),
};

/** Imagem exibida na tela inicial (nenhum menu selecionado) */
export const welcomeImage = imagePath('Tela home.jpeg');

export function getMenuImage(menuId: string): string | undefined {
  return menuImages[menuId];
}
