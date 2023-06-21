"use client";
import Feed from "@components/Feed";
import { useState, useEffect } from "react";

const Home = ({allPosts}) => {
  //const [allPosts, setAllPosts] = useState([]);

  // const fetchPosts = async () => {
  //   const response = await fetch("/api/prompt");
  //   const data = await response.json();

  //   setAllPosts(data);
  // };

  // useEffect(() => {
  //   fetchPosts();
  // }, []);
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Promptopia is an open-source AI prompting tool for modern world to
        discover, create and share creative prompts
      </p>

      <Feed allPosts={allPosts}/>
    </section>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const response = await fetch("/api/prompt");
  const allPosts = await response.json();
 
  // Pass data to the page via props
  return { props: { allPosts } }
}


export default Home;
