import { GetStaticProps } from 'next';

//this function execute on server, dynamic content, we can read file from server and send HTML to client
//revalidate property check every 10 seconds for update and update HTML if changes
export const getStaticProps: GetStaticProps = async (context) => {
  return {
    revalidate: 10,
    props: {
      myFavNum: 4,
    },
  };
};

//executed on server and client
export default function Dynamic(props) {
  return <h2>Dynamic - {props.myFavNum}</h2>;
}
