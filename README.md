# ⛅️ Cloudflare for SaaS — Custom Domain Worker
This Cloudflare worker with HonoJS is used as a fallback for proxied domains with Cloudflare SSL/TLS for SaaS.

### What is the use of this?
This is an example of how to add custom domains for your customers to your SaaS service.

### How to configure Cloudflare for SaaS (Custom domains for customers)
To use Cloudflare for SaaS, follow these steps:

1. Enable Cloudflare for SaaS in the zone settings
2. Create a proxied dummy DNS record, like:
    - `AAAA -> dns.example-saas.com -> 100::`
3. Create a CNAME record from the customer domain to the dummy record, like:
    - `CNAME -> test.example-customer.com -> dns.example-saas.com`
4. Create a SSL Certificate for the customer domain in the SSL/TLS -> Custom Hostenames section, and verify it with the given TXT records
5. Add a fallback origin (the domain which is used as the default origin for custom hostnames)
6. Add Worker routes in the Worker Routes section (Zone settings, not Worker settings) so the Zone is not completely occupied by the worker:
    - `example-saas.com/*`	-> None (Services are disabled on this route)	
    - `*.example-saas.com/*`	-> None (Services are disabled on this route)
    - `*/*`	                -> Worker

That's it! 🎉

### What does this Worker do?
It uses the above shown principle and displays the domain and other info about the request when accessed.
