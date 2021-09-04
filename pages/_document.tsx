//scripts, heads, meta for all pages
import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class CustomDocument extends Document {
  render() {
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
