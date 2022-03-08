import Head from "next/head";
import Image from "next/image";
import CardComponent from "../components/Card";
import { basicAuth } from "../helpers/AuthHelper";

const Home = () => {
  return (
    <div className="container home">
      <Head>
        <title>Home</title>
      </Head>
      
      <h1 className={"header-text"}>NFT Market</h1>
      <h5 className={"sub-header-text"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>

<CardComponent/>

    </div>
  );
}

export default basicAuth(Home);