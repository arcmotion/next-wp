import { BlockRenderer } from "components/BlockRenderer";
import { MainMenu } from "components/MainMenu";
// import { getPageStaticProps } from "utils/getPageStaticProps";
import { Page } from "components/Page";

// export default Page;

// export const getStaticProps = getPageStaticProps;

export default function Home(props) {
  return <div>This is home page</div>;
}

export const getPageStaticProps = async () => {
  return {
    props: {
      exampleProps: "example property",
    },
  };
};
