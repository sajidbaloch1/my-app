import React, { useEffect, useRef } from 'react';

const loadScript = (src) =>
  new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) return resolve();
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve();
    script.onerror = (err) => reject(err);
    document.body.appendChild(script);
  });

const GoogleAuth = () => {
  const googleButton = useRef(null);

  useEffect(() => {
    const id = "686764346000-mbgbm2rlbbumsr52gsdau1otr2tvr6c8.apps.googleusercontent.com";

    loadScript('https://accounts.google.com/gsi/client')
      .then(() => {
        /*global google*/
        google.accounts.id.initialize({
          client_id: id,
          callback: handleCredentialResponse,
        });
        google.accounts.id.renderButton(
          googleButton.current,
          { theme: 'outline', size: 'large' }
        );
      })
      .catch(console.error);

    return () => {
      const scriptTag = document.querySelector('script[src="https://accounts.google.com/gsi/client"]');
      if (scriptTag) document.body.removeChild(scriptTag);
    };
  }, []);

  function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    // Handle the response here, e.g., send it to your server for authentication
  }

  return <div ref={googleButton}></div>;
};

export default GoogleAuth;
