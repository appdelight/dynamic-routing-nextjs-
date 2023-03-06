import Link from "next/link"

export const getStaticProps = async (context) => {
  // const path = context.params.coustom_route;

  const res = await fetch(
    `http://localhost:8000/page/service`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

export default function Home({ data }) {
  return (
    <>
      <div>
        {data?.data?.Buyers.map((item) => {
          return (
            <Post id={item?.page_url.split("3000")[1]} title={item?.page_heading}></Post>
          )
        })}

      </div>
    </>
  )
}




function Post(props) {

  return (
    <div>

      <Link as={`${props.id}`} href={`/Hello`}>
        <p>{props.title}</p>
      </Link>
    </div>
  )
}

