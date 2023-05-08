import { Unity, useUnityContext } from "react-unity-webgl";
import { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
const Game = () => {
    const {unityProvider, loadingProgression, isLoaded} = useUnityContext({
        loaderUrl: "/cubesurfer/Build/cubesurfer.loader.js",
        dataUrl: "/cubesurfer/Build/cubesurfer.data",
        frameworkUrl: "/cubesurfer/Build/cubesurfer.framework.js",
        codeUrl: "/cubesurfer/Build/cubesurfer.wasm",
    });

    const [devicePixelRatio, setDevicePixelRatio] = useState(
        window.devicePixelRatio
      );

      useEffect(()=>{
        handleChangePixelRatio();
      },[]);
    
      const handleChangePixelRatio = useCallback(
        function () {
          // A function which will update the device pixel ratio of the Unity
          // Application to match the device pixel ratio of the browser.
          const updateDevicePixelRatio = function () {
            setDevicePixelRatio(window.devicePixelRatio);
          };
          // A media matcher which watches for changes in the device pixel ratio.
          const mediaMatcher = window.matchMedia(
            `screen and (resolution: ${devicePixelRatio}dppx)`
          );
          // Adding an event listener to the media matcher which will update the
          // device pixel ratio of the Unity Application when the device pixel
          // ratio changes.
          mediaMatcher.addEventListener("change", updateDevicePixelRatio);
          return function () {
            // Removing the event listener when the component unmounts.
            mediaMatcher.removeEventListener("change", updateDevicePixelRatio);
          };
        },
        [devicePixelRatio]
      );

    return ( 
        <div style={{textAlign:"center"}}>
            <h1>If you are using phone refresh page after game is loaded to achieve full screen</h1>
            {!isLoaded && (
                <>
                    <p>Loading Application... {Math.round(loadingProgression * 100)}%</p>
                    <h1>PLEASE WAIT UNTIL GAME IS LOADED</h1>
                </>
                )}
            <Unity style={{ width: '80%'}} devicePixelRatio={devicePixelRatio} unityProvider = {unityProvider}/>
        </div>
     );
}
 
export default Game;