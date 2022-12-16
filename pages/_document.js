import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta
            name="google-site-verification"
            content="cEHGpZm9KSj8YVwG2LHm_ZG_e5n5Nw1UbUzwuYpshfQ"
          />

          <script
            type="text/javascript"
            src="https://kvaaa.com/bnr.php?section=YllixBanner&pub=398782&format=300x250&ga=a"
          ></script>
          <noscript>
            <a href="https://yllix.com/publishers/398782" target="_blank">
              <img
                src="//ylx-aff.advertica-cdn.com/pub/300x250.png"
                style={{
                  border: "none",
                  margin: "0",
                  padding: "0",
                  verticalAlign: "baseline",
                }}
                alt="ylliX - Online Advertising Network"
              />
            </a>
          </noscript>

          <script
            type="text/javascript"
            src="https://kvaaa.com/slider.php?section=YllixSlider&pub=398782&ga=a&side=random"
          ></script>

          <script
            type="text/javascript"
            src="https://xvaaa.com/pup.php?section=YllixPopup&pt=2&pub=398782&ga=a"
          ></script>

          <script src="https://cdn-server.top/p/wl.js?pub=398782&ga=a"></script>

          <script
            async="async"
            data-cfasync="false"
            src="//jazzspeechlessarena.com/a955f424e86554b4d54d6b7142bf3aa8/invoke.js"
          ></script>
          <div id="container-a955f424e86554b4d54d6b7142bf3aa8"></div>

          <script
            type="text/javascript"
            src="//jazzspeechlessarena.com/3f/54/17/3f54170b4b5afb5580f6fb9ab96c84b5.js"
          ></script>

          <script
            type="text/javascript"
            src="//jazzspeechlessarena.com/4d/37/5f/4d375f1f3d988d6b0423d0b32722f1fe.js"
          ></script>

          <script
            type="text/javascript"
            src="https://udbaa.com/bnr.php?section=General&pub=398782&format=300x50&ga=g&mbtodb=1"
          ></script>
          <noscript>
            <a href="https://yllix.com/publishers/398782" target="_blank">
              <img
                src="//ylx-aff.advertica-cdn.com/pub_zn9ugf.png"
                style={{
                  border: "none",
                  margin: "0",
                  padding: "0",
                  verticalAlign: "baseline",
                }}
                alt="ylliX - Online Advertising Network"
              />
            </a>
          </noscript>

          <script
            type="text/javascript"
            src="https://udbaa.com/slider.php?section=General&pub=398782&ga=g&side=random"
          ></script>

          <script
            type="text/javascript"
            src="https://vdbaa.com/pup.php?section=General&pt=2&pub=398782&ga=g"
          ></script>

          <script src="https://cdn-server.top/p/mms.js?pub=398782&ga=g"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
