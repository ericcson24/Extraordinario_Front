import { FreshContext, Handlers } from "$fresh/server.ts";

import { Cookie, setCookie } from "https://deno.land/std/http/cookie.ts"

export const handler: Handlers = {
  GET(req: Request, ctx: FreshContext) {
    return ctx.render();
  },
};

export default function Home() {
  return (
    <div class="main">
     
      //
      <div class="grid-spells">
        <h1>¡Hola Mundo!</h1>
        <p>Bienvenido a tu aplicación Fresh con Deno</p>
      </div>
      
      <div class="footer">
        <p>&copy; 2025 Mi Aplicación - Desarrollado con Fresh</p>
      </div>
    </div>
  );
}