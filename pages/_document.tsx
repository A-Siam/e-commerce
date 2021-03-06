import Document, { Html, Head, Main, NextScript } from 'next/document'

class Doc extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <div id="modal"></div>
          <div id="fb"></div>
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Doc
