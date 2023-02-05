import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'


var axios = require("axios").default;

var options = {
  method: 'PATCH',
  url: 'https://dev-r2zpy4nl1f3sy1k8.us.auth0.com/api/v2/clients/ewTvhE2obV76Nkxv89NxX99OpQBTe9Fu',
  headers: {
    'content-type': 'application/json',
    authorization: 'Bearer API2_ACCESS_TOKEN',
    'cache-control': 'no-cache'
  },
  data: {initiate_login_uri: '<login_url>'}
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
