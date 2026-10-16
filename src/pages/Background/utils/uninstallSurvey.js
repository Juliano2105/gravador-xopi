// Gravador XOPI: pesquisa de desinstalação desativada (a original enviava
// os usuários para o formulário do autor do Screenity).
export const syncUninstallSurvey = async () => {
  try {
    chrome.runtime.setUninstallURL("");
  } catch {}
};

export const initUninstallSurvey = () => {
  syncUninstallSurvey();
};
