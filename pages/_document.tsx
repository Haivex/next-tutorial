/* eslint-disable @next/next/no-document-import-in-page */
//scripts, heads, meta for all pages
// document js console code is rendered on server side (mounts, useEffect not working!)
import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class CustomDocument extends Document {
  render() {
    console.log('Hello from _document.tsx')
    return (
      <Html>
        <Head>
            <meta property='custom' content='my value' />
        </Head>
        <body>
          <Main />
        </body>

        <NextScript />
      </Html>
    );
  }
}
