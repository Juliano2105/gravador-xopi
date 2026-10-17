# Textos para a Chrome Web Store

## Nome
Gravador XOPI - Grave tela, câmera e reuniões

## Resumo (vem do manifest, até 132 caracteres)
Grave a tela, uma aba, uma área ou a câmera, com microfone e som do sistema. Anote, edite e exporte em MP4. Grátis e privado.

## Categoria
Ferramentas (ou Produtividade › Ferramentas)

## Idioma
Português (Brasil)

## Descrição completa

Gravador de tela gratuito, sem limite de tempo e 100% privado: tudo fica no seu computador.

🎥 O QUE VOCÊ PODE GRAVAR
• A tela inteira, uma janela ou um aplicativo
• Só uma aba do Chrome
• Só uma área da tela (você escolhe o retângulo)
• Só a câmera, ou a câmera em cima da tela
• Reuniões do Google Meet, Zoom e Teams pelo navegador

🎙️ ÁUDIO
• Microfone, som do sistema ou os dois juntos
• Modo "aperte para falar"

✏️ DURANTE A GRAVAÇÃO
• Desenhe, escreva, faça setas e formas na tela
• Destaque cliques e o cursor, modo holofote
• Desfoque informações sensíveis da página
• Zoom suave em uma área
• Pausar, retomar e alarme para parar sozinho

✂️ DEPOIS DA GRAVAÇÃO
• Editor para cortar, aparar, recortar e mexer no áudio
• Exporta em MP4, WebM ou GIF

🔒 PRIVACIDADE
• Sem login, sem conta, sem anúncios
• Nenhum vídeo é enviado para servidor nenhum
• Código aberto: https://github.com/Juliano2105/gravador-xopi

O Gravador XOPI é baseado no projeto de código aberto Screenity, de Alyssa X, distribuído sob a licença GPL-3.0.

## Justificativas de permissões (aba "Privacidade" do painel)

**Finalidade única:** Gravar a tela, a câmera e o áudio do usuário e permitir editar e salvar o vídeo localmente.

- **activeTab / tabs:** identificar a aba que o usuário quer gravar e mostrar os controles de gravação nela.
- **tabCapture:** capturar o vídeo e o áudio da aba escolhida pelo usuário.
- **desktopCapture (opcional):** capturar a tela inteira ou uma janela, quando o usuário escolhe essa opção.
- **scripting / acesso a todos os sites:** mostrar a barra de gravação, as ferramentas de desenho, desfoque e destaque de cursor sobre a página que está sendo gravada.
- **downloads:** salvar o vídeo gravado no computador do usuário.
- **storage / unlimitedStorage:** guardar temporariamente a gravação (que pode ter vários GB) e as preferências, localmente.
- **offscreen (opcional):** processar a gravação em segundo plano sem abrir janelas extras.
- **system.display:** saber o tamanho da tela para gravar na resolução correta.
- **power:** impedir que o computador entre em repouso durante a gravação.
- **alarms (opcional):** parar a gravação automaticamente no horário definido pelo usuário.
- **clipboardWrite (opcional):** copiar informações quando o usuário pede.
- **identity:** salvar no Google Drive do próprio usuário, somente quando ele escolhe essa opção.

**Uso de dados:** marcar que a extensão NÃO coleta nenhum tipo de dado do usuário. Certificar que os dados não são vendidos, não são usados para fins não relacionados e não são usados para crédito.

**Código remoto:** Não, a extensão não usa código remoto (todo o JavaScript está no pacote).

**Política de privacidade (URL):** https://github.com/Juliano2105/gravador-xopi/blob/main/PRIVACY.md

## Visibilidade
**Não listado** — só instala quem tiver o link.
