import React, { useEffect } from "react";
function Home() {

  useEffect(() => {
    const timeout = setTimeout(() => {
      // 👇️ redirects to an external URL
      window.location.replace('https://plinth.co.in/');
    }, 0);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
    Redirecting...
    </>
  );
}
export default Home;

