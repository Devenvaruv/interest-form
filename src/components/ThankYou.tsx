import Head from "next/head";

const ThankYou: React.FC = () => {
  return (
    <>
      <Head>
        <title>Thank You | Interest Form</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen bg-gray-100 items-center justify-center">
        <div className="bg-white p-10 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-6 text-center">Thank you!</h1>
          <p className="text-xl text-center">
            Your interest form has been submitted successfully. We will be in touch shortly regarding next steps!
          </p>
        </div>
      </main>
    </>
  );
};

export default ThankYou;