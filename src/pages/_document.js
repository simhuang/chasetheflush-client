import Document from "next/document";
import { ServerStyleSheet } from "styled-components";

/**
 * The problem with using styled components is that it does not support SSR and
 * uses client side rendering instead. The cause a delay in seeing the style
 * components css updates because css is not loaded in the initial server side
 * render. This file was copied from the next.js repo example:
 * https://github.com/vercel/next.js/blob/canary/examples/with-styled-components/pages/_document.js.
 * It allows for styled components to be rendered on the server side.
 */
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
