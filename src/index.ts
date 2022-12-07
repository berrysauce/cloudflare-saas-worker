import { Hono } from "hono"
import { html } from 'hono/html'

const app = new Hono()

app.get("/*", (c) => {
	const host = c.req.header("Host")
	const useragend = c.req.header("User-Agent")
	const scheme = c.req.header("X-Forwarded-Proto")
	const subdirectory = c.req.header("X-Original-URI")
	return c.html(
		html`<!DOCTYPE html>
		  <h1>⛅️ Cloudflare for SaaS Test</h1>
		  <p>Using Cloudflare Workers, SSL/TLS for SaaS, and Proxy. Here are some request headers which are visible to the Worker:</p>
		  <hr>
		  <pre>
		  Host: ${host}
		  User-Agend: ${useragend}
		  X-Forwarded-Proto: ${scheme}
		  X-Original-URI: ${subdirectory}
		  </pre>`
	  )
})

export default app
