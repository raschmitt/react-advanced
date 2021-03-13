function Health() {
}

export async function getServerSideProps(context) {
context.res.end('Healthy');
return { props: { } }
}

export default Health;
