import { GetServerSideProps } from 'next'

function Health() {
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    context.res.end('Healthy');
    return { props: { } }
}

export default Health;
