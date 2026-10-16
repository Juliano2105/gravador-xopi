# Gravador XOPI 🎥

Gravador de tela gratuito e privado para o Chrome: grava a **tela inteira**, uma **aba**, uma **área** ou a **câmera**, com **microfone** e **som do sistema**. Dá para anotar na tela, editar (cortar, aparar, recortar) e exportar em **MP4, WebM ou GIF**. Tudo roda no seu computador — nenhum vídeo é enviado para servidor nenhum.

> Este projeto é um fork do **[Screenity](https://github.com/alyssaxuu/screenity)**, criado por [Alyssa X](https://alyssax.com), distribuído sob a licença **GPL-3.0**. Todo o crédito pelo gravador original é dela. Se quiser apoiar o projeto original, conheça o [Screenity Pro](https://screenity.io/pro).

## O que muda em relação ao Screenity original

- Nome e logo próprios (Gravador XOPI).
- Sempre em **modo 100% local**: sem login, sem nuvem, sem recursos do Screenity Pro.
- Sem pesquisa de desinstalação e sem pedido de avaliação apontando para o autor original.
- "Reportar problema" abre as issues deste repositório.
- Botão "Salvar no Google Drive" só aparece quando você configura um OAuth Client ID próprio (veja abaixo).
- Publicação automática na Chrome Web Store via GitHub Actions.

Os links de "Ajuda" continuam apontando para a central de ajuda do Screenity, que descreve os mesmos recursos.

## Como as atualizações chegam aos usuários

1. Você faz um commit na branch `main` (pelo GitHub ou localmente).
2. O workflow `.github/workflows/publicar-chrome-web-store.yml` compila a extensão, gera uma versão nova automaticamente (`1.0.<número da execução>`) e envia para a Chrome Web Store.
3. Depois da revisão do Google, o Chrome de quem tem a extensão instalada atualiza sozinho.

Para fazer um commit **sem** publicar, coloque `[skip publish]` na mensagem do commit.
O `.zip` de cada versão também fica salvo na aba **Actions** do GitHub.

### Segredos necessários (Settings → Secrets and variables → Actions)

| Segredo | O que é |
|---|---|
| `CWS_EXTENSION_ID` | ID da extensão na loja (aparece depois do 1º envio manual) |
| `CWS_CLIENT_ID` | OAuth Client ID do Google Cloud (tipo "App para computador") |
| `CWS_CLIENT_SECRET` | OAuth Client Secret |
| `CWS_REFRESH_TOKEN` | Refresh token com o escopo `https://www.googleapis.com/auth/chromewebstore` |

Enquanto esses segredos não existirem, o workflow só compila e guarda o `.zip`.

## Configurações da marca

Links e nomes ficam em [`src/brand.config.js`](src/brand.config.js). Depois da primeira publicação, preencha `storeUrl` com o link da extensão na loja.

## Salvar no Google Drive (opcional)

1. No [Google Cloud Console](https://console.cloud.google.com/apis/credentials), crie **Credenciais → ID do cliente OAuth → Extensão do Chrome**, informando o ID da extensão publicada.
2. Ative a **Google Drive API** no mesmo projeto.
3. Adicione ao `src/manifest.json`:
   ```json
   "oauth2": {
     "client_id": "SEU_CLIENT_ID.apps.googleusercontent.com",
     "scopes": ["https://www.googleapis.com/auth/drive.file"]
   }
   ```
   e inclua `"identity"` em `permissions` (já está lá).

## Rodar localmente

```bash
npm ci
npm run build:release   # gera a pasta build/
```

Abra `chrome://extensions`, ative o **Modo do desenvolvedor**, clique em **Carregar sem compactação** e selecione a pasta `build`.

## Licença

GPL-3.0 — veja [LICENSE](LICENSE). Como exige a licença, o código-fonte deste fork é público e qualquer versão distribuída mantém a mesma licença e os créditos ao projeto original.
