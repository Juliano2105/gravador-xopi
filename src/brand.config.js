// Configuração da marca do Gravador XOPI.
// Fork do Screenity (https://github.com/alyssaxuu/screenity), licença GPL-3.0.
// Altere aqui os links; o resto do código lê destes valores.

export const BRAND = {
  name: "Gravador XOPI",
  // Repositório público do fork (exigência da GPL: código-fonte disponível)
  repoUrl: "https://github.com/Juliano2105/gravador-xopi",
  // Onde os usuários reportam problemas
  issuesUrl: "https://github.com/Juliano2105/gravador-xopi/issues/new",
  // Link da extensão na Chrome Web Store (preencher depois da 1ª publicação).
  // Enquanto estiver vazio, o pedido de avaliação fica desligado.
  storeUrl: "",
  // Nome da pasta criada no Google Drive ao salvar vídeos
  driveFolderName: "Gravador XOPI",
};

// O botão "Salvar no Google Drive" só aparece se o manifest tiver um
// client_id OAuth próprio (o do Screenity original só funciona no ID dele).
export const isDriveConfigured = () => {
  try {
    const clientId = chrome.runtime.getManifest()?.oauth2?.client_id || "";
    return clientId.length > 0 && !clientId.startsWith("SEU_");
  } catch {
    return false;
  }
};
