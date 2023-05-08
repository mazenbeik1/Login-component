import Unity, {UnityContext} from  "react-unity-webgl";

const { unityProvider } = useUnityContext({
    loaderUrl: "build/myunityapp.loader.js",
    dataUrl: "build/myunityapp.data",
    frameworkUrl: "build/myunityapp.framework.js",
    codeUrl: "build/myunityapp.wasm",
  });
const Unity = () => {
    return ( 
        <>
            <Unity style={{width:'80%'}} unityContext = {unityProvider}/>
        </>
     );
}
 
export default Unity;
<>

</>