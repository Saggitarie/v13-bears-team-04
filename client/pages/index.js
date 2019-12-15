import React from "react";

import HomeBox from "../components/HomeBox";
import Nav from "../components/Nav";
import PostList from "../components/PostList";
import RecentPosts from "../components/RecentPosts";
import ToTopButton from "../components/ToTopButton";
import TrendingCommunity from "../components/TrendingCommunity";
import GrowingCommunities from "../components/GrowingCommunities";
import SortView from "../components/SortView";

import { useAuth } from "../utils/authcontext";
import fetchIt from "../utils/fetch";

const Home = () => {
  const { user, login, logout, signup } = useAuth();

  async function handleLogin() {
    const username = "Tester2";
    const password = "password";
    const message = await login({ username, password });
    console.log(message);
  }

  async function handleLogout() {
    const userId = user._id;
    const message = await logout({ userId });
    console.log(message);
  }

  async function handleSignup() {
    const randomNum = Math.floor(Math.random() * 90 + 10);
    const email = `test${randomNum}@test.com`;
    const username = `Tester${randomNum}`;
    const password = "password";
    const message = await signup({ email, username, password });
    console.log(message);
  }

  async function createPost() {
    try {
      const randomNum = Math.floor(Math.random() * 1000);
      const communityId = "5de36fb689277400f03f364d";
      const newPost = await fetchIt(`/posts/${communityId}`, {
        method: "POST",
        body: JSON.stringify({
          title: `Suppppp${randomNum}`,
          body: "Howwwwwwdy",
          author: user._id,
          community: communityId,
        }),
        ctx: {},
      });
      console.log(newPost);
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <div>
      <Nav />
      <SortView />
      <PostList />
      <TrendingCommunity />
      <GrowingCommunities />
      <RecentPosts />
      <HomeBox />
      <ToTopButton />
      {!user && (
        <button type="button" onClick={handleSignup}>
          Signup
        </button>
      )}
      {!user && (
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      )}
      {user && (
        <button type="button" onClick={handleLogout}>
          Logout
        </button>
      )}
      {user && (
        <button type="button" onClick={createPost}>
          Create Post
        </button>
      )}
      {/* <<<<<<< HEAD

      <Nav />
      <PostList />
      <TrendingCommunity />
      <GrowingCommunities />
      <RecentPosts />
      <HomeBox />

      <ToTopButton />
=======
>>>>>>> 338282da6ed5467d5e1b1ef5d22058c1b3249126 */}
    </div>
  );
};

export default Home;
