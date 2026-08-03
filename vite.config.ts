import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, Plugin} from 'vite';

function n8nWebhookProxyPlugin(): Plugin {
  return {
    name: 'n8n-webhook-proxy',
    configureServer(server) {
      server.middlewares.use('/api/discovery-call', async (req, res) => {
        // Handle CORS preflight
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');

        if (req.method === 'OPTIONS') {
          res.statusCode = 204;
          res.end();
          return;
        }

        if (req.method === 'POST') {
          let bodyStr = '';
          req.on('data', (chunk) => {
            bodyStr += chunk;
          });
          req.on('end', async () => {
            try {
              const payload = JSON.parse(bodyStr || '{}');
              console.log('[Server Proxy] Forwarding to n8n webhook:', payload);

              const n8nUrl = 'https://finaln9n.app.n8n.cloud/webhook/discovery-call-booking';

              const n8nResponse = await fetch(n8nUrl, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json',
                },
                body: JSON.stringify(payload),
              });

              const responseText = await n8nResponse.text();
              console.log(`[Server Proxy] n8n response (${n8nResponse.status}):`, responseText);

              // We return 200 to the browser if n8n was successfully reached (even if n8n returns 500 workflow error)
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.end(
                JSON.stringify({
                  success: true,
                  delivered: true,
                  n8nStatus: n8nResponse.status,
                  n8nOk: n8nResponse.ok,
                  n8nResponse: responseText,
                })
              );
            } catch (err: unknown) {
              const errorMessage = err instanceof Error ? err.message : 'Server proxy error';
              console.error('[Server Proxy] Proxy error:', err);
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(
                JSON.stringify({
                  success: false,
                  error: errorMessage,
                })
              );
            }
          });
        } else {
          res.statusCode = 405;
          res.end('Method Not Allowed');
        }
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), n8nWebhookProxyPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
