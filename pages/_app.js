import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <footer>
        <p>Footer hello world</p>
      </footer>
    </div>
  );
}

export default MyApp;
