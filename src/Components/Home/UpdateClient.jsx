import React, {useEffect, useRef} from 'react'

const UpdateClient = () => {
    const embedRef = useRef(null);

    useEffect(() => {
      // Function to load the external script
      const loadScript = () => {
        const existingScript = document.getElementById('jotform-async');
        if (!existingScript) {
          const script = document.createElement('script');
          script.async = true;
          script.id = 'jotform-async';
          script.src = 'https://cdn.jotfor.ms/s/umd/latest/for-sheets-embed.js';
          document.body.appendChild(script);
        }
      };
  
      // Load the script when the component mounts
      loadScript();
  
      // Cleanup script from the DOM on component unmount
      return () => {
        const script = document.getElementById('jotform-async');
        if (script) {
          document.body.removeChild(script);
        }
      };
    }, []);
  
    useEffect(() => {
      // Initialize the jotform embed after the script has been loaded
      const initJotForm = () => {
        if (window.JotForm && embedRef.current) {
          // Initialize JotForm here if necessary
          window.JotForm.init({
            container: embedRef.current,
            id: '242443887723061',
            source: 'www.jotform.com',
            type: 'interactive'
          });
        }
      };
  
      // Ensure JotForm is initialized after the script is loaded
      const checkScriptLoaded = () => {
        if (document.getElementById('jotform-async')) {
          initJotForm();
        } else {
          setTimeout(checkScriptLoaded, 100); // Retry after 100ms
        }
      };
  
      checkScriptLoaded();
  
      // Clean up any potential side effects
      return () => {
        // Add any necessary cleanup code here
      };
    }, []);
  
    return (
        <div
        ref={embedRef}
        className="jotform-table-embed"
        style={{ width: '100%', height: '600px' }}
        data-id="242443887723061"
        data-iframesource="www.jotform.com"
        data-type="interactive"
      />
    );
  
}

export default UpdateClient