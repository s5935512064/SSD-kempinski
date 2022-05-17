import '../styles/globals.css'
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
function MyApp({ Component, pageProps }) {

  const { pathname } = useRouter();

  useEffect(() => {
    // some browsers (like safari) may require a timeout to delay calling this
    // function after a page has loaded; otherwise, it may not update the position
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>

      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => {
          if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0 })
          }
        }}
      >
        <Component {...pageProps} />
      </AnimatePresence>
    </>

  );

}

export default MyApp
