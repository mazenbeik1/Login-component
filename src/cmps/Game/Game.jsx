import { Unity, useUnityContext } from "react-unity-webgl";

const Game = () => {
    const {unityProvider, loadingProgression, isLoaded} = useUnityContext({
        loaderUrl: "/cubesurfer/Build/cubesurfer.loader.js",
        dataUrl: "/cubesurfer/Build/cubesurfer.data",
        frameworkUrl: "/cubesurfer/Build/cubesurfer.framework.js",
        codeUrl: "/cubesurfer/Build/cubesurfer.wasm",
    });
    return ( 
        <>
            <h1>GAME SHOULD BE LOADED HERE</h1>
            {!isLoaded && (
                <p>Loading Application... {Math.round(loadingProgression * 100)}%</p>
            )}
            <Unity style={{width:"100%"}} unityProvider = {unityProvider}/>
            <h1>GAME SHOULD BE LOADED HERE</h1>
        </>
     );
}
 
export default Game;