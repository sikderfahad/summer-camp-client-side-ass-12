import ContentLoader from "react-content-loader";

const FadingLoader = () => {
  return (
    <div className="w-full">
      <FadingLoaderCard1 />
      <FadingLoaderCard2 />
      <FadingLoaderCard3 />
      <FadingLoaderCard4 />
      <FadingLoaderCard5 />
    </div>
  );
};

const FadingLoaderCard1 = () => {
  return (
    <ContentLoader
      width={1000}
      height={40}
      backgroundColor="#ababab"
      foregroundColor="#3d3838"
    >
      <rect x="70" y="15" rx="5" ry="5" width="800" height="15" />
      <rect x="70" y="39" rx="5" ry="5" width="600" height="9" />
      <rect x="20" y="10" rx="0" ry="0" width="40" height="40" />
    </ContentLoader>
  );
};

const FadingLoaderCard2 = () => {
  return (
    <ContentLoader
      width={1000}
      height={40}
      backgroundColor="#bfbfbf"
      foregroundColor="#3d3838"
    >
      <rect x="70" y="15" rx="5" ry="5" width="800" height="15" />
      <rect x="70" y="39" rx="5" ry="5" width="600" height="9" />
      <rect x="20" y="10" rx="0" ry="0" width="40" height="40" />
    </ContentLoader>
  );
};

const FadingLoaderCard3 = () => {
  return (
    <ContentLoader
      width={1000}
      height={40}
      backgroundColor="#dadada"
      foregroundColor="#3d3838"
    >
      <rect x="70" y="15" rx="5" ry="5" width="800" height="15" />
      <rect x="70" y="39" rx="5" ry="5" width="600" height="9" />
      <rect x="20" y="10" rx="0" ry="0" width="40" height="40" />
    </ContentLoader>
  );
};

const FadingLoaderCard4 = () => {
  return (
    <ContentLoader
      width={1000}
      height={40}
      backgroundColor="#ececec"
      foregroundColor="#3d3838"
    >
      <rect x="70" y="15" rx="5" ry="5" width="800" height="15" />
      <rect x="70" y="39" rx="5" ry="5" width="600" height="9" />
      <rect x="20" y="10" rx="0" ry="0" width="40" height="40" />
    </ContentLoader>
  );
};

const FadingLoaderCard5 = () => {
  return (
    <ContentLoader
      width={1000}
      height={40}
      backgroundColor="#f7f7f7"
      foregroundColor="#3d3838"
    >
      <rect x="70" y="15" rx="5" ry="5" width="800" height="15" />
      <rect x="70" y="39" rx="5" ry="5" width="600" height="9" />
      <rect x="20" y="10" rx="0" ry="0" width="40" height="40" />
    </ContentLoader>
  );
};

FadingLoader.metadata = {
  name: "Nikhil Anand", // My name
  github: "anandnkhl", // Github username
  description: "Loader that fades downwards", // Little tagline
  filename: "FadingLoader", // filename of your loader
};

export default FadingLoader;
