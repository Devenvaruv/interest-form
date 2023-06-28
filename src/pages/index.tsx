import { useState } from "react";
import { type NextPage } from "next";

import Head from "next/head";
import WebForm from "../components/WebForm";
import ThankYou from "../components/ThankYou";
import ErrorComponent from "../components/ErrorComponent";

export type WithResponseProps = {
  setResponse: React.Dispatch<React.SetStateAction<boolean | null>>;
};

const Home: NextPage = () => {
  // null -> form has not been submitted
  // true -> form has been submitted successfully
  // false -> form has been submitted unsuccessfully
  const [response, setResponse] = useState<boolean | null>(null);

  return (
    <>
      <Head>
        <title>Interest Form</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
        {response === null ? (
          <WebForm setResponse={setResponse} />
        ) : response ? (
          <ThankYou />
        ) : (
          <ErrorComponent  setResponse={setResponse} />
        )}
      </main>
    </>
  );
};

export default Home;
