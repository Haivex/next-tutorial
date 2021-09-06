//https://localhost:3000/fruit/apple WORKS
//https://localhost:3000/fruit/banana WORKS
//https://localhost:3000/fruit/apple/red NOT WORKING (we must create folder with  square bracket [] and file with square bracket inside and index file to working)

import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/dist/client/router';

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    revalidate: 10,
    props: {
      myFavNum: Math.random(),
    },
  };
};

//works on [name].tsx
//this function tell getStaticProps when run

// localhost:3000/fruit/apple/hello - take output and save on disk
// localhost:3000/fruit/apple/world - take output and save on disk

// localhost:3000/fruit/apple/1 not work if fallback property is false, if true call getStaticProps -> render page => save html locally to faster access 

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { name: 'hello' } }, { params: { name: 'world' } }],
    fallback: false,
  };
};

//executed on server and client
export default function FruitName(props) {

    const router = useRouter()

    if(router.isFallback) {
        return <h2>Loading...</h2>
    }
  return <h2>Dynamic - {props.myFavNum}</h2>;
}
